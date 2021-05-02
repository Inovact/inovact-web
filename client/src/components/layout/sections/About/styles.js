import { makeStyles} from '@material-ui/core/styles';
export default  makeStyles({
    containerBox: {
         marginTop:'-50px',
         display: 'flex',
         alignItems: 'center',
         flexDirection : 'row',
         marginBottom:'100px',
         justifyContent: ['flex-Start', null, null, 'space-between'],
         flexWrap: ['wrap', null, null, 'nowrap'],
         '@media screen and (max-width :1200px)':{
          flexDirection : 'column',
                  },
      },
      thumbnail: {
       position: 'relative',
       margin:' 0 50px 0px 0px'
       
      },
      contentBox:{
        margin:'30px',
        marginRight:'50px'
      },
      img: {
        float: 'left',
        height: 'auto',
        width:'100%',
        padding:' 0px 0px 0px 60px',
    
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
          fontSize: '16px',
          alignItems: 'left',
          paddingTop:'30px',
          justifyContent: 'left',
          letterSpacing: '2'
      },
      webPoint :{
      
        fontSize: '16px',
        textAlign:'left'
      },
      icon:{
       
        position:'relative',
        top:'6px'
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