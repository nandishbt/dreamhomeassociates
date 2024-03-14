import React from 'react'
import './Testimos.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import Service_card from '../Services/Service_card'
import founder1 from "../../assets/Coufounder1.png"
import founder2 from "../../assets/Coufounder2.png"
import Tesi_card from '../../Components/Testimos/Tesi_card'

const Testimos = () => {
  return (
    <div className='container test'>
      <h1>TESTIMONIALS</h1>
      <div className='display-flex'>
      <Tesi_card name="Anirban Banerjee"  position = "Lead - Cross Functional Service Manager Unisys India Pvt Ltd" 
      desc=' recently had the pleasure of working with Dream Home Associates during my home loan process, and I must say that their services were exceptional. Here are some key points that stood out:
      End to end service, 
      Efficient and Knowledgeable Staff, 
      Transparency,
      Prompt Communication,
      Smooth Documentation Process,
      Personalized Approach,
      Expertise in Real Estate In summary, I highly recommend Dream Home Associates to anyone seeking assistance with home loans or real estate transactions. Their professionalism, expertise, and commitment to client satisfaction make them a top choice in the industry.

      Thank you, Dream Home Associates, for making my home loan journey smooth and stress-free!'/>
     

      <Tesi_card name='Dr. Chandra Madhusudan' position='Architect & Vastu Expert' desc='Dream Home Associates delivered a fantastic & fabulous door step customer service. Right from helping providing a competitive rate of interest , legal procedure including legal documents verification till disbursement of the loan they were very prompt. Also they guide & remind customers to to pay EMI on appropriate time. Mr Ranganath & Ms Anindita were very polite & convincing & proactive with ever lasting smile .
I highly recommend them to the forum'/>
      
      </div>
      
       

       
        
    </div>
  
   
  )
}

export default Testimos