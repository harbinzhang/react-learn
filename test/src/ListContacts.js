import React, { Component } from 'react'
import propTypes from 'prop-types'

// class ListContacts extends Component {
    // render() {

function ListContacts (props) {
        return (
            <ol className='contact-list'>
                {props.contacts.map((contact) => (
                    <li key={contact.id} className='contact-list-item'>
                        <div className='contact-avatar'
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}
                        ></div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button 
                            // onClick={this.props.onDeleteContact(contact)}    // ????
                            onClick={()=>props.onDeleteContact(contact)}
                            className='contact-remove'>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        )
    }
// }

ListContacts.propTypes = {
    contacts: propTypes.array.isRequired,
    onDeleteContact: propTypes.func.isRequired,
}

export default ListContacts