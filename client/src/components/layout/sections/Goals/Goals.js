/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Text } from 'theme-ui';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {Typography} from '@material-ui/core';

import styles from './styles';

const data = [
  {
    id: 1,
    title: 'Connect with support',
    text:
      'To help students from across the country socialise and connect with like-minded students.',
  },
  {
    id: 2,
    title: 'Explain you business idea',
    text:
      'Aid in developing the latest skills required in the industry, and innovate the process of learning through webinars workshop and online courses',
  },
  {
    id: 3,
    title: 'Be partner & earn money',
    text:
      'Aid in developing the latest skills required in the industry, and innovate the process of learning through webinars workshop and online courses',
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

