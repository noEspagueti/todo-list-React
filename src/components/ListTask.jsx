import { useState } from 'react';
import { FiTrash2, FiEdit, FiCheckCircle } from "react-icons/fi";

export const ListTask = ({ state, removeTask }) => {


    return (
        <div className="py-4 mt-8 grid place-content-center">
            <ul>
                {
                    state.map((item) => {
                        return (
                            !!item.task &&
                            <Li key={item.id} item={item} removeTask={removeTask}  />
                        )
                    })
                }
            </ul>
        </div>

    );
};


const Li = ({ item, removeTask, editTask }) => {
    return (
        <li className='bg-slate-800 text-cyan-50 px-5 py-5'>
            <section className="flex items-center w-14" >
                <a href="#"
                    className='hover:text-indigo-400'
                ><FiCheckCircle /></a>
            </section>
            <section className='block justify-start text-task'>
                <p className='text-sm'><i>title</i></p>
                <p className='text-2xl'>{item.task}</p>
            </section>
            <section className='grid gap-y-5 w-5'>
                <a href="#" className='hover:text-indigo-400'
                    onClick={editTask}
                ><FiEdit /></a>
                <a href="#" className='hover:text-red-500 fade'
                    onClick={() => removeTask(item.id)}
                ><FiTrash2 /></a>
            </section>
        </li>
    );
};