import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import FlatButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';


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
      showAddBox: false
    }
  }

  openAddBox = () => {
    this.setState({showAddBox: true});
  }

  closeAddBox = () => {
    this.setState({showAddBox: false});
  }


  render() {

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
      height: '300px',
    };
    return (
      <div>
        <Dialog
          title="Add Ingredient"
          modal={false}
          open={this.state.showAddBox}
          onRequestClose={this.closeAddBox}
        >
          TODO: Add Ingredients 
        </Dialog>
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
      </div>
    )
  }

}


export default Ingredients;
