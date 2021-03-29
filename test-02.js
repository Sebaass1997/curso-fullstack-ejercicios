
// Ejercicio 1 [1.The team]

//En este ejercicio, se recibirá el nombre de equipo e integrantes como parámetros de la función, formar el siguiente mensaje en la consola con estos datos de entrada:

// Datos de entrada:

//teamName: 'formacion'
//people: [ 'Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],

let team ={
    teamName: 'formacion',
    people: [ 'Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike']
}
 function theTeam(equipo) {
    
    console.log(`Hay ${equipo.people.length} personas en el equipo de ${equipo.teamName}.
    Ellos son: ${equipo.people} `);
    
  }
   
  theTeam(team);

//   [2.- Square of pairs]

// Crear una función que reciba como parámetro un arreglo de números y retornar en la consola los elementos elevados al cuadrado solo si se cumple que el número es positivo.


// entrada: [2, 4, 6]
// salida: 4, 16, 36

// entrada: [-3, 2, -8, 12, 5]
// salida: -3, 4, -64, 144, 5

// entrada: [1, 2, 3, 4, 5]
// salida: 1, 4, 3, 16, 5

let arreglo = [2,4,6];
let arreglo2 = [-3, 2, -8, 12, 5];
let arreglo3 = [1, 2, 3, 4, 5];

function elevacion (cadena){
    cadena.map((each,index) => {
        if (each > 0)
         each = each * each         
        cadena[index] = each;
    })
    console.log(cadena);
}
function elevacionPar (cadena){

    cadena.map((each,index) => {
        if (each % 2 == 0)
         each = each * each         
        cadena[index] = each;
    })
    // cadena.forEach((each,index) => {
    //     if (each % 2 == 0)
    //      each = each * each         
    //     cadena[index] = each;
    // });
    console.log(cadena);
}

elevacion(arreglo3)
elevacionPar(arreglo3)

// 3. Inventario

// Dado un arreglo de objetos como parámetro de una función, conteniendo la categoría y precio del producto, retornar el precio total de una categoría indicada.


// Hint: Usar los métodos .filter() y .reduce() para lograr el resultado.

// totalByCategory(inventory, "beverage");

// debe mostrar en cosola: 120

// totalByCategory(inventory, "no-existe");

// debe mostrar en cosola: 0
let sima = [
     {
        descripcion : 'Coca',
        price: 100,
        categoria: 'Bebida'
    },
    
      {
        descripcion : 'Sprite', 
        price: 45,
        categoria: 'Bebida'
    },
    {
        descripcion : 'Cepillo',
        price: 100,
        categoria: 'Higiene'
    },
    


]


function totalByCategory(inventario, cat ){
        
        inventario.map((e,i)=> inventario[i].filter(p => p.categoria = cat))
        console.log(inventario);
}

totalByCategory(sima,'Bebida')
// [4. Capitalize]

// Implementa una función que reciba una oración y devuelva cada letra inicial de una palabra en mayúscula.


// Entrada: 'laboratoria mexico'
// Salida: 'Laboratoria Mexico'

let oracion = "arbol ligas menores";
let espacio = ' '

function capitalize(palabra) {    
    
     let arreglo = palabra.split(espacio) 
    arreglo.map((each,index) => arreglo[index]= each[0].toUpperCase()+each.slice(1))
    let frase = arreglo.toString().replace(/,/g,' ');
   
     console.log(frase);
}

capitalize(oracion)


