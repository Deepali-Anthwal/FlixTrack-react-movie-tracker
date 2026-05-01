# FlixTrack - React Movie Tracker

## Project Overview:
FlixTrack is a dynamic web application built with React that allows users to explore trending movies and TV shows using the TMDB API. The project features a responsive UI, global state management for a personalized watchlist, and a secure routing system.

## Implementation Highlights:
*   **Custom Hooks:** Developed a reusable useFetch hook to centralize API calls, handling loading states and error management across the app.
*   **Global State Management:** Utilized the Context API (watchlistcontext.js) to manage user watchlists and persistent data storage.
*   **Component Architecture:** Followed a modular structure with dedicated directories for components, hooks, pages, and context to ensure scalability.
*   **Performance Optimization:** Integrated React.memo within the MovieCard component to prevent unnecessary re-renders.
*   **Secure Navigation:** Implemented a ProtectedRoute component for a mock login system, demonstrating proficiency in client-side access control.

## Challenges Faced:
*   **Tailwind UI Consistency:** Implementing a cohesive design using Tailwind utility classes required careful management of responsive prefixes. I resolved styling conflicts by ensuring utility classes were applied consistently across the reusable component architecture.
*   **API Security & Linting:** Managed the TMDB API key securely by implementing Environment Variables (.env), ensuring the key remains hidden from the source code and resolving dependency warnings.
*   **Dynamic Component Reusability:** Designed a single Home.js page that dynamically switches between "Movie" and "TV Show" data based on props to keep the code DRY (Don't Repeat Yourself).
*   **State Persistence:** Integrated localStorage within the Context provider to ensure the user's watchlist stays intact after a page refresh.

## Key Learnings:
*   **Security Standards:** Gained an understanding of using .gitignore and .env files to protect sensitive credentials and API keys in professional web development workflows.
*   **Declarative UI Patterns:** Learned the use of conditional rendering and props to create highly reusable components, reducing code redundancy across different media types (Movies vs. TV Shows).
*   **State Synchronization:** Learned how to synchronize React state with browser storage (localStorage), ensuring a seamless user experience where data persists across sessions.
*   **Client-Side Guards:** Experienced building Gatekeeper components (Protected Routes) to manage user sessions and restrict access to specific features without needing a dedicated backend.
*   **Asynchronous Logic:** Deepened my understanding of the JavaScript event loop and React lifecycle when handling asynchronous data fetching and API error states.

## How to Run the Project:
### 1. Download the Project
*   Go to the GitHub repository link.
*   Click the green Code button and select Download ZIP.
*   Extract the ZIP file to your local machine.

### 2. Install Dependencies
*   Open the project folder in your terminal or VS Code.
*   Run the following command:
    npm install
### 3. Configure Environment Variables
*   Create a new file named ".env" in the root directory.
*   Add your TMDB API Key:
    `REACT_APP_TMDB_API_KEY=your_actual_api_key_here`

### 4. Run the Application
*   Start the development server:
    npm start
*   The app will run at "http://localhost:3000".
