const content = document.getElementById('content');

const catList = `
<div class="py-5 bg-light">
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

const renderCat = () => {
  content.insertAdjacentHTML('beforeend', catList);
};

export default renderCat;