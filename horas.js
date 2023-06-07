    let musica = document.getElementById('iframe#videos')  
    let horas = document.getElementById('horas')
    let data = new Date()
    let hora = data.getHours()
    let minuto =  data.getMinutes()
    let listar = document.querySelector('select#flista')
    let vetores = [
     'SE EU ERREI','DINHEIRO NÃO HÁ', 'GIGANTE', 'ILUMINADO',
     'GOSTO DO SAMBA','ALDINHA','AMAR TODA HORA','LESSE','OCEANO','VENTOS', 'BRILHO DO SOL', 'ALMA PENADA', 'SAMBA DA PAZ', 'LAURINHA','VIVER VIVER','BRASIL', 'SILÊNCIO','FAKE NEWS', 'ESPERANÇA', 'COPANHEIRA',  
     ]

     atual= ""
     

function carregar() {
    
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
     
     document.getElementById("flista").value='SE EU ERREI'
     atual = document.getElementById("flista").value

   
}

function executar() {
     
     
    atual = document.getElementById("flista").value
    ifrm = document.createElement("iframe");
    ifrm.style.width =560+"px";
    ifrm.style.height =  315+"px";
    /*document.getElementById("myDIV").style.display = "none";
    document.getElementById("myDIV").style.display = "none"; */
    document.body.appendChild(ifrm);
    document.getElementById('videos').style.display = "none"; 
   
}

/*function tocar_video(mysrc){
	var video = document.createElement('video');

	video.src = mysrc;
	video.autoplay = true;
}
*/

/* ifrm = document.createElement("iframe#videos");
    ifrm.setAttribute("src", "src="https://www.youtube.com/embed/1P2e0kwkIn4"");
    ifrm.style.width =560+"px";
    ifrm.style.height =  315+"px";
    document.body.appendChild(ifrm);
  /*  <iframe width="560" height="315" src="https://www.youtube.com/embed/1P2e0kwkIn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */