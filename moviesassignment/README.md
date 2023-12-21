# Assignment 2 - Web API.

Name: Sean Mercier

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Sign Up
 + Login 
 + TV Shows
 + Now Airing (TV Shows)
 + Availability Regions
 + Filter TV Shows

## Setup requirements.

npm run dev on the movies-api folder.
npm start on the movies folder.
download any necessary dependencies.

## API Configuration

Create an ".env" file with MongoDB KEY, SECRET, TMDB KEY, FAST_REFRESH=false and PORT=8080.

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies | GET | Gets a list of movies 
- /api/genres | GET | Gets a list of movie genres.
- /api/users | POST | Logs in a new user if authentication is successful.
- /api/users?action=register | POST | Registers a new user to the app.

## Security and Authentication

All Routes but the Home Page, SignUp and Login Pages are protected and require the user to authenticate before viewing them. The user only needs to authenticate themselves once in order to view all the protected pages. If the browser is refreshed though, they will have to signup/login again to access.

## Integrating with React App

The main views that use my web API are the login, signup and home pages. I added 3 new views for TV Shows, Now Airing TV Shows and Availability Regions. Those views take data from the tmdb-api. Pagination was attempted again but unsuccessful.

## Independent learning (if relevant)

