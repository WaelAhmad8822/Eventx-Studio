# EventX Studio - Event Management System

A comprehensive full-stack event management system built with React, Node.js, and MongoDB. EventX Studio provides separate interfaces for event organizers (Admin) and attendees (Users) with features like event creation, ticket booking, QR code generation, and analytics.

## Features

### For Event Organizers (Admin)
- **Dashboard**: Overview of events, tickets sold, revenue, and attendee insights
- **Event Management**: Create, edit, and delete events with detailed information
- **Ticket Management**: View all tickets, check-in attendees, and manage bookings
- **Analytics**: Comprehensive reports on attendee demographics, popular categories, and revenue
- **User Management**: View and manage all system users

### For Attendees (Users)
- **Event Discovery**: Browse and search events with filters
- **Event Details**: View detailed event information and seat availability
- **Ticket Booking**: Book tickets with seat selection and payment simulation
- **My Tickets**: View booked tickets with QR codes for check-in
- **User Profile**: Manage personal information and preferences

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **QRCode** for ticket generation
- **Express Validator** for input validation

### Frontend
- **React 18** with functional components and hooks
- **React Router** for navigation
- **Recharts** for analytics and charts
- **QRCode.react** for QR code display
- **React Toastify** for notifications
- **Custom CSS** for styling (no Tailwind as requested)

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Git

### Backend Setup



3. Create a `.env` file in the root directory:
```env
# Server Config
PORT=5000
NODE_ENV=development

# MongoDB Config
MONGO_URI=mongodb+srv://username:password@cluster0.ccvcvio.mongodb.net/eventx?retryWrites=true&w=majority

# JWT Config
JWT_SECRET=949ee009a58d5d5412601bd2fb5c297bfb967e175065dff17c6d4a7bc1c479b347093f36ee43d265cf8f435efe2b99b01ba110c41dc440101ee85e83487a375
JWT_EXPIRES=1h

# Refresh Token Config
JWT_REFRESH_SECRET=272c5b03f29068ac5c2a5f07d9740cb1ea5eb4aec9c4e9bcb17d950a72e7b91122cc395e85259995ee79cc23727d97597963af8a15fd284f25e40fba605a41c4
JWT_REFRESH_EXPIRES=1d
```



The backend will run on `http://localhost:3000`


## Database Schema

### User Model
- Personal information (name, email, phone, dateOfBirth, gender)
- Location (city, country)
- Interests array
- Role (user/admin)
- Account status

### Event Model
- Event details (title, description, date, time)
- Venue information (name, address, city)
- Pricing and capacity (price, totalSeats, availableSeats)
- Category and tags
- Organizer reference
- Status (upcoming, active, closed, cancelled)

### Ticket Model
- Event and user references
- Seat number and price
- QR code for check-in
- Booking and check-in timestamps
- Payment information
- Status (active, used, cancelled, refunded)

## Key Features Implementation

### Authentication & Authorization
- JWT-based authentication with role-based access control
- Protected routes for admin and user areas
- Secure password hashing with bcryptjs

### Event Management
- Full CRUD operations for events
- Real-time seat availability tracking
- Event status management
- Category and tag system

### Ticket System
- QR code generation for each ticket
- Seat selection and booking
- Payment simulation
- Check-in functionality for admins

### Analytics Dashboard
- Revenue tracking and reporting
- Attendee demographics analysis
- Event performance metrics
- Interactive charts and graphs

### Responsive Design
- Mobile-first approach
- Clean and modern UI
- Consistent design system
- Accessible components

## Usage

### For Admins
1. Register/Login with admin role
2. Access admin dashboard
3. Create and manage events
4. View ticket sales and analytics
5. Check-in attendees at events

### For Users
1. Register/Login as a regular user
2. Browse available events
3. Book tickets with seat selection
4. View and manage tickets
5. Use QR codes for event entry

## Development

### Project Structure
```
eventx-studio/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   ├── services/      # API services
│   │   └── App.js
│   └── package.json
├── models/                 # MongoDB models
├── routes/  # Express routes
├──  seed/seedAdmin #create Admin               
├── middleware/             # Custom middleware
├── server.js              # Main server file
└── package.json
```


## Deployment

### Frontend Deployment (Vercel)

The client is configured for easy deployment on Vercel with optimized build settings.

#### Quick Deploy (5 minutes)

1. **Setup Environment**:
   ```bash
   cd client
   npm run setup-vercel
   ```

2. **Update Environment Variables**:
   Edit `.env.local` with your production API URL:
   ```env
   VITE_API_URL=https://your-backend-api.vercel.app/api
   VITE_APP_NAME=EventX Studio
   VITE_APP_VERSION=1.0.0
   ```

3. **Deploy with Vercel CLI**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel
   ```

4. **Set Environment Variables in Vercel**:
   ```bash
   vercel env add VITE_API_URL
   vercel env add VITE_APP_NAME
   vercel env add VITE_APP_VERSION
   ```

#### Alternative: Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Set **Root Directory** to `client`
5. Add environment variables:
   - `VITE_API_URL`: Your backend API URL
   - `VITE_APP_NAME`: EventX Studio
   - `VITE_APP_VERSION`: 1.0.0
6. Deploy!

#### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://your-api.vercel.app/api` |
| `VITE_APP_NAME` | Application name | `EventX Studio` |
| `VITE_APP_VERSION` | Application version | `1.0.0` |

### Backend Deployment

#### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy Backend**:
   ```bash
   # In the root directory
   vercel
   ```

3. **Set Environment Variables**:
   ```bash
   vercel env add MONGO_URI
   vercel env add JWT_SECRET
   vercel env add JWT_EXPIRES
   vercel env add JWT_REFRESH_SECRET
   vercel env add JWT_REFRESH_EXPIRES
   ```

#### Option 2: Heroku

1. **Install Heroku CLI**:
   ```bash
   npm install -g heroku
   ```

2. **Create Heroku App**:
   ```bash
   heroku create your-app-name
   ```

3. **Set Environment Variables**:
   ```bash
   heroku config:set MONGO_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   heroku config:set JWT_EXPIRES=1h
   heroku config:set JWT_REFRESH_SECRET=your_refresh_secret
   heroku config:set JWT_REFRESH_EXPIRES=1d
   ```

4. **Deploy**:
   ```bash
   git push heroku main
   ```

#### Option 3: Railway

1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically

### Database Setup

#### MongoDB Atlas (Recommended)

1. Create a free account at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `MONGO_URI` in your environment variables

#### Local MongoDB

1. Install MongoDB locally
2. Start MongoDB service
3. Use `mongodb://localhost:27017/eventx` as your `MONGO_URI`

### CORS Configuration

Make sure your backend allows requests from your frontend domain:

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

### Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Database connected and working
- [ ] Environment variables set correctly
- [ ] CORS configured for frontend domain
- [ ] Frontend deployed with correct API URL
- [ ] All features tested in production
- [ ] SSL certificates working (automatic with Vercel)

### Troubleshooting

#### Common Issues

1. **Build Fails**:
   - Check Node.js version (14+ required)
   - Verify all dependencies are installed
   - Check build logs for specific errors

2. **API Connection Issues**:
   - Verify `VITE_API_URL` is correct
   - Check CORS settings on backend
   - Ensure backend is accessible from frontend domain

3. **Environment Variables Not Working**:
   - Variables must start with `VITE_` for frontend
   - Redeploy after adding new environment variables
   - Check variable names are exactly correct

4. **Database Connection Issues**:
   - Verify MongoDB connection string
   - Check database permissions
   - Ensure network access is allowed

#### Getting Help

- Check deployment logs in Vercel/Heroku dashboard
- Verify environment variables are set correctly
- Test API endpoints independently
- Check browser console for frontend errors

For detailed deployment instructions, see:
- `client/DEPLOYMENT.md` - Frontend deployment guide
- `client/VERCEL_QUICK_START.md` - Quick start guide

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact waeeel989@gmail.com
