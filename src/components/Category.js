import React, { Component } from 'react';
import '../styles/category.css'
import Moment from 'react-moment';
import Transaction from './Transaction'
class Category extends Component {

    


    findCategory = () => {
        let transactions = this.props.transactions
        let categories = []
        for (let i = 0; i < transactions.length; i++) {
            if (!categories.includes(transactions[i].category)) {
                categories.push(transactions[i].category)
            }
        }
        return categories
    }

    sortByCategory = () => {
        let categories = this.findCategory()
        let transactions = this.props.transactions
        let result = []
        for (let i = 0; i < categories.length; i++) {
            let arr = transactions.filter(c => c.category === categories[i]).map(c => c)
            result.push(arr)
        }
        return result
    }

    

    render() {
        let category = this.sortByCategory()
        return (
            <div className="category-container">
                {category.map((m, i) => <div key={i}>
                    <div className="category-head">
                        <h3  > {m[0].category.charAt(0).toUpperCase() + m[0].category.slice(1)} </h3>
                    </div>
                    <div key={i}> {m.map((m, i) =>
                     <div className="expense" key={i}>
                        <div>
                            {m.vendor}
                        </div><div className={m.amount > 0 ? "green" : "red"}>
                            {m.amount}
                        </div><div>
                            {m.date.substring(0, 10)}
                        </div>
                    </div>
                    )}
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Category;