const container = document.querySelector(".container");

const apiKey = "7e6a1ec889d282a86311b6babd0a9b70";
const url = `https://api.themoviedb.org/3/movie/912649?api_key=${apiKey}`;
const imageBaseUrl = "https://image.tmdb.org/t/p/w500/"

fetch(url)
  .then((res) => {
    if (!res.ok) {
      console.log("an error occured here");
    }
    console.log( res);

    return res.json();
  })
  .then((data) => {
    if (data) {
        container.innerHTML = `
        <div class="description-container">
            <div class="header">
                <div class="image">
                  <img
                    src="./src/assets/Screenshot from 2024-12-09 20-55-18.png"
                    alt=""
                  />
                </div>
                <div class="display-list">
                  <ul>
                    <li id="bold">Home</li>
                    <li>Discover</li>
                    <li>Movie Release</li>
                    <li>Forum</li>
                    <li>About</li>
                  </ul>
                </div>
                <div class="btn">
                  <button id="sign-up">Sign Up</button>
                  <button id="login">Login</button>
                </div>
              </div>
              <div class="paragraph-details">
                <div class="detail-text">
                  <h2 class="h-text">${data.title}</h2>
                  <p>${data.tagline}</p>
                </div>
                <div class="button">
                  <button id="button-one">Continue Watching</button>
                  <button id="button-two">Add Watch</button>
                </div>
              </div>
              <div class="description">
                <h3 class="para">${data.tagline}</h3>
                <p class="tag-text">${data.overview}</p>
              </div>
        </div>
             <img src=${imageBaseUrl}${data.backdrop_path} alt="Movie Avatar"  id="backdrop"/>
    `;
    
    }
  })
  .catch((error) => {
    console.log(error);
  })
  .finally();
