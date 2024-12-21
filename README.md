# Netflix GPT

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. The project leverages cutting-edge tools and APIs like TMDB and OpenAI for an enhanced user experience.

## Features

npm create vite@latest netflix-gpt (With - JavaScript+SWC)
Configured Tailwind CSS
Header -Routing of app -Login form -sign up form
form validation
useRef Hook
firebase setup
Deploying our app to production
create sign up user Account
Implemented Sign In user API
Created Redux Store with userSlice
Implemented Sign Out
Updated Profile
Bug Fix: SignUp user displayName and picture profile Update
Bug Fix: If the user is not logged in then redirect /browse to /login page and vice versa
unsbuscribed to he onAuthStateChanges callback
Added Important Url's in constants.js
Register TMDB API & Register an APP and get Access token
Get data from TMDB nowPlayiingMovies API
Custom Hook for nowPlying movies
Created movieSlice
Updated store with movie data
Planning for main container and secondary container
fetch data for trailer video
update store with trailer video data
Embedded the Youtube Video and make it autoplay and mute
TailWind css to make MainContainer looks Awesome
Build secondary Container
Build movie list
Build movie card
TMDB Image CDN url
Made Browse page amazing with tailwind
useCutom hooks (Populer movies, upcoming movies, trending movies)
GPT search Page
GPT SearchBar
Multilanguage feature in our app(\*)
Get OpenAI key
GPT Searcg API call
Fetched GPT Movie suggesioins from TMDB
Created GPT Slice Added Data there
Resuded MovieList componenet to make Movie suggesions container
Memoization
added env file
Made our site responsive

### Authentication - (Firebase)

- Login/Logout
- Sign In / Sign Up Form
- Redirect to Browse after Authentication

### Browse Page

- **Header**: Navigation and search capabilities
- **Main Movie**:
  - Background trailer autoplay with mute option
  - Title & description display
  - Movie suggestions with categorized lists

### Netflix-GPT

- **Search Bar**: Intuitive search functionality
- **Movie Suggestions**:
  - Fetched suggestions from TMDB using OpenAI GPT
  - Resued components for consistent UI

### Additional Enhancements

- Multilanguage support (\*)
- Responsive design with Tailwind CSS
- Memoization for performance
- Custom hooks for various data (e.g., now playing, trending, upcoming movies)

### Bug Fixes

- Fixed SignUp user displayName and profile picture update
- Redirected unauthorized users from `/browse` to `/login` and vice versa
- Unsubscribed from `onAuthStateChanges` callback

---

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

- Ensure you have **Node.js version 16 or higher** installed on your machine.

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/abedin-ansari/netflix-gpt.git
   cd netflix-gpt
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open the app**:
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗒 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_OPENAI_KEY=your_openai_api_key
VITE_TMDB_KEY=your_tmdb_api_key
```

Replace `your_openai_api_key`, `your_tmdb_api_key`, with your actual API keys.

---

## Deployment

To deploy the app:

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist` folder to your hosting platform (e.g., Vercel, Netlify).

---

## 🔧 Technologies Used

- **React**: Frontend library
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **Redux**: State management
- **Firebase**: Authentication
- **TMDB API**: Movie data
- **OpenAI GPT**: Intelligent search suggestions
