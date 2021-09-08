import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

// @ts-ignore
const api = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api"
  })
class HousesService {
    async getHouses() {
      let res = await api.get('/houses')
      console.log("houses responer" , res);
      ProxyState.houses = res.data.map(h => new House(h))
    }
    async addHouse(houseData){
       let res = await api.post('', houseData)
        ProxyState.houses= [... ProxyState.houses, new House(res.data)]
    }
}

export const housesservice= new HousesService()