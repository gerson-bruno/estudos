function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/hcrianca.svg')
            } else if (idade < 21){
                img.setAttribute('src', 'img/hadulto.svg')
            } else if (idade < 50){
                img.setAttribute('src', 'img/hadulto.svg')
            } else {
                img.setAttribute('src', 'img/hidoso.svg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/mcrianca.svg')
            } else if (idade < 21){
                img.setAttribute('src', 'img/madulto.svg')
            } else if (idade < 50){
                img.setAttribute('src', 'img/madulto.svg')
            } else {
                img.setAttribute('src', 'img/midoso.svg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}