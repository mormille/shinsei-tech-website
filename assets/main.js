document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');
  toggle && toggle.addEventListener('click', function(){
    if(nav.style.display === 'flex'){
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '12px';
      nav.style.alignItems = 'center';
    }
  });
});
