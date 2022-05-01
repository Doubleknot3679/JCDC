import React, { Component } from "react";

export class InventoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: ""
    };
    this.state = {
      storageType: ""
    };
    this.state = {
      maxItemCapacity: ""
    };
    this.state = {
      currentQuantity: ""
    };
  }

  handleitemNameChange = (event) => {
    this.setState({
      itemName: event.target.value
    });
  };
  handleStorageTypeChange = (event) => {
    this.setState({
      storageType: event.target.value
    });
  };
  handleMaxItemCapacityChange = (event) => {
    this.setState({
      maxItemCapacity: event.target.value
    });
  };
  handleCurrentQuantityChange = (event) => {
    this.setState({
      currentQuantity: event.target.value
    });
  };

  // submit button script
  handleSubmit = (event) => {
    // replace alert message with javascript PUT
    alert(`${this.state.itemName} 
            ${this.state.storageType}
            ${this.state.maxItemCapacity}
            ${this.state.currentQuantity}`);
    event.preventDefault();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Item Name </label>
            <input
              type="text"
              value={this.state.itemName}
              onChange={this.handleitemNameChange}
            />
            <br></br>
            <label> Storage Type </label>
            <input
              type="text"
              value={this.state.storageType}
              onChange={this.handleStorageTypeChange}
            />
            <br></br>
            <label> Max Item Capacity </label>
            <input
              type="text"
              value={this.state.maxItemCapacity}
              onChange={this.handleMaxItemCapacityChange}
            />
            <br></br>
            <label> Current Quantity </label>
            <input
              type="text"
              value={this.state.currentQuantity}
              onChange={this.handleCurrentQuantityChange}
            />
          </div>
          <button type="submit"> Submit </button>
        </form>
      </>
    );
  }
}
export default InventoryForm;
