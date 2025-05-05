const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faqItem => {
    const question = faqItem.querySelector('.faq-question');
    

  question.addEventListener('click', () => {
    faqItem.classList.toggle('active');
  });
});
