#!/usr/bin/env node

/**
 * EventX Studio Client - Vercel Setup Script
 * This script helps set up the client for Vercel deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 EventX Studio Client - Vercel Setup');
console.log('=====================================\n');

// Check if .env.local exists
const envLocalPath = path.join(__dirname, '.env.local');
const envExamplePath = path.join(__dirname, 'env.example');

if (!fs.existsSync(envLocalPath)) {
  if (fs.existsSync(envExamplePath)) {
    console.log('📝 Creating .env.local from template...');
    fs.copyFileSync(envExamplePath, envLocalPath);
    console.log('✅ .env.local created! Please update the values.\n');
  } else {
    console.log('⚠️  env.example not found. Creating basic .env.local...');
    const basicEnv = `# EventX Studio Client Environment Variables
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=EventX Studio
VITE_APP_VERSION=1.0.0
NODE_ENV=development`;
    fs.writeFileSync(envLocalPath, basicEnv);
    console.log('✅ Basic .env.local created!\n');
  }
} else {
  console.log('✅ .env.local already exists\n');
}

// Check if vercel.json exists
const vercelConfigPath = path.join(__dirname, 'vercel.json');
if (fs.existsSync(vercelConfigPath)) {
  console.log('✅ vercel.json configuration found\n');
} else {
  console.log('❌ vercel.json not found. Please ensure it exists.\n');
}

// Check package.json for vercel-build script
const packageJsonPath = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  if (packageJson.scripts && packageJson.scripts['vercel-build']) {
    console.log('✅ vercel-build script found in package.json\n');
  } else {
    console.log('❌ vercel-build script not found in package.json\n');
  }
}

console.log('📋 Next Steps:');
console.log('1. Update .env.local with your production API URL');
console.log('2. Install Vercel CLI: npm i -g vercel');
console.log('3. Login to Vercel: vercel login');
console.log('4. Deploy: vercel');
console.log('5. Set environment variables in Vercel dashboard\n');

console.log('📚 For detailed instructions, see DEPLOYMENT.md');
console.log('🎉 Setup complete!');
