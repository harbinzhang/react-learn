import React, { Component } from 'react'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'

class Note extends Component {
    render() {
        return (
            <div className="note">
                <p>Learn it</p>
                <span>
                    <button onClick={this.edit} id="edit"><FaPencilAlt /></button>
                    <button onClick={this.remove} id="remove"><FaTrash /></button>
                </span>
            </div>
        )
    }
}

export default Note