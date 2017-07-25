import React, { Component } from 'react';
import Header from './header/header';
import DocumentSort from './DocumentSort';

const docsUrl = 'https://jsonplaceholder.typicode.com/photos';

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
     fetch(docsUrl)
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
      <div>
         <Header />
          <DocumentSort documents={this.state.documents} />
      </div>
    );
  }
}

export default Main;