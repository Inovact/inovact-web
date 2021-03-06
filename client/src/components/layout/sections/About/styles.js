import { makeStyles} from '@material-ui/core/styles';
export default  makeStyles({
    containerBox: {
         marginTop:'-100px',
         paddingTop:'10px',
         display: 'flex',
         alignItems: 'center',
         flexDirection : 'row',
         marginBottom:'100px',
         justifyContent: ['flex-Start', null, null, 'space-between'],
         flexWrap: ['wrap', null, null, 'nowrap'],
         '@media screen and (max-width :700px)':{
          flexDirection : 'column',
         marginTop:'30px',
          marginBottom:'0px',
                  },
      },
      thumbnail: {
       position: 'relative',
       margin:' 0 50px 0px 0px',
      
      },
      img: {
        float: 'left',
        height: 'auto',
        width:'100%',
        padding:' 100px 0px 0px 60px',
        '@media screen and (max-width :700px)':{
          padding:'0px'
        }
      },
      contentBox:{
        margin:'30px',
        marginRight:'50px',
        padding:'30px',
        textAlign:'left',
        '@media screen and (max-width :700px)':{
          marginRight:'30px',

        }
      },
      webTitle: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '50px',
        color: '#000',
        padding:'10px',
        margin: '40px 70px 0 70px',
        fontWeight:'400',
        '@media screen and (max-width :1200px)':{
          fontSize: '30px',
          margin: '20px 10px 0 20px',
        },
      },
      webText:{
          margin: '40px 0 70px 0',
          fontSize: '18px',
          alignItems: 'center',
          paddingTop:'30px',
          justifyContent: 'center',
          letterSpacing: '2',
          '@media screen and (max-width :600px)':{
            fontSize: '16px',
          }
      },
  
      bottomArrow: {
        position: 'absolute',
        bottom: -185,
        left: '1%',
        display: ['none', null, null, null, null, null, null, 'block'],
        '@media screen and (max-width :1200px)':{
          display:'none'
        },
      },
});