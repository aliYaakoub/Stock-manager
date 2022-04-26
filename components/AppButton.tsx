import React from 'react'

type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const AppButton: React.FC<Props> = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='px-4 py-2 bg-slate-700 shadow-lg text-white hover:bg-slate-500 active:scale-95 disabled:opacity-50 rounded w-full my-5 transition-all'
    >
      {text}
    </button>
  )
}

export default AppButton