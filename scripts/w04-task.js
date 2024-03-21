/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Mensah Godfred",
    photo: "images/me.png",
    favoriteFoods: [
      "Yam with Garden egg Stew",
      "Rice with Kontomire Stew",
      "Banku with Okro stew",
      "Konkonte and Palm Soup",
      "Ghana Jollof",
    ],
    hobbies: [
      "💡 Sitting at the beach",
      "💡 Reading",
      "💡 Playing guitar",
      "💡 Spending time with Winnifred",
    ],
    placesLived: [],
  };
  
  /* Populate Profile Object with placesLive objects */
  myProfile.placesLived.push({
    place: "Kumasi, Ashanti Region. Ghana",
    lenght: "12 years",

  });
  
  myProfile.placesLived.push({
    place: "Accra, Greater Accra Region.",
    lenght: "5 years",
  });
  
  myProfile.placesLived.push({
    place: "Cape Coast, Central Region. Ghana",
    lenght: "4 years",
  });
  /* DOM Manipulation - Output */
  
  /* Name */
  document.querySelector("#name").textContent = myProfile.name;
  
  /* Photo with attributes */
  
  const imageElement = document.querySelector("#photo");
  imageElement.setAttribute("src", myProfile.photo);
  imageElement.setAttribute("alt", `Profile image of ${myProfile.name}`);
  /* Favorite Foods List*/
  
  myProfile.favoriteFoods.forEach((food) => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
  });
  /* Hobbies List */
  
  myProfile.hobbies.forEach((hobbies) => {
    let li = document.createElement("li");
    li.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(li);
  });
  /* Places Lived DataList */
  myProfile.placesLived.forEach((places) => {
    let dt = document.createElement("dt");
    dt.textContent = places.place;
    document.querySelector("#places-lived").appendChild(dt);
  
    //lenght
  
    let dd = document.createElement("dd");
    dd.textContent = places.lenght;
    document.querySelector("#places-lived").appendChild(dd);
  });
  //myProfile.placesLived.forEach((length) => {