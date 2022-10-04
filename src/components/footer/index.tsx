import React from 'react'
import "./footer.scss"
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer ' >
        <div className="footer-wraper container">
<div>
    <p>Home</p>
    <p>About</p>
    <p>Shop</p>
    <p>Offers</p>
</div>
<div>
    <p>Offers</p>
    <p>About</p>
    <p>Shop</p>
    <p>Home</p>
</div>
<div>
    <p>Shop</p>
    <p>About</p>
    <p>Home</p>
    <p>Offers</p>
</div>
<div>
    <p>Facebook</p>
    <p>Instagram</p>
    <p>Youtube</p>
 </div>
        </div>
    </div>
  )
}

export default Footer