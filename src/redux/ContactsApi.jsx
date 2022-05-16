import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ContactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6280d5657532b4920f748619.mockapi.io/api/v1',
  }),
  endpoints: builder => ({
    getContact: builder.query({ query: () => '/contacts' }),
  }),
});

export const { useGetContactQuery, useGetContactMutation } = ContactsApi;
