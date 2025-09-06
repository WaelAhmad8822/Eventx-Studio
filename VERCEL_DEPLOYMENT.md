# Vercel Deployment Guide for EventX Studio Backend

This guide will help you deploy the EventX Studio backend to Vercel.

## Prerequisites

1. Vercel account ([Sign up here](https://vercel.com))
2. GitHub repository with your code
3. MongoDB Atlas account (for production database)
4. Node.js installed locally
5. Vercel CLI (optional but recommended)

## Step 1: Prepare Your Repository

1. Make sure all your code is committed and pushed to GitHub:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 2: Create Vercel Project

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Node.js project
5. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: Leave empty (root)
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from your project directory:
```bash
vercel
```

## Step 3: Set Environment Variables

In the Vercel dashboard, go to your project → Settings → Environment Variables and add:

### Required Variables:
```
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/eventx?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here
JWT_REFRESH_SECRET=your-super-secret-refresh-key-here
JWT_EXPIRES=1h
JWT_REFRESH_EXPIRES=1d
CORS_ORIGIN=https://eventx-studio-three.vercel.app
```

### Optional Variables:
```
JWT_SECRET=auto-generated-secret
JWT_REFRESH_SECRET=auto-generated-refresh-secret
```

## Step 4: Database Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Set `MONGO_URI` in Vercel environment variables

## Step 5: Deploy

1. Click "Deploy" (if using dashboard)
2. Vercel will automatically build and deploy your application
3. Wait for the deployment to complete (usually 1-2 minutes)

## Step 6: Seed Admin User (Optional)

After deployment, you can seed an admin user using Vercel's functions:

1. Go to your project dashboard
2. Click on "Functions" tab
3. Create a temporary function to run the seed script

Or run locally and connect to production database:
```bash
MONGO_URI=your-production-mongo-uri npm run seed
```

## Step 7: Verify Deployment

1. Check the deployment logs in Vercel dashboard
2. Your API will be available at: `https://your-project-name.vercel.app`
3. Test the API endpoint:
```bash
curl https://your-project-name.vercel.app/
```

## Step 8: Update Frontend Configuration

Update your frontend's API URL to point to your Vercel backend:

In `client/.env.local`:
```
VITE_API_URL=https://your-project-name.vercel.app/api
```

## Environment Variables Reference

| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `NODE_ENV` | Environment mode | `production` | Yes |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` | Yes |
| `JWT_SECRET` | Secret for JWT tokens | `your-secret-key` | Yes |
| `JWT_REFRESH_SECRET` | Secret for refresh tokens | `your-refresh-secret` | Yes |
| `JWT_EXPIRES` | JWT token expiration | `1h` | No |
| `JWT_REFRESH_EXPIRES` | Refresh token expiration | `1d` | No |
| `CORS_ORIGIN` | Allowed CORS origin | `https://your-frontend.vercel.app` | Yes |

## Vercel-Specific Features

### Serverless Functions
- Your Express app runs as a serverless function
- Automatic scaling based on demand
- Pay-per-request pricing

### Auto-Deploy
- Vercel automatically deploys when you push to your main branch
- Preview deployments for pull requests

### Global CDN
- Your API is distributed globally
- Fast response times worldwide

### Free Tier
- 100GB bandwidth per month
- 1000 serverless function executions per month
- No cold start issues

## Troubleshooting

### Common Issues:

1. **Build Fails**: 
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Check if `vercel.json` is configured correctly

2. **Database Connection**: 
   - Verify MongoDB URI is correct
   - Check if MongoDB Atlas allows connections from Vercel IPs
   - Ensure your MongoDB cluster is accessible

3. **CORS Errors**: 
   - Check CORS_ORIGIN setting
   - Ensure frontend URL is correct
   - Verify CORS configuration in server.js

4. **Function Timeout**: 
   - Vercel has a 10-second timeout for hobby plan
   - Consider optimizing your database queries
   - Upgrade to Pro plan for longer timeouts

5. **Environment Variables**: 
   - Ensure all required variables are set
   - Check variable names are correct
   - Redeploy after adding new variables

### View Logs:
- Go to your project dashboard
- Click on "Functions" tab
- Click on your function to see logs

### Redeploy:
- Go to your project dashboard
- Click "Redeploy" button
- Or push a new commit to trigger auto-deploy

## Security Notes

- Use strong, unique secrets for JWT tokens
- Never commit `.env` files to version control
- Use environment variables for all sensitive data
- Regularly rotate your secrets
- HTTPS is provided automatically by Vercel

## Performance Optimization

### For Production:
1. Use MongoDB Atlas for better database performance
2. Implement caching strategies
3. Optimize database queries
4. Consider upgrading to Pro plan for better performance

### Vercel-Specific Tips:
1. Use connection pooling for MongoDB
2. Implement proper error handling
3. Optimize function cold starts
4. Use Vercel's edge functions for better performance

## Next Steps

1. Set up MongoDB Atlas for production database
2. Configure custom domain (optional)
3. Set up monitoring and alerts
4. Consider upgrading to Pro plan for production use
5. Set up automatic deployments from GitHub
6. Configure preview deployments for testing
