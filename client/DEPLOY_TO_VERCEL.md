# 🚀 Deploy EventX Studio Client to Vercel

This guide will help you deploy the EventX Studio client to Vercel in just a few steps.

## ✅ Pre-deployment Checklist

- [x] Build process tested and working
- [x] Vercel configuration files ready
- [x] Environment variables configured
- [x] Package.json scripts updated
- [x] Vite configuration optimized

## 🚀 Quick Deployment

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Navigate to client directory**:
   ```bash
   cd client
   ```

4. **Deploy**:
   ```bash
   vercel
   ```

5. **Set environment variables**:
   ```bash
   vercel env add VITE_API_URL
   vercel env add VITE_APP_NAME
   vercel env add VITE_APP_VERSION
   ```

### Method 2: Vercel Dashboard

1. **Connect Repository**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

3. **Set Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add the required variables (see Environment Variables section below)

4. **Deploy**:
   - Click "Deploy"

## 🔧 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://your-api.vercel.app/api` |
| `VITE_APP_NAME` | Application name | `EventX Studio` |
| `VITE_APP_VERSION` | Application version | `1.0.0` |

### Setting Variables via CLI

```bash
# Set production API URL
vercel env add VITE_API_URL production
# Enter: https://your-backend-api.vercel.app/api

# Set app name
vercel env add VITE_APP_NAME production
# Enter: EventX Studio

# Set app version
vercel env add VITE_APP_VERSION production
# Enter: 1.0.0
```

## 📁 Project Structure

```
client/
├── dist/                    # Built files (generated)
├── src/                     # Source code
├── public/                  # Static assets
├── vercel.json             # Vercel configuration
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── DEPLOY_TO_VERCEL.md     # This guide
```

## ⚙️ Configuration Files

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "vercel-build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check Node.js version (18+ recommended)
   - Ensure all dependencies are installed: `npm install`
   - Check for TypeScript errors: `npm run lint`

2. **API Connection Issues**:
   - Verify `VITE_API_URL` is correct and accessible
   - Check CORS settings on your backend
   - Ensure backend is deployed and running

3. **Environment Variables Not Working**:
   - Variables must start with `VITE_` to be accessible in client
   - Redeploy after adding new environment variables
   - Check variable names are exactly as expected

4. **Routing Issues**:
   - The `vercel.json` file handles SPA routing
   - All routes redirect to `index.html`
   - Check that your React Router is configured correctly

5. **Large Bundle Size**:
   - The build is optimized with code splitting
   - Assets are cached for 1 year
   - Consider lazy loading for large components

### Backend CORS Configuration

Make sure your backend allows requests from Vercel:

```javascript
// In your backend server.js
app.use(cors({
  origin: [
    'http://localhost:5173',                    // Development
    'https://your-app.vercel.app',              // Production
    'https://your-app-git-main.vercel.app'      // Preview deployments
  ],
  credentials: true
}));
```

## 📊 Performance Optimizations

The client is already optimized for production:

- ✅ Code splitting with manual chunks
- ✅ Terser minification
- ✅ Asset caching (1 year)
- ✅ Gzip compression
- ✅ Tree shaking
- ✅ Bundle analysis

## 🎯 Post-Deployment

1. **Test the Application**:
   - Verify all pages load correctly
   - Test authentication flow
   - Check API connections
   - Test on mobile devices

2. **Monitor Performance**:
   - Use Vercel Analytics
   - Check build logs for errors
   - Monitor Core Web Vitals

3. **Custom Domain** (Optional):
   - Add your custom domain in Vercel settings
   - Update CORS settings in backend
   - Update DNS records

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to main branch triggers deployment
- Pull requests get preview deployments
- Environment variables are automatically available

## 📞 Support

If you encounter issues:
1. Check Vercel build logs
2. Verify environment variables
3. Test API endpoints independently
4. Check browser console for errors
5. Review this guide for common solutions

## 🎉 Success!

Your EventX Studio client should now be live on Vercel! 

**Next Steps:**
- Test all functionality
- Set up monitoring
- Configure custom domain (optional)
- Set up CI/CD for automatic deployments
