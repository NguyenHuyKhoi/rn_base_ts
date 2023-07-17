import firestore from '@react-native-firebase/firestore';
import {COLLECTION} from './types';

export class FSUtil {
  static createDocument = async (
    collection: COLLECTION,
    data: any,
    id?: string,
  ) => {
    try {
      console.log('Creat document: ', collection, data);
      const collectionRef = firestore().collection(collection);

      if (id) {
        const documentRef = firestore().collection(collection).doc(id);
        await documentRef.set(data);
      } else {
        await collectionRef.add(data);
      }
    } catch (error) {
      console.log('Error creating document:', error);
    }
  };
  static updateDocument = async (
    collection: COLLECTION,
    id: string,
    data: any,
  ) => {
    try {
      console.log('Update document: ', collection, id, data);
      const collectionRef = firestore().collection(collection);

      await collectionRef.doc(id).update(data);
    } catch (error) {
      console.log('Error Update document:', error);
    }
  };
  static deleteDocument = async (collection: COLLECTION, id: string) => {
    try {
      console.log('Delete document: ', collection, id);
      const collectionRef = firestore().collection(collection);

      await collectionRef.doc(id).delete();
    } catch (error) {
      console.log('Error Delete document:', error);
    }
  };

  static existDocument = async (collection: COLLECTION, id: string) => {
    try {
      const documentRef = firestore().collection(collection).doc(id);
      const documentSnapshot = await documentRef.get();

      return documentSnapshot.exists;
    } catch (error) {
      console.error('Error checking document existence:', error);
      // Handle the error case appropriately.
      return false;
    }
  };
}
