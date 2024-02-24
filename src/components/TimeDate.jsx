import React , {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';


function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }

const TimeDate = () => {
    const [currentDate, setCurrentDate] = useState(getDate());


    let time  = new Date().toLocaleTimeString()

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
      time =  new Date().toLocaleTimeString()
      setTime(time)
    }
    setInterval(UpdateTime)

   
  return (
    <>
    
    <Container className='d-flex justify-content-between'>
    <h2>{ctime}</h2>
    <h2>{currentDate}</h2>
    </Container>
   
    
    
    
    </>
  )
}

export default TimeDate