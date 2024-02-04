import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {

    const navigate = useNavigate();
    function handleClick(){
        navigate('/services/life')
    }
  return (
    <div>
        I am at the Services
    <button onClick={handleClick}>Got to go life</button>
    </div>
  )
}

export default Services