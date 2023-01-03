
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/abdiasiis78
*/
 

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/
    // console.log(response.data.login);

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cardsContainer = document.querySelector('.cards');

axios.get("https://api.github.com/users/abdiasiis78")
.then(response => {
  const user = response.data;
  cardsContainer.appendChild(createCard(user));
})
.catch(err => {
  console.log(err);
});

axios.get("https://api.github.com/users/gabischool")
.then(response => {
  const user = response.data;
  cardsContainer.appendChild(createCard(user));
})
.catch(err => {
  console.log(err);
});

axios.get("https://api.github.com/users/jonasschmedtmann")
.then(response => {
  const user = response.data;
  cardsContainer.appendChild(createCard(user));
})
.catch(err => {
  console.log(err);
});

axios.get("https://api.github.com/users/JoshuaKGoldberg")
.then(response => {
  const user = response.data;
  cardsContainer.appendChild(createCard(user));
})
.catch(err => {
  console.log(err);
});

axios.get("https://api.github.com/users/duraanali")
.then(response => {
  const user = response.data;
  cardsContainer.appendChild(createCard(user));
})
.catch(err => {
  console.log(err);
});

axios.get("https://api.github.com/users/Josh-Cena")
.then(response => {
  const user = response.data;
  cardsContainer.appendChild(createCard(user));
})
.catch(err => {
  console.log(err);
});

function createCard(user) {
  // step .1 create el
  const card = document.createElement('div');
  const imageUrl = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const profile = document.createElement('p')
  const address = document.createElement('a');
  const locaton = document.createElement('p')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  // step .2 conect el
  card.appendChild(imageUrl);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(profile)
  cardInfo.appendChild(address);
  profile.appendChild(address)
 cardInfo.appendChild(locaton)
 cardInfo.appendChild(followers)
 cardInfo.appendChild(following)
 cardInfo.appendChild(bio)


  // step .3  add claslist 
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  // step .3 add content 
  imageUrl.src = user.avatar_url;
  name.textContent = user.name;
  userName.textContent = user.login;
  address.textContent = user.html_url;
  address.href = user.html_url;
  locaton.textContent = `Location: ${user.location} `
 followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;
  return card;
}

/*
  STEP 4: Pass the data received from Github into your function, and append the 
  returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for
     each user, and adding that card to the DOM.
// */



