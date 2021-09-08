


export class job{
    constructor(jobData){
             this.id =jobData.id
             this.jobTitle =jobData.jobTitle
             this.company= jobData.jobcompany
             this.rate = jobData.rate
             this.hours = jobData.hours
             this.description = jobData.description
    }
    
    get JobTemplate(){
        return /*html*/ `
        <div class="col-lg-3 mb-4 listing">
      <div class="card">
       
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <b>${this.company}</b>
            <span>${this.jobTitle} </span>
            <span>$ ${this.rate}</span>
          </h5>
          <p>${this.description}</p>
          <p>${this.hours}</p>

          <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
        </div>
      </div>
    </div>
        
        
        `
    }
    
}





// "_id": "60f7541986cd7700158845d9",
//   "jobTitle": "Cheese Taster",
//   "company": "Chuck E Cheese",
//   "rate": 120,
//   "hours": 40,
//   "description": "be aweseome at eating cheese!",
//   "createdAt": "2021-07-20T22:54:17.140Z",
//   "updatedAt": "2021-07-27T02:24:50.148Z",
//   "__v": 0,
//   "id": "60f7541986cd7700158845d9"