import React from 'react'
import photo from '../assets/frontImage.png'
import "../styling/Introduction.css"
import { useNavigate } from 'react-router-dom';

function Introduction() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Memberships')
  }
  return (
    <>
    <div className='bg-img' style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: "100vw",
        height: "100vh"
    }}>
        <div className="bg-overlay">
            <h2 className='intro-h2'>Train Like A<br/>
            </h2><h2 className='champion'>Champion</h2>   
            <button onClick={handleClick} className='join-today'>Join Today!</button>
        </div>       

    </div>

    </>
  );
}

export default Introduction;

//<img src={photo} alt='Front Cover Picture'  />