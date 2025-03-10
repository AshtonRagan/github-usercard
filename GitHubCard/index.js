// const axios = require("axios");

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/AshtonRagan").then(function(response) {
  // handle success

  const bigDiv = document.querySelector(".cards");

  bigDiv.appendChild(hubCard(response.data));

  //console.log(response);
});

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

// const test = {
//   name: "Ashton",
//   username: "Raga",
//   githuburl: "nothin",
//   location: "Pluto",
//   followers: 99,
//   following: 1,
//   bio: "The greatest ever liveed"
// };

function hubCard(obj) {
  const card = document.createElement("div"),
    image = document.createElement("img"),
    cardInfo = document.createElement("div"),
    name = document.createElement("h3"),
    hubUrl = document.createElement("a"),
    userName = document.createElement("p"),
    local = document.createElement("p"),
    profile = document.createElement("p"),
    followers = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p");
  // ----------------Append------------------\\
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(local);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(hubUrl);
  //------------Classes---------------\\
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");
  //--------Atriibutes--------\\
  image.setAttribute("src", obj.avatar_url);
  name.textContent = `Name: ${obj.login}`;
  userName.textContent = `User Name: ${obj.name}`;
  local.textContent = `Loctaion: ${obj.location}`;
  profile.textContent = `Profile: ${obj.url}`;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;
  return card;
}

axios
  .get("https://api.github.com/users/AshtonRagan/followers")
  .then(function(response) {
    // handle success
    //push names to the array
    response.data.forEach(ele => {
      followersArray.push(ele.login);
    });
    getpeeps();
  })
  .catch(err => console.log(err));

function getpeeps() {
  followersArray.forEach(name => {
    axios.get(`https://api.github.com/users/${name}`).then(function(repo) {
      let card = hubCard(repo.data);

      const bigDiv = document.querySelector(".cards");
      bigDiv.appendChild(card);
    });
  });
}

console.log("hello world");

// const bigDiv = document.querySelector(".cards");
// bigDiv.appendChild(hubCard(test));

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />

    <div class="card-info">
          <h3 class="name">{users name}</h3>
          <p class="username">{users user name}</p>
          <p>Location: {users location}</p>
            <p>Profile:  
              <a href={address to users github page}>
            </p>
          <p>Followers: {users followers count}</p>
          <p>Following: {users following count}</p>
          <p>Bio: {users bio}</p>
    </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
