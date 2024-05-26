import { httpAxios } from "@/helper/httpHelper";

export async function getAllProducts(){
    const result = await httpAxios.get('/api/product').then((response)=>response.data);
    return result;
}