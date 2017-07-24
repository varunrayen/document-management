import React, { Component } from 'react';
import Table, { TableHead, TableCell, TableBody, TableRow,  } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Reactable from 'reactable';

class DocumentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
		this.setState({ search : event.target.value })
	}

  render() {
    let filteredDocuments = this.props.documents.filter(
      (document) => {
        return document.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )
    if (!this.props.documents) return <p> Loading... </p>
    return (
      <div style={styles.root}> 
         <TextField
          id="placeholder"
          label="Search for a document"
          fullWidth
          margin="normal"
          value={this.state.search} onChange={this.updateSearch.bind(this)}
        />
        <Paper>
         <Table sortable={true}>
        <TableHead>
          <TableRow>
            <TableCell>
                Document Name
            </TableCell>
            <TableCell>Document ID</TableCell>
            <TableCell>Category ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        	{filteredDocuments.slice(0, 10).map(function(document) {
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
