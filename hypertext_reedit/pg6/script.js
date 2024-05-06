document.addEventListener('DOMContentLoaded', function() {
    const flashDiv = document.getElementById('flash');

    flashDiv.classList.add('flash-jasmine');

    setTimeout(function() {
      flashDiv.classList.remove('flash-jasmine');
    }, 200);
  });