import React , {useState , useEffect} from 'react'
import { Col, Container } from 'react-bootstrap'
import { BsLightbulbFill} from 'react-icons/bs'


const Navbar = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <>

     <Container fluid xl={12} lg={12} md={12} sm={12}  className={`d-flex mb-5 mt-3 `}>
       
         
          
          <Col xl={11} lg={11} md={11} sm={11} className='mt-2 '>
    
              <Col xl={3} lg={3} md={1} sm={1} className='text-center'>
                <h2>
                    Prayer Time
                </h2>
              </Col>
           
            </Col>
          

          <Col xl={1} lg={1} md={1} sm={1} className='d-flex mt-3 ms-auto'>
             <BsLightbulbFill  className={`lightToggle me-3 `} id='light' onClick={toggleTheme}/>
             
          </Col>

         
        
      </Container>

        
    </>
  )
}

export default Navbar