const URL = 'http://localhost:3000';

(function (){
    fetch(`${URL}/products`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
    })
    .then((res) => res.json())
    .then((out) => {
        printData(out);
    })
    .catch((err) => {
        let container = document.getElementById("home");
        container.innerHTML +=`<div class="no-data">
       
        <h1>Oops! ${err.message}</h1>
        <a href="create.html" class="bg-primary text-white">Back To Home</a>
        </div>`
    });
})();

function printData(data){
    let container = document.getElementById("home");
    if(data.length==0){
        container.innerHTML +=`<div class="no-data">
        
        <h1>Oops! No Related Products Here</h1>
        <a href="create-product.html">CREATIVE YOUR OWN PRODUCT</a>
        </div>`;
    }
    else{
        data.forEach((item)=>{
            container.innerHTML +=`<div class="p-card">
            <form action="post">
            <img src="${item.image}" alt="">
            <div class="name-group">
            <h4>${item.name}</h4>
            <h3>${item.cost}₹</h3>
            </div>
            <p>${item.description}</p>
        <div>
        <a>Edit</a>
        <a>Delete</a>
        </div>
            </form>
            </div>`;
        });
    }
}