import Head from 'next/head';
import React, { useState } from 'react';
import AppInput from '../components/AppInput';
import NavBar from '../components/nav';
import AppButton from './../components/AppButton';
import { useAppContext } from './../config/Context';

const AddItem: React.FC = () => {

  const [itemId, setItemId] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const { addItem } = useAppContext();
  const [added, setAdded] = useState(false);
  const [err, setErr] = useState(false);

  async function handleClick(){
    setErr(false);
    try{
      await addItem(itemId, brand, type, description, color);
      setItemId('');
      setBrand('');
      setType('');
      setDescription('');
      setColor('');
      setAdded(true);
    }
    catch(err){
      setErr(true);
    }
  }

  return (
    <>
      <Head>
        <title>Add Item</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className='min-h-[calc(100vh-5rem)] bg-slate-600 flex items-center justify-center flex-col text-white'>
        {err ? 
          <div className='w-80'>
            <p className='text-center text-xl'>An error occured, please try again later.</p>
            <AppButton text='Retry' disabled={false} onClick={handleClick} />
          </div>
          :
          added ?
            <div className='w-60'>
              <p className='text-center text-xl'>Item Added Successfully</p>
              <AppButton text='Add another item' disabled={false} onClick={()=>setAdded(false)} />
            </div>
            : 
            <div className='w-96'>
              <AppInput label='Item id :' placeholder='Item id...' value={itemId} onChange={setItemId} />
              <AppInput label='Brand :' placeholder='Brand...' value={brand} onChange={setBrand} />
              <AppInput label='Type :' placeholder='Type...' value={type} onChange={setType} />
              <div className='flex flex-col'>
                <label htmlFor="searchId" className='my-5 text-lg'>Description :</label>
                <textarea
                  id='searchId'
                  value={description}
                  placeholder='Description...'
                  onChange={(e)=>setDescription(e.target.value)}
                  className='px-2 bg-slate-400 py-2 rounded text-black placeholder:text-slate-600 outline-none w-full resize-none'
                />
              </div>
              <AppInput label='Color :' placeholder='Color...' value={color} onChange={setColor} />
              <AppButton text='Add' disabled={!itemId || !brand || !type || !description || !color} onClick={handleClick} />
            </div>
        }
      </div>
    </>
  );
};

export default AddItem;