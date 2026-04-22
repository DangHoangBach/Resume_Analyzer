# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app🚀 AI Resume Analyzer
An AI-powered tool designed to help job seekers optimize their resumes by comparing them directly against specific Job Descriptions (JD). It provides real-time ATS scores, content feedback, and actionable improvement tips.

✨ Features
Smart AI Analysis: Matches your resume to any JD to provide a tailored ATS score.

Resume Storage: Upload and manage multiple resumes using Puter.js cloud storage.

Comprehensive Feedback: Get insights on tone, style, skills, and structure.

PDF to Image Conversion: High-fidelity PDF processing for visual AI analysis.

Serverless Architecture: Fully functional backend-less app using Puter's AI and KV store.

⚙️ Tech Stack
Framework: React + React Router v7

BaaS: Puter.js (Auth, AI, KV Store, File System)

State Management: Zustand

Styling: Tailwind CSS

Language: TypeScript

🤸 Quick Start
Prerequisites
Node.js (v18+)

npm

Installation
Clone the repository:

Bash
git clone https://github.com/your-username/resume-analyzer.git
cd resume-analyzer
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
🚨 Troubleshooting Note
If you encounter WebSocket connection issues (e.g., wss://api.puter.com), try the following:

Open the app in Incognito Mode to disable conflicting extensions.

Check your firewall or VPN settings.

Use a modern browser like Microsoft Edge or Firefox for better compatibility.
```

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```




