import React from 'react';

export default class AddTask extends React.Component {

    render() {
        return (
            <div className="add-task">
                <div className="add-task-input-text">
                    <input type="text" class="form-control" placeholder="Данные по новой задаче"/>
                        <input className="form-control" type="date" id="date-input"/>
                </div>
                <div className="add-task-buttom">
                    <button type="button" className="btn btn-sm btn-outline-success">Добавить задачу</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Отменить</button>
                </div>
            </div>
        )
    }
}
