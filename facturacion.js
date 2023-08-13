let U="Ingresar Usuario"
let M=""
let C="Ingrese el monto a pagar"

var IM ="ingrese un monto númerico por favor"

var EU="error, porfavor coloque su usuario"

var P="¿Como desea pagar?"

var OP=["Opciones de pago","1-efectivo","2-Tarjeta","3-Mercadopago","4-Obra social"]
let MP=""




prompt(U)

if(IU=String){
    let CP=prompt(C)
    if(CP==Number){
        switch(prompt(OP)){
        case a:
         break
         case b:
            break
        case c:
            break
        case d:
            break
        }
    }
    else{
        prompt(IM )
    }
}
else{
    prompt(EU)
}
 



