import React from 'react';
import '../Styles/Contact.css'
import phone from "../Images/Contact/phone.png"
import location from "../Images/Contact/location.png"
import insta from "../Images/Contact/instagram.png"
function Contact(){

    return(
        <div className="contact-Container">
            <div className='left-container'>

            </div>
            <div className='right-container'>
                <div className='contact-details'>
                    <h2>Get in Touch</h2>
                    <p>Ready to transform your bridal vision into reality? Contact Sindhu today to book your consultation and begin your journey towards breathtaking mehndi artistry.</p>
                    <div className='details'><img src={phone} className='icon' alt="📞" /> 
                    <a href='9566885839'>
                    <h3 className='h3'>9566885839</h3>
                    </a>
                    </div>
                    <div className='details'>
                        <img src={insta} className='icon'  alt="💕" /> 
                        <a href='https://www.instagram.com/gs_bridal_mehndi_vellore?igsh=MnA0ODI2bXh0Z29v'> 
                        <h3 className='h3'>gs_bridel_mehandi_vellore</h3>
                        </a>
                        </div>
                    <div className='details'><img src={location} className='icon' alt="📍" />
                    <a href='https://www.google.com/maps/place/GS+Bridal+Mehndi/@12.9105927,79.1445458,15z/data=!4m6!3m5!1s0x3bad3907210466df:0x29fcc972eff22dc4!8m2!3d12.9105927!4d79.1445458!16s%2Fg%2F11vwwkq_fd?entry=ttu'>  
                    <h3 className='h3'>No.17/4, Bharathidasan Salai, Salavanpet, Vellore, Tamil Nadu - 632001.</h3>
                    </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Contact;