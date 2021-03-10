/*Dado un numero de telefono como string que puede contener 
guiones digitos o espacios formatear a un numero separado en digitos de a tres
usando guines como separador
Ejemplos

entrada                               salida
12  31231----  231    2    ---- 32
*/

export default function main() {
  const iterative = solution("12     31231----  231    2    ---- 3212");
  console.log(iterative);

  const functional = solution3("12123----  -- - - ---- -21123231");
  console.log(functional);
}

const solution = (phone) => {
  let ret = "";
  let aux = 0;
  for (let i = 0; i < phone.length; i++) {
    if (!isNaN(parseInt(phone.charAt(i), 10))) {
      aux++;
      ret = ret + phone.charAt(i);
      if (aux % 3 === 0 && i !== phone.length - 1) {
        ret = ret + "-";
      }
    }
  }
  return ret;
};

function redu(ret, elem, index, array) {
  if (!isNaN(parseInt(elem, 10))) {
    if ((ret.length + 1) % 4 === 0) return ret + "-" + elem;
    else return ret + elem;
  }

  return ret;
}
const solution3 = (phone) => {
  return phone.split("").reduce(redu);
};
