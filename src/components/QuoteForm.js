// import React, { Component } from 'react';
// import uuid from 'uuid';
// import { connect } from 'react-redux';
// import { addQuote } from '../actions/quotes';

// class QuoteForm extends Component {

//   state = {
//     ingredients: [], content:'', author: ''
//   }

//   handleOnChange = event => {
//     // Handle Updating Component State
//       this.setState({
//       [event.target.name]: event.target.value
//         })
//   }

//   handleOnSubmit = event => {
//     event.preventDefault()
 
//     // Create quote object from state
//    let quote = {...this.state, id: uuid}
//   //  console.log(this.props)
//     this.props.addQuote(quote)
//     this.setState({
//       content: '', 
//       author: ''
//     })
//     // Pass quote object to action creator
//     // Update component state to return to default state
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 col-md-offset-2">
//             <div className="panel panel-default">
//               <div className="panel-body">
//                 <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="content" className="col-md-4 control-label">Quote</label>
//                     <div className="col-md-5">
//                       <textarea name='content'
//                         className="form-control"
//                         onChange={this.handleOnChange}
//                         value={this.state.content}
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="author" className="col-md-4 control-label">Author</label>
//                     <div className="col-md-5">
//                       <input name='author'
//                         className="form-control"
//                         type="text"
//                         onChange={this.handleOnChange}
//                         value={this.state.author}
                        
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <div className="col-md-6 col-md-offset-4">
//                       <button type="submit" className="btn btn-default">Add</button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   // console.log(state)
//   return {quotes: state.quotes}
// }

// //add arguments to connect as needed
// export default connect(mapStateToProps, {addQuote})(QuoteForm);

import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';


class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const quote = {...this.state, id: uuid() };
    this.props.addQuote(quote);
    this.setState({
      content: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addQuote })(QuoteForm);