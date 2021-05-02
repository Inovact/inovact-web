import React from 'react';
import { Box, Container, Grid, Heading,Card} from 'theme-ui';
import {Row ,Col} from 'react-bootstrap';
import Image from '../image';

import icon1 from './../../assets/img/service-1-1.svg';
import icon2 from './../../assets/img/service-1-2.svg';
import icon3 from './../../assets/img/service-1-3.svg';
import icon4 from './../../assets//img/service-1-4.svg';

const LEARNING =[
    {
        icon: icon4,
        title: 'MOOCs',
       
      },
      {
        icon: icon4,
        title: 'Technical Training Programs',
       
      },
];
const PLACEMENT =[
    {
        icon: icon4,
        title: 'PLacement Training',
       
      },
      {
        icon: icon4,
        title: 'Meet Your Mentor',
       
      },
]
const SOCIAL = [
  {
    icon: icon1,
    title: 'Upload Ideas',
  },
  {
    icon: icon2,
    title: 'Upload Projects',
  },
  {
    icon: icon3,
    title: 'Find Your Team',
  },

  {
    icon: icon4,
    title: 'Fund Your Project',
   
  },

  
 
];

const Features = () => {
  return (
    <Box sx={styles.services} id="services">
          <Heading as="h3" css={{marginBottom:'30px',fontWeight:'530',linespaing:'2'}} sx={styles.serviceCard}>Our Exciting Features</Heading>
      <Container css={{padding:'10px'}}>
<Grid sx={styles.social} columns={[3, 'fr fr']}>
<Container>

<Heading as="h4" sx={styles.serviceCard} css ={{
        marginTop:'50px', marginBottom:'30px'
      }}>Inovact <span style={{ color: '#F94962',fontStyle:'italic'}} sx={styles.social}>learning</span></Heading>
       <Grid sx={styles.grid2}>
      {LEARNING.map((service, index) => (
        <Box
        className="service-card"
        sx={styles.serviceCard}
        key={`service-post-${index}`}
      >
         <Card >
         <Box className="service-icon" sx={styles.icon}>
           <Image src={service.icon} alt="" width="30px" height="30px" />
         </Box>
         <Heading as="p">{service.title}</Heading>
         </Card>
         <Box sx={styles.verticall}></Box>
         </Box>
      ))}
   </Grid>  

<Heading as="h4" css ={{
        marginTop:'30px'
      }} sx={styles.serviceCardL}>Inovact <span style={{color: '#F94962',fontStyle:'italic'}}>social</span></Heading>
 

   <Grid sx={styles.grid1}>
{SOCIAL.map((service, index) => (
  <Box
    className="service-card"
    sx={styles.serviceCard}
    key={`service-post-${index}`}
  >
    <Card >
    <Box className="service-icon" sx={styles.icon}>
      <Image src={service.icon} alt="" width="30px" height="30px" />
    </Box>
    <Heading as="p">{service.title}</Heading>
    </Card>
   
  </Box>
  
))}
 <Box sx={styles.verticalS}></Box>
</Grid>

   <Heading as="h4" sx={styles.serviceCardP}>Inovact <span sx={styles.placement} style={{color: '#F94962',fontStyle:'italic'}}>placements</span></Heading>
          

        <Grid sx={styles.grid3}>
          {PLACEMENT.map((service, index) => (
              <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Card >
              <Box className="service-icon" sx={styles.icon} >
                <Image src={service.icon} alt="" width="30px" height="30px"/>
              </Box>
              <Heading as="p">{service.title}</Heading>
              </Card>
                </Box>
             
          ))}
        </Grid>

  </Container>
  
</Grid>
      
   
      
      </Container>
    </Box>
  );
};

export default Features;

const styles = {
  verticall:{
    borderLeft: '4px solid #DCDCDC',
    height: '250px',
    position:'absolute',
    left: '430px',
    top:'-40px',
    borderRadius:'25%',
    '@media screen and (max-width:1200px )':{
      display:'none'
    }
  },
  verticalS:{
    borderLeft: '4px solid #DCDCDC',
    height: '250px',
    position:'absolute',
     left:'450px',
    borderRadius:'25%',
    '@media screen and (max-width:1200px )':{
      display:'none'
    }
  },
  social:{
    display: 'grid',
    gridGap: ['1px', null, null, null, null, '2px'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
  },
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    marginBottom:'30px',
    height:['auto'],
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        width:'80px',
        height:'80px',
        backgroundImage:
          'linear-gradient(320.89deg, #2848BD 10.83%, rgba(0, 0, 0, 0.5) 88.7%)',
      },
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        width:'80px',
        height:'80px',
        backgroundImage:
          'linear-gradient(319.4deg, #2848BD 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
      },
    },
    '.service-card:nth-of-type(1)': {
      '.service-icon': {
        width:'80px',
        height:'80px',
        backgroundImage:
          'linear-gradient(319.4deg, #2848BD 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
      },
    }, '.service-card:nth-of-type(5)': {
      '.service-icon': {
        width:'80px',
        height:'80px',
        backgroundImage:
          'linear-gradient(319.4deg, #2848BD 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
      },
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        width:'80px',
        height:'80px',
        backgroundImage:
        'linear-gradient(319.4deg, #95BDE5 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
      
      },
    },
  },
  title: {
    textAlign: 'center',
    fontSize: '20px'
  },

  grid1: {
    display: 'grid',
    gridGap: ['10px', null, null, null, null, '20px'],
    position:'relative',
    top:'-190px',
    left:'420px',
    '@media screen and (max-width:1200px )':{
    top:'0px',
    left:'0px'
    },
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
    ],
  },

  grid2: {
   display: 'grid',
   marginTop:'30px',
   position:'relative',
   top:'45px',
   left:'0px',
    '@media screen and (max-width:1200px )':{
    marginTop:'0px',
    top:'0px',
    left:'0px'
    },
    gridGap: ['2px', null, null, null, null, '10px'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
    ],
  },
  
  grid3: {
    display: 'grid',
    position:'relative',
    top:'-400px',
    px:['0px'],
    ml:['900px'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
    ],
    '@media screen and (max-width:1200px )':{
      ml:['0px'],
      top:'0px',
          },
  },


  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['60px', null, null, '90px'],
    height: ['60px', null, null, '90px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    background : '#020652'
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: '30px',
      fontSize: ['14px', null, null, 3],
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
      
    },
    h1:{
    fontSize: ['6px'],
    },
    h4:{
      mt: ['70px'],
      mb: ['20px'],
    },
    p: {
      margin: 0,
      fontSize: ['14px', null, null, '12px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
  serviceCardL: {
    textAlign: 'center',
    position:'relative',
    top:'-198px',
    marginBottom:'40px',
    marginTop:'-40px',
    left:'420px',
    '@media screen and (max-width:1200px )':{
      top:'0px',
      marginTop:'30px',
      marginBottom:'30px',
      left:'0px'
      },
    h3: {
      margin: 0,
      fontSize: ['14px', null, null, 3],
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
     
    },
    h1:{
    fontSize: ['6px'],
    },
    h4:{
      mt: ['50px'],
      mb: ['20px'],
    },
    p: {
      margin: 0,
      fontSize: ['14px', null, null, '12px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
  serviceCardP: {
    textAlign: 'center',
    position:'relative',
    top:'-478px',
    left:'870px',
    '@media screen and (max-width:1200px )':{
    top:'0px',
    left:'0px',
    marginTop:'30px',
    marginBottom:'30px'
    },
    h3: {
      margin: 0,
      fontSize: ['14px', null, null, 3],
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
     
    },
    h1:{
    fontSize: ['6px'],
    },
    h4:{
      mt: ['50px'],
      mb: ['20px'],
    },
    p: {
      margin: 0,
      fontSize: ['14px', null, null, '12px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};
