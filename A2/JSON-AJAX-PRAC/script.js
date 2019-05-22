$(document).ready(() => {
  loadImages()
})

const fetch = () => {
  loadDataFromAPI()
  $('#fetch').remove()
}

const loadImages = () => {
  $('#img-1').attr('src', './images/image_1.jpg')
  $('#img-2').attr('src', './images/image_2.jpg')
  $('#img-3').attr('src', './images/image_3.jpg')
  $('#img-4').attr('src', './images/image_4.jpg')
}

const loadDataFromAPI = () => {
  // let json = 'data.json';
  // $.getJSON(json, (data) => {
  
  // })
  // console.log(`reached`)
  $.ajax({
    type: 'GET',
    url: 'data.json',
    dataType: 'json',
    success: (response) => {
      console.log(response)
      let x = response.record
      let tableElement = $(`
        <table class="table">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Medication</th>
            <th scope="col">Email</th>
          <tr>
        </table>
      `);
      for (let i = 0; i < x.length; i++) {
        let htmlRow = `
        <tr>
          <th scope="row">${x[i].id}</th>
          <td>${x[i].full_name}</td>
          <td>${x[i].medication}</td>
          <td>${x[i].email}</td>
        </tr>
        `
        $(tableElement).append(htmlRow);
      }

      $('#data-div').append(tableElement)
    }
  });
}