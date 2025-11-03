import YTMusic from 'ytmusic-api';

let ytmusic = null;

/**
 * Initialize YouTube Music API
 */
export async function initYTMusic() {
  if (ytmusic) return ytmusic;

  ytmusic = new YTMusic();
  await ytmusic.initialize();
  return ytmusic;
}

/**
 * Search for artists on YouTube Music
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of artist results
 */
export async function searchArtists(query) {
  if (!ytmusic) {
    await initYTMusic();
  }

  try {
    const results = await ytmusic.search(query, 'artist');

    // Transform results to our format
    return results.map(artist => ({
      id: artist.id || artist.browseId,
      name: artist.name || artist.title,
      subscribers: artist.subscribers || null,
      thumbnails: artist.thumbnails || []
    }));
  } catch (error) {
    console.error('YTMusic search error:', error);
    throw new Error('Failed to search YouTube Music: ' + error.message);
  }
}

/**
 * Get artist details
 * @param {string} artistId - YouTube Music artist/channel ID
 * @returns {Promise<Object>} Artist details
 */
export async function getArtist(artistId) {
  if (!ytmusic) {
    await initYTMusic();
  }

  try {
    const artist = await ytmusic.getArtist(artistId);
    return {
      id: artistId,
      name: artist.name || artist.title,
      description: artist.description,
      subscribers: artist.subscribers,
      thumbnails: artist.thumbnails
    };
  } catch (error) {
    console.error('YTMusic getArtist error:', error);
    throw new Error('Failed to get artist details: ' + error.message);
  }
}

// Export for browser global access
if (typeof window !== 'undefined') {
  window.YTMusicAPI = {
    initYTMusic,
    searchArtists,
    getArtist
  };
}
