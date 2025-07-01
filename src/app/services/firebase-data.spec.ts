import { Injectable } from '@angular/core';
import { 
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  deleteDoc,
  updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  constructor(private firestore: Firestore) {}

  // Obtener todos los documentos de una colección
  getItems(collectionName: string): Observable<any[]> {
    const itemCollection = collection(this.firestore, collectionName);
    return collectionData(itemCollection, { idField: 'id' });
  }

  // Añadir nuevo documento
  async addItem(collectionName: string, data: any) {
    const itemCollection = collection(this.firestore, collectionName);
    return await addDoc(itemCollection, data);
  }

  // Eliminar documento
  async deleteItem(collectionName: string, id: string) {
    const itemDoc = doc(this.firestore, `${collectionName}/${id}`);
    return await deleteDoc(itemDoc);
  }

  // Actualizar documento
  async updateItem(collectionName: string, id: string, data: any) {
    const itemDoc = doc(this.firestore, `${collectionName}/${id}`);
    return await updateDoc(itemDoc, data);
  }
}
