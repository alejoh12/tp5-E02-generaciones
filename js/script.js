/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
*/

class Persona {
    constructor(nombreParam, edadParam, dniParam, sexoParam, pesoParam, alturaParam, nacimientoParam) {
        nombre = nombreParam;
        edad = edadParam;
        dni = dniParam;
        sexo = sexoParam;
        peso = pesoParam;
        altura = alturaParam;
        nacimiento = nacimientoParam;
    }
    get mostrarGeneracion() {
        const n = this.nacimiento;
        let cadena;
        if(n > 1993 && n < 2011) {
            cadena = "Pertenece a la 'generación Z' y su 'razgo caracteristico es Irreverencia'";
        }else if(n > 1980 && n < 1994) {
            cadena = "Pertenece a la 'generación Y (Millenials)' y su 'razgo caracteristico es Frustración'";
        }else if(n > 1968 && n < 1981) {
            cadena = "Pertenece a la 'generación X' y su 'razgo caracteristico es Obsesión por el Éxito'";
        }else if(n > 1948 && n < 1969) {
            cadena = "Pertenece a la 'generación Baby Boom' y su 'razgo caracteristico es Ambición'";
        }else if(n > 1929 && n < 1949) {
            cadena = "Pertenece a la 'generación Silent Generation' y su 'razgo caracteristico es Austeridad'";
        };

        return cadena;
    }
    get esMayorDeEdad() {
        if(this.edad > 17) {
            return "Si, es mayor de edad";
        }else {
            return "No, aun no es mayor de edad";
        }
    }
    mostrarDatos() {
        document.write(`
        <div class="container text-center">
        <h2>Los datos de la persona son:</h2>
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de nacimiento: ${this.nacimiento}</li>
        </ul>
        </div>
        `);
    }
}


const mostrar = (e) => {
    // const nombre = document.getElementById("nombre");
    // const dni = document.getElementById("dni");
    // const edad = document.getElementById("edad");
    // const sexo = document.getElementById("sexo");
    // const peso = document.getElementById("peso");
    // const altura = document.getElementById("altura");
    // const nacimiento = document.getElementById("nacimiento");
    // const yo = new Persona(`${nombre.value}`,`${edad.value}`,`${dni.value}`,`${sexo.value}`,`${peso.value}`,`${altura.value}`,`${nacimiento.value}`);
    const alejo = new Persona("Alejo",24,43291627,"H",60,1.70,2001);
    // console.log(nombre.value);
    // console.log(dni.value);
    // console.log(edad.value);
    // console.log(sexo.value);
    // console.log(peso.value);
    // console.log(altura.value);
    // console.log(nacimiento.value);

    console.log(`Hola ${alejo.nombre}`);

    e.preventDefault();
    
    // const enunciadoNuevo = document.createElement("h2");
    // enunciadoNuevo.innerHTML = yo.mostrarGeneracion;
    // const hola = yo.nombre;
    // console.log(hola);

}

const formMostrar = document.getElementById("formMostrar");

formMostrar.addEventListener("submit",mostrar);