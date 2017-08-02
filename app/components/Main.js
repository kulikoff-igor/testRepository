import React from 'react';
import ReactDOM from 'react-dom';
import LeftPanel from './LeftPanel.js'
import ViewTask from './ViewTask.js'
import AddTask from './AddTask.js'

class MainComponent extends React.Component {

    render() {
        return (
            <div className="menu">
                <i className="material-icons">date_range</i>
                <div className="search">
                    <i className="material-icons">search</i>
                    <input type="text" className="form-control" placeholder="Search for..."/>
                </div>
                <i className="material-icons">note_add</i>
            </div>
        )
    }
}

ReactDOM.render(
    <MainComponent/>, document.getElementById('menu')
);
ReactDOM.render(
    <LeftPanel/>, document.getElementById('left-panel')
);
ReactDOM.render(
    <ViewTask/>, document.getElementById('view-task')
);
ReactDOM.render(
    <AddTask/>, document.getElementById('add-task')
);