import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {
    
    render() {
        console.log(this.props.transactions)
        return(
            <div className="transactions">
                {this.props.transactions.map( (t) =>  
                <div key={t._id}> <Transaction data={t}  deleteTransaction={this.props.deleteTransaction}/> </div>
                    )}
            </div>
        )
    }
}

export default Transactions;