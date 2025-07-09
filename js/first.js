var a = document.querySelectorAll('input,button,.fie');
console.log(a);
console.log(typeof (a));

a[0].addEventListener('input', () => {
    a[0].className = "add";
    var b = a[0].getAttribute('type');
    if (b == 'text') {
        a[1].style.display = "none";
    }

    else {
        a[1].style.display = "block";
    }
});

a[3].addEventListener('click', () => {
    alert("file are submated");
})