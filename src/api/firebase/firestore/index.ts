import firestore from '@react-native-firebase/firestore';

export enum COLLECTION {
  GAME = 'games',
}
export class FireStore {
  static createDocument = async (collection: COLLECTION, data: any) => {
    try {
      console.log('Creat document: ', collection, data);
      const collectionRef = firestore().collection(collection);

      const documentRef = await collectionRef.add(data);

      console.log('Document created with ID:', documentRef.id);
    } catch (error) {
      console.log('Error creating document:', error);
    }
  };
}
