// Function to open modal
function openModal() {
    document.getElementById('jobFormModal').style.display = 'block';
  }
  
  // Function to close modal
  function closeModal() {
    document.getElementById('jobFormModal').style.display = 'none';
  }
  
  // Function to handle checkbox selection
  function handleCheckboxSelection(event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;
    
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });
  
    if (checkedCount > 4) {
      event.preventDefault();
      alert('Please select only 4 skills.');
      return false;
    }
  }
  
  // Attach click event to the "PostJob" link
  document.getElementById('PostJob').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    openModal(); // Call the function to open the modal
  });
  
  // Handle form submission
  document.getElementById('jobForm').addEventListener('submit', function(event) {
    if (!handleCheckboxSelection(event)) {
      return false; // Prevent form submission if validation fails
    }
    // Add your form submission logic here
  });
  