import database, {firebase} from '@react-native-firebase/database';

export type assiete = {
  id: number;
  nom: string;
  description: string;
  prix: number;
  url: string;
};
export type dessert = {
  id: number;
  nom: string;
  description: string;
  prix: number;
  url: string;
};


export interface IDatabase {
  DishList(): Promise<assiete>;
  DesertList(): Promise<dessert[]>;
}

export class DatabaseSource implements IDatabase {
  async DishList(): Promise<assiete> {
    return Promise.resolve(
      await firebase
        .database()
        .ref('Dish')
        .once('value')
        .then(res => res.val()),
    );
  }
  DesertList(): Promise<assiete[]> {
    return Promise.resolve([]);
  }
}
