import React from 'react'
import { Link } from 'react-router-dom';
import { useDeleteBlogMutation } from './blogApi';

const Card = ({data}) => {
  const [deleteBlog] = useDeleteBlogMutation();
   const handleDelete = ()=>{
    deleteBlog(data.id)
   } 
   const handleEdit = ()=>{
    deleteBlog(data.id)
   }
  return (
    <div className='mt-5 shadow w-25'>
        <h1>{data.title}</h1>
        <p> {data.desc}  </p>
       <Link to={`details/${data.id}`}> Details  </Link>
       <button className='bg-danger p-2 ' onClick={handleDelete}>delete</button>
       <button className='bg-info p-2 ' onClick={handleEdit(id)}>edit</button>
    </div>
  )
}

export default Card