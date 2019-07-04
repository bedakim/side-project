import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends Component {
  state = {
    id: ""
  };
  handleChange = e => {
    this.setState({
      id: e.target.value
    });
    console.log(this.state.id);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      id: ""
    });
  };
  render() {
    return (
      <Router>
        <div>
          <label htmlFor="">Search Your Github Id</label>
          <br />
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.id}
              onChange={this.handleChange}
              placeholder="..."
            />
            <button type="submit">찾기</button>
          </form>
          <Route exact path="/" component={Pro} />
          <Route path="/results" component={Results} />
        </div>
      </Router>
    );
  }
}

const Pro = () => {
  return <div>RESULT</div>;
};
const Results = () => {
  return +(
    <ul>
      <li>User Name:</li>
      <li>Rocation:</li>
      <li>User Number:</li>
    </ul>
  );
};
export default Search;
