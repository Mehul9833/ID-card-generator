function generateIdCard(event) {
    event.preventDefault();
    const studentName = document.getElementById("student-name").value;

    const targetStudent = document.getElementById("generated-student-name");
    targetStudent.innerText = studentName;

    const collegeName = document.getElementById("college-name").value;

    const targetCollege = document.getElementById("generated-college-name");
    targetCollege.innerText = collegeName;

    const locationName = document.getElementById("location-name").value;

    const targetLocation = document.getElementById("generated-location-name");
    targetLocation.innerText = locationName;

    const generatedIdCardContainer = document.getElementById("generated-id-card");
    generatedIdCardContainer.style.display = "block";
};
