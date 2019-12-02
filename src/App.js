
import React, { Component } from 'react';
import './App.css';
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [
        
      ]
      
    }

  }

  calculateBalance = () => {
    let sum = 0
    let transactions = [...this.state.transactions]
    for (let i = 0; i < transactions.length; i++) {
      sum += transactions[i].amount
    }
    return sum
  }

  addDeposite = (amount , vendor, category) => {
    let transactions = [...this.state.transactions]
   transactions.push({amount: parseInt(amount), vendor: vendor, category: category})
    this.setState({
      transactions
    })
  }

  addWithdraw = (amount , vendor, category) => {
    let transactions = [...this.state.transactions]
   transactions.push({amount: -parseInt(amount), vendor: vendor, category: category})
    this.setState({
      transactions
    })
  }

  deleteTransaction = (i) => {
    let transactions = [...this.state.transactions]
    transactions.splice(i,1)
    this.setState({
      transactions
    })
  }
  
  async getTransactions() {
    return axios.get("http://localhost:4200/transactions")
  }

  async componentDidMount() {
    const response = await this.getTransactions()
    console.log(response)
    this.setState({ transactions: response.data })
  }


  render() {
    
    return (
      <div className="App">
        <div id="operations"><Operations addDeposite={this.addDeposite} addWithdraw={this.addWithdraw}/></div>
        <div id="balance">Balance: {this.calculateBalance()}</div>
        <Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} />
      </div>
    );

  }
}

export default App;
