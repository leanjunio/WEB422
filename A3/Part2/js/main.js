let viewModel = {
  teams: [],
  employees: [],
  projects: []
}

/**
 * Invokes the initialize methods and applies the knockout bindings
 */
$(document).ready(() => {
  initializeTeams()
  .then(() => {
    return initializeEmployees();
  })
  .then(() => {
    return initializeProjects();
  })
  .then(() => {
    console.log(`Reached here`);
    // TODO: 
    // - Use knockout to apply the bindings (applybindings) to the document using the "viewModel" (defined at the top of our file)
    // - Use jQuery to select all "select" elements with class "multiple" and invoke the following method
    // - Use jQuery to select all "select" elements with class "single" and invoke the following method: .multipleSelect({ single: true, filter: true });
  })
  .catch(err => showGenericModal('Error', err))
})

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
      ko.mapping.fromJS(data, viewModel.teams);
      resolve();
    })
    .fail(err => reject(`Error loading the team data.`))
  }))
}

/**
 * Responsible for populating the observable *employees* property with data
 * 
 * @returns a promise relative to **https://teams-api-lean.herokuapp.com/employees**
 */
let initializeEmployees = () => {
  return new Promise((resolve, reject) => {
    let data = $.ajax(`https://teams-api-lean.herokuapp.com/employees`)
    .done(data => {
      
    })
    .fail(err => reject(`Error loading the employee data`));
  })
}

/**
 * Responsible for populating the observable *projects* property with data
 * 
 * @returns a promise relative to **https://teams-api-lean.herokuapp.com/projects**
 */
let initializeProjects = () => {
  return new Promise((resolve, reject) => {
    let data = $.ajax(`https://teams-api-lean.herokuapp.com/projects`)
    .done(data => {
      // TODO: Set value of 'Projects' property to the data returned from the AJAX call and resolve
    })
    .fail(err => reject(`Error loading the 'project' data`));
  })
}