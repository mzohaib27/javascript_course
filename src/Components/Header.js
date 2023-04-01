import React from 'react'

const Header = () => {
  return (
    <div className='main'>

     <div className='logo'>
      <img src='https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg' height={50} width={50} alt='' />
       
     </div>
      <div className='menu'>
     <ul> 
     <li>Home</li>
     <li>News</li>
     <li>Projects</li>
     <li>About</li>     
     </ul>
 </div> 
   
   <div id='log'> 
    <h5> Login </h5>
    </div>




    </div>
  )
}

export default Header;