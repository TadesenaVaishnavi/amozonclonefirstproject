// Select all "Add to Cart" buttons
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
    // you could also increment a cart counter here…
  });
});
