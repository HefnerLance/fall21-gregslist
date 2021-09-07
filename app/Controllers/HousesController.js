import { ProxyState } from "../AppState.js"
import { getHouseFormTemplate } from "../forms/houseform.js"
import { housesservice } from "../Services/HousesService.js"

function _drawHouses() {
  let template= ''
 
  ProxyState.houses.forEach(house => template+=house.HouseTemplate )
  document.getElementById('listings').innerHTML = template

}

export class HousesController {
  constructor() {
    // TODO register the listener for houses
    ProxyState.on('houses', _drawHouses)
  }
  async addHouse(){
    event.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form= event.target
    const houseData ={
      size: form.size.value,
      rooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
      
      
    }
    try{ 
      await housesservice.addHouse(houseData)
    } catch (e){
      form.make.classList.add('border-danger')
      console.error('[TODO] you were supposed to do this', e)
      return
    
    } form.reset();
    }

  showLot() {

    // @ts-ignore
    document.getElementById('lot').textContent = event.target.value
  }

  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = /*html*/`
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `
    // TODO build the house form
    // abstract it if you want
    document.getElementById('forms').innerHTML = getHouseFormTemplate()
  }

  toggleHouseForm() {
    console.log('[TODO fill me in]')
    document.getElementById('house-form').classList.toggle('visually-hidden')
    
  }

}