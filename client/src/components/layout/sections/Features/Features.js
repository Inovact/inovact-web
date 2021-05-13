import React from 'react';
import { Box, Container, Grid, Heading,Card} from 'theme-ui';
import Image from '../image';
import {SOCIAL,LEARNING} from './feature';

import styles from './styles';

const Features = () => {
    return (
      <section>
      <Box sx={styles.features}  >
        <Heading 
        as="h3" 
        sx={styles.title}>Our Exciting Features</Heading>
          <Container css={{padding:'20px'}}>
            <Grid sx={styles.social} columns={[2,'fr fr']}>
              
              <Container>
                  <Heading 
                    as="h4" 
                    sx={styles.featureCard}>Inovact<span style={{ color: '#F94962',fontStyle:'italic'}}> Social</span></Heading>
                    <Grid sx={styles.grid1} className="social">
                        {SOCIAL.map((feature) => (
                          <Box
                            className="feature-card"
                            sx={styles.featureCard}>
                            <Card >
                            <Box className="feature-icon" sx={styles.icon}>
                              <Image src={feature.icon} alt="" width="40" />
                            </Box>
                            <Heading as="p"className="feature-title" >{feature.title}</Heading>
                            </Card>
                          </Box> 
                        ))}
                      </Grid>
              </Container>
        
               <Container>
                  <Heading 
                  as="h4" 
                  sx={styles.learningTitle}>
                  Inovact <span style={{color: '#F94962',fontStyle:'italic'}}>learning <span style={{color: '#000'}}>&#38; </span>placements</span></Heading>

                        <Grid sx={styles.grid2} className="learning">
                            {LEARNING.map((feature) => (
                              <Box
                              className="feature-card"
                              sx={styles.featureCard}
                              >
                                  <Card >
                                  <Box className="feature-icon" sx={styles.icon}>
                                    <Image src={feature.icon} alt={feature.title}  width="40"/>
                                  </Box>
                                  <Heading className="feature-title" as="p">{feature.title}</Heading>
                                  </Card>
                              </Box>
                            ))}
                    </Grid>  
              </Container>
           </Grid>
    </Container>
  </Box>
  </section>
);
};

export default Features;
