
//show section
function showSection(id) {
  
    document.querySelectorAll("section").forEach(section => {
      section.style.display = 'none';
    });
  
    const target = document.getElementById(id);
    if (target) {
      target.style.display = 'block';
    }
  }
  window.onload = function () {
  
    sectionIDs.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        
        const wrapper = document.createElement('div');
        wrapper.innerHTML = section.innerHTML;
        homeContainer.appendChild(wrapper);
      }

  
    });
  };
//




//function active

function showSection(id, clickedLink) {
  // Hide all sections
  document.querySelectorAll("section").forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected section
  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
  }

  // Remove active class from all nav links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
  });

  // Add active class to the clicked link
  if (clickedLink) {
    clickedLink.classList.add("active");
  }
}


window.onload = function () {
  showSection('home', document.querySelector(".nav-link.active"));
};

   
const loginBtn = document.getElementById("loginBtn");
const loginOverlay = document.getElementById("loginOverlay");
const overlayContent = document.getElementById("overlayContent");

// Show overlay when login button is clicked
loginBtn.addEventListener("click", () => {
  loginOverlay.style.display = "block";
});

// Hide overlay when clicking outside the content
loginOverlay.addEventListener("click", (e) => {
  if (!overlayContent.contains(e.target)) {
    loginOverlay.style.display = "none";
  }
});

document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("loginOverlay").style.display = "flex";
});
document.getElementById("loginOverlay").addEventListener("click", function (e) {
  if (!document.getElementById("overlayContent").contains(e.target)) {
    this.style.display = "none";
  }
});

  
  

  const locationBtn = document.getElementById("locationBtn");
  const locationOverlay = document.getElementById("locationOverlay");
  const locationContent = document.getElementById("locationContent");

  // Show overlay
  locationBtn.addEventListener("click", () => {
    locationOverlay.style.display = "flex";
  });

  // Close overlay when clicking outside
  locationOverlay.addEventListener("click", (e) => {
    if (!locationContent.contains(e.target)) {
      locationOverlay.style.display = "none";
    }
  });

  // Optional: Close using the "X"
  function closeOverlay() {
    locationOverlay.style.display = "none";
  }



  const accountBtn = document.getElementById("accountBtn");
  const accountOverlay = document.getElementById("accountOverlay");
  const accountContent = document.getElementById("accountContent");

  // Show overlay
  accountBtn.addEventListener("click", () => {
    accountOverlay.style.display = "block";
  });

  // Close when clicking outside
  document.addEventListener("click", function(e) {
    if (
      !accountOverlay.contains(e.target) &&
      !accountBtn.contains(e.target)
    ) {
      accountOverlay.style.display = "none";
    }
  });

  // Close with "X"
  function closeAccountOverlay() {
    accountOverlay.style.display = "none";
  }


  
 
 
 

 
 
 
 

 
 
 
 
 
 

 
 
 
 



  document.addEventListener("DOMContentLoaded", function () {
    // Show overlay on button click
    document.querySelectorAll(".overlay-btn").forEach(button => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-overlay");
        const overlay = document.getElementById(targetId);
        if (overlay) overlay.style.display = "flex";
      });
    });

    // Close overlay on outside click or X click
    document.querySelectorAll(".overlay-box").forEach(overlay => {
      const content = overlay.querySelector(".overlay-content");

      overlay.addEventListener("click", function (e) {
        if (!content.contains(e.target)) {
          overlay.style.display = "none";
        }
      });

     
     
     
     
     
      
    });
  });




  
  document.addEventListener("DOMContentLoaded", function () {
    const cartBtn = document.getElementById("cartBtn");
    const cartOverlay = document.getElementById("cartOverlay");
    const cartContent = document.getElementById("cartContent");

    if (cartBtn && cartOverlay && cartContent) {
      cartBtn.addEventListener("click", () => {
        cartOverlay.style.display = "flex";
      });

      cartOverlay.addEventListener("click", (e) => {
        if (!cartContent.contains(e.target)) {
          cartOverlay.style.display = "none";
        }
      });
    }
  });




function closeCartOverlay() {
   cartOverlay.style.display = "none";
 }
 
 
 





 
 
 
 
 
 
 
 
 


 
 

 
 
 
 
 
 













