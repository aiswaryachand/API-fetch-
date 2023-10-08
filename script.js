var res = fetch("https://jsonplaceholder.typicode.com/users");
res.then((data) => data.json()).then((value) => bar(value))

var container = document.createElement("div");
container.className = "container"
var row = document.createElement("div");
row.className = "row"
container.append(row);



function bar(value) {
    console.log(value);
    for (var i = 0; i < value.length; i++) {
        row.innerHTML+=` 
         
        <div class = "col-md-3">
        <div class="card-border-primary-mb-3">
       <div class="card-body text-primary">
          <p class="card-text" style="font-weight:bold">Name:${value[i].name}</p>
          <p class="card-text">Email:${value[i].email}</p>
            <p class="card-text">Street:${value[i].address.street}</p>
             <p class="card-text">City:${value[i].address.city}</p>
              </div>
              </div>
       </div>
       `
    }
    document.body.append(container)
}
