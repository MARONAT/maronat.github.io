// Example: Alert when 'Add to Cart' is clicked (for now)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Item added to cart!');
    });
});
