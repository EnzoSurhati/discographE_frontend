import api from './api.js'

const albumApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query({
      query: () => "/album",
      providesTags:["Albums"],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error,
    }),
    getAlbum: build.query({
      query: (id) => `/album/${id}`,
      providesTags: ["Albums"],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error,
    }),
    deleteAlbum: build.mutation({
      query: (id) => ({
        url: `/album/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Albums"],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error.error.data,
    }),
    patchAlbum: build.mutation({
      query: ({id, purchaseQuantity}) => ({
        url: `/album/${id}`,
        method: 'PATCH',
        body: {purchaseQuantity},
      }),
      invalidatesTags: ["Albums", "User"],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error.error.data,
    })
  })
})

export const {
  useGetAlbumsQuery,
  useGetAlbumQuery,
  useDeleteAlbumMutation,
  usePatchAlbumMutation,
} = albumApi