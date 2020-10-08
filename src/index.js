console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", getBreeds);

function loadPage(){
  //debugger
  let dogImageContainer = document.querySelector("#dog-image-container");
   fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(json => {json.message.forEach((photo) => {
    let li = document.createElement("li");
    let imgSource = document.createElement("img");
    dogImageContainer.appendChild(li);
    li.appendChild(imgSource);
    imgSource.src = photo;
    imgSource.classList.add("dog-image");
  });
});
}


function getBreeds(){
  let dogBreeds = document.querySelector("#dog-breeds")
  dogBreeds.addEventListener("click", function(){
    // debugger
    if(event.target.className === "breeds"){
      event.target.style.color = "blue"; 
    }
    else if (event.target.className === "sub-breed"){
      event.target.style.color = "red";
    }
  })
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(json => {
    let breeds = Object.keys(json.message); //a method that whatever object we put in as a parameter, it will return to us the keys of the parameters in that array 
    breeds.forEach((breed) => {
    let li = document.createElement("li");
    dogBreeds.appendChild(li);
    li.innerHTML = breed;
    li.classList.add("breeds");
    if (json.message[breed].length > 0){
      let ul = document.createElement("ul");
      li.appendChild(ul);
      json.message[breed].forEach((sub) => {
        let list = document.createElement("li");
        ul.appendChild(list);
        list.innerHTML = sub;
        list.classList.add("sub-breed");
      });
    }
  });
});
}