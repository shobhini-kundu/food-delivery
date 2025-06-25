import { IMenuItems, IRestaurant } from "../interfaces/restuarant";
import { menuItemsList, restaurantList } from "./jsonData";

export const getAllRestuarant = async (): Promise <IRestaurant[]>=>{
    return await new Promise((resolve,reject)=>{
        const allRestuarant =restaurantList
        resolve(allRestuarant)
        reject(null)
    }
)
}
export const getItemByRestuarantId = async(restaurantId:string): Promise<IMenuItems[]> =>{
    return await new Promise((resolve,reject)=>{
        
        const filteredMenuItems= menuItemsList.filter((item)=>{
            return item.restaurantId===restaurantId;
        })
        resolve (filteredMenuItems)
        reject(null)
    }
)
}