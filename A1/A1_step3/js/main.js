/********************************************************************************* *
WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. * No part
of this assignment has been copied manually or electronically from any other source * (including web
sites) or distributed to other students.
*
* Name: Lean Junio Student ID: 019-109-123 Date: 5/13/2019
*
*
********************************************************************************/

$(document).ready(() => {
  console.log(`jQuery working`)

  // Teams clicked
  $('#teams-menu').on('click', (e) => {
    e.preventDefault()
    $('#data').empty()
    $('#data').append(`<h3>Teams</h3>`)

    $.ajax({
      type: 'GET',
      url: 'https://teams-api-lean.herokuapp.com/teams',
      dataType: 'JSON',
      success: (response) => {
        let data = JSON.stringify(response)
        $('#data').append(data)
      }
    });
  })

  // Employees clicked
  $('#employees-menu').on('click', (e) => {
    e.preventDefault()
    $('#data').empty()
    $('#data').append(`<h3>Employees</h3>`)

    $.ajax({
      type: 'GET',
      url: 'https://teams-api-lean.herokuapp.com/employees',
      dataType: 'JSON',
      success: (response) => {
        let data = JSON.stringify(response)
        $('#data').append(data)
      }
    });
  })

  // Projects clicked
  $('#projects-menu').on('click', (e) => {
    e.preventDefault()
    $('#data').empty()
    $('#data').append(`<h3>Projects</h3>`)

    $.ajax({
      type: 'GET',
      url: 'https://teams-api-lean.herokuapp.com/projects',
      dataType: 'JSON',
      success: (response) => {
        let data = JSON.stringify(response)
        $('#data').append(data)
      }
    });
  })

  // Positions clicked
  $('#positions-menu').on('click', (e) => {
    e.preventDefault()
    $('#data').empty()
    $('#data').append(`<h3>Positions</h3>`)

    $.ajax({
      type: 'GET',
      url: 'https://teams-api-lean.herokuapp.com/positions',
      dataType: 'JSON',
      success: (response) => {
        let data = JSON.stringify(response)
        $('#data').append(data)
      }
    });
  })
})