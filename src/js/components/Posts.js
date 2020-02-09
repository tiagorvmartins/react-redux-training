import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataSaga } from "../actions/index";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDataSaga();
  }

  render() {
    return (
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles
  };
}

export default connect(
  mapStateToProps,
  { getDataSaga }
)(Post);