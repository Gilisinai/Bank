import React, { Component } from 'react'

class Operations extends Component {

    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: "",
            category: ""
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

            <input type="number" name="amount" placeholder="Amount" onChange={this.updateText}/>
            <input type="text" name="vendor" placeholder="Vendor" onChange={this.updateText}/>
            <input type="text" name="category" placeholder="Category" onChange={this.updateText}/>

            <button className="deposite" onClick={this.addDeposite}>Deposite</button>
            <button className="Withdraw" onClick={this.addWithdraw}>Withdraw</button>

            </div>

     )
    }
}

export default Operations