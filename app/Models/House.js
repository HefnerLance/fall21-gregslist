import { generateId } from "../Utils/generateId.js";

export class House{
    constructor(houseData){
        this.id = houseData.id,
        this.rooms = houseData.bedrooms,
        this.bathrooms = houseData.bathrooms,
        this.price = houseData.price,
        // this.lot = houseData.lot
        this.description = houseData.description
        this.imgUrl = houseData.imgUrl
    }
    get HouseTemplate(){
        return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.imgUrl}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span > Rooms:${this.rooms}</span>
            <span>$ ${this.price}</span>
          </h5>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
    
}
// "_id": "60f7557e86cd7700158845db",
//   "bedrooms": 3,
//   "bathrooms": 2,
//   "levels": 1,
//   "year": 1960,
//   "price": 3000,
//   "imgUrl": "https://images.unsplash.com/photo-1592658221410-0f5c3615e7fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//   "description":