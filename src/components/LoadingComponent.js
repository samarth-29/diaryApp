import React, {Component} from 'react';
import {connect} from 'react-redux';

//withrouter we can access the history object
import {withRouter} from 'react-router-dom';
import {getUser} from '../actions/userAction';
import {getNotes} from '../actions/notesAction';
import Loading from './Loading';

class LoadingComponent extends Component {
  componentWillMount() {
    const {userLoading, notesLoading} = this.props;

    if(userLoading === undefined ) {
      this.props.getUser();
    }

    if(notesLoading === undefined) {
      this.props.getNotes();
    }
  }

  componentWillReceiveProps(nextProps) {
    //wait for user to get authenticated
    if(nextProps.notesLoading === -1 && nextProps.user !== null) {
      this.props.getNotes();
    }

  }


  render() {
    const {userLoading, notesLoading, children} = this.props;
    if((!userLoading && !notesLoading) || this.props.user === null) {
      return (
        <div>
          {children}
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}


function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    notesLoading: state.loading.notes,
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, {getUser, getNotes})(LoadingComponent));
