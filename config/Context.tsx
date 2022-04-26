import { Timestamp, addDoc, collection, getDoc, doc, updateDoc, DocumentReference, DocumentData, DocumentSnapshot, deleteDoc } from 'firebase/firestore';
import React, { useContext, createContext, useState } from 'react';
import { projectFireStore } from './Firebase';

interface Context {
  addItem: (itemId: string, brand: string, type: string, color: string, description: string, quantity: number) => Promise<DocumentReference<DocumentData>> | Promise<void>;
  getItem: (itemId: string) => Promise<DocumentSnapshot<DocumentData>> | Promise<void>;
  updateItem: (itemId: string, brand: string, type: string, color: string, description: string, quantity: number, id: string) => Promise<void>;
  deleteItem: (itemId: string) => Promise<DocumentSnapshot<DocumentData>> | Promise<void>;
  deleteId: string;
  setDeleteId: React.Dispatch<React.SetStateAction<string>>;
}

const defaultState = {
  addItem: async () => {},
  getItem: async () => {},
  updateItem: async () => {},
  deleteItem: async () => {},
  deleteId: '',
  setDeleteId: () => {},
}

interface Props {
  children: JSX.Element[] | JSX.Element
}

const AppContext = createContext<Context>(defaultState);

export const useAppContext = () => {
  return useContext(AppContext);
}

export const AppContextProvider: React.FC<Props> = ({ children }) => {

  const [deleteId, setDeleteId] = useState('');

  async function addItem(itemId: string, brand: string, type: string, color: string, description: string, quantity: number){
    const collectionRef = collection(projectFireStore, 'items');
    return addDoc(collectionRef, {
      itemId: itemId.trim(), 
      brand: brand.trim(), 
      type: type.trim(), 
      color: color.trim(), 
      description: description.trim(),
      quantity: quantity,
      timeStamp: Timestamp.now(), 
    })
  }

  async function getItem(id: string) {
    return getDoc(doc(projectFireStore, 'items', id));
  }

  async function updateItem(itemId: string, brand: string, type: string, color: string, description: string, quantity: number, id: string){
    return updateDoc(doc(projectFireStore, 'items', id),{
      itemId: itemId.trim(), 
      brand: brand.trim(), 
      type: type.trim(), 
      color: color.trim(), 
      description: description.trim(),
      quantity,
      timeStamp: Timestamp.now(), 
    })
  }

  async function deleteItem(id: string){
    return deleteDoc(doc(projectFireStore, 'items', id));
  }

  const value = {
    addItem,
    getItem,
    updateItem,
    deleteItem,
    deleteId, 
    setDeleteId,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}