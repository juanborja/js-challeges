/*Dado un numero de telefono como string que puede contener 
guiones digitos o espacios formatear a un numero separado en digitos de a tres
usando guines como separador
Ejemplos

entrada                                       salida
12     31231----  231    2    ---- 3212       123-123-123-123-212
12123----  -- - - ---- -21123231              121-232-112-323-1
12333 --999    1126579                        123-339-991-126-579
45312---4321 52 2 512 54"                     453-124-321-522-512-54 
*/

export default function main() {
  const iterative = solution("12333 --999    1126579");
  console.log(iterative);

  const functional = solution3("45312---4321 52 2 512 54");
  console.log(functional);
  const regex = solution2("45312---4321 52 2 512 54");
  console.log(regex);
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

const solution2 = (phone) => {
  return phone
    .replace(/[ -]/g, "")
    .split(/([\d]{3})/g)
    .filter((elem) => elem !== "")
    .join("-");
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
