const content = document.getElementById('content');

const main = `
<div class="bg-light">
      <div class="container py-5">
        <h1 class="display-5 fw-bold">See our beautiful cats</h1>
        <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button class="btn btn-primary btn-lg" type="button">See more cat</button>
      </div>
    </div>
`;

const favoriteCat = `

<div class="py-5">
<div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="https://placekitten.com/200/300" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="https://placekitten.com/200/300" data-holder-rendered="true">
                <div class="card-body">
                  <h3 class="card-text">
                    Cat 1
                  </h3>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-lg btn-outline-secondary">Comments</button> </div>
                    <div class="btn-likes"><i class="fa fa-heart-o"></i>  <br>1111 Likes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="https://placekitten.com/200/300" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="https://placekitten.com/200/300" data-holder-rendered="true">
                <div class="card-body">
                  <h3 class="card-text">
                    Cat 1
                  </h3>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-lg btn-outline-secondary">Comments</button> </div>
                    <div class="btn-likes"><i class="fa fa-heart-o"></i>  <br>1111 Likes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="https://placekitten.com/200/300" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="https://placekitten.com/200/300" data-holder-rendered="true">
                <div class="card-body">
                  <h3 class="card-text">
                    Cat 1
                  </h3>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-lg btn-outline-secondary">Comments</button> </div>
                    <div class="btn-likes"><i class="fa fa-heart-o"></i>  <br>1111 Likes</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
       </div>
       </div>
`;

const renderHome = () => {
  content.insertAdjacentHTML('beforeend', main);
  content.insertAdjacentHTML('beforeend', favoriteCat);
};

export default renderHome;