import React, { Component } from 'react'
import Overview from './Overview'

class TaskAdd extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inputValue: { text: "" },
            inputArray: []
        }

        this.updateInputValue = this.updateInputValue.bind(this)
        this.addTask = this.addTask.bind(this)
    }

    addTask(e) {
        e.preventDefault()
        this.setState({
            inputArray: this.state.inputArray.concat(this.state.inputValue),
            inputValue: { test: "" }
        },  () => {
            console.log(this.state.inputArray)
        })
    }

    updateInputValue(e) {
        this.setState({
            inputValue: {
               text: e.target.value
            }
        })
    }

    render() {

        const { inputValue, inputArray } = this.state

        return (
            <div>
                <form>
                    <label htmlFor='taskInput'>Enter Taks</label>
                    <input type="text" id='taskInput' value={inputValue.text} onChange={this.updateInputValue}></input>
                    <button onClick={this.addTask}>Add</button>
                </form>
                <Overview tasks={inputArray}></Overview>
            </div>
        )
    }
}

export default TaskAdd