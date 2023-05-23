window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });
  document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").forEach((section) => {
    observer.observe(section);
  });
});

window.addEventListener('scroll', () => {
  const scrollPositionY = $(document).scrollTop();
  const tocHeight = $('.table-of-contents').height();
  const aboutAuthorPositionY = $('.separator').position().top;
  if (scrollPositionY >= aboutAuthorPositionY - tocHeight - 35) {
    $('.table-of-contents').css('position', 'static');
  } else {
    $('.table-of-contents').css('position', 'sticky');
  }
});
