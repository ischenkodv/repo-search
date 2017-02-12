import React from 'react';
 
class RepoList extends React.Component {
  render() {
    if (!Array.isArray(this.props.repositories)) {
      return null;
    }

    return (
      <ul className="list-group">{
        this.props.repositories.map(repository => {
          return <li key={ 'repo_' + repository.name } className="list-group-item">
            <a href={repository.html_url} target="_blank">{ repository.name }</a>
          </li>
        })
      }</ul>
    );
  }
}

export default RepoList;
