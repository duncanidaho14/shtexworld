import React, { Component } from 'react';
import './Routes.scss';
import TodoList from '../Todo/TodoList';

// const Routes = {
//     home: '#/',
//     completeTasks: '#/complete-tasks',
//     imcompleteTasks: '#/incomplete-tasks'
// };

// class Routes extends Component {
//     constructor(props) {
//         super(props);
//     }

//     renderRoute() {
//         switch(window.location.hash) {
//             case Routes.home: return <App />;
//             case Routes.completeTasks: return <TodoList />;
//             case Routes.incompleteTasks: return <TodoList />;
//             default: return <NotFound />;
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <ul>
//                     <li><a href={Routes.home}>Home</a></li>
//                     <li><a href={Routes.home}>Home</a></li>
//                     <li><a href={Routes.home}>Home</a></li>
//                 </ul>
//             </div>
//         );
//     }
// }