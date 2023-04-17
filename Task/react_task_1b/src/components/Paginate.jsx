import React from 'react'
import Axios from 'axios'

const Paginate = () => {
        // Import Axios library
const axios = require('axios');

// Set initial page number and limit
let page = 1;
const limit = 10;

// Function to fetch video data from API
const fetchVideos = async () => {
  try {
    const response = await axios.get(`https://api.example.com/videos?page=${page}&limit=${limit}`);
    // Extract video data from response
    const videos = response.data.videos;
    // Render video data in UI or perform other operations
    console.log(videos);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

// Function to load next page of videos
const loadNextPage = () => {
  page++; // Increment page number
  fetchVideos(); // Fetch videos for the next page
};

// Call fetchVideos function initially to fetch the first page of videos
fetchVideos();

// Render UI with Next button at the bottom
// Add click event listener to the Next button to load the next page of videos
const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', loadNextPage);
document.body.appendChild(nextButton);

  return (
    <div>Paginate</div>
  )
}

export default Paginate