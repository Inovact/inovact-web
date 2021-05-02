/** @jsx jsx */
import { jsx, Container, Flex ,Heading} from 'theme-ui';
import PriceCard from './feature-card';

import { IoIosCheckmarkCircle} from 'react-icons/io';
import Ist from './../../assets/img/service-1-1.svg';

const services = [
  {
    name: 'Inovact',
    tag:'social',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Upload Projects',
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Upload Ideas',
       
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Find Your Team',
       
      },
      {
        icon:<IoIosCheckmarkCircle />,
        text: 'Meet Tour Mentor',
      
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Fund Your Project',
      },
    ],
  },
  {
    name: 'Inovact ',
    tag:'learning',
    sicon:Ist,
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'MOOCs',
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Technical Training Programs',
        
      },
     
    ],
  },
  {
    name: 'Inovact ',
    tag:'placements',
    sicon:Ist,
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Inovact Placements',
      },
    ],
  },
];

export default function Package() {
  return (
    <section id="services" sx={styles.feature}>
      <Container>
      <Heading as="h3"  sx={styles.serviceCard}>Our Exciting Features</Heading>
       
        <Flex
          sx={{
            justifyContent: 'center',
            marginTop:'40px',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {services.map((serviceData) => (
            <PriceCard data={serviceData} key={serviceData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  serviceCard: {
    textAlign: 'center',
    h3:{
    fontWeight:'530',
    linespaing:'2',
    fontSize: ['14px', null, null, 3],
    lineHeight: 1,
    mt: ['30px', null, null],
    mb: ['20px', null, null],
  }
},
 feature: {
    background:'transparent',
    px:['80px'],
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
    '@media screen and (max-width:1200px)':{
      paddingTop:['30px'],
      paddingBottom:['30px']
    }
  },
};
