import React, { Component } from 'react'

class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[{task: 'Check mails', id:1}, {task: 'Read Article', id:2}, {task: 'Complete Homework', id:3} ]
        }

    }

  handlechange=(e)=>{
    //   console.log(e.target.value);
        this.setState({
            currTask : e.target.value
        })
  }

 handlesubmit= ()=> {
     this.setState({
         tasks:[...this.state.tasks,{task: this.state.currTask, id: this.state.tasks.length}]
     })
 }

 handleDelete = (id) => {
    let narr = this.state.tasks.filter((taskObj)=>{
        return taskObj.id != id
    })
    this.setState({
        tasks:[...narr]
    })
}
  render() {
    return (
      <div>
        <input type="text" value={this.state.currTask} onChange={this.handlechange}/> 
        <button onClick={this.handlesubmit}> Submit </button> 

    <ul>
        {
            this.state.tasks.map((taskObj)=>(
                <div key = {taskObj.id} >
                <p> {taskObj.task} </p>
                <button onClick={()=>this.handleDelete(taskObj.id)}> Delete </button> 
                </div>
            ))
        }
    </ul>
      </div>
    )
  }
}

export default Todo;