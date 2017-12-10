var i = 0;
var text = 'Bienvenue sur le site';
var speed = 80;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("remplir").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
