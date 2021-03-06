import React,{useEffect} from 'react';
import CSSstyle from './Header.module.css';
import BackgroundVideo from '../../../assets/bg-video1.mp4';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import HowToReg from '@material-ui/icons/HowToReg';
import {useHistory,useLocation} from "react-router-dom";
import {connect} from "react-redux"


function Header(props) {
  let history = useHistory();
  let location = useLocation();


  var {isAuthenticated} = props.auth

  

  useEffect(() => {
    if(isAuthenticated){
      history.push('/timeline')
    }else{
      history.push('/')
    }
    
  }, [props.auth])

  
  

    return (
      <Grid align="center" container className={CSSstyle.headerContainer}>
     
      <Box className={CSSstyle.headerContent}>
      <Typography variant="h4" component="h1">Here We Teach So You May Outreach
        <span className={CSSstyle.dot} >.</span>
      </Typography>
      <Typography variant="h6" component="h4">Join Sheryians to code, learn, make, and discover.</Typography>
      <Button onClick={()=>history.push("/signup")} style={{marginRight:"10px"}} className={CSSstyle.signUpButton} variant="contained" startIcon={<HowToReg />} >SignUp</Button>
      <Button onClick={()=>history.push("/signin")} className={CSSstyle.signUpButton} variant="contained" startIcon={<HowToReg />}>SignIn</Button>
      </Box>
      </Grid>
    )
}

function mapStateToProps(state){
  return{
    auth:state.signin
  }
}

export default connect(mapStateToProps,null)(Header);