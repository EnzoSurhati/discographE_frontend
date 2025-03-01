import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://hi-fi-backend.onrender.com"

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
  endpoints: (builder) => ({
    deleteUser: builder.mutation({
      query: (email) => ({
        url: `/deleteUser/${email}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useDeleteUserMutation } = api;
export default api;