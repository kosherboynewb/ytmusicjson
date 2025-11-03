#!/bin/bash

echo "======================================"
echo "   Admin Password Hash Generator"
echo "======================================"
echo ""
echo "To change your admin password:"
echo "1. Open generate-password-hash.html in a browser"
echo "2. Enter your new password"
echo "3. Copy the hash that is generated"
echo "4. Run: nano admin.html"
echo "5. Find line 522: const PASSWORD_HASH = '...'"
echo "6. Replace the hash with your new hash"
echo "7. Save and commit the changes"
echo ""
echo "Or use this quick command:"
echo ""
read -s -p "Enter your new password: " PASSWORD
echo ""

# Generate SHA-256 hash using Node.js
HASH=$(node -e "
const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('$PASSWORD').digest('hex');
console.log(hash);
")

echo ""
echo "Your new password hash is:"
echo "$HASH"
echo ""
echo "Now updating admin.html..."

# Update the hash in admin.html
sed -i "s/const PASSWORD_HASH = '[^']*'/const PASSWORD_HASH = '$HASH'/" admin.html

echo "✓ Password hash updated in admin.html!"
echo ""
echo "Next steps:"
echo "  git add admin.html"
echo "  git commit -m 'Update admin password'"
echo "  git push"
