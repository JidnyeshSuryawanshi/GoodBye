import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODdjYTFkNjk1YTUyZmUxYzUwNmZiNWU4OWIyNWFkOSIsIm5iZiI6MTczNTQwNzQzMi4wODgsInN1YiI6IjY3NzAzNzQ3MWVmYzI0MzRjZjEyZTk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vMW9P4G2ikwOGP5pIle7uv43AA8hl2lD1kCJsRa4sr8",
  },
});

export default instance;
