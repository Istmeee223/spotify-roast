# Spotify Music Roast

## Overview
Spotify Music Roast is a web application that analyzes a user's Spotify listening data and generates a humorous, savage, and insightful "music taste roast." The application is built using React for the frontend and Node.js for the backend, providing a seamless experience for users to engage with their music data in a fun way.

## Features
- User authentication via Spotify OAuth
- Analysis of user listening data
- Generation of humorous roasts based on music taste
- Interactive and responsive user interface

## Project Structure
The project is divided into two main parts: the frontend and the backend.

### Frontend
- **React Application**: The frontend is built with React and TypeScript, providing a modern and interactive user experience.
- **Components**: Includes components for login, displaying roast results, and a loading spinner.
- **Hooks**: Custom hooks for managing Spotify API interactions.
- **Styles**: CSS styles for a polished look.

### Backend
- **Node.js Application**: The backend is built with Node.js and TypeScript, handling API requests and Spotify data processing.
- **API Routes**: Routes for user data fetching and roast generation.
- **Controllers**: Logic for processing requests and generating roasts.
- **Services**: Functions for interacting with the Spotify API and generating humorous content.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Docker (optional, for containerized setup)
- Spotify Developer Account (for API credentials)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd spotify-music-roast
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

3. **Backend Setup**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Variables**
   - Copy the `.env.example` file to `.env` in the backend directory and fill in your Spotify API credentials.

5. **Running the Application**
   - You can run the frontend and backend separately:
     - **Frontend**: 
       ```bash
       cd frontend
       npm start
       ```
     - **Backend**: 
       ```bash
       cd backend
       npm start
       ```

   - Alternatively, you can use Docker to run the application:
     ```bash
     docker-compose up
     ```

## Usage
- Navigate to the frontend application in your browser.
- Click the login button to authenticate with Spotify.
- Once logged in, the application will analyze your listening data and generate a roast based on your music taste.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License
This project is licensed under the MIT License. See the LICENSE file for details.