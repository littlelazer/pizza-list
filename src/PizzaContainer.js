import React from 'react';
import Search from './components/Search';
import Button from './components/Button';
import List from './components/List';
import pizzas from './pizza.json';

class PizzaContainer extends React.Component {

  state = {
    data: [], 
    search: ''
  }

  componentDidMount = () => {
    const pizzaData = pizzas.pizzas;
      this.setState({ data: pizzaData }); 
  }

  sortPizzas = () => {
    const lowercasePizzas = this.state.data.map(item => item.toLowerCase());
    const sortedPizzas = lowercasePizzas.sort().reverse();
    this.setState({data : sortedPizzas});
  }

  handleInputChange = event => {
    this.setState({search : event.target.value});
  }

  filterPizzas = event => {
    event.preventDefault();
    const filteredData = this.state.data.map(item => item.toLowerCase()).filter((item => item.includes(this.state.search)));
    filteredData.length > 0 ? this.setState({ data : filteredData }) : 
      this.setState({ data : pizzas.pizzas });
  }

  resetData = event => {
    this.setState({
      data: pizzas.pizzas,
      search: ''
    })
    document.getElementById("search").value = '';
  }

  render() {
    return (
      this.state.data.length > 0 ?
        <div className="container">     
            <Search handleInputChange={this.handleInputChange} handleFormSubmit={this.filterPizzas}/>
            <Button name="SORT" function={this.sortPizzas} />
            <Button name="SHOW ALL" function={this.resetData}/>   
            {this.state.data.map((item => <List key={item} name={item} />))}
        </div>  

      : <div>
          <h1>PIZZAS ARE LOADING ... </h1>
        </div>
    );
  }
}

export default PizzaContainer;
