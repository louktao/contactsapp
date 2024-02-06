import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import ContactList from './ContactsList';

class ContactsApp extends Component{
    constructor(){
        super();
        this.state={
            filterText: ''
        };
    }

    handleUserInput(searchTerm){
        // 入力値がステータスの変数に設定
        this.setState({filterText:searchTerm})
    }

    render(){
        return (
            <div>
                <p>
                    タイトル：<SearchBar filterText={this.state.filterText} 
                                        onUserInput={this.handleUserInput.bind(this)} />
                </p>
                <ContactList contacts={this.props.contacts} 
                             filterText={this.state.filterText} />
            </div>
        )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsApp;