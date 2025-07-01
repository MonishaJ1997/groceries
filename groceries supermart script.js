
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

   


//show login
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

  
  


//show location
  const locationBtn = document.getElementById("locationBtn");
  const locationOverlay = document.getElementById("locationOverlay");
  const locationContent = document.getElementById("locationContent");

  
  locationBtn.addEventListener("click", () => {
    locationOverlay.style.display = "flex";
  });

  
  locationOverlay.addEventListener("click", (e) => {
    if (!locationContent.contains(e.target)) {
      locationOverlay.style.display = "none";
    }
  });

  
  function closeOverlay() {
    locationOverlay.style.display = "none";
  }

//show account

  const accountBtn = document.getElementById("accountBtn");
  const accountOverlay = document.getElementById("accountOverlay");
  const accountContent = document.getElementById("accountContent");

  accountBtn.addEventListener("click", () => {
    accountOverlay.style.display = "block";
  });


  document.addEventListener("click", function(e) {
    if (
      !accountOverlay.contains(e.target) &&
      !accountBtn.contains(e.target)
    ) {
      accountOverlay.style.display = "none";
    }
  });

  
  function closeAccountOverlay() {
    accountOverlay.style.display = "none";
  }


  
 
 
 

 
 
 
 

 
 
 
 
 
 

 
 
 
 
//use multiple overlay


  document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelectorAll(".overlay-btn").forEach(button => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-overlay");
        const overlay = document.getElementById(targetId);
        if (overlay) overlay.style.display = "flex";
      });
    });

  
    document.querySelectorAll(".overlay-box").forEach(overlay => {
      const content = overlay.querySelector(".overlay-content");

      overlay.addEventListener("click", function (e) {
        if (!content.contains(e.target)) {
          overlay.style.display = "none";
        }
      });

     
     
     
     
     
      
    });
  });



//cart overlay
  
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
 
 
 





 
 
 
 
 
 
 
 
 


 
 

 
 
 
 
 
 













