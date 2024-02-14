function toggleDropdown(dropdownId, contentClass) {
    const dropdown = document.getElementById(dropdownId);
    const content = document.querySelector(`.${contentClass}`);
    let isOpen = false;

    dropdown.addEventListener('click', function() {
      if (!isOpen) {
        content.style.display = 'block';
        
      } else {
        content.style.display = 'none';
        
      }
      isOpen = !isOpen;
    });
  }

  toggleDropdown('room-dropdown', 'room-table');
  toggleDropdown('hallway-dropdown', 'hallway-table');
  toggleDropdown('staircase-dropdown', 'staircase-table');


  toggleDropdown('sofa-dropdown', 'sofa-table');
  toggleDropdown('sectional-dropdown', 'sectional-table');
  toggleDropdown('loveseat-dropdown', 'loveseat-table');
  toggleDropdown('chair-dropdown', 'chair-table');
  toggleDropdown('ottoman-dropdown', 'ottoman-table');
  toggleDropdown('dining-dropdown', 'dining-table');

  toggleDropdown('l-sofa-dropdown', 'l-sofa-table');
  toggleDropdown('l-sectional-dropdown', 'l-sectional-table');
  toggleDropdown('l-loveseat-dropdown', 'l-loveseat-table');
  toggleDropdown('l-chair-dropdown', 'l-chair-table');
  toggleDropdown('l-ottoman-dropdown', 'l-ottoman-table');
  toggleDropdown('l-dining-dropdown', 'l-dining-table');
  
  toggleDropdown('iharc-dropdown', 'iharc-table');


















  // JavaScript for adding rows for both desktop and mobile versions

// Function to add a new row
function addRow() {
    var newRowHtml = `
        <tr>
            <th>
                <div class="rug-area d-flex flex-row">
                    <input class="w-25 form-control" type="text" min="0" pattern="[0-9]*" value="0">
                    <span class="x">x</span>
                    <input class="w-25 form-control" type="text" min="0" pattern="[0-9]*" value="0">
                </div>
            </th>
            <td class="rug-column">
                <div class="d-flex flex-row mb-3 product" data-price="0" data-name="inhomearea-rugcleaning-clean">
                    <button class="btn btn-primary">-</button>
                    <input class="w-25 form-control" type="text" min="0" pattern="[0-9]*" value="0">
                    <button class="btn btn-primary">+</button>
                </div>
            </td>
            <td class="rug-column">
                <div class="d-flex flex-row mb-3 product" data-price="0" data-name="inhomearea-rugcleaning-protect">
                    <button class="btn btn-primary">-</button>
                    <input class="w-25 form-control" type="text" min="0" pattern="[0-9]*" value="0">
                    <button class="btn btn-primary">+</button>
                </div>
            </td>
            <td class="rug-column">
                <div class="d-flex flex-row mb-3 product" data-price="0" data-name="inhomearea-rugcleaning-deodorize">
                    <button class="btn btn-primary">-</button>
                    <input class="w-25 form-control" type="text" min="0" pattern="[0-9]*" value="0">
                    <button class="btn btn-primary">+</button>
                </div>
            </td>
        </tr>
    `;

    // Append the new row HTML to the appropriate table body
    var tbody = document.getElementById("mobileTbody"); // Use a different ID for mobile version
    tbody.insertAdjacentHTML("beforeend", newRowHtml);
}

// Add event listener to the "Add Row" button
var addRowButton = document.getElementById("addRowButton");
addRowButton.addEventListener("click", addRow);
