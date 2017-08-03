import React from 'react';
import Task from './Task.js'

export default class TaskList extends React.Component {


    render() {
        const list = [{
            textTask: "Сверстать этот ебучий сайт)",
            dateTask: "сегодня"
        },
            {
                textTask: "Уебать нахуй в армию на ебучие 37 суток и забыть все что делал сейчас)",
                dateTask: "07.08.2017"
            },
            {
                textTask: "Уебать нахуй в армию на ебучие 37 суток и забыть все что делал сейчас)",
                dateTask: "07.08.2017"
            }
        ];

        return (

            <ul className="list-group">
                {list.map((task, index) => {
                    return <Task textTask={task.textTask} dateTask={task.dateTask}/>
                })}
            </ul>
        )
    }
}
