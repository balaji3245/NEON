// Animate nav links one by one when menu opens (mobile)
document.addEventListener('DOMContentLoaded', function() {
  var menuBtn = document.querySelector('.mobile-menu-btn');
  if (!menuBtn) return;
  menuBtn.addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    if(nav.classList.contains('active')) {
      const items = nav.querySelectorAll('li');
      items.forEach((li, i) => {
        li.style.opacity = '0';
        li.style.transform = 'translateY(-10px)';
        li.style.transition = 'none';
      });
      setTimeout(() => {
        items.forEach((li, i) => {
          setTimeout(() => {
            li.style.transition = 'opacity 0.3s, transform 0.3s';
            li.style.opacity = '1';
            li.style.transform = 'translateY(0)';
          }, i * 120);
        });
      }, 10);
    }
  });
});
