import React, { Component } from 'react'
import { connect } from 'react-redux'
export default class BookDetail extends Component {
  render() {
    if(!this.props.book){
      return <div>No book selected!</div>
    }
    return (
      <div>
        <h3>
           Details about book:
        </h3>
        <p>{this.props.book.title}</p>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
