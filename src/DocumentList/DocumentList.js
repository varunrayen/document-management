import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const docsUrl = 'https://jsonplaceholder.typicode.com/photos';

class DocumentList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getInitialState() {
    return {
      documents: []
    };
  }

  componentDidMount(){
     fetch(docsUrl)
      .then(d => d.json())
      .then(d => {
        this.setState({
          documents: d
        })
      }) 
  }

  render() {

    if (!this.state.documents) return <p> Loading... </p>
    return (
      <div style={styles.root}>

      

       	<Typography type="display1" gutterBottom>
  
        Documents
        </Typography>
        <Paper>
         <Table>
        <TableHead>
          <TableRow>
            <TableCell>Document Name</TableCell>
            <TableCell>Document ID</TableCell>
            <TableCell>Category ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        	{this.state.documents.slice(0, 10).map(function(document) {
          return(
          		<TableRow key={document.id}>
          			<TableCell>
                  {document.title}
                </TableCell>
                <TableCell>
                  {document.id}
                </TableCell>
                <TableCell>
                  {document.albumId}
                </TableCell>
          		</TableRow>
          );
          })}
        </TableBody>
        </Table> 
        </Paper>       
      </div>
    );
  }
}

const styles = {
	root: {
		margin: 20
	}

}

export default DocumentList;
