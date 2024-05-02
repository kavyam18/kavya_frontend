import React from 'react';


function Home() {
  return (
    <>
      
      <div className='Image' style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUtCY1q6BkfxKf3zpg1lWsKuW1ghxAkvI6A&s")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding:'80px',
        marginLeft:'2%',
        marginRight:'30%',
        width: '95%',
        height: '800px',
        overflowY: 'scroll',
      }}>
        <p style={{ 
        position: 'absolute', 
        top: '30%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        fontSize: '64px',
        fontFamily:'-moz-initial'
      }}>
        THE ART OF FOOD
      </p><br></br>
      <p style={{ 
        position: 'absolute', 
        top: '40%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        fontSize: '24px',
        fontFamily:'-moz-initial'
      }}>
        P H O T O G R A P H Y
      </p><br></br>
      <button style={{ 
        position: 'absolute', 
        bottom: '390px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        padding: '10px 20px',
        backgroundColor: 'transparent', 
        border: 'outlined',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
      }}>
       View More
      </button>
      </div>
      
    </>
  );
}

export default Home;
