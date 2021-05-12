import {assiete, dessert, IDatabase} from "../data/DatabaseSource"




export class FakeDataSource implements IDatabase{
    
    
    
    
    DishList(): Promise<assiete[]> {
        return Promise.resolve([]);
    }
    DesertList(): Promise<dessert[]> {
        throw new Error("Method not implemented.");
    }



}