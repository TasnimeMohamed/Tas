import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Table } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          <Table fixed >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Item</Table.HeaderCell>        
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>Pizza</Table.Cell>
        <Table.Cell>22LE</Table.Cell>
        <Table.Cell>
          John is an interesting boy but sometimes you don't really have enough room to describe
          everything you'd like
        </Table.Cell>
      </Table.Row>
      
      
    </Table.Body>
  </Table>

            </div>
        </header>
      </div>
    );
  }
}

export default App;
