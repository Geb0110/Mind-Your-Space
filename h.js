{
  //hide nav bar
    const nav = document.querySelector(".nav");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
      } else {
        nav.classList.remove("nav--hidden");
      }
  
      lastScrollY = window.scrollY;
    });
    // hide items
    const loadmore = document.querySelector('#loadmore');
		let currentItems = 0;
		loadmore.addEventListener('click', (e) => {
			const elementList = [...document.querySelectorAll('.list .list-element')];
			for (let i = currentItems; i < currentItems + 2; i++) {
				if (elementList[i]) {
					elementList[i].style.display = 'block';
				}
			}
			currentItems += 1;
	
			// Load more button will be hidden after list fully loaded
			if (currentItems >= elementList.length) {
				event.target.style.display = 'none';
			}
		})
    //animation
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }

  