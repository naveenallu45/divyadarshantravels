const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { execSync } = require('child_process');

const carsFilePath = path.join(__dirname, '../components/Cars.tsx');
const publicCarsDir = path.join(__dirname, '../public/cars');

if (!fs.existsSync(publicCarsDir)) {
  fs.mkdirSync(publicCarsDir, { recursive: true });
}

async function processImages() {
  let content = fs.readFileSync(carsFilePath, 'utf8');
  
  // Find all objects with name and image
  const vehicleRegex = /\{ name: "([^"]+)", image: "([^"]+)" \}/g;
  let match;
  const vehicles = [];
  
  while ((match = vehicleRegex.exec(content)) !== null) {
    vehicles.push({ name: match[1], image: match[2] });
  }

  for (const vehicle of vehicles) {
    const slug = vehicle.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
    const localFileName = `${slug}.webp`;
    const localPath = path.join(publicCarsDir, localFileName);
    const localUrl = `/cars/${localFileName}`;

    // Skip if already a local path
    if (vehicle.image.startsWith('/cars/')) continue;

    console.log(`Processing image for ${vehicle.name}...`);

    try {
      const tempImagePath = path.join(publicCarsDir, `temp_${slug}`);
      
      if (vehicle.image.startsWith('data:image')) {
        // Handle Base64
        const base64Data = vehicle.image.split(',')[1];
        fs.writeFileSync(tempImagePath, base64Data, 'base64');
      } else {
        // Handle External URL
        const response = await axios.get(vehicle.image, { responseType: 'arraybuffer' });
        fs.writeFileSync(tempImagePath, response.data);
      }

      // Convert to webp using sharp-cli (via npx to be safe)
      execSync(`npx -y sharp-cli -i "${tempImagePath}" -o "${localPath}" --quality 60`);
      fs.unlinkSync(tempImagePath);

      // Update content
      const searchStr = `{ name: "${vehicle.name}", image: "${vehicle.image}" }`;
      const replaceStr = `{ name: "${vehicle.name}", image: "${localUrl}" }`;
      content = content.split(searchStr).join(replaceStr);
      
      console.log(`Successfully processed ${vehicle.name}`);
    } catch (error) {
      console.error(`Failed to process ${vehicle.name}: ${error.message}`);
    }
  }

  fs.writeFileSync(carsFilePath, content);
  console.log('Finished processing all images.');
}

processImages();
