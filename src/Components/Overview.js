import React from 'react'

export default function Overview(props) {

    const { tasks } = props

    function deleteTask (e) {
        
    }

    return (
        <ul>
            {tasks.map((task) => {
                return <li>{task.text} <button onClick={deleteTask}>Delete</button></li>
            })}
        </ul>
    )
}
