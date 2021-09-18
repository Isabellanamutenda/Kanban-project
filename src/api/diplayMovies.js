const displayMovies = (data, elementId) => {
  const show = document.getElementById(elementId);
  const myMovie = document.createElement('div');
  myMovie.id = 'listMovies';
  myMovie.classList.add('row');
  if (data !== []) {
    data.forEach((row) => {
      const { image, id, title } = row;
      const col = `

            <div class="col-md-4">
              <div id="${id}" class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="${image}" alt="${title}" style="height: 225px; width: 100%; display: block;" src="${image}" data-holder-rendered="true">
                <div class="card-body p-4">
                  <h5 class="card-text pb-4 m-title">
                  ${title}
                  </h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-lg btn-outline-secondary">Comments</button> </div>
                    <div class="btn-likes"><i class="fa fa-heart-o"></i>  <br>1111 Likes</div>
                  </div>
                </div>
              </div>
            </div> `;

      myMovie.insertAdjacentHTML('beforeend', col);
    });
  }
  show.innerHTML = '';
  show.appendChild(myMovie);
};

export default displayMovies;