# Turtle Identification App (mobile)

This folder contains a minimal Expo-managed React Native app that opens the Turtlify web app in a WebView.

What I added
 - `package.json` — minimal dependencies and scripts (Expo + react-native-webview)
 - `app.json` — basic Expo config
 - `App.js` — Home screen that loads https://turtlify.vercel.app/ in a WebView
 - `.gitignore` — ignores node_modules and common build artifacts

Quick start

1. Install dependencies:

```bash
cd mobile
npm install
```

2. Start Expo dev server:

```bash
npx expo start
```

Then open the app in Expo Go (iOS/Android) or run on a simulator/emulator.

Notes
- The project intentionally does NOT add navigation, storage, or other UI libraries per your request.
- The app uses `react-native-webview` to embed the site.
