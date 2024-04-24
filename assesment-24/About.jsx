import React from 'react';
import Image from 'react-bootstrap/Image';
import Nav from '../Components/Nav'
import Footer from '../Components/Footer';

function About() {
  return (
    <>
    <Nav></Nav>
    
    <div className='d-flex' style={{flexDirection:'row',backgroundColor:'lightgrey',width:'90%',marginLeft:'4%'}}>
   
        <Image src="https://static.wixstatic.com/media/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg/v1/fill/w_552,h_884,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg" alt="" style={{ width: '60%', height:'80vh',filter: 'brightness(60%)'}}/>
          <div style={{ position: 'absolute',fontFamily:'initial',fontStretch:'extra-expanded', 
          fontStyle:'normal',fontWeight:'lighter', top: '50%', left: '75%',width:'50%',height:'185%', 
          transform: 'translate(-50%, -50%)',
           color: 'white', textAlign: 'center' }}>  
            </div>
            <br></br>
            <div class="text" style={{margin:'5%',marginTop:'10%', fontFamily:'-moz-initial'}}>
      <h2>ABOUT JADE</h2>
      <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
        Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        Feel free to drag and drop me anywhere you like on your page. </p><br></br>
        <p>This is a great space to write long text about your company and your services.<br></br>
           You can use this space to go into a little more detail about your company.</p>
        <br></br>
        <p><h4>Education:</h4></p>
        <p>I'm a paragraph. Click here to add your own text and edit me.<br/>
         It’s easy. Just click “Edit Text” or double click me to <br/>add 
         your own content and make changes to the font.</p>
         <br></br>
         <p><h4>Awards & Nominations:</h4></p>
         <p>I'm a paragraph. Click here to add your own text and edit me.<br/>
             Let your users get to know you.</p>
    </div> 
</div>
    <Footer></Footer>
    </>
  );
}

export default About;
