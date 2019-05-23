let employeesModel = []

$(document).ready(() => {
  
});

/**
 * Populates the "employeesModel" array.
 * 
 * Creates an AJAX-GET request to the 'teams-api'(**https://teams-api-lean.herokuapp.com/employees**). 
 * When the call is succesful:
 * - Populate the *employeesModel* array with the data received from the API
 * - Call the **refreshEmployeeRows** function and pass *employeeModel* as the parameter
 * 
 * When the AJAX call fails:
 * - Invoke the **showGenericModal** function with *Error* as the *<title></title>* and an appropriate error message as the message
 */
let initializeEmployeesModel = () => {
  $.ajax({
    type: 'get',
    url: 'https://teams-api-lean.herokuapp.com/employees',
    dataType: 'json',
  })
  .done(data => {
    data.forEach(element => employeesModel.push(element));
    refreshEmployeeRows(employeesModel);
  })
  .fail(err => showGenericModal('Error', err));
}

/**
 * Displays the genericModal with the proper contents updated.
 * 
 * This function does the following:
 * - Sets the contents of *modal-title* to the passed *title* value
 * - Sets the contents of *modal-body* to the passed *message* value
 * - Show the genericModal using the id (genericModal)
 * 
 * @param {string} title 
 * @param {string} message 
 */
let showGenericModal = (title, message) => {
  $('.modal-title').val(title);
  $('.modal-body').val(message);
  // TODO: Show the modal
}
