import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import ActorContextProvider from "./contexts/actorContext";
import AuthContextProvider from "./contexts/authContext";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upComingMoviesPage";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import ActorsPage from "./pages/actorsPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import FavoriteActorsPage from "./pages/favoriteActorsPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";

import TVPage from "./pages/tvPage";
import AvailableRegionsPage from "./pages/availableRegionsPage";
import TVShowsPage from "./pages/tvShowsPage";
import NowAiringPage from "./pages/nowAiringPage";

import SignUpPage from "./pages/signUpPage";
import LoginPage from "./pages/loginPage";

import ProtectedRoute from "./protectedRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <AuthContextProvider>
        <MoviesContextProvider>
          <ActorContextProvider>
            <Routes>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/trending" element={<ProtectedRoute><TrendingMoviesPage /></ProtectedRoute>} />
              <Route path="/movies/nowPlaying" element={<NowPlayingMoviesPage />} />
              <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/actors/" element={<ActorsPage />} />
              <Route path="/actors/:id" element={<ActorDetailsPage />} />
              <Route path="/actors/favorites" element={<FavoriteActorsPage />} />
              <Route path="/page=:pageNumber" element={<HomePage />} />
              <Route path="/regions" element={<AvailableRegionsPage />} />
              <Route path="/tv" element={<TVShowsPage />} />
              <Route path="/tv/:id" element={<TVPage />} />
              <Route path="/tv/now_airing" element={<NowAiringPage />} />
            </Routes>
          </ActorContextProvider>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);