import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer-48201">

            <div className="container">
                <div className="row">
                    <div className="col-md-6 pr-md-5">
                        <Link to="/" className="footer-site-logo d-block mb-4" style={{textDecoration:"none"}}>DNEWS</Link>
                        <p style={{marginRight:"100px"}}>"DNEWS is a web application designed to provide its users the latest news from top countries around the globe. Users can access up-to-the-minute updates on global events, ensuring they stay informed and connected with current affairs worldwide."</p>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled nav-links">
                            <li className='hover-arrow'><Link to="/">Home</Link></li>
                            <li className='hover-arrow '><Link to="/about">About</Link></li>
                            <li className='hover-arrow '><Link target="_blank" to="https://ubaid-ur-rehman.carrd.co/">Portfolio</Link></li>                        
                            <li className='hover-arrow '><Link target='_blank' to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md text-md-center">
                        <ul className="social list-unstyled">
                            <li><Link target='_blank' to="https://www.instagram.com/ubaid_ur_rehman0001/"><span className="icon-instagram"></span></Link></li>
                            <li><Link target='_blank' to="https://www.facebook.com/ubaid2425"><span className="icon-facebook"></span></Link></li>
                            <li><Link target='_blank' to="https://www.linkedin.com/in/ubaid-ur-rehman-5830b324a/"><span className="icon-linkedin"></span></Link></li>
                            <li><Link target='_blank' to="https://github.com/UBAID0315"><span className="icon-github"></span></Link></li>
                        </ul>
                        <p className=""><Link to="/contact" target='_blank' className="btn btn-tertiary">Contact Us</Link></p>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-12 text-center">
                        <div className="copyright mt-5 pt-5">
                            <p><small>&copy; 2024-2025 All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
