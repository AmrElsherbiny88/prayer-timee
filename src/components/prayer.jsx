import React from 'react'
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap'
const prayer = ({name , time , src}) => {

 
  return (
    <>
    <Col xl={3} md={3} lg={3} sm={3}>

    <Card className='prayer mt-3 mb-2'  >
      <Card.Img variant="top" src={src} alt='image'/>
      <Card.Body >
        <h1>{name}</h1>
        <h2>
         {time}
        </h2>
      </Card.Body>
    </Card>
    
    
    </Col>
   
    </>
  )
}

export default prayer