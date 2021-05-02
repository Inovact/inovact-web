/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Text } from 'theme-ui';

import {Typography} from '@material-ui/core';

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
    <section sx={{ variant: 'section.workflow' }}>
      <Container sx={styles.container}>

        <Box>
          <Typography as="h2" sx ={styles.title}>What we want to do?</Typography>
          <Typography as="p" sx ={styles.description}>INOVACT has three major goals:</Typography>
        </Box>

          <Grid gap={1} columns={[3, null, 4]} sx={styles.grid}>
          {data.map((item) => (
                      <Box sx={styles.card} key={item.id}>
                        <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
                        <Box sx={styles.wrapper}>
                          <Text sx={styles.wrapper.description}>{item.text}</Text>
                        </Box>
                      </Box>
                    ))}
          </Grid>

      </Container>
    </section>
  );
}

const styles = {
  container: {
    background: '#ECF4FF',
        mt: "150px",
        mb:"70px",
        py: "100px",
        pb:"150px"
  },
  title:{
    fontSize: '50px',
    fontWeight: 300,
  },
  card: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, 'left'],
    px: [0, 5, 0],
  },
grid :{
  display:['grid'],
  gridTemplateColumns: ['repeat(1, 1fr)','repeat(3, 1fr)'],
mx:"30px",
mt:"20px",
pt:"30px",
px:"20px"

},
  iconBox: {
    flexShrink: 0,
    mb: [4, null, null, 0],
    fontSize: '40px',
    letterSpacing: 'heading',
    mx: '30px'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    heading:{
      fontSize: '28px',
    },
    description: {
      fontSize: '15px',
      fontWeight: 'body',
      pt: 2,
    },
  },
};
