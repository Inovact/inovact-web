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
        <Box sx={styles.contentWrapper}>
          
          <Box sx={styles.leftContent}>
            {data?.map((item) => (
              <Feature key={item?.id} feature={item} />
            ))}
          </Box>

          <Box sx={styles.rightContent}>
            <Typography as="h1" variant="heroPrimary"  sx={styles.webTitle}>Our Achivements</Typography> <br />
            <Typography as="p" variant="heroSecondary" sx={styles.webText}>
              INOVACT was born, with the sole aim of bringing together the students under one roof, and helping them realise their potential.
              They have been a part of the recruitment drive at their respective colleges, and been a part of several projects. With their first-hand experience in these areas, they realised the humongous gap that is present between the students and their community as well as the industry. Thus, INOVACT was born, with the sole aim of bringing together the students under one roof, and helping them realise their potential.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Achivements;
