//<!-- javascript-->
    //<script>
        function cambiar_parrafo(){
            document.getElementById("file1").style.display="block";
            document.getElementById("edit-arcade").style.display="block";
            let texto= document.getElementById("text-arcade").innerText;
            console.log(texto);
            //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript
        };

        function myFunction2(valor){
            document.getElementById("text-arcade").innerText=valor;
        };

        function logMessage(message) {
            console.log(message+ "<br>");
        };

        //controla si se presiono un enter
        let textarea= document.getElementById("edit-arcade");
        textarea.addEventListener(`keyup`, (e) => {
            logMessage(`key "${e.key}" released [event: keyup]`);
            if (e.key=="Enter"){
                document.getElementById("edit-arcade").style.display="none";
                document.getElementById("file1").style.display="none";
            }
        });

        //carga el contenido de un archivo de texto
        //y lo muestra en el parrafo
        function showFile (input){
            let file= input.files[0];
            alert(`File name: ${file.name}`); //e.g my.pong
            alert(`last modified: ${file.lastModified}`);

            let reader= new FileReader();
            reader.readAsText(file);
            reader.onload = function() {
                console.log(reader.result);
                myFunction2(reader.result);
                document.getElementById("edit-arcade").style.display="none";
                document.getElementById("file1").style.display="none";
            };
            reader.onerror=function(){
                console.log(reader.error);
            };
        };

        //BOTON TRASH - eliminar seccion a la que pertenece
            function eliminarSeccion(){

                //me gustaria que identifique el icono clickeado y que elimine la seccion donde esta contenido


                 //console.log(document.onclick(event.srcElement));
                  /* var elemento=event.srcElement;
                 console.log(elemento.tagName);
                HTMLDivElement 
                 var comp = document.querySelector("section");
                    
                while(elemento.tagName!=comp.tagName){
                    elemento=elemento.parentElement;

                }
                console.log("luego del while "+elemento.tagName);  */

                var aBorrar= document.querySelector("section").id;
                console.log("seccion elegida "+aBorrar);
                //https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
                //const el = document.querySelector("div.user-panel.main input[name='login']");
                //const el = document.querySelector("div.user-panel:not(.main) input[name='login']");
                document.querySelector("#EXPERIENCIA2").remove();

                const baseElement = document.querySelector("section i");
                
                console.log(baseElement.querySelector("section").id);
                
                
        }

        // AL INICIAR  pruebas
         /*document.addEventListener("DOMcontentLoaded", inicioPrueba());
        function inicioPrueba(){
            // Creamos un array vacio
            var ElementosClick = new Array();
            // Capturamos el click y lo pasamos a una funcion
            document.onclick = captura_click;

            function captura_click(e) {
            // Funcion para capturar el click del raton
            var HaHechoClick;
            if (e == null) {
            // Si hac click un elemento, lo leemos
            HaHechoClick = event.srcElement;
            } else {
            // Si ha hecho click sobre un destino, lo leemos
            HaHechoClick = e.target;
            }
            // Añadimos el elemento al array de elementos
            ElementosClick.push(HaHechoClick);
            // Una prueba con salida en consola
            console.log("Contenido sobre lo que ha hecho click: "+ HaHechoClick.tagName+" "+ HaHechoClick.id);
            }
        } */

        //BOTON PLUS - Agregar subseccion de experiencia
        function agregarExperiencia(){
            alert("nueva experiencia");
            
            var nuevaSeccionExp= document.querySelector("section#EXPERIENCIA1").cloneNode(true);
            var ultimaExperiencia= document.querySelectorAll('section > div > div > div > i');
            //console.log(ultimaExperiencia);
            //ultima experiencia
            //depende que bloque sea (EXPERIENCIA,EDUCACION,PROYECTOS)
            const nroExperiencia= parseInt(ultimoNumero(ultimaExperiencia,0))+1;//ultimo elmento del array
            alert(nroExperiencia);
            nuevaSeccionExp.id= "EXPERIENCIA"+nroExperiencia;
            const nombreDeClase= "bi bi-"+nroExperiencia+"-square-fill";
            nuevaSeccionExp.querySelector("i").className=nombreDeClase;
            //nuevaSeccionExp.getElementByClassName("bi bi-1-square-fill").className="bi bi-3-square-fill";
            document.querySelector(".EXPERIENCIA .mat-card").appendChild(nuevaSeccionExp);
        }

        //BOTON EDIT- Editar experiencia a la que pertenece
        function editarExperiencia(){
            alert("editar experiencia");
        }

        function agregarEducacion(){
            alert("nueva Educacion");
            //copio la seccion
            var nuevaSeccionEdu= document.querySelector("section#id_educacion_1").cloneNode(true);

            //obtengo un array de todos los iconos con numeros
            var ultimaEducacion= document.querySelectorAll('section > div > div > div > i');
            
            //ultima experiencia
            //depende que bloque sea (EXPERIENCIA,EDUCACION,PROYECTOS)
            const nroEducacion= parseInt(ultimoNumero(ultimaEducacion,1))+1;//ultimo elmento del array
            alert(nroEducacion);

            //creo la nueva seccion
            nuevaSeccionEdu.id= "id_educacion_"+nroEducacion;
            //cambio el numero
            const nombreDeClase= "bi bi-"+nroEducacion+"-square-fill";
            nuevaSeccionEdu.querySelector("i").className=nombreDeClase;
            //agrego la seccion
            document.querySelector(".EDUCACION .mat-card").appendChild(nuevaSeccionEdu);


        }

        function agregarProyectos(){
            alert("nuevo Proyecto");
            //copio la seccion
            var nuevaSeccionEdu= document.querySelector("section#id_proyectos_1").cloneNode(true);

            //obtengo un array de todos los iconos con numeros
            var ultimaEducacion= document.querySelectorAll('section > div > div > div > i');
            
            //ultima experiencia
            //depende que bloque sea (EXPERIENCIA,EDUCACION,PROYECTOS)
            const nroEducacion= parseInt(ultimoNumero(ultimaEducacion,2))+1;//ultimo elmento del array
            alert(nroEducacion);

            //creo la nueva seccion
            nuevaSeccionEdu.id= "id_proyectos_"+nroEducacion;
            //cambio el numero
            const nombreDeClase= "bi bi-"+nroEducacion+"-square-fill";
            nuevaSeccionEdu.querySelector("i").className=nombreDeClase;
            //agrego la seccion
            document.querySelector(".PROYECTOS .mat-card").appendChild(nuevaSeccionEdu);


        }

        function ultimoNumero(listadoDeObjetos, CualSeccion)
        /*1: Experiencia
        2: Educacion
        3: proyectos*/
        {
        //en un nuevo array extraigo solo los numeros                
        var array2=new Array();
        function agregarArray2(array, e){
        array.push(e)
        };
        //listadoDeObjetos.forEach(element => agregarArray2(array2,parseInt(element[6])));
        
        for (let index = 0; index < listadoDeObjetos.length; index++) {
            array2.push(listadoDeObjetos[index].className[6]);
            
        }
        
        //console.log("largo: "+array2.length+" | array2: "+array2.toString());
        //console.log("array2");
        //console.log(array2);
        //comparar con el anterior, si es menor guardo posicion del elemento anterior para separar en otro array
        var cont=0;
        var array3=new Array();
        //recorro el array
        for(var i=0;i<array2.length;i++){
        //muestro posicion y elemento
        //comparo si mas pequeño que el anterior
        if(array2[i]<array2[i-1]){
            cont=i-1;
            //console.log("cont indice: "+cont);
            array3.push(cont);
        }
        };

        //console.log("miElemento= "+cont)
        //console.log("array3");
        //console.log(array3);
        var array4= new Array();

        for(var y=0;y<array3.length;y++){ //024
            if(y==0){
                array4.push(array2.slice(0,array3[y]+1));
            }
            else if(y==array3.length-1){//1
                array4.push(array2.slice(array3[y-1]+1,array3[y]+1));
                array4.push(array2.slice(array3[y]+1,array2.length));
            }
        }       
        
        //console.log("array4 ");
        //console.log(array4);
        //devuelve ultimo elemento del array
        console.log(array4[CualSeccion][array4[CualSeccion].length-1]);
        return array4[CualSeccion][array4[CualSeccion].length-1];
            
        }

        /**/
    //</script>