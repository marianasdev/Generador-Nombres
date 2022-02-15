
//archivo index.js


   document.querySelector('#cajamain').addEventListener('submit', cargarNombres);

   
 
    // Llamado a Ajax e imprimir resultados
    function cargarNombres(e) {
        e.preventDefault();
    
        // Leer las variables
    
        
        const origen = document.getElementById('origen');
        const origenSeleccionado = origen.options[origen.selectedIndex].value;    
    
        const genero = document.getElementById('genero');
        const generoSeleccionado = genero.options[genero.selectedIndex].value; 
        const cantidad = document.getElementById('numero').value;
        
            
    if (origenSeleccionado === "seleccione" || generoSeleccionado === "seleccione" || cantidad === "seleccione") { 
    
         document.querySelector('#nombreselejidos').innerHTML = 'Chequeá que te falta ingresar datos'
    
    }
    else
    {
    
    
        let url = '';
        url += 'https://randomuser.me/api/?inc=gender,name,nat&';
        // Si hay origen agregarlo a la URL
        if (origenSeleccionado !== "seleccione") {
            url += `nat=${origenSeleccionado}&`;
        }
        // Si hay un genero agregarlo a la URL
        if (generoSeleccionado !== "seleccione") {
            url += `gender=${generoSeleccionado}&`;
        }
        // Si hay una cantidad agregarlo a la URL
        if (cantidad !== "seleccione") {
            url += `results=${cantidad}&`;
        }
        console.log(url);

    
        // Código de FETCH API AQUI
     //crear fetch


    

            fetch(url)
            .then((res) => {
            return res.json();
            })
            .then((data)=>{
        
                let html = '<h2>Nombres Generados</h2>';
                html += `<p class="lista"`;
        
                const info = data.results;
        
                info.forEach(data => {
                    html+=`<p>${data.name.first}</p>`
                });
            
                 html+=`<br>`;
        
                document.querySelector('#nombreselejidos').innerHTML = html;
        
            })
            .catch((error) =>{
            console.log(error);
            })
            

    }
}

