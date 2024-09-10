var _a;
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profileInput = document.getElementById('pro');
    var firstElement = document.getElementById("first-name");
    var lastElement = document.getElementById("last-name");
    var emailElement = document.getElementById("em");
    var phoneElement = document.getElementById("ph");
    var eduElement = document.getElementById("edu");
    var expElement = document.getElementById("experience");
    var skillElement = document.getElementById("skills");
    if (profileInput && firstElement && lastElement && emailElement && phoneElement && eduElement && expElement && skillElement) {
        var namefirst = firstElement.value;
        var namelast = lastElement.value;
        var em = emailElement.value;
        var ph = phoneElement.value;
        var edu = eduElement.value;
        var experience = expElement.value;
        var skills = skillElement.value;
        // Handle profile picture
        var proFl = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var proURL = proFl ? URL.createObjectURL(proFl) : "";
        // Corrected template for image
        var output = "\n        <h2>Resume</h2>\n        ".concat(proURL ? "<img src=\"".concat(proURL, "\" alt=\"profile\" class=\"profile\">") : '', "\n        <p><strong>Name:</strong> ").concat(namefirst, " ").concat(namelast, "</p>\n        <p><strong>Email:</strong> ").concat(em, "</p>\n        <p><strong>Phone:</strong> ").concat(ph, "</p>\n        \n        <h3>Education</h3>\n        <p>").concat(edu, "</p>\n  \n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n  \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n      ");
        var elres = document.getElementById("output");
        if (elres) {
            elres.innerHTML = output;
        }
        else {
            console.error("The resume output element is missing");
        }
    }
    else {
        console.error("One or more element outputs are missing");
    }
});
