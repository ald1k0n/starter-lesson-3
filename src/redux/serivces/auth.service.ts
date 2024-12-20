import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.query<void, void>({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useLoginQuery } = authApi;
