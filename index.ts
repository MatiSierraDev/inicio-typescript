function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));

//tipo number
let numero: number;

let numeroSintax: number = 10;

let x = 10;

let y;


// x = 'un string'; no acepta un valor que no sea numerico

numero = 32;


//Tipo Booleano
let soyUnBooleano: boolean;
let yes = true;
let not = false;


//Tipos numéricos y BigInteger
let number : number;
let valor = 0;
let z: number = 123.456;
// let big: bigint = 100n;


//Tipo de cadena
let s: string;
let letra = 's';
let palabra = 'palabra';


let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);

//Enumeraciones 
//Las enumeraciones se tratan como tipos de datos y se pueden usar a fin de crear conjuntos de constantes para su uso con variables y propiedades.
//Las enumeraciones hacen que el código sea más claro y legible, especialmente cuando se usan nombres significativos.


enum ContractStatus {
  Permanent,
  Temp,
  Apprentice
}

let employeestatus: ContractStatus = ContractStatus.Temp;
console.log(employeestatus)

//. Si quiere que los valores empiecen con un valor diferente, en este caso 1, especifíquelo en la declaración enum.
// enum ContractStatus {
//   Permanent = 1,
//   Temp,
//   Apprentice,
// }

//Para mostrar el nombre asociado a la enumeración, podemos usar el indexador proporcionado.
console.log(ContractStatus[employeestatus]);