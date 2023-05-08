const time = document.getElementById('hora');

// let fecha;


function contadorHora(){
    setInterval(() => {
        let hora = new Date().toLocaleTimeString();
        time.textContent = `Hora: ${hora}`
    },1000)
}


contadorHora();


