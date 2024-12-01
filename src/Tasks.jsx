import { useState } from "react";
import Task from "./Task";

function Tasks(){
    const [task,setTasks] = useState([]);

    const TaskForm = ()=>{

        const [title,setTitle] = useState("");
        const [day,setDay] = useState("");
        const [hour,setHour] = useState("");
        const [minute,setMinute] = useState("");
        const [date,setDate] = useState("");
        const [description,setDescription] = useState("");
        const [state,setState] = useState("todo");

        const handleSubmit = (e)=>{
            e.preventDefault();
            setTasks([...task,<Task title={title} day={day} hour={hour} minute={minute} date={date} content={description} state={state} />])
        }
        const handleTitle = (e)=>{
            setTitle(e.target.value.trim());
        }
        const handleDay = (e)=>{
            setDay(e.target.value);
        }
        const handleMinute = (e)=>{
            setMinute(e.target.value);
        }
        const handleHour = (e)=>{
            setHour(e.target.value);
        }
        const handleDate = (e)=>{
            setDate(e.target.value);
        }
        const handleDescription = (e)=>{
            setDescription(e.target.value);
        }
        const handleState = (e)=>{
            setState(e.target.value);
        }
        const [visibleForm,setVisibleForm] = useState(false);
        return(
            <div>
            <button onClick={()=>{setVisibleForm(!visibleForm)}} className="bg-green-600 m-5 text-white font-bold p-2 rounded block px-10 text-lg hover:scale-105 transition-all">new Task</button>
            <form onSubmit={handleSubmit} className={`border-2 border-blue-200 m-5 rounded p-2 ${visibleForm?"flex":"hidden"} flex-col`}>
                <div className="flex gap-2 items-center p-2 justify-between">
                    <label>TASK title</label>
                    <input required onChange={handleTitle} type="text" placeholder="title" className="border-2 border-blue-400 rounded p-1 outline-none w-1/2"/>
                </div>
                <div className="flex gap-2 items-center p-2 justify-between">
                    <div>TASK time</div>
                    <div className="flex flex-col justify-end w-1/2 gap-1">
                        <input onChange={handleDay} required type="number" min={0} max={29} placeholder="day" className="border-2 border-blue-400 rounded p-1 outline-none"/>
                        <input onChange={handleHour} required type="number" min={0} max={23} placeholder="hour" className="border-2 border-blue-400 rounded p-1 outline-none"/>
                        <input onChange={handleMinute} required type="number" min={1} max={59} placeholder="minute" className="border-2 border-blue-400 rounded p-1 outline-none"/>
                    </div>
                </div>
                <div className="flex gap-2 items-center p-2 justify-between">
                    <label>TASK DATE</label>
                    <input required onChange={handleDate} type="date" className="border-2 border-blue-400 rounded p-1 outline-none w-1/2"/>
                </div>
                <div className="flex gap-2 items-center p-2 justify-between">
                    <label>Task description</label>
                    <textarea required onChange={handleDescription} className="border-2 border-blue-400 rounded p-2 outline-none w-1/2" placeholder="description"></textarea>
                </div>
                <div className="flex gap-2 items-center p-2 justify-between">
                    <label>Task state</label>
                    <select required onChange={handleState} className="border-2 border-blue-400 rounded p-2 outline-none w-1/2">
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <button className="bg-blue-500 text-white font-bold p-2 rounded block m-auto mt-10 px-10 text-lg hover:scale-105 transition-all">create Task</button>
            </form>
            </div>
        )
    }
    return(
        <div>
            <TaskForm/>
            {task}
        </div>
    )
}
export default Tasks;