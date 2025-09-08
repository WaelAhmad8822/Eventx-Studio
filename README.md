# EventX Studio - Event Management System

A comprehensive full-stack event management system built with React, Node.js, and MongoDB. EventX Studio provides separate interfaces for event organizers (Admin) and attendees (Users) with features like event creation, ticket booking, QR code generation, and analytics.

🌐 **Live Demo**: [https://eventx-studio-isk.vercel.app](https://eventx-studio-isk.vercel.app)

**Backend Deploy**:
       https://eventx-studio-update-production.up.railway.app/

  ### Admin
  **email**: wael@gmail.com  
  **password**:wael1234
  #### only run seedAdmin can create an user=> role Admin

## Features

### For Event Organizers (Admin)
- **Dashboard**: Overview of events, tickets sold, revenue, and attendee insights
- **Event Management**: Create, edit, and delete events with detailed information
- **Ticket Management**: View all tickets, check-in attendees, and manage bookings
- **Analytics**: Comprehensive reports on attendee demographics, popular categories, and revenue
- **User Management**: View and manage all system user

 ### if you want login as admin you will find the information in seed

### For Attendees (Users)
- **Event Discovery**: Browse and search events with filters
- **Event Details**: View detailed event information and seat availability
- **Ticket Booking**: Book tickets with seat selection and payment simulation
- **My Tickets**: View booked tickets with QR codes for check-in
- **User Profile**: Manage personal information and preferences

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose Alts
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
- **TailwindCSS** for styling 


### Backend Setup



3. Create a `.env` file in the root directory:
```env
# Server Config
PORT=3000
NODE_ENV=development

# MongoDB Config
MONGO_URI=mongodb+srv://username:password@cluster0.ccvcvio.mongodb.net/eventx?retryWrites=true&w=majority

# JWT Config
JWT_SECRET=949ee009a58d5d5412601bd2fb5c297bfb967e175065dff17c6d4a7bc1c479b347093f36ee43d265cf8f435efe2b99b01ba110c41dc440101ee85e83487a375
JWT_EXPIRES=1h

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


## Support

For support and questions, please contact waeeel989@gmail.com




























