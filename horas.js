function carregar() {
    var horas = document.getElementById('horas')
    var data = new Date()
    var hora = data.getHours()
    var minuto =  data.getMinutes()
    var listar = document.querySelector('select#flista')
    let vetores = [
     'SE EU ERREI','DINHEIRO NÃO HÁ', 'GIGANTE', 'ILUMINADO',
     'GOSTO DO SAMBA','ALDINHA','AMAR TODA HORA','LESSE','OCEANO','VENTOS', 'BRILHO DO SOL', 'ALMA PENADA', 'SAMBA DA PAZ', 'LAURINHA','VIVER VIVER','BRASIL', 'SILÊNCIO','FAKE NEWS', 'ESPERANÇA', 'COPANHEIRA',  
     ]
    horas.innerHTML = `<h3>Agora são <strong> ${hora} horas e ${minuto} </strong>minutos</h3>`
    if (hora >= 0 && hora < 12) {
         horas.innerHTML +=`<h3>  Bom dia<h3>`
         document.body.style.background="#e2cd9f"
    }else if (hora >=12 && hora < 18){
         horas.innerHTML +=`<h3>  Boa Tarde </h3>`
         document.body.style.background="rgb(203, 211, 218)"
    } else {
         horas.innerHTML +=`<h3>  Boa Noite</h3>`
         document.body.style.background="rgb(243, 236, 236)"
    }
     for (x in vetores) {
         let item = document.createElement('option')
         item.text = vetores[x]
         listar.appendChild(item)
     }
    /* var opcaoTexto = select.options[select.selectedIndex].text;
     var opcaoValor = select.options[select.selectedIndex].value;*/
        

}