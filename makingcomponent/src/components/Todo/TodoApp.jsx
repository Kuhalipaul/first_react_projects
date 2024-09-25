import { useState } from 'react';
import TodoItem from './TodoItem/TodoItem';

function TodoApp() {
const task=['eat','sleep','code','again','repeat'];
    return (
        <div className='w-64 border-2 border-dashed border-green my-9'>
            <ol>
            {task.map((task, index) => (
                    <TodoItem key={index} task={task} />
                ))}
            </ol>
        </div>
    )
}

export default TodoApp;
