document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Get the form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var imageLink = document.getElementById("imageLink").value;
    var gender = document.getElementById("gender").value;
    var skills = document.querySelectorAll('input[name="skills"]:checked');
  
    // Update the output data
    document.getElementById("outputName").textContent = name;
    document.getElementById("outputEmail").textContent = email;
    document.getElementById("outputWebsite").textContent = website;
    document.getElementById("outputImageLink").textContent = imageLink;
    document.getElementById("outputGender").textContent = gender;
    document.getElementById("outputSkills").textContent = Array.from(skills).map(function(skill) {
      return skill.value;
    }).join(", ");
  
    // Image source based on Gender
    if (gender === "male") {
      document.getElementById("outputImage").src = "https://cdn.pixabay.com/photo/2012/04/10/16/40/sign-26289_1280.png";
    } else if (gender === "female") {
      document.getElementById("outputImage").src = "https://cdn.pixabay.com/photo/2012/04/10/16/40/sign-26291_1280.png";
    }
  
    // Display the output section
    document.querySelector(".output-section").style.display = "block";
    document.querySelector(".output-description").style.display = "block";
    document.querySelector(".output-image").style.display = "block";
  });
  