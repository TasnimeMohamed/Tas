import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Table, Button, Form, Input, Container, Label } from 'semantic-ui-react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AddIteam />
      </div>
    )
  }
}

class AddIteam extends Component {


  constructor(props) {
    super(props);

    this.state = {
      Items_Category: [],
      name: '',
      desc: '',
      price: '',
      showInput: true,

    };

    this.Add = this.Add.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onRemoveItem = this.onRemoveItem.bind(this)
    this.Edit = this.Edit.bind(this)
    this.handleShowLabel = this.handleShowLabel.bind(this)


  }

  handleChange(e) {

    if (e.target.id === 'name') {
      this.setState({
        name: e.target.value
      })

    }
    else if (e.target.id === 'desc') {
      this.setState({
        desc: e.target.value
      })

    }
    else if (e.target.id === 'price') {
      this.setState({
        price: e.target.value
      })

    }

  }



  Add(e) {
    e.preventDefault();
    this.setState({
      Items_Category: [...this.state.Items_Category, {
        name: this.state.name,
        desc: this.state.desc,
        price: this.state.price
      }]
    })
    this.setState({ name: '', desc: '', price: '' })
  }

  onRemoveItem(index) {
    let Items_Category = [...this.state.Items_Category]
    Items_Category.splice(index, 1)
    this.setState({
      Items_Category: Items_Category
    })
  }
  /* onRemoveItem = id => {
    this.setState(state => {
      const Items_Category = state.Items_Category.filter(item => item.id !== id);
      return {
        Items_Category,
      };
    });
  };*/
  Edit(index) {
    let name = document.getElementById("name" + index).value
    let desc = document.getElementById("desc" + index).value
    let price = document.getElementById("price" + index).value;
    let items = this.state.Items_Category;
    let item = this.state.Items_Category[index];
    item.name = name;
    item.desc = desc;
    item.price = price;
    items[index] = item;
    this.setState({
      Items_Category: items
    })
    console.log('itemCategory', this.state.Items_Category)
    return {


    }

  };


  handleShowLabel(e) {
    this.setState({
      showInput: !this.state.showInput
    });
  }





  render() {
    //let   Items_Category = this.state;
    return (
      <Container>
        <Form onSubmit={(e) => this.Add(e)} className="FormIteam">
          <Form.Group widths='equal'>
            <Input id='name' type='text' onChange={this.handleChange} value={this.state.name} placeholder='Item' />
            <Input id='desc' type='text' onChange={this.handleChange} value={this.state.desc} placeholder='Description' />
            <Input id='price' type='number' onChange={this.handleChange} value={this.state.price} placeholder='Price' />
            <Form.Field className="Button" type="submit" control={Button} >Add</Form.Field>
          </Form.Group>
        </Form>
        <Table className='Table1' >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>

            </Table.Row>
          </Table.Header>
          <Table.Body >  {
            this.state.Items_Category.map((item, i) => {
              return (
                <Table.Row key={i}>
                  {this.state.showInput ?
                   <React.Fragment>
                    <Table.Cell id={'name' + i} >
                      <Label>{item.name}</Label>
                    </Table.Cell>

                    <Table.Cell id={'desc' + i}>
                      <Label>{item.desc}</Label>
                    </Table.Cell>

                    <Table.Cell id={'price' + i}>
                      <Label>{item.price}</Label>
                    </Table.Cell>

                    <Table.Cell><Button negative onClick={() => this.onRemoveItem(i)}>Delete</Button></Table.Cell>
                    <Table.Cell><Button positive onClick={() => this.handleShowLabel(i)}> Edit</Button></Table.Cell>
                    </React.Fragment>


:
<React.Fragment>
                    <Table.Cell id={'name' + i} >
                      <Input type='text' className='text ui.label' onChange={() => this.Edit(i)} value={item.name}></Input>
                    </Table.Cell>

                    <Table.Cell id={'desc' + i}>
                      <Input className='textarea ui.label' onChange={() => this.Edit(i)} value={item.desc} ></Input>
                    </Table.Cell>

                    <Table.Cell id={'price' + i}>
                      <Input type='text' className='text ui.label' onChange={() => this.Edit(i)} value={item.price}></Input>
                    </Table.Cell>
                    <Table.Cell><Button positive onClick={() => this.handleShowLabel(i)}> Save</Button></Table.Cell>
                    </React.Fragment>
              }
                </Table.Row>

              )

            })
          }
          </Table.Body>
        </Table>
      </Container>

    );
  }
}

export default App;
