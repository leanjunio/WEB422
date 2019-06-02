/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Lean Junio Student ID: 019-109-123 Date: June 2, 2019
*
*
********************************************************************************/

let employeesModel = []

/**
 * Invoke the **initializeEmployeesModel()** to fetch data and populate the table
 */
$(document).ready(() => {
  initializeEmployeesModel();
  let employeeSearchBar = $('#employee-search');

  employeeSearchBar.keyup(() => {
    let employeeSearchBarVal = employeeSearchBar.val();
    let filteredEmployees = getFilteredEmployeesModel(employeeSearchBarVal);
    refreshEmployeeRows(filteredEmployees);
  });
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
  console.log('initializeEmployeesModel()...')
  $.ajax({
    type: 'get',
    url: 'https://teams-api-lean.herokuapp.com/employees',
    dataType: 'json',
  })
  .done(data => {
    employeesModel = $.makeArray(data);
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
  $('.modal-title').html(`<b>${title}</b>`);
  $('.modal-body').html(message);
  $('#genericModal').modal('show');
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
  console.log(`refreshEmployeeRows()...`)
  console.log(employees.length)
  $('#employees-table').empty();  // clear the table
  let compiled = _.template(
    `
    <%
      _.forEach(employees, (employee) => {
        %>
          <div class="row body-row" data-id="<%= employee._id %>" onclick="employeeHandler(this)">
            <div class="col-xs-4 body-column"><%= employee.FirstName %></div>
            <div class="col-xs-4 body-column"><%= employee.LastName %></div>
            <div class="col-xs-4 body-column"><%= employee.Position.PositionName %></div>
          </div>
        <%
      })
    %>
    `
  );
  $('#employees-table').append(compiled({ 'employees': employees }));
}

/**
 * (Emulate two way data binding) Returns a filtered version of the global employeesModel array
 * 
 * The filtered version of the "employeesModel" array using the following rule:
 * - Any employee object in the "employeesModel" array whose **.FirstName**, **.LastName**, or **.Position.PositionName** properties contain the local "filterString"
 *  (provided to the function) will be added to the filtered array. This will allow the user to filter all 3 columns of the table with a single string.
 * - NOTE: This operation is not case sensitive
 * - Hint: The Lodash **_.filter()** method is perfect for this type of operation
 * 
 * @param {string} filterString The criteria to filter the employees array with
 * @returns {array} A filtered version of the employeesModel array
 */
let getFilteredEmployeesModel = (filterString) => {

  // filters employeesModel based on FirstName LastName and PositionName
  let filteredArr = employeesModel.filter(employee => employee.FirstName.includes(filterString) || employee.LastName.includes(filterString) || employee.Position.PositionName.includes(filterString));
  
  if (filteredArr.length == 0)
    return null;
  else
    return filteredArr;
}

/**
 * Returns a copy of the found employee that has a matching id
 * 
 * @param {string} id The id pertaining to one employee
 */
let getEmployeeModelById = (id) => {
  let employee = employeesModel.filter(employee => employee._id === id);
  return employee[0];
}

let employeeHandler = (element) => {
  let id = $(element).attr('data-id');
  let employeeFromId = getEmployeeModelById(id);

  // Define lodash template
  let compiled = _.template(
  `
    <strong>Address:</strong> <%= employee.AddressStreet %> <%= employee.AddressCity %>, <%= employee.AddressState %> <%= employee.AddressZip %><br>
    <strong>Phone Number:</strong> <%= employee.PhoneNum %> ext: <%= employee.Extension %><br>
    <strong>Hire Date:</strong> <%= hireDate %>
  `);
  showGenericModal(`${employeeFromId.FirstName} ${employeeFromId.LastName}`, compiled({ 'employee': employeeFromId, 'hireDate': moment(employeeFromId.HireDate).format('LL') }));
}