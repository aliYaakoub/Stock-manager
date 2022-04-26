import React from 'react';
import { ItemType } from '../types';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import Link from 'next/link';
import { useAppContext } from './../config/Context';

type Props = {
  data: ItemType;
}

const ItemCard: React.FC<Props> = ({ data }) => {

  const { setDeleteId } = useAppContext();

  return (
    <div className='w-80 bg-slate-700 rounded shadow-lg p-5 m-2'>
      <div className='border-b border-slate-600 py-4 px-2'>
        <p className='text-xs text-slate-400'>Item id: </p>
        <p>{data.itemId}</p>
      </div>
      <div className='border-b border-slate-600 py-4 px-2'>
        <p className='text-xs text-slate-400'>Item brand: </p>
        <p>{data.brand}</p>
      </div>
      <div className='border-b border-slate-600 py-4 px-2'>
        <p className='text-xs text-slate-400'>Item type: </p>
        <p>{data.type}</p>
      </div>
      <div className='border-b border-slate-600 py-4 px-2'>
        <p className='text-xs text-slate-400'>Item color: </p>
        <p>{data.color}</p>
      </div>
      <div className='py-4 px-2'>
        <p className='text-xs text-slate-400'>Item description: </p>
        <p>{data.description}</p>
      </div>
      <div className='flex items-center justify-end'>
        <Link href={`/edit-item/${data.id}`}><a className='bg-blue-500 hover:bg-blue-400 transition-colors p-2 rounded mx-2'><FiEdit2 size={18} /></a></Link>
        <button onClick={()=>setDeleteId(data.id)} className='bg-red-500 hover:bg-red-400 transition-colors p-2 rounded'><AiOutlineDelete size={18} /></button>
      </div>
    </div>
  );
};

export default ItemCard;