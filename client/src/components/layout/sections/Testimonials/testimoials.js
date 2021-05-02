import React from "react";
/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Card ,CardDeck} from 'react-bootstrap';
import { Typography } from "@material-ui/core";

import Av1 from './../../assets/img/testimonials-1.jpg';
import Av2 from './../../assets/img/testimonials-2.jpg';
import Av3 from './../../assets/img/testimonials-3.jpg';

const data =[
  {
    id: 1,
    review:'4',
    author: 'Harry Potter',
    image:Av1,
    description:
      'I enjoyed this course so much! Explanations were  clear and now i feel like i can navigate c++ code much easier! It has made me eager to keep exploring this awesome language and data structures!'
  },
  {
    id: 2,
    review:'4',
    author: 'Percy Jackson',
    image:Av2,
    description:
      'I felt this mini-course was well-organized and to the point. Prof. Fagen-Ulmschneider covered all the necessary details with great emphasis. I appreciate Prof. Fs enthusiasm for the topic.',
  },
  {
    id: 3,
    review:'4',
    author: 'Katniss Everdeen',
    image:Av3,
    description:
      'Great course, simple and difficult all at the same time. Great introduction to these topics. Every thing that is included is there for a reason as every thing is straight to the point with no filler.',
  },
];
const Testimonial = () => {
  return (
    <>
  
    <Typography as="h3" style={{ marginTop:'60px', display:'flex',justifyContent:'center',fontWeight:'400',fontSize:'50px'}} sx={styles.webTitle} >Testimonials
    </Typography>

    <CardDeck sx={styles.carddeck}>
    {data.map((item) => (  
            <Card sx={styles.card} key={item.id} style={{maxWidth: '300px'}}>
         
          <Card.Body>
           
            <Card.Text as="p" sx={styles.description}> <i class="fa fa-quote-left"></i> &nbsp;{item.description} </Card.Text>
            </Card.Body>
          
          <footer className="blockquote-footer">
         
              <small className="text-muted" sx={styles.heading}>
              {item.author} 
           
              </small>
      </footer>
           </Card>
    ))}
    
    </CardDeck>


</>
  );
}
//<Image src={item.avatar} alt="" />
//  position:'relative',
//right:'90px',
const styles = {
  heading: {
    fontSize: '18px',
    fontWeight: 500,
    mb: '10px',
    color: 'text',
    lineHeight: 1.3,
    float:'right',
    mr:'10px'
  },
  description: {
    fontSize: [1, null, null, 2],
    flex:'block',
    padding:'10px',
    alignContent:'left',
    color: 'text',
    lineHeight: [1.85, null, 2],
    textAlign: 'left'
  },
webTitle:{
  marginTop:'60px',
  display:'flex',
  justifyContent:'center',
  fontWeight:'400',fontSize:'50px'
},

carddeck:{
  display: 'flex', 
  paddingLeft:'80px',
  flexDirection: 'row',
  marginTop:'60px',
  '@media screen and (max-width:992px )':{
    flexDirection: 'column',
   
    justifyContent:'center',
    paddingLeft:'60px'
   },

   '@media screen and (max-width:400px )':{
    flexDirection: 'column',
   paddingLeft:'0px',
    justifyContent:'center',
   
   },

},
card:{
  padding:'30px',
  boxShadow: '4px 4px 4px 4px 4px rgba(38, 78, 118, 0.35)',
  marginLeft:'30px',
  flex:1,
  minWidth:'350px',
  '@media screen and (max-width:800px )':{
    minWidth:'250px',
   }
   
},
cardText:{
  fontSize:'16px',fontFamily:'sans-serif',display:'flex',justifyContent:'left'
},
footer:{
  marginTop:'-10px',marginRight:'10px',float:'right',fontSize:'14px'
},
  img: {
    width: '65px',
    height: '65px',
 
    borderRadius: '50%',
    objectFit: 'cover',
},
};
export default Testimonial;