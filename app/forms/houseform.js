export function getHouseFormTemplate(){
    return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.HousesController.addHouse()"
  id="house-form">
  <div class="form-group">
    <label for="size" class="">Size:</label>
    <select name="size" id="size" required class="form-control">
      <option disabled selected value="">Please Choose House size</option> 
      <option>2000+ sq ft</option>
      <option>1800 sq ft</option>
      <option>1700+ sq ft</option>
      <option>1600+ sq ft</option>
      <option>Under 1500 sq ft</option>
    </select>
  </div>
  <div class="form-group">
    <label for="rooms" class="">Rooms:</label>
    <input type="text" class="form-control" name="rooms" id="rooms" required>
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
    <label for="lot" class="">
      <span>acres:</span>
      <span id="lot" class="ms-2">0</span>
    </label>
    <input type="range" name="lot" id="lot" min=".5" max="5"
      onchange="app.housesController.showLot()" class="form-control" step=".05">
  </div>
  
  <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="img" class="">img:</label>
    <input type="url" class="form-control" name="img" id="img" required>
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  `
}