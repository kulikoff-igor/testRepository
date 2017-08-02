import React from 'react';

export default class ViewTask extends React.Component {

    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item justify-content-between list-group-item-action">
                    <div className="task">
                        <input className="form-check-input" type="checkbox"/>
                            <p className="task-text">Сверстать этот ебучий сайт)</p>
                            <span className="badge badge-info badge-pill ">сегодня</span>
                    </div>

                </li>
                <li className="list-group-item justify-content-between list-group-item-action">
                    <div className="task">
                        <input className="form-check-input" type="checkbox"/>
                            <p className="task-text">
                                Все еще ваерстать этот ебучий сайт)</p>
                            <span className="badge badge-info badge-pill">сегодня</span>
                    </div>
                </li>
                <li className="list-group-item justify-content-between list-group-item-action">
                    <div className="task">
                        <input className="form-check-input" type="checkbox"/>
                            <p className="task-text">
                                Завтра поехать в колхоз</p>
                            <span className="badge badge-info badge-pill">завтра</span>
                    </div>
                </li>
                <li className="list-group-item justify-content-between list-group-item-action">
                    <div className="task">
                        <input className="form-check-input" type="checkbox"/>
                            <p className="task-text">
                                Уебать нахуй в армию на ебучие 37 суток и забыть все что делал сейчас)</p>
                            <span className="badge badge-info badge-pill ">07.08.2017</span>
                    </div>
                </li>
            </ul>
        )
    }
}
