import React from 'react';
import Box from '@material-ui/core/Box';
import BannerThumb from './banner-thumb.png';
import {Container,Typography,Grid} from '@material-ui/core';
import useStyles from './styles';

const Banner= () =>{
    const styles = useStyles();
    return (
      <section className={styles.banner} id="home">
        <Container className={styles.container}>
        <Grid>
            <Box className={styles.contentBox}>
              <Typography as="h1" 
                           variant="heroPrimary" 
                           className={styles.webTitle}>
                           Inovact <br />
                 <Typography className={styles.tagline}>Build a skill for the future </Typography>
              </Typography>
              
              <Box className={styles.horizontal}></Box>
            
              <Typography as="p" variant="heroSecondary" className={styles.webText}>
                INOVACT-social is the one-stop socializing website created by the students, for the students. 
              </Typography>
            </Box>
        </Grid>
     
        <Box className={styles.imageBox}>
          <img src={BannerThumb} alt="banner" className={styles.img} />
        </Box>
        
      </Container>
    </section>
    );
}


export default Banner;