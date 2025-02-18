import api from "./api.js";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    userInfo: build.query({
      query: () => "/aboutUser/me",
      providesTags: ["User"],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error.error.data,
    }),
    login: build.mutation({
      query: ({email, password}) => ({
        url: "/login",
        method: "POST",
        body: {email, password},
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error.error,
    }),
    register: build.mutation({
      query: ({email, password, username, lastname, firstname}) => ({
        url: "/register",
        method: "POST",
        body: {email: email, password: password, username, lastname, firstname},
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error.error,
    }),
  }),
});

export const {useUserInfoQuery, useLoginMutation, useRegisterMutation} = userApi;
