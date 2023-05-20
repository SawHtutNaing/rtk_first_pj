import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath : 'blogApi' ,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes :['Blog'] , 
    endpoints :(builder)=>({
        getBlog : builder.query({
            query :()=> "blog_data" , 
            providesTags : ['Blog']
            
        }) , 
        getDetails : builder.query({
            query :(id)=> `blog_data/${id}` , 
            providesTags : ['Blog']

        }) , 

        addBlog : builder.mutation({
            query: (blog) => ({
                url: `blog_data`,
                method: 'POST',
                body: blog,
              }),
              invalidatesTags : ['Blog']
        }) , 
        deleteBlog : builder.mutation({
            query: (id) => ({
                url: `blog_data/${id}`,
                method: 'DELETE',
                body: id ,
              }),
              invalidatesTags : ['Blog']
        })


    })
})

export const {useGetBlogQuery , useGetDetailsQuery , useAddBlogMutation , useDeleteBlogMutation } =  blogApi 