// mission.js

// Select the theme selector and logo elements
const themeSelector = document.querySelector('#themeSelector');
const logo = document.querySelector('#logo');

// Function to change the theme
function changeTheme() {
  console.log('Current Theme:', themeSelector.value); // Log selected value for debugging
  if (themeSelector.value === 'dark') {
    // Add the dark class to the body element
    document.body.classList.add('dark');
    // Change the logo to the white version
    logo.src = 'byui-logo_white.webp'; // Make sure you have this logo in your project folder
  } else {
    // Remove the dark class from the body element
    document.body.classList.remove('dark');
    // Change the logo back to the blue version
    logo.src = 'byui-logo_blue.webp'; // Ensure you have the blue logo in your project folder
  }
}

// Add event listener to the themeSelector element to listen for changes
themeSelector.addEventListener('change', changeTheme);

// Optional: Set the default theme to light (since it is first in the list)
window.onload = () => {
  themeSelector.value = 'light'; // Default to 'light' when the page loads
  changeTheme(); // This ensures the correct theme is applied when the page loads
};
