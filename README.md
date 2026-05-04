# Tiles Gallery

A premium Next.js application designed to showcase and manage a high-quality gallery of tiles. Built for aesthetics, performance, and a seamless user experience.

## 🚀 Live URL
[https://assignment-8-two-xi.vercel.app/]https://assignment-8-two-xi.vercel.app/) *(Replace with your actual deployment link)*

## 🎯 Purpose
The purpose of this project is to provide a modern platform for users to discover, search, and view detailed information about various types of tiles (Ceramic, Porcelain, Marble, etc.). It features a robust authentication system and personalized profile management.

## ✨ Key Features
- **Modern Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop.
- **Premium Aesthetics**: Glassmorphism effects, smooth gradients, and modern typography.
- **Robust Authentication**: Powered by BetterAuth with support for:
    - Email/Password Credentials
    - Google Social Login
- **Interactive Gallery**:
    - Real-time search by tile title.
    - Category filtering.
    - Animated transitions using Framer Motion.
- **Private Routes**: Secure access to tile details and user profiles.
- **Profile Management**:
    - View account statistics.
    - Update Name and Avatar Image URL.
- **Dynamic Announcements**: Scrolling marquee for new arrivals and features.
- **Global States**: Custom Loading and 404 (Not Found) pages.

## 🛠️ Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4 & DaisyUI
- **Database**: MongoDB & Mongoose
- **Authentication**: BetterAuth
- **Animations**: Framer Motion & CSS Animations
- **Icons**: Lucide React
- **Toasts**: React-Toastify

## 📦 Installed Packages
- `daisyui`
- `better-auth`
- `mongodb`
- `mongoose`
- `lucide-react`
- `framer-motion`
- `react-toastify`
- `clsx`
- `tailwind-merge`

## ⚙️ Environment Variables
Ensure you set the following in your `.env.local`:
```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
```

## 🛠️ Getting Started
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up environment variables.
4. Run the development server: `npm run dev`.
