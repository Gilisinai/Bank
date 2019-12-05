import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SimpleSnackbar from './Snackbar'
import { Snackbar } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons'
import '../styles/operations.css'

class Operations extends Component {

    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: "",
            category: "",
            date: ""
        }
        this.updateText = this.updateText.bind(this)
    }
    addDeposite = () => {
        this.props.addDeposite(this.state.amount, this.state.vendor, this.state.category)
        
    }

    addWithdraw = () => {
        this.props.addWithdraw(this.state.amount, this.state.vendor, this.state.category)
    }

    updateText = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }






    render() {

        return (
            <div className="operations">
                
                <div>
                <input type="number" className="input"  name="amount" placeholder="Amount" onChange={this.updateText} />
                </div> <div>
                <input type="text" className="input"  name="vendor" placeholder="Vendor" onChange={this.updateText} />
                </div> <div>
                <input type="text" className="input"  name="category" placeholder="Category" onChange={this.updateText} />
                </div>
                <Link to="/"><button className="expensebtn deposite" onClick={this.addDeposite}>Deposite</button></Link>
                <Link to="/"><button className="expensebtn withdraw" onClick={this.addWithdraw}>Withdraw</button></Link>
                
            </div>

        )
    }
}

export default Operations