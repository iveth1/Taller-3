var numpantalla="0";
var pantallanum="si";
var punto="no";
var numalmacenado=0;
var operacionp="";
var solucion="";

function numero(x)
{
    if(x!==".")
    {
      if(numpantalla=="0" || pantallanum=="si")
      {
        calculadora.txtboxnros.value=x;
        numpantalla=x;
      } 
      else if(x!=".")
      {
        calculadora.txtboxnros.value+=x;
        numpantalla+=x;
      } 
    }
    if(x=="." && punto=="no" && numpantalla=="0")
    {
      calculadora.txtboxnros.value="0.";
      numpantalla=x;
      punto="si";
    }
    else if(x=="." && punto=="no")
    {
      calculadora.txtboxnros.value+=x;
      numpantalla+=x;
      punto="si";
    }
    else if(x=="." && punto=="si")
    {

    }
    pantallanum="no";
}

function operacion(y)
{
  if(operacionp=="")
  {
    numalmacenado=calculadora.txtboxnros.value;
    calculadora.txtboxnros.value+=y;
    operacionp=y;
    pantallanum="no";
    numpantalla="";
    punto="no";
  }
}

function resultado()
{
  if(operacionp !="")
  {
    solucion=numalmacenado+operacionp+numpantalla;
    calculadora.txtboxnros.value=eval(solucion);
    numpantalla=eval(solucion);
    pantallanum="si";
    operacionp="";
    punto="no";
  }
}

function limpiar()
{
  numpantalla="0";
  pantallanum="si";
  punto="no";
  numalmacenado=0;
  operacionp="";
  solucion="";
  calculadora.txtboxnros.value="0";
}

