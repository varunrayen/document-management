import React, { Component } from 'react';

import './Main.css';

import Header from './header/header';
import DocumentSort from './DocumentSort';

//const docsUrl = 'https://jsonplaceholder.typicode.com/photos';
const documentsUrl = '/documents';

class Main extends Component {
 
	 constructor(props) {
    super(props);
    
    this.state = {};
  }
    

    getInitialState() {
    return {
      documents: []
    };
  }

  componentWillMount(){
     fetch(documentsUrl)
      .then(d => d.json())
      .then(d => {
        this.setState({
          documents: d
        })
      }) 
  }
  
  render() {
    
    if(this.state.documents === undefined){
      return null;
    }
    return (
      <div className='root'>
         <Header />
          <DocumentSort documents={this.state.documents} />
      </div>
    );
  }
}


export default Main;