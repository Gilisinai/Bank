import React, { Component } from 'react';
import '../styles/category.css'

class Category extends Component {

    findCategory =() => {
        let transactions = this.props.transactions
        let categories = []
        for(let i = 0; i < transactions.length; i++) {
            if(!categories.includes(transactions[i].category)) {
                categories.push(transactions[i].category)
            } 
        }
        return categories
    }

    sortByCategory = () => {
        let categories = this.findCategory()
        let transactions = this.props.transactions
        let result = []
        for(let i = 0; i < categories.length ; i++){
              let arr = transactions.filter(c => c.category === categories[i]).map(c => c)
              result.push(arr)
        }
        return result
    }

    render() {
        let category = this.sortByCategory()
        return (
            <div className="category-container">
                {category.map( (m,i) => <div key ={i}>
                    <div className="category-head">
                   <h3 > {m[0].category} </h3>
                    </div>
                <div key={i}> {m.map((m,i) => <div className="expense" key={i}>{m.vendor} {m.amount} {m.date} </div>)} </div>
                    </div>)}
            </div>
        )
    }
}

export default Category;