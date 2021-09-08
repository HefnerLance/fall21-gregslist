import { ProxyState } from "../AppState.js"





function _drawJobs() {
    let template= ''
   
    ProxyState.jobs.forEach(house => template+=house.HouseTemplate )
    document.getElementById('listings').innerHTML = template
}
export class JobsController{
    constructor(){
ProxyState.on('jobs', _drawJobs )
jobsService.getJobs()
    }
}