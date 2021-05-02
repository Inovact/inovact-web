import { makeStyles} from '@material-ui/core/styles';
export default  makeStyles({
    banner:{
        overflow: 'hidden',
        padding: '150px',
        pb: '0',
        '@media screen and (max-width:1200px)':
        {
          padding:'50px'
        }
      },
      container: {
        display: 'flex',
        flexDirection: 'row',
        '@media screen and (max-width:1200px)':
        {
          flexDirection: 'column',
        }
      },
      contentBox: {
        width: ['100%','75%', '50%', '45%'],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexShrink: 0,
        pt: [0, null, null, null, null, 6, 7, '70px'],
        mb: ['60px', null, null, null, 0],
        mx: [0, 'auto'],
        textAlign: ['center', null, null, null, 'left'],
       
      },
      webTitle: {
        fontSize: '60px',
        fontWeight:'500',
        color: '#000',
        padding:'0px',
        margin: '80px -30px 0 -60px',
        '@media screen and (max-width:1200px)':{
        margin:'0px 0px 0px 0px',
        fontSize: '40px',
        },
      },

      tagline:{
        fontSize:'20px',
        fontWeight:'350'
      },
   
      horizontal:{
      borderBottom: '2px solid #DCDCDC',
      width:'150px',
      borderRadius:'25%',
      marginTop:'30px',
      marginBottom:'20px',
      marginLeft:'-60px',
      '@media screen and (max-width:1200px)':{
        marginLeft:'0px'

      }
      },

      webText:{
        width:'400px',
          margin: '0px 0 0 -60px',
          fontSize: '18px',
          alignItems: 'left',
          justifyContent: 'left',
          '@media screen and (max-width:1200px )':{
            width:'auto',
            fontSize: '16px',
          paddingLeft:'60px'
          }
      },
      imageBox: {
        justifyContent: 'center',
        padding:'40px -40px 40px 30px',
        maxWidth:'500px',
        textAlign: ['center', null, null, null, 'right'],
       
      },
      img: {
       width:'700px',
        padding: "40px",
        height: ['500', 'auto'],  
        '@media screen and (max-width:1200px )':{
         maxWidth:'300px',
         padding:'0px',
         display:'none'
        }
      },
    });
    