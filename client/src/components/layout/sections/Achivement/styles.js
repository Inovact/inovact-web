
const styles = {
    container:{
    my: "30px",
    py:'30px',
    px:'20px',
    '@media screen and (max-width:700px )':{
      my: "0px",
      py:'0px',
      px:'10px',
    }
    },
    leftContent: {
      gap: [2, 2, 2, 2, 3, 4],
      display: ['grid', 'grid'],
      gridTemplateColumns: ['repeat(3, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)'],
      '@media screen and (max-width:1200px )':{
        padding:'30px',
        
      },
      '> div': {
        ':nth-child(1)':{
          ml:['165px'],
          position:'relative',
         left:'130px',
          '@media screen and (max-width:1200px )':{
           ml:['0px'],
           left:'0px',
          }
        },
        ':nth-child(2)':{
          ml:['100px'],
          '@media screen and (max-width:1200px )':{
           ml:['0px']
          }
        },
        ':nth-child(3)':{
          ml:['40px'],
          position:'relative',
          right:'235px',
          '@media screen and (max-width:1200px )':{
            ml:['0px'],
            right:'0px',
           }
        },
        ':nth-child(4)':{
          ml:['155px'],
          position:'relative',
         left:'140px',
          '@media screen and (max-width:1200px )':{
           ml:['0px'],
           left:'0px',
          }
        },
        ':nth-child(5)':{
          ml:['100px'],
          '@media screen and (max-width:1200px )':{
            ml:['0px'],
           }
        },
        ':nth-child(6)':{
          ml:['40px'],
          position:'relative',
          right:'235px',
          '@media screen and (max-width:1200px )':{
            ml:['0px'],
            right:'0px'
           }
        },
        ':nth-child(7)':{
          ml:['200px'],
          position:'relative',
          left:'200px',
          '@media screen and (max-width:1100px )':{
            ml:['0px'],
            position:'relative',
            left:'30px'
           },
        },
        ':nth-child(8)': {
         ml: ['300px'],
         position:'relative',
         right:'90px',
         '@media screen and (max-width:1100px )':{
           ml:['0px'],
            right:'0px',
            left:'30px'
          }
        },
      },
    },
    webTitle:{
      marginTop:'40px',
      marginBottom:'40px',
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
  };
export default styles;  