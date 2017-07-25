// @flow weak
/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

const columnData = [
  { id: 'title', numeric: false, disablePadding: true, label: 'Document Title' },
  { id: 'id', numeric: true, disablePadding: false, label: 'Document ID' },
  { id: 'category', numeric: true, disablePadding: false, label: 'Category' }
];

class EnhancedTableHead extends Component { 
  static propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
  };

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
              >
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={order}
                  onClick={this.createSortHandler(column.id)}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}


const styleSheet = createStyleSheet('EnhancedTable', theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  root: {
    margin: 20
  }
}));

class EnhancedTable extends Component {
  state = {
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    data: this.props.documents.slice(0, 10),
    search: ''
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data = this.state.data.sort(
      (a, b) => (order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]),
    );

    this.setState({ data, order, orderBy });
  };

  updateSearch(event) {
		this.setState({ search : event.target.value })
  }
  
  render() {
    const classes = this.props.classes;
    const { data, order, orderBy, selected } = this.state;

    let filteredDocuments = data.filter(
      (document) => {
        return document.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )

    return (
      <div className={classes.root}>
        <TextField
          id="placeholder"
          label="Search for a document"
          fullWidth
          margin="normal"
          value={this.state.search} onChange={this.updateSearch.bind(this)}
        />
      <Paper className={classes.paper}>
       
        <Table>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort}
          />
          <TableBody>
            {filteredDocuments.map(n => {
              return (
                <TableRow
                  hover>
                  <TableCell>
                    {n.title}
                  </TableCell>
                  <TableCell numeric>
                    {n.id}
                  </TableCell>
                  <TableCell numeric>
                    {n.albumId}
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

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(EnhancedTable);