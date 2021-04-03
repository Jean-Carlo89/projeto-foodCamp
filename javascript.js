let comida;
let bebida;
let sobremesa;
function escolherPrato(classeComida, posicaoCheck){
    comida = true
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
        comida = false;
    }  
    
    console.log(comida)
    checarBotao()
}

function escolherBebida(classeBebida, posicaoCheck){
    bebida = true
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
        bebida = false
    }   

    /*Os dois if são a logica para o toogle*/
    /* os for são a logica para remover os elementos quando um novo for clicado*/
    console.log(bebida)
    checarBotao()
}

function escolherSobremesa(classeSobremesa, posicaoCheck){
    sobremesa = true
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
        sobremesa = false
    }   

    console.log(sobremesa)
    checarBotao()

}

function checarBotao(){

    if((comida===true) && (bebida===true) && (sobremesa===true)){
        let botao = document.querySelector('.concluir-pedido')
        botao.classList.add('botaoverde')
        botao.innerHTML="Fechar Pedido"
    }else{
        let botao = document.querySelector('.concluir-pedido')
        botao.classList.remove('botaoverde')
    }
}

