/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import Feature from './feature';
import Image from '../image';
import checkFilledCircle from './../../assets/img/check-circle-filled.png';
import {Typography} from '@material-ui/core';

const data = [
  {
    id: 1,
    color: '#020652',
    value: '80K+',
    title: 'PROJECTS',
  },
  {
    id: 2,
    color: '#87B1E0',
    value: '150+',
    title: 'IDEAS PITCHED',
  },
  {
    id: 3,
    color: '#F94962',
    value: '90+',
    title: 'TEAM',
  },
  {
    id: 4,
    color: '#87B1E0',
    value: '3M+',
    title: 'STUDENTS',
  },
  {
    id: 5,
    color: '#F94962',
    value: '3M+',
    title: 'MENTORS MET',
  },
  {
    id: 6,
    color: '#020652',
    value: '3M+',
    title: 'PROJECTS FUNDED',
  },
  {
    id: 7,
    color: '#020652',
    value: '3M+',
    title: 'COURSES',
  },
  {
    id: 8,
    color: '#87B1E0',
    value: '3M+',
    title: 'STUDENTS PLACED',
  },
];

const Achivements = () => {
  return (
    <Box as="section" variant="section.features">
      <Container sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          
          <Box sx={styles.leftContent}>
            {data?.map((item) => (
              <Feature key={item?.id} feature={item} />
            ))}
          </Box>

          <Box sx={styles.rightContent}>
         
          <Typography as="h1" variant="heroPrimary"  sx={styles.webTitle}>Our Achivements</Typography> <br /><br /><br />
          <Typography as="p" variant="heroSecondary" styles={{marginTop:'100px'}} sx={styles.webText}>
            INOVACT was born, with the sole aim of bringing together the students under one roof, and helping them realise their potential.
            They have been a part of the recruitment drive at their respective colleges, and been a part of several projects. With their first-hand experience in these areas, they realised the humongous gap that is present between the students and their community as well as the industry. Thus, INOVACT was born, with the sole aim of bringing together the students under one roof, and helping them realise their potential.
            </Typography>

          <Box sx={styles.points}>
          <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Expert Mentors
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Certificates from top companies
            </Text>
            
          </Box>
        
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Achivements;

const styles = {
  container:{
  my: "50px",
  py:'50px',
  px:'60px',
  '@media screen and (max-width:1200px )':{
    mt: "0px",
  }
  },
  contentWrapper: {
    gap: [10, 10, 10, 10, 10, 20, 20, 20],
    marginTop:'60px',
    display: ['flex', 'flex', 'grid'],
    flexDirection: ['column-reverse', 'column-reverse', 'unset'],
    gridTemplateColumns: [
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.2fr 0.8fr',
    ],
    alignItems: 'center',
  },
  leftContent: {
    gap: [2, 2, 2, 2, 3, 4],
    display: ['grid', 'grid'],
    gridTemplateColumns: ['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)'],
    alignItems: 'flex-start',
    '> div': {
      ':first-of-type': {
      
      },
      ':nth-child(2)':{
        ml:['-100px'],
        '@media screen and (max-width:1200px )':{
         ml:['0px']
        }
      
      },
     
      ':nth-child(3)':{
        ml:['-110px'],
        '@media screen and (max-width:1200px )':{
          ml:['0px']
         }
      },
      ':nth-child(5)':{
        ml:['-100px'],
        '@media screen and (max-width:1200px )':{
          ml:['0px']
         }
        
      },
      ':nth-child(6)':{
        ml:['-110px'],
        '@media screen and (max-width:1200px )':{
          ml:['0px']
         }
        
      },
      ':nth-child(7)':{
        ml:['100px'],
        '@media screen and (max-width:1200px )':{
          ml:['0px']
         }
       
      },
      ':nth-child()': {
       ml: ['300px'],
       '@media screen and (max-width:1200px )':{
         ml:['0px']
        }
      },
    },
  },
  rightContent: {
    mt:['-90px'],
    ml: ['-90px'],
    pr:['30px'],
    '@media screen and (max-width :1200px)':{
      fontSize: '30px',
      mt:['0px'],
      ml: ['0px'],
              },
  },
points :{
mt:['30px']
},
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
      mt: '10px',
    },
  },
  webTitle: {
    fontSize: '50px',
    fontWeight:'400',
    color: '#000',
    padding:'2px',
    pt: '-50px',
    mr: '-30px',
    mb:'30px'
  ,   '@media screen and (max-width :1200px)':{
    fontSize: '40px',
              },
   
  },

  webText:{
    alignItems: 'left',
    justifyContent: 'left',
    my:['50px'],
    mt:['30px'],
    fontSize: '16px'
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
