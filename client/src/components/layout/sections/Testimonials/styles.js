const styles = {
    carouselWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'flex-end',
      mt: '-35px',
      px: '15px',
      '.carousel-container': {
        width: '100%',
        maxWidth: [
          '100%',
          null,
          null,
          '750px',
          '1000px',
          '1180px',
          null,
          'calc(50% + 865px)',
        ],
        mr: ['auto', null, null, null, null, null, null, '-220px'],
        ml: 'auto',
        '.react-multi-carousel-item': {
          transition: 'all 0.25s',
        },
        '.react-multi-carousel-item--active:nth-of-type(4n)': {
          opacity: '0.5',
          '@media screen and (max-width: 1200px)': {
            opacity: 1,
          },
        },
      },
    },
    reviewCard: {
      boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
      transition: 'all 0.3s',
      borderRadius: '15%',
      alignItems:'center',
      p: [
        '30px 20px 35px',
        '30px 25px 35px',
        '30px 20px 35px',
        '35px 30px 40px 40px',
        '30px 30px 35px',
        '35px 30px 40px 40px',
      ],
      bg: 'white',
      textAlign: 'left',
      m: [
        '28px 5px 30px 5px',
        '28px 20px 30px 20px',
        '28px 15px 30px 15px',
        '28px 15px 30px 15px',
        '30px 20px 40px',
      ],
      '&:hover': {
        boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
      },
      '.rating': {
       
        mb: [1, null, null, 1],
        ul: {
          pl: '110px',
          listStyle: 'none',
          mb: 0,
          mt:'30px',
          display: 'flex',
          '@media screen and (max-width:1200px)':{
             
             pl:'80px',
          }
        },
        svg: {
          marginRight: '5px',
          '&:last-of-type': {
            marginRight: 0,
          },
        },
        '.star': {
          color: 'yellow',
          mr: '5px',
        },
        '.star-o': {
          color: '#ddd',
          mr: '1px',
        },
      },
    },
    footer:{
      display:'flex',
      justifyContent:'center',
    },
    webTitle:{
      marginTop:'60px',
       display:'flex',
       justifyContent:'center',
       fontWeight:'400',
       fontSize:'50px',
       '@media screen and (max-width: 600px)':{
        paddingTop:'0px',
        fontSize:'40px',
        fontWeight:'450',
        marginTop:'40px',
       }
    },
 
    name:{
      fontSize: [1, 2],
      fontWeight: 700,
      mb: [3, null, null, '22px'],
      color: 'text',
      lineHeight: 1.6,
      display:'flex',
      justifyContent:'center',
      mt:['10px'],
      '@media screen and (max-width: 600px)':{
      mt:['-10px'],
      },
    },
    description: {
      mt:['60px'],
      pt:['40px'],
      fontSize: [1, null, null, 2],
      fontWeight: 'normal',
      color: 'text',
      lineHeight: [1.85, null, 2],
    },
   ratings:{
     mt:['30px'],
     mr:'40px',
   }
  };

  export default styles;