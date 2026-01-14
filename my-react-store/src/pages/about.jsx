import { useState} from 'react'
import './about.css'
import { UNSAFE_getTurboStreamSingleFetchDataStrategy } from 'react-router-dom'


function About() {
    const [isEmailVisible, setIsEmailVisible] = useState(true)
    function showEmailInformation() {
        setIsEmailVisible(true)

    }

    function hideEmailInformation(){
        setIsEmailVisible(false)

    }
    return (
        <div>
            <h1>About Page</h1>
            <div>

                <h2>Our Mission</h2>
                <p className='mb-5'>Since 1993 we have served the western U.S. with fast deliveries of groceries and products that you need</p>
            </div>
            <div>
                <h1>More about us</h1>
                <img width={500} src="https://www.bing.com/th/id/OIP.qXCc7_imMDQLcpRyBI04vwHaE8?w=261&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
                <p>welcome to our app! We want to thank you for choosing reece"S and include you into our huge family! Feel free to browse or place a rush order. Or just look around, any question or concerns feel free to contact us through our email. Feel free to fill out our form on our contact page!</p>
            </div>

            {
                isEmailVisible == true 
                ? <p className='text-primary fs-5'>rrpieces86@gmail.com</p> 
                : <p className='text-info fs-5'> Click button below to see address.</p>
            }

            <button className='btn btn-dark me-2' onClick={hideEmailInformation}>Hide my email</button>
            <button className='btn btn-dark' onClick={showEmailInformation}>Show my email</button>
        </div>
    )
}

export default About