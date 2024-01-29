import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function RestReviews({selectedRestaurant}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className='btn btn-warning ms-3'  onClick={() => setOpen(!open)}>click here to see reviews</button>
      <Collapse in={open}>
      <div>
        <hr />

        {
          selectedRestaurant[0]?.reviews.length>0?

          selectedRestaurant[0].reviews.map(item=>(
            <div  className='mt-3'>
            <h6>name:{item.name}</h6>
            <h6>date:{item.date}</h6>
            <h6>rating:{item.reviews}</h6>
            <h6>description: {item.comments} </h6>
          </div>
        
          )):
          <p>no reviews found</p>
        }
        </div>
        
      </Collapse>
    </>
  )
}

export default RestReviews