import React from 'react';
import {  Container, Box,Typography } from '@material-ui/core';

import useStyles from './styles';


import Image1 from './../../assets/img/business-profit.png';
import DrawingArrow from './../../assets/img/drawing-arrow.svg';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function About() {
  const styles = useStyles();
  return (
    <section >
        <Container className={styles.containerBox}>
          
            <Box className={styles.thumbnail}>
              <img className={styles.img} src={Image1} alt="Thumbnail"   />
            </Box>

            <Box className={styles.contentBox}>
                <Typography as="h1" variant="heroPrimary" className={styles.webTitle}>Who we are ?</Typography> <br />
                <Typography as="p" variant="heroSecondary" className={styles.webText}>
                  INOVACT-social is the one-stop 
                  socializing website created by 
                  the students, for the students</Typography>
                <br /><br />
                <Box className={styles.webPoint}>  <KeyboardArrowRightIcon className={styles.icon} />   Connect with various other undergraduates and post-graduates studying across India .</Box>
                <br /><br />
                 <Box className={styles.webPoint}><KeyboardArrowRightIcon className={styles.icon} />Build a highly reliable network ranging from enthusiastic start-up entrepreneurs to highly qualified teachers and individuals, </Box>
            </Box>

        </Container>
      
        <Box className={styles.bottomArrow}>
          <img src={DrawingArrow} alt="Arrow" />
        </Box>
        
    </section>
  );
}

