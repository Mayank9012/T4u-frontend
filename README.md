# Teams4U Website

A modern React website with a Node.js backend for handling form submissions and email notifications.

## 🚀 Setup

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install

# Configure .env file with your Gmail credentials:
# GMAIL_USER=your-email@gmail.com
# GMAIL_APP_PASSWORD=your-16-digit-app-password
# RECIPIENT_EMAIL=your-email@gmail.com

npm start
```

## 📁 Project Structure

```
team4u-website/
├── backend/              # Node.js backend server
│   ├── src/
│   │   ├── server.js            # Main HTTP server
│   │   ├── services/            # Email service
│   │   └── utils/               # Utilities
│   └── .env                     # Configuration (required)
└── src/                  # React frontend
```

## 🔧 Configuration

Create `backend/.env`:
```env
PORT=3001
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-digit-app-password
RECIPIENT_EMAIL=your-email@gmail.com
FRONTEND_URL=http://localhost:5173
```

**Gmail App Password Setup:**
1. Enable 2-Step Verification in Google Account
2. Go to Security → App Passwords
3. Generate password for "Mail"
4. Copy the 16-digit code to `.env`

## ✨ Features

- React + TypeScript + Vite
- Real-time form validation
- Node.js backend (vanilla HTTP server)
- Email notifications via Gmail
- CORS configured

## 📦 Tech Stack

- React 19
- TypeScript
- Vite
- Node.js
- Nodemailer

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
