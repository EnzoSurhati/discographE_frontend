import api from "./api.js";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    userInfo: build.query({
      query: () => "/users/me",
      providesTags: ["User"],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error.error.data,
    }),
    login: build.mutation({
      query: ({email, password}) => ({
        url: "/users/login",
        method: "POST",
        body: {email, password},
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error.error,
    }),
    register: build.mutation({
      query: ({email, password}) => ({
        url: "/users/registertration",
        method: "POST",
        body: {email: email, password: password},
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error.error,
    }),
  }),
});

export const {useUserInfoQuery, useLoginMutation, useRegisterMutation} = userApi;
