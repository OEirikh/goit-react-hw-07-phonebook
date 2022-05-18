import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ContactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6280d5657532b4920f748619.mockapi.io/api/v1',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContact: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),

    updateContacts: builder.mutation({
      query: ({ id, ...contact }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: contact,
      }),
    }),

    deleteContacts: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactQuery,
  useUpdateContactsMutation,
  useDeleteContactsMutation,
} = ContactsApi;
