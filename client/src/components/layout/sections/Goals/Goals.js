/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Text } from 'theme-ui';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {Typography} from '@material-ui/core';

import styles from './styles';

const data = [
  {
    id: 1,
    text:
      'Help students to expand their network with students , mentors and Investors.',
  },
  {
    id: 2,
    text:
      'Enable students in developing latest tools and skills as per industry requirements through various technical training programs and placement training programs.',
  },
  {
    id: 3,
    text:
      'Build a community inside engineering colleges which encourage students to develop their soft skills and hard skills.',
  },
];

export default function Goals() {
  return (
   
      <Container sx={styles.container}>

        <Box>
          <Typography as="h2" sx ={styles.webtitle}>What we want to do?</Typography>
        </Box>

          <Grid gap={1} columns={[3, null, 4]} sx={styles.grid}>
          {data.map((item) => (
                      <Box sx={styles.card} key={item.id}>
                        <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
                       
                        <Box sx={styles.wrapper}>
                       <Text sx={styles.wrapper.description}><FiberManualRecordIcon sx={styles.iconBox2}/>{item.text}  </Text>
                        </Box>
                      </Box>
                    ))}
          </Grid>

      </Container>
  );
}

