import React from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/search';
import RepoList from './RepoList'
import SearchForm from './SearchForm'

class App extends React.Component {

  constructor() {
    super();

    this.search = this.search.bind(this);

    this.state = { };
  }

  search(query) {
    if (query.length > 0 && query !== this.props.query) {
      this.props.search(query);
    }
  }

  render() {
    let repositories = this.props.repositories;
    let contentBlock, queryBlock;

    if (this.props.error) {
      contentBlock = <div className="alert alert-danger" role="alert">{ this.props.error.message }</div>
    } else if (this.props.loading === true) {
      contentBlock = <div className="alert alert-info">Loading...</div>
    } else if (this.props.query && Array.isArray(repositories)) {

        if (repositories.length > 0) {
          contentBlock = <RepoList repositories={ repositories } />
          queryBlock = <h3>Repositories of <em>{ this.props.query }</em>:</h3>
        } else {
          contentBlock = <p>User <em>{ this.props.query }</em> has no repositories</p>
          queryBlock = null;
        }

    } else {
      contentBlock = <p className="help-block">Enter user name and click the Search button to search GitHub for user repositories.</p>;
    }

    return (
      <div className="container">
        <div className="wrapper">
          <SearchForm onSubmit={ this.search } disabled={this.props.loading } />
          <div className="search-results row">
            <div className="col-xs-12">
              { queryBlock }
              { contentBlock }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.search.loading,
    query: state.search.query,
    repositories: state.search.repositories,
    error: state.search.error
  };
}

export default connect(mapStateToProps, { search })(App);
