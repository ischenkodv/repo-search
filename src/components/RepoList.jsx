import React from 'react';
import {List, ListItem} from 'material-ui/List';
import CodeIcon from 'material-ui/svg-icons/action/code';
import { deepPurple800, cyan800 } from 'material-ui/styles/colors';

 
class RepoList extends React.Component {

  gotoRepo(repository) {
    window.open(repository.html_url);
  }

  render() {
    if (!Array.isArray(this.props.repositories)) {
      return null;
    }

    return (
      <List>{
        this.props.repositories.map(repository => {
          return <ListItem
            key={ 'repo_' + repository.name }
            leftIcon={<CodeIcon color={ cyan800 } />}
            primaryText={ repository.name }
            secondaryText={ repository.description }
            onClick={ () => { this.gotoRepo(repository); }}
          ></ListItem>
        })
      }</List>
    );
  }
}

export default RepoList;
