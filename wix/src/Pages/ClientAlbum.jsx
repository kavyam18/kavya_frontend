import React from 'react';
//  import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Footer from '../Components/Footer';
import Navpage from '../Components/Nav';

function ClientAlbum() {

  <Navpage/>
  const imageUrl='https://th.bing.com/th/id/OIP.JYcOyY7i_9ZUT4cqwsGK_wHaLH?w=120&h=187&c=7&r=0&o=5&pid=1.7';
  return (
    <>
    
  <h1 className="d-flex justify-content-center align-items-center" style={{margin:'4%', marginTop:'3%', fontSize: '50px', fontFamily:'Garamond', marginLeft:'2%'}}>CLIENT ALBUMS</h1>
   <br />
      <div style={{ display: 'flex', justifyContent: 'center' , top:'280%', marginTop:'-2%',width:'93%',marginLeft:'2%' }}>
        <div className='Image' style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:'50px',
          margin:'20px', 
          width: '30%',
          height: '400px',
        }}>
          <p style={{ 
            position: 'absolute', 
            top: '40%', 
            left: '17%', 
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            fontSize: '30px',
            fontFamily:'-moz-initial'
          }}>
            GREEN EDITORIAL
          </p><br></br>
          <Button variant="primary" className="image-button" 
            style={{ position: 'absolute', top: '50%', left: '16%', 
            transform: 'translate(-50%, -50%)',padding: '10px 20px',backgroundColor: 'transparent', border: 'outlined',
            borderRadius: '5px',color: 'white',cursor: 'pointer', borderColor:'black',
            fontSize: '18px', }}>View</Button>
        </div>
        <div className='Image' style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:'50px',
          margin:'20px',
          width: '30%',
          height: '400px',
        }}>
          <p style={{ 
            position: 'absolute', 
            top: '40%', 
            left: '49%', 
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            fontSize: '30px',
            fontFamily:'-moz-initial'
          }}>
          BREAD BAKING RECEPIES
          </p><br></br>
          <Button variant="primary" className="image-button" 
            style={{ position: 'absolute', top: '50%', left: '50%', 
            transform: 'translate(-50%, -50%)',padding: '10px 20px',backgroundColor: 'transparent', border: 'outlined',
            borderRadius: '5px',color: 'white',cursor: 'pointer', borderColor:'black',
            fontSize: '18px', }}>View</Button>
        </div>
        <div className='Image' style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:'50px',
          margin:'20px', 
          width: '30%',
          height: '400px',
        }}>
          <p style={{ 
            position: 'absolute', 
            top: '42%', 
            left: '80%', 
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            fontSize: '30px',
            fontFamily:'-moz-initial'
          }}>
            FRENCH <br/> COOKBOC <br/>
          </p><br></br>
          <Button variant="primary" className="image-button" 
            style={{ position: 'absolute', top: '50%', left: '80%', 
            transform: 'translate(-50%, -50%)',padding: '10px 20px',backgroundColor: 'transparent', border: 'outlined',
            borderRadius: '5px',color: 'white',cursor: 'pointer', borderColor:'black',
            fontSize: '18px', }}>View</Button>
        </div>
      </div>
     <Footer></Footer>
    
    </>
    
  );
}

export default ClientAlbum;
