<div align="center">
  <br />
    <a href="https://youtu.be/Zq5fmkH0T78?feature=shared" target="_blank">
      <img src="https://github.com/user-attachments/assets/471e2baa-8781-43b8-aaed-62e313d03e99" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logoColor=white&logo=sanity&color=F03E2F" alt="sanity" />

  </div>

<h3 align="center">Startup Directory Platform</h3>

   <div align="center">
     This project was built following the step-by-step tutorial by <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>. I recreated the platform to enhance my skills in modern web development.
    </div>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔸️ [Snippets](#snippets)
6. 🔗 [Assets](#assets)
7. 🚀 [More](#more)

## 🚨 Tutorial

This project is based on the in-depth tutorial available on the YouTube channel <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>. The tutorial provides a beginner-friendly walkthrough to build projects like this one. If you enjoy learning visually, this is a great resource to follow.

<a href="https://youtu.be/Zq5fmkH0T78?feature=shared" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## 🤖 Introduction

This is a modern Next.js 15 platform for entrepreneurs to showcase their startup ideas in virtual pitch competitions, explore pitches submitted by others, and gain visibility through a streamlined, minimalistic design.

Building this project was a personal milestone for me as I aimed to deepen my understanding of Next.js, Sanity, TailwindCSS, and TypeScript while delivering a practical application with real-world use cases.

If you encounter any issues or want to connect with other learners, join the active JavaScript Mastery Discord community:

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## ⚙️ Tech Stack

- React 19
- Next.js 15
- Sanity
- TailwindCSS
- ShadCN
- TypeScript

## 🔋 Features

- **Dynamic Content API**: Fetches and displays real-time startup pitches.
- **GitHub Login**: Seamlessly log in using GitHub accounts.
- **Submit Pitches**: Share ideas with title, description, category, and multimedia.
- **Browse and Filter**: View other submissions by category.
- **Detailed Pages**: Dedicated pages for pitch details, including multimedia.
- **Personal Profiles**: Track user-submitted pitches.
- **Editor Highlights**: Admin-curated "Editor Picks" managed via Sanity Studio.
- **Engagement Metrics**: Tracks pitch views.
- **Search**: Search for specific pitches quickly.
- **Clean Design**: Minimalistic, user-friendly interface.

## 🤸 Quick Start

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Clone Repository

```bash
git clone https://github.com/your-username/startup-directory.git
cd startup-directory
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace placeholders with your credentials. For Sanity, sign up and create a project at [Sanity.io](https://www.sanity.io/).

### Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## 🔸️ Snippets

### Example: Tailwind Config

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

For full details, check the `tailwind.config.ts` file in this repository.

## 🔗 Assets

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## 🚀 More

I built this project as a learning experience and a showcase of modern web development techniques. Feel free to fork it, experiment, and let me know if you have feedback or ideas for improvement!

