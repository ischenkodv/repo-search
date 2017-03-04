import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
 
class SearchForm extends React.Component {

  constructor() {
    super();

    this.state = { query: '' };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e, value) {
    this.setState({ query: value });
  }

  submit(e) {
    e.preventDefault();

    if (!this.props.disabled && typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(this.state.query.trim());
    }
  }

  render() {
    return (
      <form className="form-inline" onSubmit={ this.submit }>
        <div className="form-group">
          <TextField id="search-field" hintText="Enter user name" disabled={ this.props.disabled } onChange={ this.onChange } value={ this.state.query } />
          <RaisedButton primary={true} disabled={ this.props.disabled } label="Search" onClick={ this.submit } />
        </div>
      </form>
    );
  }
}

export default SearchForm;
