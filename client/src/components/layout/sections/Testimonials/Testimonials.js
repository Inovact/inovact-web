/** @jsx jsx */
import { jsx, Heading, Text, Box } from 'theme-ui';
import Rating from './rating';
import ButtonGroup from './button-group';
import Carousel from 'react-multi-carousel';
import { Typography } from "@material-ui/core";

import "react-multi-carousel/lib/styles.css";
import styles from './styles';
import data from './testimonial';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, 
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, 
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, 
  },
};

export default function TestimonialCard() {
  return (
    <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Typography sx={styles.webTitle} >Testimonials
    </Typography>
     <Box style={{margin:'40px'}}>
        <Carousel
       additionalTransfrom={0}
       arrows={false}
       centerMode={false}
       className=""
       containerClass="carousel-container"
       customButtonGroup={<ButtonGroup />}
       dotListClass=""
       draggable
       infinite={true}
       autoPlay={true}
       autoPlaySpeed={3000}
       focusOnSelect={false}
       keyBoardControl
       minimumTouchDrag={80}
       renderButtonGroupOutside
       renderDotsOutside={false}
       responsive={responsive}
       showDots={false}
       sliderClass=""
       slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Text sx={styles.description}>{item.description}</Text>
                <div sx={styles.ratings} >
                <Rating rating={item.review} />
                </div>
                <Heading as="h4" sx={styles.name}>
                  {item.name}
                </Heading>
            </Box>
          ))}
      </Carousel>
 </Box>
 
    </section>

  );
}
