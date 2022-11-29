import axios from "axios";

export const httpCommon = axios.create({
  baseURL: "https://localhost:7211/",
  headers: {
    "Content-type": "application/json",
  },
});
