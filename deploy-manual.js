// Simple script to help with manual deployment
const fs = require('fs');
const path = require('path');

console.log('🚀 Manual Deployment Helper');
console.log('==========================');

// Check if dist folder exists
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.log('❌ dist folder not found! Run "npm run build" first.');
  process.exit(1);
}

// List files in dist folder
console.log('\n📁 Files in dist folder:');
const files = fs.readdirSync(distPath, { withFileTypes: true });
files.forEach(file => {
  if (file.isDirectory()) {
    console.log(`📂 ${file.name}/`);
    const subFiles = fs.readdirSync(path.join(distPath, file.name));
    subFiles.forEach(subFile => {
      console.log(`   📄 ${subFile}`);
    });
  } else {
    console.log(`📄 ${file.name}`);
  }
});

console.log('\n✅ Ready for manual deployment!');
console.log('\n📋 Manual Upload Steps:');
console.log('1. Go to: https://github.com/adiiityaz/agrito_deploy');
console.log('2. Create a new branch called "gh-pages"');
console.log('3. Upload ALL files from the dist folder');
console.log('4. Go to Settings → Pages');
console.log('5. Change source to "Deploy from a branch"');
console.log('6. Select "gh-pages" branch and "/ (root)" folder');
console.log('7. Save and wait 5-10 minutes');
console.log('\n🌐 Your site will be at: https://adiiityaz.github.io/agrito_deploy/');
