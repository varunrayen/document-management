import React, { Component } from 'react';
import Header from './header/header';
import DocumentList from './DocumentList/DocumentList';

class Main extends Component {
	 constructor(props) {
    super(props);
  
    this.state = {};
  }

  componentWillMount(){

  }
  
  render() {
    return (
      <div>
         <Header />
          <DocumentList />
      </div>
    );
  }
}

export default Main;