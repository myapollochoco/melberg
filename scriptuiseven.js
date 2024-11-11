// side left menu
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.nav-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all menu items
            menuItems.forEach(menu => menu.classList.remove('active'));
            
            // Add active class to the clicked menu item
            item.classList.add('active');
        });
    });
});

// days tab
document.addEventListener('DOMContentLoaded', () => {
    const switchItems = document.querySelectorAll('.switch_list');

    switchItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all menu items
            switchItems.forEach(menu => menu.classList.remove('switch_active'));
            
            // Add active class to the clicked menu item
            item.classList.add('switch_active');
        });
    });
});

// share dropdown
// function shareddopen() {
//   var x = document.getElementById("share_dialog");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// from copilot 
// document.getElementById('shareButton').addEventListener('click', function() {
//     const shareTarget = document.getElementById('shareDialog');
//     shareTarget.classList.toggle('show');
// });

// share dropdown
document.getElementById('shareButton').addEventListener('click', function(event) {
    const target = document.getElementById('shareDialog');
    if (target.classList.contains('showanm')) {
        target.classList.remove('showanm');
        // if (!target.classList.contains('showanm')) {
        //     target.classList.add('hide');
        // }
        target.classList.add('hide');
        target.classList.add('hideanm');
        target.classList.remove('hide');
    }
    else {
    	target.classList.remove('hideanm');
    	target.classList.remove('hide');
    	target.classList.add('showanm');
    }
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    const target = document.getElementById('shareDialog');
    if (!target.contains(event.target) && event.target.id !== 'toggleButton') {
        if (target.classList.contains('showanm')) {
            target.classList.remove('showanm');
            target.classList.add('hideanm');
        }
    }
});


//SNACKBAR COPIED
function copiedBar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbarCopied");

  // Add the "show" class to DIV
  x.className = "showsnack";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("showsnack", ""); }, 3000);
}


//STICKY HEADER
const header = document.getElementById("stickyHeader");
const intercept = document.createElement("div");
// const pagetitlemove = document.getElementById("pageTitle");

intercept.setAttribute("data-observer-intercept", "");
header.before(intercept);
// pagetitlemove.before(intercept);

const observer = new IntersectionObserver(([entry]) => {
  header.classList.toggle("stuck", !entry.isIntersecting);
  // pagetitlemove.classList.toggle("titlemove", !entry.isIntersecting);
});

observer.observe(intercept);


// Profile dropdown
document.getElementById('profileButton').addEventListener('click', function(event) {
    const profiletarget = document.getElementById('profileDialog');
    if (profiletarget.classList.contains('showdialog')) {
        profiletarget.classList.remove('showdialog');
        profiletarget.classList.add('hidedialog');

    }
    else {
    	profiletarget.classList.remove('hidedialog');
    	profiletarget.classList.add('showdialog');
    }
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    const profiletarget = document.getElementById('profileDialog');
    if (!profiletarget.contains(event.target) && event.target.id !== 'profileButton') {
        if (profiletarget.classList.contains('showdialog')) {
            profiletarget.classList.remove('showdialog');
            profiletarget.classList.add('hidedialog');
        }
    }
});

// FILTER MODAL
document.getElementById('filterButton').addEventListener('click', function(event) {
    const filtertarget = document.getElementById('profileDialogtwo');
    if (filtertarget.classList.contains('showdialog_f')) {
        filtertarget.classList.remove('showdialog_f');
        filtertarget.classList.add('hidedialog');

    }
    else {
    	filtertarget.classList.remove('hidedialog');
    	filtertarget.classList.add('showdialog_f');
    }
    event.stopPropagation();
});

document.getElementById('dim_filter').addEventListener('click', function(event) {
    const filtertarget = document.getElementById('profileDialogtwo');
    if (filtertarget.classList.contains('showdialog_f')) {
        filtertarget.classList.remove('showdialog_f');
        filtertarget.classList.add('hidedialog');

    }
    else {
    	filtertarget.classList.remove('hidedialog');
    	filtertarget.classList.add('showdialog_f');
    }
    event.stopPropagation();
});

