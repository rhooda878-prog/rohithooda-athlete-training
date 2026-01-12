// Minimal JS: year, nav toggle, plan toggle
document.addEventListener('DOMContentLoaded', function() {
  // Year in footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function(){
      mainNav.style.display = mainNav.style.display === 'block' ? '' : 'block';
    });
  }

  // Plan toggle buttons
  document.querySelectorAll('.plan-toggle').forEach(function(btn){
    btn.addEventListener('click', function(){
      var target = document.getElementById(btn.dataset.target);
      if (target) target.classList.toggle('hidden');
      btn.textContent = target && target.classList.contains('hidden') ? 'View 6‑Week Sample Plan' : 'Hide Sample Plan';
    });
  });
});
