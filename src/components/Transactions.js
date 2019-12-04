import React, { Component } from 'react';
import Transaction from './Transaction'
import '../styles/transactions.css'
class Transactions extends Component {
    
    render() {
        
        return(
            <div className="">
                {this.props.transactions.map( (t) =>  
                <div className="transactions" key={t._id}> <Transaction data={t}  deleteTransaction={this.props.deleteTransaction}/> </div>
                    )}
            </div>
        )
    }
}

export default Transactions;