//funciòn que carga las animaciones de las habilidades
function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart4').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart5').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart6').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });

    })
}
//Función para filtrar las categorías de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}

//Función que detecta cuando lanzar la animación de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("chart");
        habilidades[0].classList.add("chart1");
        habilidades[1].classList.add("chart2");
        habilidades[2].classList.add("chart3");
        habilidades[3].classList.add("chart4");
        habilidades[4].classList.add("chart5");
        habilidades[5].classList.add("chart6");

        cargarAnimaciones();
    }
}

//detecto el scrolling para aplicar la animación de las habilidaes
window.onscroll = function(){
    efectoHabilidades();
}

//función que muestra el menu responsive{
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className="";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const galeria = document.querySelector('.galeria');
    const items = document.querySelectorAll('.item');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    
    let currentIndex = 0;
    items[currentIndex].classList.add('active');
    
    galeria.addEventListener('scroll', highlightCenterItem);
    
    btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        scrollGaleria();
        highlightCenterItem();
    });
    
    btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        scrollGaleria();
        highlightCenterItem();
    });
    
    function scrollGaleria() {
        items[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
    
    function highlightCenterItem() {
        items.forEach(item => item.classList.remove('active'));
        items[currentIndex].classList.add('active');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    typeMessage();
  });
  

//Este codigo es para agregar una función a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
const links = document.querySelectorAll("#nav a");
for(i=0; i < links.length;i++){
    links[i].onclick = function(){
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}

// Agrega este script a tu página para manejar el efecto "typing"
const messages = ["Desarrolladora web", "Programadora", "Ingeniera de Software"];
let messageIndex = 0;
const typingElement = document.querySelector(".typing");

function typeMessage() {
    const message = messages[messageIndex];
    let i = 0;

    function type() {
        if (i < message.length) {
            typingElement.textContent += message.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            setTimeout(eraseMessage, 2000);
        }
    }

    type();
}

function eraseMessage() {
    let message = typingElement.textContent;
    let i = message.length;

    function erase() {
        if (i >= 0) {
            typingElement.textContent = message.substring(0, i);
            i--;
            setTimeout(erase, 0.1); // Ajusta el tiempo para un efecto más suave
        } else {
            messageIndex = (messageIndex + 1) % messages.length;
            typeMessage();
        }
    }

    erase();
}



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Número de slides visibles a la vez
    spaceBetween: 20, // Espacio entre los slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.swiper-container', {
    // Configuración del Swiper
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
});
