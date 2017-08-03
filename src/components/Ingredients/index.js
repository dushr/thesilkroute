import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

import { 
  fetchIngredients,
  addIngredient
} from '../../redux/modules/ingredients';


class Ingredients extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tableData: [],
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
    this.props.addIngredient({ name: this.state.newIngredient.name });
    this.clearIngredientName();
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

  setIngredientsInTable(ingredients) {
    var tableData = []
    for (const key of Object.keys(ingredients)) {
      const ingredient = ingredients[key]
      ingredient.key = key
      tableData = tableData.concat([
        ingredient
      ])
    }
    this.setState({
      tableData: tableData
    });
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
            <TableRow key={row.key}>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>
                {row.tags ? row.tags.join(", "):""}
              </TableRowColumn>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    )
  }

  componentWillMount() {
    this.props.fetchIngredients();
  }

  componentWillReceiveProps(nextProps) {
    const { ingredients } = nextProps;
    this.setIngredientsInTable(ingredients)
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


const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients.ingredients
  };
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
      fetchIngredients: fetchIngredients,
      addIngredient: addIngredient
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
