import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavBar: React.FC = () => {

  const router = useRouter();

  return (
    <nav className='sticky top-0 left-0 h-20 w-full shadow-lg bg-slate-600 flex items-center justify-center text-white text-xl'>
      <Link href={'/'}><a style={router.asPath === '/' ? {color: '#b04860'} : {}} className='px-5 hover:scale-110 transition-transform'>Home</a></Link>
      <Link href={'/items'}><a style={router.asPath === '/items' ? {color: '#b04860'} : {}} className='px-5 hover:scale-110 transition-transform'>All Items</a></Link>
      <Link href={'/add-item'}><a style={router.asPath === '/add-item' ? {color: '#b04860'} : {}} className='px-5 hover:scale-110 transition-transform'>Add Item</a></Link>
    </nav>
  );
};

export default NavBar;