document.addEventListener('DOMContentLoaded', function() {
    const flashDiv = document.getElementById('flash');

    flashDiv.classList.add('flash-red');

    setTimeout(function() {
      flashDiv.classList.remove('flash-red');
    }, 200);
  });