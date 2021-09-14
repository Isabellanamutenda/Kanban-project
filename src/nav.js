const content = document.getElementById('content');

const nav = `
<div class="container">
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link" href="index.html">
      My Cat logo
    </a>
  </li>
  <li class="nav-item pt-4">
    <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item pt-4">
    <a class="nav-link" href="#">All Cats</a>
  </li>
</ul>
</div>
`;

const renderNav = () => {
  content.insertAdjacentHTML('beforebegin', nav);
};

export default renderNav;