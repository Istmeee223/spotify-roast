# Spotify Music Roast

## Overview
The Spotify Music Roast project is a web application that allows users to generate humorous roasts based on their Spotify music preferences. The application consists of a backend service that handles the logic for generating roasts and a frontend service that provides a user interface for interaction.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`.

### Backend
- **docker-compose.yml**: Defines the services, networks, and volumes for the backend application.
- **.env.example**: Template for environment variables needed by the backend application.
- **package.json**: Configuration file for npm, listing dependencies and scripts for the backend.
- **tsconfig.json**: TypeScript configuration file specifying compiler options.
- **src/**: Contains the source code for the backend application.
  - **index.ts**: Entry point of the backend application, initializing the server and setting up middleware and routes.
  - **controllers/**: Contains the `roastController.ts` for handling requests related to roasts.
  - **routes/**: Contains the `api.ts` file for setting up API routes.
  - **services/**: Contains service files for generating roasts and interacting with the Spotify API.
  - **types/**: Contains TypeScript types and interfaces for type safety.

### Frontend
- **package.json**: Configuration file for npm, listing dependencies and scripts for the frontend.
- **tsconfig.json**: TypeScript configuration file specifying compiler options.
- **public/**: Contains static files for the frontend application.
  - **index.html**: Main HTML file serving as the entry point for the web application.
- **src/**: Contains the source code for the frontend application.
  - **App.tsx**: Main component of the React application.
  - **index.tsx**: Entry point for the React application, rendering the App component.
  - **components/**: Contains reusable components such as `LoginButton`, `RoastResult`, and `Spinner`.
  - **hooks/**: Contains custom hooks like `useSpotify` for managing authentication and API calls.
  - **services/**: Contains functions for making API requests to the backend.
  - **styles/**: Contains CSS styles for the frontend application.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd spotify-music-roast
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file based on `.env.example` and configure your environment variables.

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```
     npm install
     ```

4. Run the application:
   - Use Docker to start the services defined in `docker-compose.yml`:
     ```
     docker-compose up
     ```

## Usage
- Access the frontend application in your browser at `http://localhost:3000`.
- Log in with your Spotify account to start generating roasts based on your music preferences.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.