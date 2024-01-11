const URL="http://localhost:3000";

let form = document.getElementById("create-form");
let productName = document.getElementById("name");
let productCost = document.getElementById("price");
let productDescription = document.getElementById("description");
let productMainImage = document.getElementById("url");

form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let newProduct = {
        "name":productName.value,
        "cost":productCost.value,
        "description":productDescription.value,
        "image":productMainImage.value,
    };
    console.log("new product=", newProduct);

    await fetch(`${URL}/products`,{
        method:"POST",
        body:JSON.stringify(newProduct),
        headers:{
            "Content-Type":"application/json",
        },
    })
      .then((res)=>res.json())
      .then((out)=>{
        alert("New user created Successfully");
      })
      .catch((error)=>console.log(error.message));
});
