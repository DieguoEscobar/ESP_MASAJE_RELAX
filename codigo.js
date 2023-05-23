const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");
const boton4 = document.querySelector("#boton4");
const Texto1 = document.querySelector("#Texto1");
const Texto2 = document.querySelector("#Texto2");
const Texto3 = document.querySelector("#Texto3");
const Texto4 = document.querySelector("#Texto4");
const volver1 = document.querySelector("#volver1");
const volver2 = document.querySelector("#volver2");
const volver3 = document.querySelector("#volver3");
const volver4 = document.querySelector("#volver4");

boton1.addEventListener("click",()=>{
    Texto1.showModal();
});

boton2.addEventListener("click",()=>{
    Texto2.showModal();
});

boton3.addEventListener("click",()=>{
    Texto3.showModal();
});

boton4.addEventListener("click",()=>{
    Texto4.showModal();
});


volver1.addEventListener("click",()=>{
    Texto1.close();
});

volver2.addEventListener("click",()=>{
    Texto2.close();
});

volver3.addEventListener("click",()=>{
    Texto3.close();
});
volver4.addEventListener("click",()=>{
    Texto4.close();
});
