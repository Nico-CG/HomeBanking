
var nombreUsuario = "Nicolás";
var saldoCuenta = 5000;
var limiteExtraccion = 2000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var amiga= [1234567, 7654321]
var codigoDeSeguridad = 1234;




iniciarSesion();
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();



function cambiarLimiteDeExtraccion() {

  var nuevoLimite = parseInt(prompt("Nuevo limite de extracción:"));
  if (!isNaN(nuevoLimite)) {

    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert("El nuevo limite de extracción es de: $" + limiteExtraccion);
  }
}


function restarDinero(dineroARestar) {
  saldoCuenta -= dineroARestar;
}


function sumarDinero(dineroASumar) {
  saldoCuenta += dineroASumar;
}


function hayDineroSuficienteParaExtraer(dineroAComparar) {

  var saldoAnterior = saldoCuenta;
  if (!isNaN(dineroAComparar)) {

    if (dineroAComparar <= saldoCuenta && dineroAComparar <= limiteExtraccion && dineroAComparar%100 === 0) {

      restarDinero(dineroAComparar);
      actualizarSaldoEnPantalla();
      alert("Has extraido: $"+ dineroAComparar +"\nSaldo anterior: $"+saldoAnterior + "\nSaldo Actual: $" + saldoCuenta);

    }else if (dineroAComparar > saldoCuenta){
      alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero");
    }else  if (dineroAComparar > limiteExtraccion){
      alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción")
    }else if(dineroAComparar%100 !== 0){
      alert("Solo puedes extraer billetes de 100");
    }
  }
}


function extraerDinero(dineroaExtraer) {

  var dineroaExtraer = parseInt(prompt("Dinero a extraer:"));
  hayDineroSuficienteParaExtraer(dineroaExtraer);
}


function depositarDinero() {

  var saldoAnterior = saldoCuenta;
  var dineroaDepositar = parseInt(prompt("Dinero a depositar:"));
  if (!isNaN(dineroaDepositar)) {

    sumarDinero(dineroaDepositar);
    actualizarSaldoEnPantalla();
    alert("Has depositado: $"+ dineroaDepositar +"\nSaldo anterior: $"+saldoAnterior + "\nSaldo Actual: $" + saldoCuenta);
  }
}


function hayDineroSuficienteParaPagarServicio(servicio, dineroAComparar) {

  var saldoAnterior = saldoCuenta;
  if (dineroAComparar <= saldoCuenta) {

    restarDinero(dineroAComparar);
    actualizarSaldoEnPantalla();
    alert("Has pagado el servicio " + servicio + "\nSaldo anterior: $"+ saldoAnterior + "\nDinero descontado: $" + dineroAComparar + "\nSaldo Actual: $" + saldoCuenta);

  }else{
    alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
  }
}


function pagarServicio() {

  var servicioAPagar = parseInt(prompt("Ingrese el número que corresponda con el servicio que quieres pagar \n1 - Agua \n2 - Luz \n3 - Internet \n4 - Teléfono "));
  switch (servicioAPagar) {

    case 1:
      hayDineroSuficienteParaPagarServicio("Agua",agua);
      break;

    case 2:
      hayDineroSuficienteParaPagarServicio("Luz",luz);
      break;
    case 3:

      hayDineroSuficienteParaPagarServicio("Internet",internet);
      break;
    case 4:

      hayDineroSuficienteParaPagarServicio("Teléfono",telefono);
      break;
    default:

      alert("No existe el servicio que se ha seleccionado");
  }
}

function hayDineroSuficienteParaTransferir(dineroAComparar) {

  var saldoAnterior = saldoCuenta;
  if (!isNaN(dineroAComparar)) {

    if (dineroAComparar <= saldoCuenta) {

      var nroCuenta = parseInt(prompt("Ingrese el número de la cuenta a la cual desea transferir el monto"));
      if (!isNaN(nroCuenta)) {

        if (amiga.includes(nroCuenta)) {

          restarDinero(dineroAComparar);
          actualizarSaldoEnPantalla();
          alert("Se han transferido: $" + dineroAComparar + "\nCuenta destino: " + nroCuenta);

        }else{
          alert("Solo puede transferirse dinero a una cuenta amiga");
        }
      }
    }else{
      alert("No hay suficiente saldo en tu cuenta para realizar esta transferencia");
    }
  }
}


function transferirDinero() {

  var montoATransferir = parseInt(prompt("Ingrese el monto a transferir"));
  hayDineroSuficienteParaTransferir(montoATransferir);
}


function iniciarSesion() {

  var codigoIngresado = parseInt(prompt("Ingrese el código de seguridad"));
  if (codigoIngresado === codigoDeSeguridad) {
    alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones")
  }else if(isNaN(codigoIngresado)){
    alert("El código de seguridad es de 4 dígitos ")
    iniciarSesion();
  }else{
    alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad")
    saldoCuenta = 0;
  }
}


function cambiarCodigoDeSeguridad() {

  var codigoIngresado = parseInt(prompt("Ingrese el nuevo código de seguridad"));
  if (!isNaN(codigoIngresado)) {

    if (codigoIngresado === codigoDeSeguridad) {
      alert("No puedes usar el mismo código de seguridad anterior")
    }else if(codigoIngresado.toString().length === 4){
      alert("Tu código de seguridad ha sido modificado correctamente")
      codigoDeSeguridad = codigoIngresado;
    }else{
      alert("El código de seguridad debe ser de 4 dígitos ")
    }
  }
}


function agregarCuentaAmiga() {
  var cuentaAmiga = parseInt(prompt("Ingrese el nro de su cuenta amiga"))
  if (!isNaN(cuentaAmiga)) {

    if (cuentaAmiga.toString().length === 7) {
      alert("La cuenta amiga ha sido añadida correctamente")
      amiga.push(cuentaAmiga);
    }else{
      alert("El número de cuenta debe ser de 7 dígitos ")
    }
  }
}


function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
