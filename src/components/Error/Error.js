import React from 'react'
import { useNavigate } from 'react-router'
import './Error.css'

function Error() {
  
  const navigate = useNavigate()

  return (
    <>
      <div className="container">
      <button style={{position: 'relative', left: '-700px'}} className='homeButton' onClick={() => navigate('/')}>Home</button>
        <div className="row">
          <div className="contain">
            <div className="countUp">
              <div className="number" data-count="404">404</div>
              <div className="text">Page not found</div>
              <div className="text">This may not mean anything.</div>
              <div className="text">I'm probably working on something that has blown up.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error