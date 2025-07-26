
  const filter = document.getElementById('price-filter');
  const cards = document.querySelectorAll('.card');

  filter.addEventListener('change', () => {
    const value = filter.value;

    cards.forEach(card => {
      const price = parseInt(card.getAttribute('data-price'));

      if (
        value === 'all' ||
        (value === 'under500' && price < 500) ||
        (value === '500to1000' && price >= 500 && price <= 1000) ||
        (value === 'above1000' && price > 1000)
      ) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

