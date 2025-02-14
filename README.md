# Task Management System - Frontend

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Environment Variables](#environment-variables)
4. [Available Scripts](#available-scripts)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)

---

## Features
- **Task Management**: Create, update, delete, and assign tasks
- **Real-Time Updates**: Instant updates across all clients using Socket.io
- **User Authentication**: Secure login and registration
- **Responsive Design**: Optimized for all devices
- **Advanced Filtering**: Search, status, assignee, and date range filters
- **Dark Mode**: User-friendly dark theme

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Giant775/Task_Assign_Frontend.git
   cd Task_Assign_Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

---

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Lint the code
- `npm run preview` - Preview the production build

---

## Folder Structure

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
├── .env
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

Happy coding! 🚀

