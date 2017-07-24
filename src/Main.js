import React, { Component } from 'react';
import Header from './header/header';
import DocumentList from './DocumentList/DocumentList';
import Reactable from './Reactable';
import Sorting from './Sorting';

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
          <DocumentList documents={this.state.documents} />
          <Sorting />
      </div>
    );
  }
}

export default Main;