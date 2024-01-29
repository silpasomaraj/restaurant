import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch=useDispatch()
  return (
    <>
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to ={'/'} style={{textDecoration:"none",color:"white"}}>FOOD CIRCLE</Link> </Navbar.Brand>
          <input type="text" className='form-control w-25'
         onChange={(e)=>dispatch(search(e.target.value))} />
          <img 
          height={"50px"} width={"50px"}
          src="https://cdn3.vectorstock.com/i/1000x1000/82/62/food-restaurant-icon-logo-vector-4998262.jpg" alt="" />
        </Container>
      </Navbar>
    </div>
    </>
  )
}

export default Header