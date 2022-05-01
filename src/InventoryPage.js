import React from "react";
import { RowSelection } from "./components/RowSelection";
import { InventoryForm } from "./components/InventoryForm";

function InventoryPage() {
  return (
    <>
      <h1> Inventory </h1>
      <div className="App">
        <InventoryForm />
      </div>
      <div className="App">
        <RowSelection />
      </div>
    </>
  );
}

export default InventoryPage;
