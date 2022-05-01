import React from "react";
import { ClientContactsTable } from "./components/ClientContactsTable";
import { ClientInfoTable } from "./components/ClientInfoTable";
import { ClientInventoryTable } from "./components/ClientInventoryTable";

function ClientPage() {
  return (
    <>
      <h1> Client Page </h1>
      <div className="App">
        <ClientInfoTable />
      </div>

      <div className="App">
        <ClientContactsTable />
      </div>

      <div className="App">
        <ClientInventoryTable />
      </div>
    </>
  );
}

export default ClientPage;
