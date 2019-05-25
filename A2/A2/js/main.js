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
 * @param {string} title    The title that will be set to the <h4></h4> within the modal
 * @param {string} message  The message that will appear within the modal
 */
let showGenericModal = (title, message) => {
  $('.modal-title').val(title);
  $('.modal-body').val(message);
  // TODO: Show the modal
}

/**
 * Refreshes the table to contain the updates given.
 * 
 * The function does the following:
 * - Defines a lodash template using 'escape' and 'evaluate' delimiters to produce the following html structure for **every employee** in the local employees array:
 *  ```html
 *  <div class="row body-row" data-id="[the employee's _id]">
 *   <div class="col-xs-4 body-column">[the employee's first name]</div>
 *   <div class="col-xs-4 body-column">[the employee's last name]</div>
 *   <div class="col-xs-4 body-column">[the employee's position name]</div>
 *  </div>
 *  ```
 * - Invoke the template function and provide the 'employees' array as part of the parameter
 * - Add the results from invoking the template function as a child of the 'employees-table' element
 * - ***NOTE***: It is vital that the "employees-table" is cleared of any existing "body-row" elements, before adding any new ones
 * @param {array} employees 
 */
let refreshEmployeeRows = (employees) => {
  let employeeTemplates = _.template(`<%_.forEach(employees, (employee) => { %>
    <div class="row body-row" data-id="<%- employee.id %>">
    <div class="col-xs-4 body-column"><%- employee.first %></div>
    <div class="col-xs-4 body-column"><%- employee.last %></div>
    <div class="col-xs-4 body-column"><%- employee.position %></div>
    </div>}
  `);
  compiled({ 'employees': employeesModel });
  $('#employees-table').empty();  // clear the table
  console.log(employeeTemplates)  // TODO: Append to the table after checking format
}
