import React from 'react'
import { useGetDetailsQuery } from './blogApi'
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    console.log(id);
    
const {data} = useGetDetailsQuery(id);
console.log(data);

  return (
<div>
  <h1> {data?.title}</h1>
  <p> {data?.desc} </p>

</div>  
  )
}

export default Details