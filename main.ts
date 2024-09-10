document.getElementById("form")?.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const profileInput = document.getElementById('pro') as HTMLInputElement;
    const firstElement = document.getElementById("first-name") as HTMLInputElement;
    const lastElement = document.getElementById("last-name") as HTMLInputElement;
    const emailElement = document.getElementById("em") as HTMLInputElement;
    const phoneElement = document.getElementById("ph") as HTMLInputElement;
    const eduElement = document.getElementById("edu") as HTMLInputElement;
    const expElement = document.getElementById("experience") as HTMLInputElement;
    const skillElement = document.getElementById("skills") as HTMLInputElement;
  
    if (profileInput && firstElement && lastElement && emailElement && phoneElement && eduElement && expElement && skillElement) {
      const namefirst = firstElement.value;
      const namelast = lastElement.value;
      const em = emailElement.value;
      const ph = phoneElement.value;
      const edu = eduElement.value;
      const experience = expElement.value;
      const skills = skillElement.value;
  
       
      const proFl = profileInput.files?.[0];
      const proURL = proFl ? URL.createObjectURL(proFl) : "";
  
       
      const output = `
        <h2>Resume</h2>
        ${proURL ? `<img src="${proURL}" alt="profile" class="profile">` : '' }
        <p><strong>Name:</strong> ${namefirst} ${namelast}</p>
        <p><strong>Email:</strong> ${em}</p>
        <p><strong>Phone:</strong> ${ph}</p>
        
        <h3>Education</h3>
        <p>${edu}</p>
  
        <h3>Experience</h3>
        <p>${experience}</p>
  
        <h3>Skills</h3>
        <p>${skills}</p>
      `;
  
      const elres = document.getElementById("output");
      if (elres) {
        elres.innerHTML = output;
      } else {
        console.error("The resume output element is missing");
      }
    } else {
      console.error("One or more element outputs are missing");
    }
  });
  