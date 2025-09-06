
# EventX Studio Client - Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Backend API**: Your backend should be deployed and accessible

## Environment Variables

### Required Environment Variables

Set these in your Vercel project settings:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://your-api.vercel.app/api` or `https://your-backend.herokuapp.com/api` |
| `VITE_APP_NAME` | Application name | `EventX Studio` |
| `VITE_APP_VERSION` | Application version | `1.0.0` |

### Optional Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment | `production` |

## Deployment Steps

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
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
   - Add the required variables listed above

4. **Deploy**:
   - Click "Deploy"

## Configuration Files

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
  ]
}
```

### package.json
The build script is already configured:
```json
{
  "scripts": {
    "vercel-build": "vite build"
  }
}
```

## Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check that all dependencies are in `package.json`
   - Ensure Node.js version is compatible (14+ recommended)

2. **API Connection Issues**:
   - Verify `VITE_API_URL` is correct
   - Check CORS settings on your backend
   - Ensure backend is accessible from Vercel

3. **Environment Variables Not Working**:
   - Variables must start with `VITE_` to be accessible in the client
   - Redeploy after adding new environment variables

4. **Routing Issues**:
   - The `vercel.json` file handles SPA routing
   - All routes redirect to `index.html`

### Backend CORS Configuration

Make sure your backend allows requests from Vercel:

```javascript
// In your backend server.js
app.use(cors({
  origin: [
    'http://localhost:5173', // Development
    'https://your-app.vercel.app' // Production
  ],
  credentials: true
}));
```

## Post-Deployment

1. **Test the Application**:
   - Verify all pages load correctly
   - Test authentication flow
   - Check API connections

2. **Monitor Performance**:
   - Use Vercel Analytics
   - Check build logs for errors

3. **Custom Domain** (Optional):
   - Add your custom domain in Vercel settings
   - Update CORS settings in backend

## Environment Examples

### Development
```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=EventX Studio
VITE_APP_VERSION=1.0.0
NODE_ENV=development
```

### Production
```env
VITE_API_URL=https://your-backend-api.vercel.app/api
VITE_APP_NAME=EventX Studio
VITE_APP_VERSION=1.0.0
NODE_ENV=production
```

## Support

If you encounter issues:
1. Check Vercel build logs
2. Verify environment variables
3. Test API endpoints independently
4. Check browser console for errors
