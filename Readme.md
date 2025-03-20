# SkillStream - Full-Stack Learning Management System

**SkillStream** is a full-featured **Learning Management System (LMS)** built using the **MERN Stack** (MongoDB, ExpressJS, ReactJS, NodeJS). This platform allows **educators** to publish courses and **students** to enroll, purchase, and learn through an intuitive and responsive interface.

---

## Features

- **User Authentication**: Secure login, registration, and profile management using **Clerk** with pre-built UI components.
- **Course Management**: Educators can create, manage, and publish courses with video content.
- **Stripe Payments**: Students can purchase courses via **Stripe**, allowing educators to monetize their content.
- **Responsive Design**: Optimized for all devices – desktop, tablet, and mobile.
- **Dashboard Access**: Personalized dashboards for both students and educators to track courses, earnings, and progress.
- **Video Playback**: Smooth and controlled video player for lessons with access control.

---

## Technologies Used

### Frontend

- **ReactJS**: Building dynamic and interactive UI.
- **Tailwind CSS**: Responsive and utility-first styling.
- **Clerk**: Authentication and user management.
- **Stripe**: Payment gateway for secure transactions.

### Backend

- **NodeJS + ExpressJS**: RESTful API development.
- **MongoDB + Mongoose**: Database for users, courses, and transactions.
- **Cloudinary**: Video upload and storage (optional).

---

## Installation

### Prerequisites

Ensure the following are installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- npm
- MongoDB Atlas account
- Stripe account
- Clerk account

---

### Steps to Set Up Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/shreyash-07/SkillStream.git
   cd SkillStream
   ```

2. **Install Dependencies**

  Backend
  ```bash
   cd server
   npm install
   ```
  Frontend
   ```bash
   cd client
   npm install
   ```

3. **Configure Environment Variables**

 Create a `.env` file in the root directory of backend:
   ```env
   CURRENCY =currency
   MONGODB_URI =your_mongodb_uri
   CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLOUDINARY_NAME = your_cloudinary_name
   CLOUDINARY_API_KEY = your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY = your_cloudinary_secret_key
   STRIPE_PUBLISHABLE_KEY = your_stripe_publishable_key
   STRIPE_SECRET_KEY = your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET = your_stripe_webhook_secret
```

 Create a `.env` file in the root directory of frontend:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_CURRENCY=currency
   VITE_BACKEND_URL=your_backend_url
```

4. **Start the application**

 Backend
   ```bash
   cd server
   npm run server
   ```
 Frontend
   ```bash
   cd client
   npm run dev
   ```
 Open the app in your browser
