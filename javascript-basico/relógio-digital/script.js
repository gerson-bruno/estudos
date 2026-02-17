function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let data = new Date() // Data atual 
    let hora = data.getHours() // Horas
    let min = data.getMinutes() // Minutos
    msg.innerHTML = `Agora sao ${hora} horas e ${min} minutos.` // Mensagem exibida na tela
    if (hora >= 6 && hora < 12) {
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e2cd9f'
        //Bom dia!
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
        //Boa tarde!
    } else if (hora >= 18 && hora <= 24) {
        img.src = 'img/noite.jpg'
        document.body.style.background = '#101044'
        //Boa noite
    }
    else {
        img.src = 'img/madrugada.jpg'
        document.body.style.background = '#515154'
        //Boa madrugada!
    }
}