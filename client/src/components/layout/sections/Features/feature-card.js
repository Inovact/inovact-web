import { Box, Card,Flex, Heading } from 'theme-ui';
import React from 'react';
import List from './list';
//import icon1 from './../../assets/img/check-circle-filled.png';
export default function PriceCard({
  data: {
    name,
    tag,
    points,
  },
}) {
  return (
    <Card sx={styles.featureBox}>
      <Box>
        <Flex sx={styles.featureHeader}>
          <Box>
            <Heading sx={styles.heading}>
              {name} <Box sx={styles.headingT}> &nbsp;{tag} </Box>
            </Heading>
          </Box>
        </Flex>

        <List items={points} childStyle={styles.listItem} />
        <Box>
        </Box>
      </Box>
    </Card>
  );
}

const styles = {
  featureBox: {
    color:'black',
    flex: [
      '0 1 100%',
      null,
      null,
      '0 1 50%',
      '0 1 45%',
      '0 1 40%',
      '0 1 38.5%',
    ],
    maxHeight:'430px',
    background: '#fff',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.23)',
    borderRadius: 10,
    ml: [0, null, null, 5],
    position: 'relative',
    mt: ['40px', null, null, 0],
    p: [
      '50px 15px 50px',
      null,
      '62px 25px 50px 25px',
      null,
      '62px 70px 50px 40px',
    ],
    '@media screen and (min-width: 420px) and (max-width: 767px)': {
      maxWidth: '380px',
    },
    '&:first-of-type': {
      ml: 0,
      mt: 0,
    },
    '&.active': {
      backgroundColor: 'white',
      '.package__name': {
        color: 'heading_secondary',
      },
      '.package__price > span': {
        color: 'text',
      },
      '.open': {
        color: 'text',
      },
      '.closed': {
        color: 'text',
        opacity: 0.6,
      },
    },
  },

  heading: {
    fontWeight: 'bold',
    display:'flex',
    justifyContent:'center',
    fontSize: [4, null, null, null, 5],
    lineHeight: '23px',
    color: 'black',
  
  },
  headingT: {
    fontWeight: 'bold',
    display:'flex',
    justifyContent:'center',
    fontSize: [4, null, null, null, 5],
    lineHeight: '23px',
    color: '#F94962',
  
  },
  featureHeader: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'flex-start',
    mb: ['35px', null, null, null, null, '50px'],
  },
  listItem: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginLeft:'30px',
    fontSize: [2, null, null, null, 2],
    lineHeight: [1.9, null, 1.65],
    marginBottom: [3, '22px'],
    alignItems: 'flex-start',
    color: 'black',
    pr: [2, null, null, null, 0, 6],
    '@media screen and (max-width:1200px)':{
      marginLeft:'0px',
     },
  },

};
