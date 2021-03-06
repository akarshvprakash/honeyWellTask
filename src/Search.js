import React, { Component } from 'react';
import { fetchUsers } from './store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Search extends Component{

    constructor() {
        super();
        this.state={
            usename: ''
        }
    }

    searchUser= (e) => {
        let username = this.state.usename;
        this.props.fetchUsers(username);
    }

    changeHandler=(e) => {
        this.setState({
            usename: e.target.value
        })
    }


    render() {
        return (
            <div><input type={"text"} onChange={this.changeHandler} /><button onClick={this.searchUser}>search</button>
                <div>
                    <ul>
                        <li><img src={this.props.userData.avatar_url || ''} width='50' height='50'/></li>
                        <li>name : {this.props.userData.name || ''}</li>
                        <li>bio:{this.props.userData.bio ||''}</li>
                        <li>{ this.props.userData.alreadyViewd ? <label className={'savedlabel'}>Already Viewed</label>: null }</li>
                    </ul>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    userData: state
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers: fetchUsers
}, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search );
