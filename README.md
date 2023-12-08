# Fullstack Blog Application (MERN Stack)

Welcome to the Fullstack Blog Application documentation! This application allows users to explore a variety of blog posts with a user-friendly interface. Below is a detailed guide on how to set up and run the application.

&nbsp;

## Overview

This full-stack blog application is built using the MERN stack (MongoDB, Express, React, Node.js). The state management is handled using Zustand instead of Redux. Users can enjoy features like post categorization, pagination, commenting, and a dual Dark & Light theme UI. Admins have access to additional functionalities in the Admin Dashboard, including analytics on post content and views.

&nbsp;

## System Requirements:

- Node.js version 18 or above.
- npm version 10.2.3.
- MongoDB Atlas
- Text Editor or IDE
- Git
- Postman (Optional)

&nbsp;

## Technologies Used:

1. ReactJs
2. NodeJs (Node version 18 or above)
3. ExpressJs
4. MongoDB (Database)
5. Tailwind CSS (for Styling)
6. Zustand (for State Management)

&nbsp;

## Features Include (Client side):

1. User Account Creation (Optional)
2. Google Sign In (Optional) - Client side only
3. Post Categories
4. Pagination with Page Numbers
5. Commenting on Posts (Only Available to Signed-in Users)
6. Dark and Light Theme Settings
7. Blog Details Page with Dynamic URL (Slug)
8. Fully Mobile-Responsive Design

## Features Include (Admin Dashboard):

1. Account Creation
2. Email Verification with OTP
3. Create Posts, Delete Posts, Enable or Disable Posts
4. Dashboard Analytics
5. Content and Views Analytics (7 days, 28 days, 900 days & 365 days)
6. Ability to delete user comments on a blog post
7. Dark and Light Theme Settings
8. Fully Mobile-Responsive Design

## Modern User Interface (UI)

Classic UI with DARK & LIGHT theme settings

&nbsp;

## Screenshots:-

### Dark Theme >>
![Banner](https://res.cloudinary.com/djs3wu5bg/image/upload/v1702011737/Codewave/q3k5ayoi1v696wl3ixvf.png)


![Home Page](https://firebasestorage.googleapis.com/v0/b/codewave-codebase-e052b.appspot.com/o/nextjs-blog%2FHome.png?alt=media&token=b157b478-9a66-4ee9-9f94-c21b92c2e16e)

![Pagination](https://firebasestorage.googleapis.com/v0/b/codewave-codebase-e052b.appspot.com/o/nextjs-blog%2Fposts%20with%20pagination.png?alt=media&token=b39e1bc8-73b6-41dc-8a47-e0e4f03d7d21)

![Post Detail](https://res.cloudinary.com/djs3wu5bg/image/upload/v1702011971/Codewave/bytcb7p3kpwxvu6f4h7q.png)

![Sign-in Page](https://firebasestorage.googleapis.com/v0/b/codewave-codebase-e052b.appspot.com/o/nextjs-blog%2FSignin%20-%20Dark.png?alt=media&token=b3abdef1-5c0c-404c-a81b-94d558a6bb76)

### Light Theme >>

![Sign-in Page](https://firebasestorage.googleapis.com/v0/b/codewave-codebase-e052b.appspot.com/o/nextjs-blog%2FSignin%20-light.png?alt=media&token=066aac30-bf42-4ee2-952e-3d089bb1dd72)


### Admin Dashboard >>

![Admin Dashboard](https://firebasestorage.googleapis.com/v0/b/codewave-codebase-e052b.appspot.com/o/nextjs-blog%2Fadmin.png?alt=media&token=a96e398b-8d91-40ed-a938-b3714f7bccc4)

&nbsp;
&nbsp;

# Server Setup

## Environment variables
First, create the environment variables file `.env` in the server folder. The `.env` file contains the following environment variables:

- MONGODB_URL = `your MongoDB URL`
- JWT_SECRET_KEY = `any secret key - must be secured`
- PORT = `8800` or any port number
- AUTH_EMAIL = `your email address to send the OTP`
- AUTH_PASSWORD = `password to your email account` (used Hotmail for email verification)

&nbsp;

## Set Up MongoDB:

1. Setting up MongoDB involves a few steps:
    - Visit MongoDB Atlas Website
        - Go to the MongoDB Atlas website: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

    - Create an Account
    - Log in to your MongoDB Atlas account.
    - Create a New Cluster
    - Choose a Cloud Provider and Region
    - Configure Cluster Settings
    - Create Cluster
    - Wait for Cluster to Deploy
    - Create Database User
    - Set Up IP Whitelist
    - Connect to Cluster
    - Configure Your Application
    - Test the Connection

2. Create a new database and configure the `.env` file with the MongoDB connection URL. 

## Steps to run server

1. Open the project in any editor of choice.
2. Navigate into the server directory `cd server`.
3. Run `npm i` to install the packages.
4. Run `npm start` to start the server.

If configured correctly, you should see a message indicating that the server is running successfully and `Database Connected`.

&nbsp;

# Client Side Setup

## Environment variables
First, create the environment variables file `.env` in the client folder. The `.env` file contains the following environment variables:

- REACT_APP_GOOGLE_CLIENT_ID = `Google client ID for Google Sign In`
- REACT_APP_FIREBASE_API_KEY = `Firebase key`

## Steps to run client

1. Navigate into the client directory `cd client`.
2. Run `npm i` to install the packages.
3. Run `npm start` to run the app on `http://localhost:3000`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

&nbsp;

# Admin Dashboard Setup

## Environment variables
First, create the environment variables file `.env` in the admin folder. The `.env` file contains the following environment variables:

- REACT_APP_FIREBASE_API_KEY = `Firebase key`

## Steps to run admin dashboard

1. Navigate into the admin directory `cd admin`.
2. Run `npm i` to install the packages.
3. Run `npm start` to run the app on `http://localhost:3000` or any other available port.

&nbsp;

# Security Note:

## Environment Variables:

- Safeguard your environment variables by storing them securely and not exposing them unintentionally.

- Ensure that only authorized personnel have access to the environment variable configurations.


&nbsp;

## For Support, Contact:

- Email: codewavewithasante@gmail.com
- Telegram Chat: [https://t.me/Codewave_with_asante](https://t.me/Codewave_with_asante)