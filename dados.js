function rodar() {  //esta funcion hace rodar
    var numero = document.getElementById("numero").value ; // esta funcion es el numero que sea ingresa
    var contador = document.getElementById("span"); // esta funcion es el contador de numeros que se ingresa
    var estosevaponerfeo = Math.random()*6;  // esta funcion es para que escoga los numeros del 1 al 6
    var estosevaponerfeo = Math.ceil(estosevaponerfeo); // esta funcion hace que aparezca el numero y la imagen 
    if (numero == estosevaponerfeo) {  
        var vito = contador.childNodes[0];
        contador.removeChild(vito);
        var str = document.createTextNode("Adivinaste" + " era el número " + numero ); // si ingreso el numero correcto
        contador.appendChild(str);
    }else{  // si ingreso un numero incorrecto
        var vito = contador.childNodes[0];
        contador.removeChild(vito);
        var str = document.createTextNode("No adivinaste"+ " no era el número " + numero +" " + " era " + estosevaponerfeo)
        contador.appendChild(str);
    }
    switch (estosevaponerfeo) {  // este switch es para cada imagen aparezca
        case 1:
        var con = document.getElementById("span2");
        var vitos = con.childNodes[0];
        con.removeChild(vitos);
        var img = new Image;
         img.src = "dado1.png";
         con.appendChild(img);
            break;

            case 2:
        var con = document.getElementById("span2");
        var vitos = con.childNodes[0];
        con.removeChild(vitos);
        var img = new Image;
         img.src = "dado2.png";
         con.appendChild(img);
            break;

            case 3:
        var con = document.getElementById("span2");
        var vitos = con.childNodes[0];
        con.removeChild(vitos);
        var img = new Image;
         img.src = "dado3.png";
         con.appendChild(img);
            break;

            case 4:
        var con = document.getElementById("span2");
        var vitos = con.childNodes[0];
        con.removeChild(vitos);
        var img = new Image;
         img.src = "dado4.png";
         con.appendChild(img);
            break;

            case 5:
        var con = document.getElementById("span2");
        var vitos = con.childNodes[0];
        con.removeChild(vitos);
        var img = new Image;
         img.src = "dado5.png";
         con.appendChild(img);
            break;

            case 6:
        var con = document.getElementById("span2");
        var vitos = con.childNodes[0];
        con.removeChild(vitos);
        var img = new Image;
         img.src = "dado6.png";
         con.appendChild(img);
            break;
    
        default:
            break;
    }
} // fin del javascript :D