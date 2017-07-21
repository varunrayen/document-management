import React from 'react'
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';


const Header = () => (
  <AppBar position="static" color="default" style={styles.root}>
    <Typography type="title" color="inherit" style={styles.title}>
            Document Management System
          </Typography>
  </AppBar>
);

const styles = {
  root: {
    width: '100%',
    height: 20,
    padding: 20,
    backgroundColor: '#2196f3'
  },
  title: {
  	color: '#FFFFFF'
  }
};


export default Header;