import React from 'react';

export default class Task extends React.Component {

    render() {
        return (
            <li className="list-group-item justify-content-between list-group-item-action">
                <div className="task">
                    <input className="form-check-input" type="checkbox"/>
                    <p className="task-text">
                        {this.props.textTask}</p>
                    <span className="badge badge-info badge-pill ">{this.props.dateTask}</span>
                </div>
            </li>

        )
    }
}
