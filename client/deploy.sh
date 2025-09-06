#!/bin/bash

# EventX Studio Client - Vercel Deployment Script
# This script automates the deployment process to Vercel

echo "🚀 EventX Studio Client - Vercel Deployment"
echo "============================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm i -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel:"
    vercel login
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo ""
echo "🎉 Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Set environment variables in Vercel dashboard:"
echo "   - VITE_API_URL: Your backend API URL"
echo "   - VITE_APP_NAME: EventX Studio"
echo "   - VITE_APP_VERSION: 1.0.0"
echo ""
echo "2. Test your deployed application"
echo "3. Configure custom domain (optional)"
echo ""
echo "📚 For detailed instructions, see DEPLOY_TO_VERCEL.md"
