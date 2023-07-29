import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const stuApi = createApi({
  reducerPath: 'stuApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api/'
  }),
  endpoints(build) {
    return {
      getStudents: build.mutation({
        query() {
          return {
            url: 'student',
          }
        },
        transformErrorResponse(baseQueryReturnValue) {
          return baseQueryReturnValue.data
        },
        providesTags: [{ type: 'student', id: 'LIST' }]
      }),
      getStudentById: build.mutation({
        query(id) {
          return {
            url: `students/${id}`,
          }
        },
        transformErrorResponse(baseQueryReturnValue) {
          return baseQueryReturnValue.data
        },
        keepUnusedDataFor: 60,
        providesTags: [{ type: 'student', id: 'LIST' }]
      })
    }
  }
})

export const { useRegisterMutation, useLoginMutation } = authApi