let U="Ingresar Usuario"
let M=""
let C="Ingrese el monto a pagar"

var IM ="ingrese un monto númerico por favor"

var EU="error, porfavor coloque su usuario"

var P="¿Como desea pagar?"

const OP=["Opciones de pago",
       "1-efectivo",
       "2-Tarjeta",
       "3-Mercadopago",
       "4-Obra social"]



      

let MpagoOS=["Elija una opcio","1-Pago Total","2-Pago Parcial"]





let IU=prompt(U)

if(IU){
   let CP=prompt(C)
    if(CP){
        let OPP=prompt(OP);
        switch(OPP){
        case "1": alert("monto a pagar"+" "+CP) 
         break
        case "2":do{let pagoT=prompt("¿en cuantas cuotas desea paga? (hasta 12 cuotas)")
        
         if(pagoT<=12){        
        switch(pagoT){        
          case "1":
           case "2": if(pagoT<3){alert("monto a pagar"+" "+CP)} 
           break
          case "3":
            case "4": 
            case "5":
            case "6": if(pagoT>=3&&pagoT<=6){alert("monto a pagar"+" "+CP*1.2)}
            break
          case "7":
           case "8":
           case "9":if(pagoT>6&&pagoT<=9){alert("monto a pagar"+" "+CP*1.25)}
           break
          case "10":
          case "11":
           case "12":if(pagoT>9&&pagoT<=12){alert("monto a pagar"+" "+CP*1.3)}
           break

         }}
         else{var mpt=prompt("Por favor,coloque la cuota adecuada")}
        break}while(mpt>12||mpt==null)
        default:break
        case "3":do{let pagoMP=prompt("¿en cuantas cuotas desea paga? (hasta 12 cuotas)")
        if(pagoMP<=12){switch(pagoMP){
          case "1":
            case "2": if(pagoMP<3){alert("monto a pagar"+" "+CP)} 
            break
           case "3":
             case "4": 
             case "5":
             case "6": if(pagoMP>=3&&pagoMP<=6){alert("monto a pagar"+" "+CP*1.25)}
             break
           case "7":
            case "8":
            case "9":if(pagoMP>6&&pagoMP<=9){alert("monto a pagar"+" "+CP*1.3)}
            break
           case "10":
           case "11":
            case "12":if(pagoMP>9&&pagoMP<=12){alert("monto a pagar"+" "+CP*1.4)}
            break}}
            else{ var mpo= prompt("Por favor,coloque la cuota adecuada")}
          break}while(mpo>12||mpo==null)
         break
        case "4": do{let pagoOS=prompt(MpagoOS)
        if(pagoOS<3) {switch(pagoOS){
          case "1": alert("monto a pagar"+" "+CP) 
           break
          case "2": let pagoPar=prompt("Ingrese el monto a pagar")
                    let rOS=(CP-pagoPar)
                    alert("Usted abonara"+" "+pagoPar+" "+"la obra social se hara cargo de"+" "+rOS)
            break }}
            else{ var mo=prompt("Por favor elija entre una de las dos opciones")}
            break
           }while(mo>3||mo==null)
          
             }}}

