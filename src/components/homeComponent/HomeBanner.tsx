import React from 'react'
import "./HomeBanner.scss"
const HomeBanner:React.FC = () => {
  return (
    <>
          <div className="banner_container">
      <div className="banner_content_bg">
        <div className="banner_content_c">
        <div className="banner_container1">
            <div className="banner_title">Celebrate Love at<br/> GourmentGrove</div>
            <div className="banner_body">Treat your special someone<br/> to our exclusive Valentine's<br/> menu</div>
        </div>
        <div className="banner_container2">
            <div className='cart_button'>Go to Cart</div>
        </div>
        </div>
      </div>
      </div>
    
    </>
  )
}

export default HomeBanner