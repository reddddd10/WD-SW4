document.querySelector('.light').addEventListener('mouseenter', function() {
    document.body.classList.add('grayscale');
});

document.querySelector('.light').addEventListener('mouseleave', function() {
    document.body.classList.remove('grayscale');
});
