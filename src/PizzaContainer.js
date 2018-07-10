import React from 'react';
import Search from './components/Search';
import Button from './components/Button';
import List from './components/List';
import pizzas from './pizza.json';

class PizzaContainer extends React.Component {

  state = {
    data: [],
    // EC: You should think about using a less generic name for this property
    search: ''
  }

  componentDidMount = () => {
    const pizzaData = pizzas.pizzas;
      this.setState({ data: pizzaData }); 

    // EC: here is where we will work on implementing the fetch request to return a list of pizzas
  }

  sortPizzas = () => {
    const lowercasePizzas = this.state.data.map(item => item.toLowerCase());
    const sortedPizzas = lowercasePizzas.sort().reverse();
    this.setState({data : sortedPizzas});

    // EC: it might be worth adding a separate property in state to handle the sorted list, so that
    // you don't end up overwriting your initial data.
  }

  handleInputChange = event => {
    this.setState({search : event.target.value});
  }

  filterPizzas = event => {
    event.preventDefault();
    const filteredData = this.state.data.map(item => item.toLowerCase()).filter((item => item.includes(this.state.search)));
    // EC: separating some of these inline functions out migh tmake it a little easier to read and understand
    filteredData.length > 0 ? this.setState({ data : filteredData }) : 
      this.setState({ data : pizzas.pizzas });
  }

  resetData = event => {
    this.setState({
      data: pizzas.pizzas,
      search: ''
    })
    document.getElementById("search").value = '';
    // EC: Not sure why the previous line is necessary
    // Note the number of times you end up doing pizzas.pizzas in the file
  }

  render() {
    return (
      this.state.data.length > 0 ?
        <div className="container">     
            <Search handleInputChange={this.handleInputChange} handleFormSubmit={this.filterPizzas}/>
            <Button name="SORT" function={this.sortPizzas} />
            <Button name="SHOW ALL" function={this.resetData}/>   
            {this.state.data.map((item => <List key={item} name={item} />))}
            {
              // EC: renaming the List component to make it a little bit less generic might help
            }
        </div>  

      : <div>
          <h1>PIZZAS ARE LOADING ... </h1>
        </div>
    );
  }
}

export default PizzaContainer;
