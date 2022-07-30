import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/Task';

//importamos la hora de estilos task.scss
import "../../styles/task.scss";


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    //estado del componente
    const [task, setTask] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componente
    useEffect(() => {
      console.log("Task state has been modified")
        setLoading(false);
      return () => {
        console.log("Task list component is going to unmount...")

      }
    }, [task])
    
   

    const changeCompleted = (id) => {
        console.log("TODO: Cambiar estado de una tarea");
    }

    return (
        <div>
            <div>
               <h1>
                  Your Task:
               </h1> 
            </div>
            {/**TODO: aplicaar un for/map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
