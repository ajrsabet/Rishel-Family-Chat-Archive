$(document).ready(function () {
  // Display portfolio thumbnails
  for (let i = 0; i < 100; i++) {
      // make new column div for portfolio thumbnails
      $('.container').append(`
      <div class="card" style="width: 100%;">
        
        <div class="card-body" id=${i}>
          <h6 class="card-title">${messages[i].name}</h5>
          <p class="card-text">${messages[i].text}</p>
        </div>
      </div>`);

      if (messages[i].attachments) {
        for (let j = 0; j < messages[i].attachments.length; j++) {
          if (messages[i].attachments[j].type === "image") {
            
            $(`#${i}`).append(`
            <div class="col-md-4">
            <img src="${messages[i].attachments[j].url}" class="card-img-top" alt="...">
            </div>
            `)
          }
        }
      }
    };
});
