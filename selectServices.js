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


  document.addEventListener('DOMContentLoaded', function () {

    var addRowButton1 = document.getElementById('addRowButton1');
      var tbody1 = document.getElementById('tbody1');
 


      var count = 2;
      function addNewRow() {
        var existingRow = tbody1.querySelector('tr');
        var newRow = existingRow.cloneNode(true);

        // Reset input values in the new row
        newRow.querySelectorAll('input[type="text"]').forEach(function (input) {
          input.value = '0';
        });

        // Reset data-price values in the new row
        newRow.querySelectorAll('.product').forEach(function (product) {
          product.dataset.price = '0';
        });

        //append data-name with a rowIndex counter to the product div
        newRow.querySelectorAll('.product').forEach(function (product) {
          product.dataset.name = product.dataset.name + count;
        });


        tbody1.appendChild(newRow);
        count++;

        //select the rug area input
        let rugArea = newRow.querySelector('.rug-area');
        //select inputs under rug-area
        let rugAreaInputs = rugArea.querySelectorAll('input');
        rugAreaInputs.forEach(input => input.addEventListener('input', updateDataPrice))
      }

      // Attach event listener to the add row button
      addRowButton1.addEventListener('click', addNewRow);

    })


  













