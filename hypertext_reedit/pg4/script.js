document.addEventListener('DOMContentLoaded', function() {
    const flashDiv = document.getElementById('flash');

    flashDiv.classList.add('flash-purple');

    setTimeout(function() {
      flashDiv.classList.remove('flash-purple');
    }, 200);
  });