export default class Movies {
  constructor(type) {
    this.baseUrl = 'https://api.themoviedb.org/3/movie/';
    this.apiKey = '7b01053f20bae80625acdce4fa00c98b';
    this.type = type;
    this.data = [];
  }

  async getData() {
    const endpoint = `${this.baseUrl + this.type}?api_key=${this.apiKey}`;
    await fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        this.filterData(data.results);
      });
  }

    filterData = (data) => {
      data.forEach((movie) => {
        this.data.push({
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          id: movie.id,
          overview: movie.overview,
          release_date: movie.release_date,
          vote_average: JSON.stringify(movie.vote_average),
        });
      });
    }
}