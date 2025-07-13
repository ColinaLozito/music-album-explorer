# Music Album Explorer

## Overview

Music Album Explorer is a React Native application that allows users to search for music albums by artist and view detailed information about each album. The app leverages the MusicBrainz API to fetch album data and is designed for mobile platforms using Expo.

## Core Technologies

- **React Native**: Cross-platform mobile app development
- **Expo**: Simplifies development and testing of React Native apps
- **TypeScript**: Type safety for JavaScript
- **React Navigation**: Navigation between screens
- **Axios**: HTTP client for API requests
- **React Native Paper**: UI components
- **AsyncStorage**: Persistent storage for search history
- **ESLint & Prettier**: Code quality and formatting

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd music-album-explorer
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file in the project root with the following variables:
   ```env
   MUSICBRAINZ_ORGANIZATION_NAME=OrganizationName
   MUSICBRAINZ_USER_AGENT_NAME=YourAppName
   MUSICBRAINZ_USER_AGENT_EMAIL=your@email.com
   MUSICBRAINZ_USER_AGENT_VERSION=1.0.0
   ```
   **Why?** These variables are required by the MusicBrainz API to identify your application and comply with their usage policy. They are injected into API requests as the `User-Agent` header.

### Running the App

- Start the Expo development server:
  ```sh
  npm start
  # or
  yarn start
  ```
- Follow the instructions in the terminal to run the app on an emulator or physical device (iOS, Android, or web).

## Scripts

- `npm start` / `yarn start`: Start the Expo development server
- `npm run android` / `yarn android`: Run on Android emulator/device
- `npm run ios` / `yarn ios`: Run on iOS simulator/device
- `npm run web` / `yarn web`: Run in web browser

## Environment Variables

- `MUSICBRAINZ_ORGANIZATION_NAME`: Name of the organization registered for MusicBrainz API use
- `MUSICBRAINZ_USER_AGENT_NAME`: Name of your app for MusicBrainz API
- `MUSICBRAINZ_USER_AGENT_EMAIL`: Contact email for API usage
- `MUSICBRAINZ_USER_AGENT_VERSION`: App version for API usage

These are required for successful API requests to MusicBrainz and should be kept private.

## License

This project is for demonstration and educational purposes.
