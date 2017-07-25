import React from 'react'
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';


const Header = () => (
  <AppBar position="static" color="default" style={styles.root}>
    <Toolbar>
            <Button raised color="accent" style={styles.label}>Login</Button>
            <Button raised color="accent" style={styles.label}>Department</Button>
            <Button raised color="accent" style={styles.label}>Documents</Button>
    </Toolbar>
  </AppBar>
);

const styles = {
  root: {
    width: '100%',
   // padding: 20,
    //backgroundColor: '#2196f3'
  },
  toolbar: {
    marginRight: 10
  },
  title: {
  	color: '#FFFFFF'
  },
  label: {
    textTransform: 'capitalize',
    marginRight: 10
  }
};


export default Header;