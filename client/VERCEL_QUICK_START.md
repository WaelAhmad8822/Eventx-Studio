# 🚀 Vercel Quick Start Guide

## Quick Deployment (5 minutes)

### 1. Setup Environment
```bash
cd client
npm run setup-vercel
```

### 2. Update Environment Variables
Edit `.env.local` with your production API URL:
```env
VITE_API_URL=https://your-backend-api.vercel.app/api
```

### 3. Deploy with Vercel CLI
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### 4. Set Environment Variables in Vercel
```bash
vercel env add VITE_API_URL
vercel env add VITE_APP_NAME
vercel env add VITE_APP_VERSION
```

## Alternative: Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Set **Root Directory** to `client`
5. Add environment variables
6. Deploy!

## Files Created

- ✅ `vercel.json` - Vercel configuration
- ✅ `env.example` - Environment template
- ✅ `DEPLOYMENT.md` - Detailed deployment guide
- ✅ `setup-vercel.js` - Setup automation script
- ✅ Updated `package.json` with Vercel scripts
- ✅ Updated `vite.config.js` for production optimization

## Environment Variables Required

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://your-api.vercel.app/api` |
| `VITE_APP_NAME` | App name | `EventX Studio` |
| `VITE_APP_VERSION` | App version | `1.0.0` |

## Troubleshooting

- **Build fails**: Check Node.js version (14+ required)
- **API not connecting**: Verify `VITE_API_URL` is correct
- **Routing issues**: Check `vercel.json` configuration
- **Environment variables not working**: Must start with `VITE_`

## Support

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.
