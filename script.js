// Año dinámico en el footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Animaciones suaves al hacer scroll usando IntersectionObserver
const fadeElements = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  fadeElements.forEach((el) => observer.observe(el));
} else {
  // Fallback: si el navegador no soporta IntersectionObserver, mostramos todo
  fadeElements.forEach((el) => el.classList.add('visible'));
}

// Comportamiento de FAQ (acordeón simple)
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // Cerrar todos
    faqItems.forEach((i) => i.classList.remove('open'));
    // Abrir solo el que se clicó (si no estaba abierto)
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});
