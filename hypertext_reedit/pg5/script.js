document.addEventListener('DOMContentLoaded', function() {
    const flashDiv = document.getElementById('flash');

    flashDiv.classList.add('flash-green');

    setTimeout(function() {
      flashDiv.classList.remove('flash-green');
    }, 200);
  });