import React from 'react';
import { connect } from 'react-redux';

  
class UserHeader extends React.Component {
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId)
    // }
    render() {
        const { user } = this.props;
        if (!user) {
            return <div><h2>JESUS IS LORD</h2></div>;
        }
        return <div className="header">{user.name}</div>
    }
};

const mapStateToProps = (state, ownProps) => {
    return { users: state.users.find(user => user.id === ownProps.userId ) };
}

export default connect(mapStateToProps) (UserHeader);