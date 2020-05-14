$(document).ready(function () {
  // Display portfolio thumbnails
  for (let i = 0; i < messages.length; i++) {
      // make new column div for portfolio thumbnails
      $('.container').append(`
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">${messages[i].text}</p>
        </div>
      </div>`);
  };
});