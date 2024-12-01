import { CheckBadgeIcon, CheckIcon, ClockIcon} from "@heroicons/react/16/solid";
import { TrophyIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Task(props){
    const [done,setDone] = useState(props.state);
    const handleTodo = ()=>{
        setDone("todo");
    }
    const handleDoing = ()=>{
        setDone("doing");
    }
    const handleDone = ()=>{
        setDone("done");
    }
    return(
        <div className="border-2 mx-2 p-2">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl">{props.title}</h1>
                <div className="font-semibold">
                    <p>{props.date}</p>
                    <p>time : {props.day}d {props.hour}h {props.minute}m</p>
                </div>
                <div className={`flex gap-1 font-bold ${done==="todo"?"":"hidden"}`}>
                    <ClockIcon className="w-5"/>
                    <p>{done}</p>
                </div>
                <div className={`flex gap-1 font-bold text-green-600 ${done==="done"?"":"hidden"}`}>
                    <CheckBadgeIcon className="w-5"/>
                    <p>{done}</p>
                </div>
                <div className={`flex gap-1 font-bold text-yellow-500 ${done==="doing"?"":"hidden"}`}>
                    <TrophyIcon className="w-5"/>
                    <p>{done}</p>
                </div>
            </div>
            <div>
                <p className="ml-3 m-3">{props.content}</p>
            </div>
            <div className="flex gap-3 justify-between mt-5">
                <button disabled={done!=="todo"?false:true} onClick={handleTodo} 
                    className={`flex items-center gap-1 p-1 border-2 rounded w-fit ${done==="todo"?"text-gray-400 border-gray-400 hover:bg-white hover:text-gray-400 hover:scale-100":"border-blue-500 hover:scale-105 text-blue-700 font-bold hover:bg-blue-500 hover:text-white transition-all hover:cursor-pointer"} `}>
                    <ClockIcon className="w-5 hover:cursor-pointer"/>
                    <label className="hover:cursor-pointer">make as todo</label>
                </button>
                <button disabled={done!=="doing"?false:true} onClick={handleDoing} 
                    className={`flex items-center gap-1 p-1 border-2 rounded w-fit ${done==="doing"?"text-gray-400 border-gray-400 hover:bg-white hover:text-gray-400 hover:scale-100":"border-yellow-500 hover:scale-105 text-yellow-700 font-bold hover:bg-yellow-500 hover:text-white transition-all hover:cursor-pointer"} `}>
                    <TrophyIcon className="w-5 hover:cursor-pointer"/>
                    <label className="hover:cursor-pointer">make as doing</label>
                </button>
                <button disabled={done!=="done"?false:true} onClick={handleDone} 
                    className={`flex items-center gap-1 p-1 border-2 rounded w-fit ${done==="done"?"text-gray-400 border-gray-400 hover:bg-white hover:text-gray-400 hover:scale-100":"border-green-500 hover:scale-105 text-green-700 font-bold hover:bg-green-500 hover:text-white transition-all hover:cursor-pointer"} `}>
                    <CheckIcon className="w-5 hover:cursor-pointer"/>
                    <label className="hover:cursor-pointer">make as done</label>
                </button>
            </div>
        </div>
    )
}
export default Task;