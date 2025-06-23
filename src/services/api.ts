import { IRestaurant } from "../interfaces/restuarant";
import { restaurantList } from "./jsonData";

export const getAllRestuarant = async (): Promise <IRestaurant[]>=>{
    return await new Promise((resolve,reject)=>{
        const allRestuarant =restaurantList
        resolve(allRestuarant)
        reject(null)
    }
)
}