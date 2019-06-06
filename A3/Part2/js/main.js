let viewModel = {
  teams: [],
  employees: [],
  projects: []
}

/**
 * Displays the genericModal with the proper contents updated.
 * 
 * This function does the following:
 * - Sets the contents of *modal-title* to the passed *title* value
 * - Sets the contents of *modal-body* to the passed *message* value
 * - Show the genericModal using the id (genericModal)
 * 
 * @param {string} title    The title that will be set to the <h4></h4> within the modal
 * @param {string} message  The message that will appear within the modal
 */
let showGenericModal = (title, message) => {
  $('.modal-title').html(`<b>${title}</b>`);
  $('.modal-body').html(message);
  $('#genericModal').modal('show');
}

/**
 * Responsible for populating the observable *teams* property with data
 * 
 * @returns a promise relative to **https://teams-api-lean.herokuapp.com/teams-raw**
 */
let initializeTeams = () => {
  return new Promise((resolve, reject => {
    let data = $.ajax(`https://teams-api-lean.herokuapp.com/teams-raw`)
    .done(data => {
      // TODO: Set value of 'teams' property to the data returned from the AJAX call and resolve
    })
    .fail(err => reject(`Error loading the team data.`))
  }))
}

let initializeEmployees = () => {
  return new Promise((resolve, reject) => {
    let data = $.ajax(`https://teams-api-lean.herokuapp.com/employees`)
    .done(data => {
      // TODO: Set value of 'employees' property to the data returned from the AJAX call and resolve
    })
    .fail(err => reject(`Error loading the employee data`));
  })
}