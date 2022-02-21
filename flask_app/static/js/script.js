count = 0;
function ocultar(element){
    let cookie = element.parentElement;
    cookie.remove();
    if (count !== 0){
        let barra = document.querySelector(".progress-bar");
        barra.style.visibility = "visible";
    }
    count++
}

function login(element){
    let foto = document.querySelector(".foto");
    let datos = document.querySelector(".datos");

    if (element.innerHTML == "ACCESSED"){
        element.innerHTML = `TO ACCESS`;
        foto.style.visibility = "hidden";
        datos.style.visibility = "hidden";
    }
    else{
        element.innerHTML = `ACCESSED`;
        alert("Welcome Yngrid to your website");
        foto.style.visibility = "visible";
        datos.style.visibility = "visible";
    }
}

function fullpantalla(element){
    element.requestFullscreen();
}

function videoplay(element){
    element.play(); 
}

function videopause(element){
    element.currentTime = 0;
    element.pause(); 
}

function like(element){
    let num = element.innerText;
    num = num.split(" ");
    num = Number(num[1]);
    num ++;
    element.innerText = "❤ " + num;
}

function barra(){
    let moveBlock = document.querySelector('.block');
    let proBar = document.querySelector('.pro-bar');
    let flag = false;
    let startX = null;
    let moveMax = (490);
    moveBlock.onmousedown = function(e){
        startX = e.pageX;
        moveBlock.style.left ? moveBlock.style.left : moveBlock.style.left = '0px';
        let startLeft = parseInt(moveBlock.style.left);
        document.onmousemove = function(e){
            let moveX = (e.pageX - startX) > 0 ? true : false;
            let moveSection = startLeft + (e.pageX - startX);
            if (moveSection >= 0 && moveSection <= moveMax) {
                let percent = ((startLeft + (e.pageX - startX)) / moveMax).toFixed(4) * 100;
                percent.toString().length > 5 ? percent = percent.toString().substring(0, 5) : percent = percent.toString();
                moveBlock.style.left = startLeft + (e.pageX - startX) + 'px';
                proBar.style.width = moveBlock.style.left;
                moveBlock.querySelector('div').innerText = percent + '%';
                let mensaje1 = document.querySelector(".mensaje1")
                if (percent < 20){
                    mensaje1.innerHTML = "It is not possible that you love me so little :'("
                }
                else if (percent < 40){
                    mensaje1.innerHTML = "Well it's getting better :("
                }
                else if (percent < 60){
                    mensaje1.innerHTML = "Stay low, have to go higher! :/"
                }
                else if (percent < 80){
                    mensaje1.innerHTML = "That's better, but it's still not enough :|"
                }
                else if (percent < 100){
                    mensaje1.innerHTML = "It is much better :3"
                }
                else if (percent <=100){
                    mensaje1.innerHTML = "It has to always stay that way <3"
                }
            }
        }
    }
    moveBlock.onmouseup = function(){
        document.onmousemove = null;
    }
}

function mostrar_R(){
    let ventana2 = document.querySelector(".init-vent");
    ventana2.style.visibility = "hidden";
    let registro = document.querySelector(".reg-vent");
    registro.style.visibility = "visible";
}

function mostrar_I(){
    let ventana3 = document.querySelector(".reg-vent");
    ventana3.style.visibility = "hidden";
    let login = document.querySelector(".init-vent");
    login.style.visibility = "visible";
}

function mostrar_D(){
    let login = document.querySelector(".new-vent");
    login.style.visibility = "visible";
}

function cerrar(element){
    let ventana = element.parentElement.parentElement;
    ventana.style.visibility = "hidden";
}