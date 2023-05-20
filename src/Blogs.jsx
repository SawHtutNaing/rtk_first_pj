import React from 'react'
import Card from './Card';
import { useGetBlogQuery } from './blogApi';
import { Link } from 'react-router-dom';


const Blogs = () => {
 const {data:blogs , error , isFetching } = useGetBlogQuery();

  return (
    <div className=''>
       
  <Link to='create' className='btn btn-primary  mt-5'>Create New </Link>

    <div className='mt-5 d-flex flex-wrap justify-content-between'>
  {blogs?.map((el)=><Card key={el.id} data={el}></Card>)}

    </div>
    </div>
  )
}

export default Blogs