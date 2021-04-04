let escolheucomida;
let escolheubebida;
let escolheusobremesa;

let prato;
let bebida;
let sobremesa;
let precoComida;
let precoTotal;
let nome;
let endereco;

function escolherPrato(classeComida, posicaoCheck){
    escolheucomida = true
    
    let elemento = document.querySelectorAll(".itemPrato");
    let removersetinha = document.querySelectorAll(".itemPrato .check")
    let i;
    let contem;
    posicaoCheck = "." + posicaoCheck
    const aplicarsetinha = document.querySelector(posicaoCheck);
    
    classeComida = "." + classeComida
    const colocarBorda = document.querySelector(classeComida) 
    
    if(colocarBorda.classList.contains("bordinha") && (aplicarsetinha.classList.contains("esconder")===false)){
            contem = true;
    }
    
    for(i=0; i<elemento.length;i++){
    elemento[i].classList.remove("bordinha")
    }

    let j;
    for(j=0;j<removersetinha.length;j++){
    removersetinha[j].classList.add("esconder")
    }
    
   
    colocarBorda.classList.toggle("bordinha")
    /*console.log(classeComida)
    console.log(posicaoCheck)*/
    aplicarsetinha.classList.remove("esconder")
    
    if(contem===true){
        colocarBorda.classList.toggle("bordinha")
        aplicarsetinha.classList.add('esconder')
        escolheucomida = false;
    }  

    /*-----------------------------Salvando a comida escolhida e preço*/
    
    /*console.log(classeComida)*/
     prato = document.querySelector(classeComida + ' h3')
     /*console.log(prato.innerText)*/
     prato=prato.innerText
     /*console.log(prato)*/


     precoComida = document.querySelector(classeComida + ' span')
     /*console.log(precoComida.innerText)*/
     precoComida=precoComida.innerText
     
    /*  ---- ---------------------------prato salvo ---*/
    /*console.log(escolheucomida)*/
    checarBotao()
}

function escolherBebida(classeBebida, posicaoCheck){
    escolheubebida = true
    let elemento = document.querySelectorAll(".itemBebida");
    let removersetinha = document.querySelectorAll(".itemBebida .check");
    let i;
    let j;
    let contem;
    posicaoCheck = "." + posicaoCheck
    
    const aplicarsetinha = document.querySelector(".itemBebida " + posicaoCheck);
    /*console.log(aplicarsetinha)*/
    
    classeBebida = "." + classeBebida
    const colocarBorda = document.querySelector(classeBebida) 

    if(colocarBorda.classList.contains("bordinha") && (aplicarsetinha.classList.contains("esconder")===false)){
        contem = true;
}
    
    for( i=0; i<elemento.length;i++){
        elemento[i].classList.remove("bordinha")
        }
    
        for(j=0;j<removersetinha.length;j++){
    removersetinha[j].classList.add("esconder")
    }
    
    colocarBorda.classList.add("bordinha")
    
    aplicarsetinha.classList.remove("esconder")

    if(contem===true){
        colocarBorda.classList.toggle("bordinha")
        aplicarsetinha.classList.add('esconder')
        escolheubebida = false
    }   
    
    /*-----------------------------Salvando a bebida escolhida e preço*/
    classeBebida = classeBebida
    /*console.log(classeBebida)*/
     bebida = document.querySelector(classeBebida + ' h3')
     /*console.log(bebida.innerText)*/
     bebida=bebida.innerText
     /*console.log(bebida)*/


     precoBebida = document.querySelector(classeBebida + ' span')
     /*console.log(precoBebida.innerText)*/
     precoBebida=precoBebida.innerText
     
    /*  ---- ---------------------------bebida salvo ---*/

    /*Os dois if são a logica para o toogle*/
    /* os for são a logica para remover os elementos quando um novo for clicado*/
    
    /*console.log(escolheubebida)*/
    checarBotao()
}

function escolherSobremesa(classeSobremesa, posicaoCheck){
    escolheusobremesa = true
    let elemento = document.querySelectorAll(".itemSobremesa");
    let removersetinha = document.querySelectorAll(".itemSobremesa .check");
    let i;
    let j;
    let contem;
    posicaoCheck = "." + posicaoCheck
    
    const aplicarsetinha = document.querySelector(".itemSobremesa " + posicaoCheck);
    /*console.log(aplicarsetinha)*/
    
    classeSobremesa = "." + classeSobremesa
    const colocarBorda = document.querySelector(classeSobremesa) 

    if(colocarBorda.classList.contains("bordinha") && (aplicarsetinha.classList.contains("esconder")===false)){
        contem = true;
}
    
    for( i=0; i<elemento.length;i++){
        elemento[i].classList.remove("bordinha")
        }
    
        for(j=0;j<removersetinha.length;j++){
    removersetinha[j].classList.add("esconder")
    }
    
    colocarBorda.classList.add("bordinha")
    
    aplicarsetinha.classList.remove("esconder")

    if(contem===true){
        colocarBorda.classList.toggle("bordinha")
        aplicarsetinha.classList.add('esconder')
        escolheusobremesa = false
    }   

    /*-----------------------------Salvando a Sobremesa escolhida e preço*/
    
    /*console.log(classeSobremesa)*/
     sobremesa = document.querySelector(classeSobremesa + ' h3')
     /*console.log(sobremesa.innerText)*/
     sobremesa=sobremesa.innerText
     /*console.log(sobremesa)*/


     precoSobremesa = document.querySelector(classeSobremesa + ' span')
     /*console.log(precoSobremesa.innerText)*/
     precoSobremesa=precoSobremesa.innerText
     
    /*  ---- ---------------------------bebida salvo ---*/

    /*console.log(escolheusobremesa)*/
    checarBotao()

}

function checarBotao(){

    if((escolheucomida===true) && (escolheubebida===true) && (escolheusobremesa===true)){
        let botao = document.querySelector('.concluir-pedido')
        botao.classList.add('botaoverde')
        botao.innerHTML="Fechar Pedido"
        /*let link = document.querySelector(".estilo-link");*/
        
        /*------------------------Pegando informações da pagina--------*/
       /* console.log(prato)
        console.log(precoComida)

        console.log(bebida)
        console.log(precoBebida)

        console.log(sobremesa)
        console.log(precoSobremesa)*/
        
        precoComida = parseFloat(precoComida)
        precoBebida = parseFloat(precoBebida)
        precoSobremesa = parseFloat(precoSobremesa)

         precoTotal = precoSobremesa + precoComida + precoBebida
        /*console.log(precoTotal)*/
        precoTotal = precoTotal.toFixed(2)
       /* console.log(precoTotal)*/
        /*---------------------------------------*/
        

        
    }else{
        let botao = document.querySelector('.concluir-pedido')
        botao.classList.remove('botaoverde')
        
        botao.innerHTML="Selecione os 3 itens <br>para fechar o pedido"
    }
}

function codificar(){
    var uri = "Olá, gostaria de fazer o pedido:"  +'\n- Prato: '+ prato  + '\n- Bebida: ' + bebida +'\n- Sobremesa: ' + sobremesa  + '\nTotal: R$ ' + precoTotal + '\nNome: ' + nome + '\nEndereço: ' + endereco;
    var res = encodeURIComponent(uri);
    
    var uri_dec = decodeURIComponent(res);
    console.log(uri_dec)

    let link = document.querySelector(".estilo-link");
    link.href="https://wa.me/5571992079633?text="+res
    /*console.log(link.href)*/
}

function confirmarPedido(){
   nome = prompt('Qual é o seu nome?')
   endereco = prompt('Digite seu endereço')
    const ativarTela = document.getElementById('tela-confirmacao')
   ativarTela.classList.add('branco')
    
   precoComida = precoComida.toFixed(2)
   precoBebida = precoBebida.toFixed(2)
   precoSobremesa = precoSobremesa.toFixed(2)
       /* console.log(prato)
        console.log(precoComida)

        console.log(bebida)
        console.log(precoBebida)

        console.log(sobremesa)
        console.log(precoSobremesa)*/
    const p = document.querySelector('.confirmacao-comida')
    p.innerText = prato
    const ppreco = document.querySelector('.preco-comida')
    ppreco.innerText = precoComida

    const b = document.querySelector('.confirmacao-bebida')
    b.innerText = bebida
    const bpreco = document.querySelector('.preco-bebida')
    bpreco.innerText = precoBebida

    const s = document.querySelector('.confirmacao-sobremesa')
    s.innerText = sobremesa
    const spreco = document.querySelector('.preco-sobremesa')
    spreco.innerText = precoSobremesa

    const t = document.querySelector('.confirmacao-total')
    t.innerText = "Total"
    const tpreco = document.querySelector('.preco-total')
    tpreco.innerText = precoTotal

    codificar()

}


function cancelarPedido(){
   const desativarTela = document.getElementById('tela-confirmacao')
   desativarTela.classList.remove('branco')
}


