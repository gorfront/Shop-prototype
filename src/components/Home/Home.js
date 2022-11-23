import React from 'react'
import { useNavigate } from 'react-router'
import './Home.css'



function Home() {

  const navigate = useNavigate()

  return (
    <div className='homeDiv'>
      <div className='navigateDiv'>
        <h1>Make Your Look More Perfect</h1>
        <p>Fashoin- Tred Life Style-2022</p>
        <button
                onClick={() => navigate('/colections')}
                >
          Shop Collection 
        </button>
      </div>

      <div className='imageDiv'>
        <img alt='' src={'https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Model-Poses-20-Chair-Lean.jpg'} />
        <h3>COLECTION 21-22</h3>
      </div>

    </div>
  )
}

export default Home