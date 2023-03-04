import React from 'react'
import { FiPlus } from "react-icons/fi";

export const InputText = ({ onChange, refInput }) => {
  return (
    <div className='p-8 mr-0 flex justify-center'>
      <form action="#" className='p-2 w-2/5 flex' onSubmit={onChange} >
        <input
          ref={refInput}
          name="TaskInput"
          type="text"
          className='px-3 h-11 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1'
          placeholder='To do list'
        />
        <button
          className='prose lg:prose-xl prose-neutral bg-indigo-500 hover:bg-indigo-300 text-cyan-50  w-16 h-11 flex justify-center items-center'
          type='submit'
        >
          <FiPlus />
        </button>
      </form>
    </div>

  );

};
