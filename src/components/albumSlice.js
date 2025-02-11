import api from './api.js'

const albumApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query({
      query: () => "/albums",
      providesTags:["Albums"],
      transformResponse: (response) => response.albums,
      transformErrorResponse: (error) => error.error.data,
    }),
    getAlbum: build.query({
      query: (id) => `./albums/${id}`,
      providesTags: ["Albums"],
      transformResponse: (response) => response.album,
      transformErrorResponse: (error) => error.error.data,
    }),
    deleteAlbums: build.mutation({
      query: (id) => ({
        url: `/albums/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Albums"],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error.error.data,
    }),
    patchAlbum: build.mutation({
      query: ({id, purchaseQuantity}) => ({
        url: `/albums/${id}`,
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