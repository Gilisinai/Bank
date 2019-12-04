
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import axios from 'axios'
import Category from './components/Category'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faPlusCircle , faChartLine, faAlignJustify} from '@fortawesome/free-solid-svg-icons'

class App extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      date: ""

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

    axios.post(`http://localhost:4200/transaction`, { amount: parseInt(amount), vendor: vendor, category: category.toLowerCase(), date: new Date() })
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
    axios.post(`http://localhost:4200/transaction`, { amount: -parseInt(amount), vendor: vendor, category: category.toLowerCase(), date: new Date() })
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
          <div className="header">
            <h1>Expense Tracker</h1>
          </div>

          <Route path="/add" exact component={Operations}><div id="operations"><Operations addDeposite={this.addDeposite} addWithdraw={this.addWithdraw} /></div></Route>

          
          <div className="main-routes">
            <Route path="/" exact component={Transactions}>
            <div id="balance" >
            
            <h1 className={this.calculateBalance() > 500 ? "green" : "red"}> {this.calculateBalance()} <FontAwesomeIcon icon={faDollarSign} /> </h1>
            
          </div>
              <Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} /></Route>
            <Route path="/category"> <Category transactions={this.state.transactions} /></Route>
          </div>
          <div className="footer">
          <div className="feature"><Link to="/"><FontAwesomeIcon icon={faAlignJustify} /></Link></div>
            <div className="white"><Link to="/add" ><button className="plus"><FontAwesomeIcon icon={faPlusCircle} /></button></Link>
            </div>
            <div className="feature"> <Link to="/category"><FontAwesomeIcon icon={faChartLine} /></Link></div>
          </div>
        </div>
      </Router>
    );

  }
}

export default App;
