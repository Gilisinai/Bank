
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import axios from 'axios'
import Category from './components/Category'

class App extends Component {

  constructor() {
    super()
    this.state = {
      transactions: []

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

  addDeposite = (amount, vendor, category) => {

    axios.post(`http://localhost:4200/transaction`, { amount: parseInt(amount), vendor: vendor, category: category.toLowerCase() })
      .then(res => {
        console.log(res.data);
        let transactions = [...this.state.transactions]
        transactions.push(res.data)
        this.setState({
          transactions
        })
      })
  }

  addWithdraw = (amount, vendor, category) => {
    axios.post(`http://localhost:4200/transaction`, { amount: -parseInt(amount), vendor: vendor, category: category.toLowerCase() })
      .then(res => {
        console.log(res.data);
        let transactions = [...this.state.transactions]
        transactions.push(res.data)
        this.setState({
          transactions
        })
      })
  }

  deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:4200/transaction/${id}`)
    this.componentDidMount()

  }

  async getTransactions() {
    return axios.get("http://localhost:4200/transactions")
  }

  async componentDidMount() {
    const response = await this.getTransactions()
    this.setState({ transactions: response.data })
  }


  render() {

    return (
      <Router>
        <div className="App">
          <div className="main-links">
            <Link to="/">Overview</Link>
            <Link to="/add">Add Transaction</Link>
            <Link to="/category">By Category</Link>
          </div>

          <Route path="/add" exact component={Operations}><div id="operations"><Operations addDeposite={this.addDeposite} addWithdraw={this.addWithdraw} /></div></Route>

          <Route path="/" exact component={Transactions}>
            <div id="balance">Balance: {this.calculateBalance()}</div>
            <Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} /></Route>
          <Route path="/category"> <Category transactions={this.state.transactions} /></Route>
        </div>
      </Router>
    );

  }
}

export default App;
