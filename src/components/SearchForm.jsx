import React from 'react';
 
class SearchForm extends React.Component {

  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();

    if (!this.props.disabled && typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(this.refs.query.value.trim());
    }
  }

  render() {
    return (
      <form className="form-inline" onSubmit={ this.submit }>
        <div className="form-group">
          <input type="text" name="query" ref="query" className="form-control" placeholder="Enter user name" disabled={ this.props.disabled } />
          <button type="submit" className="btn btn-primary" name="search" disabled={ this.props.disabled }>Search</button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
