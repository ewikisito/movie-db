const cardHolder = document.querySelector("card-holder");
const card = document.querySelector(".cards-sec");
const title = document.querySelector("title");
const movieTitle = document.querySelector("movie-title");
const mTitle = document.getElementById("m-title");


const apiKey = "7e6a1ec889d282a86311b6babd0a9b70";
console.log("apikey", apiKey);

const movieUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;
const baseImageUrl = "https://image.tmdb.org/t/p/w500/"

const fetchMovie = fetch(movieUrl)
  .then((res) => {
    if (!res.ok) {
      console.log("error");
    }
    return res.json();
    console.log(res);
  })
  .then((results) => {
    if (results.message) {
      return results;
    }

    console.log(results);
    
    card.innerHTML = results.results.map(
      (movie) => 
      ( 
        `    <div class="card-holder">
          <div class="card">
            <img src=${baseImageUrl}${movie.
              poster_path
              } alt="Movie Avatar" />
            <div class="title">
              <p >${movie.
                name
                }</p>
            </div>
          </div>
          <div class="movie-title">
            <p id="m-title">${movie.
              name
              }</p>
            <div  class="movie-category">
              <div class="rating">
                <i class="fa-regular fa-star" class="rating-tag"></i>
                <p>${movie.vote_average}</p>
              </div>
              <p>${movie.first_air_date
              }</p>
              <p>Movie</p>
            </div>
          </div>
        </div>`
      )
    );
  });

