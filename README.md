# 🎬 STUDIO-Castify

An immersive and responsive video conferencing web application built with **Next.js**, **TypeScript**, **Clerk**, **getstream**, and **TailwindCSS**. Inspired by Zoom, powered by modern full-stack technologies.

---

## 📚 Table of Contents

- [🎯 Introduction](#-introduction)
- [🧪 Tech Stack](#-tech-stack)
- [🔋 Features](#-features)
- [⚙️ Getting Started](#-getting-started)
- [🌐 Deployment (Vercel)](#-deployment-vercel)
- [🕸️ Project Structure](#-project-structure)
- [📸 Screenshots](#-screenshots)
- [📽️ Tutorial](#-tutorial)
- [📬 Contact](#-contact)

---

## 🎯 Introduction

**STUDIO-Castify** is a video conferencing solution that brings together ease-of-use, real-time interactions, and professional-grade meeting features. Whether you're conducting remote team syncs or spontaneous 1:1s, this app provides an intuitive space to connect — anywhere, anytime.

> Hosted on [Vercel](https://vercel.com), optimized for speed and scalability.

---

## 🧪 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router) + [TypeScript](https://www.typescriptlang.org/)
- **Auth**: [Clerk](https://clerk.dev/)
- **Chat & Real-Time**: [getstream](https://getstream.io/)
- **UI Kit**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Hosting**: [Vercel](https://vercel.com/)

---

## 🔋 Features

### 🔐 Secure Authentication
- Auth with Clerk (email/password + OAuth)
- Session handling and redirect logic
- Protect routes based on roles

### 🎥 Create & Join Meetings
- Start a new meeting with mic/cam check
- Join via direct meeting link
- Invite attendees in real-time

### 🎛️ Full Meeting Controls
- Toggle mic/camera
- Emoji reactions
- Screen sharing
- Recording support
- Switch between grid/speaker views
- Manage attendees (pin, mute, block, etc.)

### 📆 Schedule Future Meetings
- Add upcoming meetings with date/time
- Share links or start instantly
- All meetings listed in "Upcoming Meetings"

### 🕒 Past Meetings Archive
- View all previously hosted meetings
- Access recordings and metadata

### 🧍 Personal Meeting Room
- A persistent room URL for every user
- Launch spontaneous sessions anytime

### 🕹️ Real-time Interaction
- Powered by getstream for chat and control sync
- All interactions are end-to-end secure

### 📱 Fully Responsive Design
- Optimized for mobile, tablets, and desktops
- Accessible UI and user-friendly components

### 🧠 Developer Friendly
- Modular structure for easy scalability
- Well-organized folders and reusable hooks/components

---

## ⚙️ Getting Started

### 🔧 Prerequisites

Make sure you have the following tools installed:

- Git
- Node.js (v18+)
- npm or yarn

### 🚀 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/KartikMaski/STUDIO-Castify.git
cd STUDIO-Castify
npm install


## 🧪 Set Environment Variables

Create a `.env` file in the root directory and add:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
