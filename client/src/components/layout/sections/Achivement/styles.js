
const styles = {
    container:{
    my: "50px",
    py:'50px',
    px:'60px',
    '@media screen and (max-width:700px )':{
      my: "0px",
      py:'0px',
      px:'10px',
    }
    },
    contentWrapper: {
      gap: [10, 10, 10, 10, 10, 20, 20, 20],
      marginTop:'60px',
      display: ['flex', 'flex', 'grid'],
      flexDirection: ['column-reverse', 'column-reverse', 'unset'],
      gridTemplateColumns: [
        '1.2fr 0.8fr',
        '1.2fr 0.8fr',
        '1.2fr 0.8fr',
        '1.1fr 0.9fr',
        '1.1fr 0.9fr',
        '1.1fr 0.9fr',
        '1.2fr 0.8fr',
      ],
      alignItems: 'center',
      '@media screen and (max-width:1100px )':{
        marginTop:'40px',
      flexDirection:'column-reverse'
      },
    },
    leftContent: {
      gap: [2, 2, 2, 2, 3, 4],
      display: ['grid', 'grid'],
      gridTemplateColumns: ['repeat(3, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)'],
      alignItems: 'flex-start',
      marginLeft:'40px',
      '@media screen and (max-width:1200px )':{
        padding:'30px',
        paddingLeft:'0px',
      },
      '> div': {
        ':nth-child(2)':{
          ml:['-100px'],
          '@media screen and (max-width:1200px )':{
           ml:['0px']
          }
        },
        ':nth-child(3)':{
          ml:['-165px'],
          position:'relative',
          right:'235px',
          '@media screen and (max-width:1200px )':{
            ml:['0px'],
            right:'0px',
           }
        },
        ':nth-child(5)':{
          ml:['-100px'],
          '@media screen and (max-width:1200px )':{
            ml:['0px'],
           }
        },
        ':nth-child(6)':{
          ml:['-165px'],
          position:'relative',
          right:'235px',
          '@media screen and (max-width:1200px )':{
            ml:['0px'],
            right:'0px'
           }
        },
        ':nth-child(7)':{
          ml:['100px'],
          right:'50px',
          '@media screen and (max-width:1100px )':{
            ml:['0px'],
            position:'relative',
            left:'30px'
           },
        },
        ':nth-child(8)': {
         ml: ['300px'],
         position:'relative',
         right:'300px',
         '@media screen and (max-width:1100px )':{
           ml:['0px'],
            right:'0px',
            left:'30px'
          }
        },
      },
    },
  
    rightContent: {
      mt:['-200px'],
      ml: ['-60px'],
      pr:['20px'],
      '@media screen and (max-width :1100px)':{
        fontSize: '30px',
        mt:['0px'],
        ml: ['10px'],
        px:['20px'],
        mb:['20px']
                },
    },
    listItem: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 2.81,
      display: 'flex',
      alignItems: 'center',
      img: {
        mr: '10px',
        mt: '10px',
      },
    },
    webTitle: {
      fontSize: '50px',
      fontWeight:'400',
      color: '#000',
      mb:'30px' ,   
      '@media screen and (max-width :1100px)':{
        display:'flex',
        justifyContent:'left',
        fontSize: '30px',
        fontWeight:'500',
        pt: '0px',
        mx: '0px',
        mb:'0px'
      },
    },
    webText:{
      alignItems: 'left',
      justifyContent: 'left',
      textAlign:'left',    
      fontSize: '16px',
      position:'relative'
      ,top:'50px',    
      '@media screen and (max-width :800px)':{
          my:['10px'],
          mt:['0px'],
          fontSize:'14px',
          top:'-10px',
      }
    },
  };
export default styles;  