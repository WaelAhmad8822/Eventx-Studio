# 🚀 Deploy EventX Studio Backend to Railway

This guide will help you deploy the EventX Studio backend API to Railway.

## ✅ Pre-deployment Checklist

- [x] Backend code is ready and tested
- [x] Railway configuration file created
- [x] Environment variables documented
- [x] MongoDB database ready (MongoDB Atlas recommended)
- [x] Git repository connected

## 🚀 Quick Deployment Steps

### 1. Prepare Your Repository

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Railway deployment"
   git push origin main
   ```

### 2. Deploy to Railway

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up/Login** with your GitHub account
3. **Create New Project** → "Deploy from GitHub repo"
4. **Select your repository** (Eventx-Studio-main)
5. **Configure the service**:
   - **Root Directory**: Leave empty (deploy from root)
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### 3. Set Environment Variables

In Railway dashboard, go to your project → Variables tab and add:

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://username:password@cluster.mongodb.net/eventx?retryWrites=true&w=majority` |
| `JWT_SECRET` | Secret key for JWT tokens | `your-super-secret-jwt-key-here` |
| `JWT_EXPIRES` | JWT token expiration | `1h` or `24h` |
| `NODE_ENV` | Environment | `production` |
| `PORT` | Server port (Railway sets this automatically) | `5000` |

### 4. Database Setup

**Option A: MongoDB Atlas (Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist Railway's IP ranges (or use 0.0.0.0/0 for development)
5. Get your connection string and use it as `MONGO_URI`

**Option B: Railway MongoDB Plugin**
1. In Railway dashboard, add a MongoDB service
2. Railway will provide the connection string automatically

## 🔧 Configuration Files

### railway.json
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/",
    "healthcheckTimeout": 100,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### package.json (already configured)
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

## 🌐 API Endpoints

Once deployed, your API will be available at:
- **Base URL**: `https://your-app-name.railway.app`
- **Health Check**: `GET /` - Returns API status
- **Auth**: `POST /api/auth/register`, `POST /api/auth/login`
- **Events**: `GET /api/events`, `POST /api/events`
- **Tickets**: `GET /api/tickets`, `POST /api/tickets`
- **Admin**: `GET /api/admin/*` (protected routes)

## 🔍 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**:
   - Check `MONGO_URI` is correct
   - Ensure MongoDB Atlas allows connections from all IPs (0.0.0.0/0)
   - Verify database user has proper permissions

2. **JWT Token Issues**:
   - Ensure `JWT_SECRET` is set and secure
   - Check `JWT_EXPIRES` format is correct

3. **Build Failures**:
   - Check that all dependencies are in `package.json`
   - Ensure Node.js version is compatible (Railway uses latest LTS)

4. **CORS Issues**:
   - Update CORS settings in `server.js` to include your frontend URL
   - Add your Vercel frontend URL to allowed origins

### CORS Configuration

Update your `server.js` to include your frontend URL:

```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',                    // Development
    'https://client-5w565fokk-waels-projects-522b86d6.vercel.app', // Your Vercel URL
    'https://your-custom-domain.vercel.app'     // Custom domain
  ],
  credentials: true
}));
```

## 📊 Monitoring

Railway provides:
- **Logs**: Real-time application logs
- **Metrics**: CPU, memory, and network usage
- **Health Checks**: Automatic health monitoring
- **Deployments**: Deployment history and rollback

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to main branch triggers deployment
- Pull requests can create preview deployments
- Environment variables are automatically available

## 🎯 Post-Deployment

1. **Test API Endpoints**:
   ```bash
   curl https://your-app-name.railway.app/
   ```

2. **Update Frontend**:
   - Update `VITE_API_URL` in your Vercel environment variables
   - Point to your new Railway backend URL

3. **Monitor Performance**:
   - Check Railway dashboard for metrics
   - Monitor API response times
   - Set up alerts for downtime

## 🎉 Success!

Your EventX Studio backend should now be live on Railway!

**Next Steps:**
- Test all API endpoints
- Update frontend to use new backend URL
- Set up monitoring and alerts
- Configure custom domain (optional)

## 📞 Support

If you encounter issues:
1. Check Railway build logs
2. Verify environment variables
3. Test MongoDB connection independently
4. Check API endpoints with Postman/curl
5. Review this guide for common solutions
