import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


class Ingredients extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tableData: [
        {
          name: "Red Onions",
          tags: ["vegetable", "red"]
        },
        {
          name: "Mangoes",
          tags: ["fruit", "red"]
        },
        {
          name: "Corriander Powder",
          tags: ["Masala"]
        },
        {
          name: "Red Onions",
          tags: ["vegetable", "red"]
        }
      ],
      showAddBox: false,
      newIngredient: {
        name: ""
      }
    }
  }

  openAddBox = () => {
    this.setState({showAddBox: true});
  }

  closeAddBox = () => {
    this.setState({showAddBox: false});
    this.clearIngredientName()
  }

  addIngredient = () => {
    this.setState({
      tableData: this.state.tableData.concat([{
        name: this.state.newIngredient.name,
        tags: []
      }])
    })
    this.clearIngredientName()
  }

  clearIngredientName() {
    this.setState({
      newIngredient: {
        name: ""
      }
    })
  }

  setIngredientName = (e) => {
    this.setState({
      newIngredient: {
        name: e.target.value
      }
    })
  }

  renderAddBox() {
    const actions = [
      <FlatButton
        label="Close"
        secondary={true}
        onTouchTap={this.closeAddBox}
      />,
      <FlatButton
        label="Add"
        primary={true}
        onTouchTap={this.addIngredient}
      />
    ];

    return (
      <Dialog
        title="Add Ingredient"
        modal={false}
        open={this.state.showAddBox}
        onRequestClose={this.closeAddBox}
        actions={actions}
      >
        <TextField
          hintText="Name"
          value={this.state.newIngredient.name}
          onChange={this.setIngredientName}
        />
      </Dialog>
    )
  }

  renderTable() {
    const tableState = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
    };

    return (
      <Table
        height={tableState.height}
        fixedHeader={tableState.fixedHeader}
        fixedFooter={tableState.fixedFooter}
        selectable={tableState.selectable}
        multiSelectable={tableState.multiSelectable}
      >
        <TableHeader
          displaySelectAll={tableState.showCheckboxes}
          adjustForCheckbox={tableState.showCheckboxes}
          enableSelectAll={tableState.enableSelectAll}
        >
        <TableRow>
          <TableHeaderColumn>
            <span
              style={{
                fontSize: '1.5rem'
              }}
            >
              Ingredients
            </span>
          </TableHeaderColumn>
          <TableHeaderColumn style={{ textAlign: 'right' }}>
            <FlatButton
              label="Add"
              onTouchTap={this.openAddBox}
              primary={true}
            />
          </TableHeaderColumn>
        </TableRow>

          <TableRow>
            <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
            <TableHeaderColumn tooltip="Tags">Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={tableState.showCheckboxes}
          deselectOnClickaway={tableState.deselectOnClickaway}
          showRowHover={tableState.showRowHover}
          stripedRows={tableState.stripedRows}
        >
          {this.state.tableData.map( (row, index) => (
            <TableRow key={index}>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>
                {row.tags.join(", ")}
              </TableRowColumn>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    )
  }


  render() {

    return (
      <div>
        {this.renderAddBox()}
        {this.renderTable()}
      </div>
    )
  }

}


export default Ingredients;
