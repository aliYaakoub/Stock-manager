import React from 'react'

type Props = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  placeholder: string;
}

const AppInput: React.FC<Props> = ({ value, onChange, label, placeholder }) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor="searchId" className='my-5 text-lg'>{label}</label>
      <input
        type='text'
        id='searchId'
        value={value}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
        className='px-2 bg-slate-400 py-2 rounded text-black placeholder:text-slate-600 outline-none w-full'
      />
    </div>
  )
};

export default AppInput;