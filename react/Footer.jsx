import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterest,faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
<div className='IconContainer' style={{marginLeft:'45%'}}>
      <FontAwesomeIcon icon={faPinterest} className='Icon' style={{ marginRight: '20px' }} />
      <FontAwesomeIcon icon={faFacebook} className='Icon'style={{ marginRight: '20px' }} />
      <FontAwesomeIcon icon={faTwitter} className='Icon' style={{ marginRight: '20px' }}/>
      <FontAwesomeIcon icon={faInstagram} className='Icon' />

    </div>
    <div>
      <span className='Text' style={{ display: 'block', textAlign: 'center' }}>© 2035 by The Art of Food. Powered and secured by Wix</span>
    </div>
    
    </div>
  )
}
export default Footer