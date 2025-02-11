import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:3000/api"

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Content-Type", "application/json");
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Albums", "User"],
  endpoints: () => ({}),
});

export default api;