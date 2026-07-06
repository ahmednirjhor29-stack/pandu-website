const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/src="data:image\/jpeg;base64,([^"]+)"/);
if (match) {
  const buffer = Buffer.from(match[1], 'base64');
  fs.writeFileSync('logo.jpeg', buffer);
  console.log('logo.jpeg extracted successfully, size:', buffer.length, 'bytes');
} else {
  console.log('Could not find base64 image data');
}