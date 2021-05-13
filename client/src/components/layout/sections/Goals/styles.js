const  styles = {
    container: {
      background: '#ECF4FF',
          mt: "100px",
          mb:"70px",
          py: "100px",
          pb:"150px",
          '@media screen and (max-width :900px)':{
            py: "50px",
            mt:'50px'
          }
      },
      webtitle:{
        fontSize: '50px',
        fontWeight: 400,
        display:'flex',
        justifyContent:'center',       
        textAlign:'centre',
        '@media screen and (max-width :900px)':{
          fontSize: '30px',
          fontWeight: 450,
        }
      },
   
      grid :{
        display:['grid'],
        gridTemplateColumns: ['repeat(1, 1fr)','repeat(3, 1fr)'],
        mx:"30px",
        mt:"20px",
        pt:"10px",
        px:"20px"
      },
      card: {
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        textAlign: ['center', null, 'left'],
        px: [0, 5, 0],
      },
      iconBox: {
        flexShrink: 0,
        mb: [4, null, null, 0],
        fontSize: '40px',
        letterSpacing: 'heading',
        mx: '30px',
        '@media screen and (max-width :900px)':{
          display:'none'
        }
      },
      iconBox2 :{
        display:'none',
        position:'relative',
        top:'15px',
        right:'12px',
        fontSize: '10px',
        '@media screen and (max-width :900px)':{
          display:'block'
        },
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
        textAlign:'left',
        pt: 2,
      },
    },
  };
  
  export default styles;