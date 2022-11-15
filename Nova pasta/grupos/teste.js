var $pts1 = document.querySelectorAll(".pts1")
var $vit = document.querySelectorAll(".vit")
var $emp = document.querySelectorAll(".emp")
var $der = document.querySelectorAll(".der")
var $sg = document.querySelectorAll(".sg")
var $gp = document.querySelectorAll(".gp")
var $gc = document.querySelectorAll(".gc")
var $jo = document.querySelectorAll(".jo")
var botao = window.document.getElementById("btn")
var contagem = 0
botao.addEventListener("click",clicar)
var testando = []


function clicar(){    
        for (y=0;y<16;y++){
                $pts1[y].innerHTML = Math.floor(Math.random()*10);
                contagem++
        }
        for (x=0;x<16;x++){
                $vit[x].innerHTML = Math.floor(Math.random()*4);
                contagem++
        }
        for (x=0;x<16;x++){
                $emp[x].innerHTML = Math.floor(Math.random()*4);
                contagem++
        }
        for (x=0;x<16;x++){
                $der[x].innerHTML = Math.floor(Math.random()*4);
                contagem++
        }
        for (x=0;x<16;x++){
                $sg[x].innerHTML = Math.floor(Math.random()*4);
                contagem++
        }
        for (x=0;x<16;x++){
                $gp[x].innerHTML = Math.floor(Math.random()*4);
                contagem++
        }
        for (x=0;x<16;x++){
                $gc[x].innerHTML = Math.floor(Math.random()*4);
                contagem++
        }
        for (x=0;x<16;x++){
                $jo[x].innerHTML = 3
                contagem++
        }
}

 