/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Feature from './feature';
import {Typography} from '@material-ui/core';
import data from './dataAchivement';
import styles from './styles';

const Achivements = () => {
  return (
    <Box as="section" >
      <Container sx={styles.container}>
      <Typography sx={styles.webTitle} >Our Achivements</Typography>
          <Box sx={styles.leftContent}>
            {data?.map((item) => (
              <Feature key={item?.id} feature={item} />
            ))}
          </Box>
      </Container>
    </Box>
  );
};

export default Achivements;
