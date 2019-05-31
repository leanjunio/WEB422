let employeesModel = []

/**
 * Invoke the **initializeEmployeesModel()** to fetch data and populate the table
 */
$(document).ready(() => {
  initializeEmployeesModel();
  let employeeSearchBar = $('#employee-search');
  let employeeSearchBarVal = $('#employee-search').val();
  employeeSearchBar.keyup(() => {
    getFilteredEmployeesModel(employeeSearchBarVal);
    refreshEmployeeRows(employeesModel);
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
  $('#employees-table').empty();  // clear the table
  var compiled = _.template('<% _.forEach(employees, function(employee) { %><li><%- employee.FirstName %></li><% }); %>');
  // $.each(employees, (index, e) => {
  //   let div = 
  //   `
  //     <div class="row body-row" data-id="<%= eeeeeeeeeeeeeeeeeeeeeeeee._id %>">
  //     <div class="col-xs-4 body-column"><%= e.FirstName %></div>
  //     <div class="col-xs-4 body-column"><%= e.LastName %></div>
  //     <div class="col-xs-4 body-column"><%= e.Position.PositionName %></div>
  //     </div>
  //   `
  // compiled({ 'employees': employees });
  console.log(compiled({ 'employees': employees }));
  // let compiled = _.template(div);
  // $('#employees-table').append(compiled);
  // })
  
}

/**
 * Returns a filtered version of the global employeesModel array
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
  console.log(filterString);
  // TODO: See what sort of strings can come from filterString... 
}

/**
 * Returns a copy of the found employee that has a matching id
 * 
 * @param {string} id The id pertaining to one employee
 */
let getEmployeeModelById = (id) => {

}