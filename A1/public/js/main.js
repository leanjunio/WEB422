$(document).ready(() => {
  loadImages()
  loadDataFromAPI()
})

const loadImages = () => {
  $('#img-1').attr('src', '../public/images/image_1.jpg')
  $('#img-2').attr('src', '../public/images/image_2.jpg')
  $('#img-3').attr('src', '../public/images/image_3.jpg')
  $('#img-4').attr('src', '../public/images/image_4.jpg')
}

const loadDataFromAPI = () => {
  let htmlString;
  $.ajax({
    type: 'GET',
    url: '../dataset.xml',
    dataType: 'xml',
    success: (response) => {
      let xml = response
      let x = $(xml).find('record')
      let tableElement = $(`
      <table class="table">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Medication</th>
          <th scope="col">Email</th>
        <tr>
      </table>
      `)
      for (let i = 0; i < x.length; i++) {
        let htmlRow = `
        <tr>
          <th scope="row">${x[i].getElementsByTagName('id')[0].childNodes[0].nodeValue}</th>
          <td>${x[i].getElementsByTagName('full_name')[0].childNodes[0].nodeValue}</td>
          <td>${x[i].getElementsByTagName('medication')[0].childNodes[0].nodeValue}</td>
          <td>${x[i].getElementsByTagName('email')[0].childNodes[0].nodeValue}</td>
        </tr>
        `
        $(tableElement).append(htmlRow);
      }

      $('#data-div').append(tableElement)
    }
  });
  // $('#data-div').html(htmlString);
}