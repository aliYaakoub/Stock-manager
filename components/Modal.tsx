import React, { useState } from 'react'
import { useAppContext } from './../config/Context';

const Modal: React.FC = () => {

  const { setDeleteId, deleteId, deleteItem } = useAppContext();
  const [err, setErr] = useState(false);

  async function handleClick(){
    setErr(false);
    try {
      await deleteItem(deleteId);
      setDeleteId('');
    }
    catch(err){
      setErr(true);
    }
  }

  if(!deleteId) {
    return <></>;
  }

  return (
    <div className='fixed top-0 left-0 h-screen bg-black z-50 w-screen bg-opacity-90 flex justify-center items-center'>
      <div className='bg-white rounded shadow-lg p-5 flex flex-col'>
        {err ? 
          <>
            <p className='text-lg'>an error occured, please try again later</p>
            <div className='flex items-center justify-center pt-8'>
              <button
                onClick={handleClick}
                className='px-4 py-2 bg-red-500 shadow-lg text-white hover:bg-red-400 active:scale-95 disabled:opacity-50 mx-1 rounded w-full transition-all'
              >
                Retry
              </button>
              <button
                onClick={()=>setDeleteId('')}
                className='px-4 py-2 bg-slate-700 shadow-lg text-white hover:bg-slate-500 active:scale-95 disabled:opacity-50 mx-1 rounded w-full transition-all'
              >
                Cancel
              </button>
            </div>
          </>
          :
          <>
            <p className='text-lg'>Are you sure you want to delete this item ?</p>
            <div className='flex items-center justify-center pt-8'>
              <button
                onClick={handleClick}
                className='px-4 py-2 bg-red-500 shadow-lg text-white hover:bg-red-400 active:scale-95 disabled:opacity-50 mx-1 rounded w-full transition-all'
              >
                Confirm
              </button>
              <button
                onClick={()=>setDeleteId('')}
                className='px-4 py-2 bg-slate-700 shadow-lg text-white hover:bg-slate-500 active:scale-95 disabled:opacity-50 mx-1 rounded w-full transition-all'
              >
                Cancel
              </button>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Modal