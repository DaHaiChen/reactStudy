import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api'
  }),
  endpoints(build) {
    return {
      register: build.mutation({
        query(user) {
          return {
            url: 'auth/local/register',
            method: 'post',
            body: user // userName password email
          }
        }
      }),
      login: build.mutation({
        query(user) {
          return {
            url: 'auth/local',
            method: 'post',
            body: user // indentifier
          }
        }
      })
    }
  }
})

export const { useRegisterMutation, useLoginMutation } = authApi