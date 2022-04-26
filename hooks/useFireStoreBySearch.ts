import {useState, useEffect} from 'react'
import { projectFireStore } from '../config/Firebase'
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { ItemType } from '../types';

const useFirestoreBySearch = (col: string | undefined, itemId: string | string[] | undefined) =>{
    const [docs, setDocs] = useState<ItemType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        let q;
        if(!col || !itemId) return;
        q = query(collection(projectFireStore, col), where("itemId", "==", itemId));
        const unsub = onSnapshot(q, (snap)=>{
                let documents: any = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
                setLoading(false)
            })
        return () => unsub();
    }, [col, itemId])

    return { docs, loading };
}

export default useFirestoreBySearch;