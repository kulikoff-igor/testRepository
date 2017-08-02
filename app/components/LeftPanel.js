import React from 'react';

export default class LeftPanel extends React.Component {

    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item justify-content-between list-group-item-action">
                    Все заплонированные
                    <span className="badge badge-default badge-pill">14</span>
                </li>
                <li className="list-group-item justify-content-between list-group-item-action">
                    Сегодня
                    <span className="badge badge-default badge-pill">2</span>
                </li>
                <li className="list-group-item justify-content-between list-group-item-action">
                    Следующие 7 дней
                    <span className="badge badge-default badge-pill">1</span>
                </li>
                <li className="list-group-item justify-content-between list-group-item-action">
                    Выполненные задачи
                    <span className="badge badge-default badge-pill">1</span>
                </li>
            </ul>
        )
    }
}
