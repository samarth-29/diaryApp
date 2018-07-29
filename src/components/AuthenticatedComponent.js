import React, {Component} from 'react';
import {connect} from 'react-redux';
//withrouter we can access the history object
import {withRouter} from 'react-router-dom';


class AuthenticatedComponent extends Component {
  componentDidUpdate() {
    // make sure loading is done and if no user then push user to login
    const {userLoading, user} = this.props;
    if(userLoading === false && !user) {
      this.props.history.push('/login')
    }
  }

  render() {
    const {user, userLoading, children} = this.props;
    return (userLoading === false && user) ? <div>{children}</div> : null;
  }
}




function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps)(AuthenticatedComponent));
