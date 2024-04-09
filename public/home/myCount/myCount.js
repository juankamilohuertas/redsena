const cerrar_sesion = document.getElementById("cerrar_sesion");

cerrar_sesion.addEventListener("click",()=>{
    function eliminarCookie(nombre) {
        document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    eliminarCookie('token');
    location.reload(true)
})


