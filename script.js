 // handle the Desktop search Icon
function toggleSearch() {
    var searchInput = document.getElementById("searchInput");
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
      searchInput.style.display = "block";
      searchInput.focus(); 
    } else {
      searchInput.style.display = "none";
    }
  } 

  // handle the Mobile search Icon
  function toggleSearchMobile() {
    var searchInput = document.getElementById("searchInputMobile");
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
      searchInput.style.display = "block";
      searchInput.focus(); 
    } else {
      searchInput.style.display = "none";
    }
  }

  // Dropdown HOVER

  document.querySelectorAll('.hover-dropdown').forEach(function (item) {
    item.addEventListener('mouseover', function () {
        item.querySelector('.dropdown-toggle').classList.add('show');
        item.querySelector('.dropdown-menu').classList.add('show');
    });

    item.addEventListener('mouseout', function () {
        item.querySelector('.dropdown-toggle').classList.remove('show');
        item.querySelector('.dropdown-menu').classList.remove('show');
    });
});


// This is the code to Hide the Last-div in the Header on the click of Navbar-toggler in the mobileview
document.addEventListener('DOMContentLoaded', function () {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var lastDiv = document.querySelector('.last-div');

  navbarToggler.addEventListener('click', function () {
    if (lastDiv.style.display === 'none') {
      lastDiv.style.display = 'flex';
    } else {
      lastDiv.style.display = 'none';
    }
  });

  var myCollapse = new bootstrap.Collapse(document.getElementById('navbarSupportedContent'), {
    toggle: false
  });

  myCollapse._element.addEventListener('show.bs.collapse', function () {
    lastDiv.style.display = 'flex';
  });

  myCollapse._element.addEventListener('hide.bs.collapse', function () {
    lastDiv.style.display = 'none';
  });
});
