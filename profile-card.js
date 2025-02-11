function toggleIntro() {
    const introText = document.getElementById('intro');
    const button = document.querySelector('.view-more');
  
    if (introText.style.display === 'none') {
      introText.style.display = 'block';
      button.innerText = 'View Less';
    } else {
      introText.style.display = 'none';
      button.innerText = 'View More';
    }
  }
  