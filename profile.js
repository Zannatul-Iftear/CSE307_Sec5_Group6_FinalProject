document.getElementById('editSkills').addEventListener('click', function() {
    document.getElementById('skillsDialog').style.display = 'block';
  });
  
  document.getElementById('skillsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Process selected skills here (access form data, etc.)
    document.getElementById('skillsDialog').style.display = 'none'; // Hide the dialog after saving
  });