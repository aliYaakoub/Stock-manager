import { Timestamp, addDoc, collection, getDoc, doc, updateDoc, DocumentReference, DocumentData, DocumentSnapshot, deleteDoc } from 'firebase/firestore';
import React, { useContext, createContext } from 'react';
import { projectFireStore } from './Firebase';

interface Context {
  addItem: (itemId: string, brand: string, type: string, color: string, description: string) => Promise<DocumentReference<DocumentData>> | Promise<void>;
  getItem: (itemId: string) => Promise<DocumentSnapshot<DocumentData>> | Promise<void>;
  updateItem: (itemId: string, brand: string, type: string, color: string, description: string, id: string) => Promise<void>;
  deleteItem: (itemId: string) => Promise<DocumentSnapshot<DocumentData>> | Promise<void>;
}

const defaultState = {
  addItem: async () => {},
  getItem: async () => {},
  updateItem: async () => {},
  deleteItem: async () => {},
}

interface Props {
  children: JSX.Element[] | JSX.Element
}

const AppContext = createContext<Context>(defaultState);

export const useAppContext = () => {
  return useContext(AppContext);
}

export const AppContextProvider: React.FC<Props> = ({ children }) => {

  async function addItem(itemId: string, brand: string, type: string, color: string, description: string){
    const collectionRef = collection(projectFireStore, 'items');
    return addDoc(collectionRef, {
      itemId, 
      brand, 
      type, 
      color, 
      description,
      timeStamp: Timestamp.now(), 
    })
  }

  async function getItem(id: string) {
    return getDoc(doc(projectFireStore, 'items', id));
  }

  async function updateItem(itemId: string, brand: string, type: string, color: string, description: string, id: string){
    return updateDoc(doc(projectFireStore, 'items', id),{
      itemId, 
      brand, 
      type, 
      color, 
      description,
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
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}