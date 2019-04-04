import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Table, Button, Form, Input } from 'semantic-ui-react'


class App extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  
  render() {
    const { value } = this.state
    
    return (
   
      <div className="App">
        <header className="App-header">
        <div>
        <Form>
      <Form.Group widths='equal'>
        <Form.Field control={Input}  placeholder='Item' />
        <Form.Field control={Input}  placeholder='Description' />
        <Form.Field control={Input}  placeholder='Price' />

     <Form.Field  className= "Button"control={Button}>Submit</Form.Field>
        </Form.Group>
    </Form>
          </div>
          <div >
            
          <Table fixed className="table">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Item</Table.HeaderCell>        
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Pizza</Table.Cell>
        <Table.Cell>
          John is an interesting boy but sometimes you don't really have enough room to describe
          everything you'd like
        </Table.Cell>
        <Table.Cell>22LE</Table.Cell>

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
