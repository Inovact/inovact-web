const styles = {
    title:{
      textAlign: 'center',
      fontWeight:'400',
      my:['30px'],
      fontFamily:'poppins',
      '@media screen and (max-width:1200px )':{
       fontSize:'30px',
      }
    },
    social:{
      display: 'grid',
      margin:'30px',
      gridGap: ['1px', null, null, null, null, '2px'],
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
      ],
    },
  
    featureCard: {
      textAlign: 'center',
      h4:{
        marginTop:'30px', 
        marginBottom:'30px',
        marginLeft:'-40px',
      },
      p: {
        margin: 0,
        fontSize: ['14px', null, null, '12px'],
        color: 'heading_secondary',
        width: '100%',
        maxWidth: [null, null, null, null, '84%', '100%'],
        mx: [null, null, null, null, 'auto', '0'],
      },
      '@media screen and (max-width:1200px )':{  
        fontSize:'24px'
       },
    },
    features: {
      pt: ['10px', null, null, null, null, null, '140px'],
      marginBottom:'30px',
      height:['auto'],
      '.feature-title':{
       mt:['10px'],
       fontStyle:'bold',
       fontWeight:'600',
      },
      '.feature-card:nth-of-type(1)': {
        '.feature-icon': {
          width:'80px',
          height:'80px',
          backgroundImage:
            'linear-gradient(319.4deg, #2848BD 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
        },
       
        
      },
      'p.feature-card:nth-of-type(1)': {
        '.feature-icon': {
          width:'80px',
          height:'80px',
          marginLeft:'30px',
          backgroundImage:
            'linear-gradient(319.4deg, #2848BD 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
        },
        
      },
  
      '.feature-card:nth-of-type(2)': {
        '.feature-icon': {
          width:'80px',
          height:'80px',
          marginLeft:'-0px',
          backgroundImage:
            'linear-gradient(320.89deg, #2848BD 10.83%, rgba(8, 152, 231, 0.5) 88.7%)',
            '@media screen and (max-width:400px)':{
              marginLeft:'auto',
                   },
                   '@media screen and (min-width: 600px) and (max-width: 1100px)':{
           
                    ml:'30px',
                  }
        },
        '.feature-title':{
          position:'relative',
          left:'-90px',
          '@media screen and (max-width:1200px)':{
          left:'0px',
               }
        },
       
      },
   
      '.feature-card:nth-of-type(3)': {
        '.feature-icon': {
          width:'80px',
          height:'80px',
          backgroundImage:
            'linear-gradient(319.4deg, #2848BD 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
        },
      }, 
   
      '.feature-card:nth-of-type(4)': {
        '.feature-icon': {
          width:'80px',
          height:'80px',
          marginLeft:'-0px',
          backgroundImage:
          'linear-gradient(319.4deg, #2848BD 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
          '@media screen and (max-width:1200px)':{
            marginLeft:'auto',
          },
          '@media screen and (min-width: 600px) and (max-width: 1100px)':{
           
            ml:'30px',
          }
        },
        '.feature-title':{
         position:'relative',
         left:'-90px',
         '@media screen and (max-width:1200px)':{
            left:'auto',
         }
          }
      },
      '.learning .feature-card:nth-of-type(2)': {
        '.feature-icon': {
          width:'80px',
          height:'80px',
          backgroundImage:
            'linear-gradient(319.4deg, #2848BD 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
            '@media screen and (max-width:400px)':{
              margin:'0px ',
              ml:'0px',
              mx:'auto',
            },
            '@media screen and (min-width: 400px) and (max-width: 600px)':{
              top:'0px',
              left:'0px',
              mx:'auto',
                        },
            '@media screen and (min-width: 600px) and (max-width: 1000px)':{
              top:'0px',
              left:'0px',
              margin:'0px',
            },
         
        },
        '.feature-title':{
          maxWidth:'100%',
          justifyContent:'center',
        }
      },
      '.learning .feature-card:last-of-type':{
        '.feature-icon': {
           width:'80px',
        height:'80px',
        position:'relative',
        left:'100px',  
        '@media screen and (max-width:1200px)':{
          left:'0px',
          margin:'0px auto'
        },
        '@media screen and (min-width: 400px) and (max-width: 600px)':{
          top:'0px',
          left:'0px',
          mx:'auto',
                    },
        '@media screen and (min-width: 600px) and (max-width: 1000px)':{
          top:'0px',
          left:'0px',
          mx:'auto',
        }
      },
      '.feature-title':{
        position:'relative',
        left:'100px',
        '@media screen and (max-width:1200px)':{
        left:'0px',
             }
      }
      },
    },
  
    grid1: {
      display: 'grid',
      marginTop:'30px',
      mx:['0px'],
      ml:'60px',
      gridGap: ['15px'],
      position:'relative',
      borderRight:'2px solid #DCDCDC',
      '@media screen and (max-width:1200px )':{
      top:'0px',
      left:'0px'
      },
      gridTemplateColumns: [
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
      ],
      '@media screen and (max-width:800px)':{
        ml:['0px'],
              border:'none',
      }
    },
  
    grid2: {
      display: 'grid',
      marginTop:'30px',
      mx:['0px'],
      ml:'60px',
      position:'relative',
      gridGap: ['15px'],
      '@media screen and (max-width:1200px )':{
      marginTop:'0px',
      ml:'0px'
      },
      gridTemplateColumns: [
        'repeat(3, 1fr)',
        'repeat(3, 1fr)',
        'repeat(2, 1fr)',
      ],
    },
    learningTitle: {
      textAlign: 'center',
      marginBottom:'30px',
      '@media screen and (max-width:600px )':{
        top:'0px',
        marginTop:'30px',
        marginBottom:'50px',
        fontSize:'24px',
      },
    },
    icon: {
      display: 'flex',
      ml: 'auto',
      mr: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ['20px', null, null, '40px'],
      background : '#020652',
      color:'white'
    },
  };
export default styles;  