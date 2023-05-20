import React, { useState } from 'react'
import { useAddBlogMutation } from './blogApi';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const nav = useNavigate();
    const [title , setTitle] = useState('');
    const [desc , setDesc] = useState('');
    const [addBlog] = useAddBlogMutation();
    const handleSave = ()=>{
            const newObj = {
                id : Math.random(), 
                title , 
                desc 
            }
            addBlog(newObj);
            nav('/');

            
    }   
  return (
    <div>
        <form action="psot" className='' onSubmit={(e)=>e.preventDefault()}> 
        <label htmlFor="title" className=''>Title </label>
            <input value={title} type="text" className=''  id='title' onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="desc" className=''>desc </label>
            <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className='' />
            <button onClick={handleSave}>Save</button>

        </form>

    </div>
  )
}

export default Create