export function getHouseFormTemplate(){
    return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
  id="house-form">
  
  <div class="form-group">
    <label for="bedrooms" class="">Rooms:</label>
    <input type="text" class="form-control" name="bedrooms" id="bedrooms" required>
  </div>
  <div class="form-group">
    <label for="bathrooms" class="">Rooms:</label>
    <input type="text" class="form-control" name="bathrooms" id="bathrooms" required>
  </div>
  <div class="form-group">
    <label for="price" class="">Price:</label>
    <input type="number" class="form-control" name="price" id="price" min="0" max="9999999">
  </div>
  <div class="form-group">
    <label for="selling" class="">Is this for sale?</label>
    <input type="checkbox" name="selling" id="selling" checked>
  </div>
 
  
  <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="imgUrl" class="">img:</label>
    <input type="url" class="form-control" name="imgUrl" id="imgUrl" required>
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  `
}
// this is the acre range bar
// <div class="form-group">
// <label for="lot" class="">
//   <span>acres:</span>
//   <span id="lot" class="ms-2">0</span>
// </label>
// <input type="range" name="lot" id="lot" min=".5" max="5"
//   onchange="app.housesController.showLot()" class="form-control" step=".05">
// </div>