const input= document.querySelector('#busqueda')
        const user_list=document.querySelector('#data')

        let Usuarios=[]

        window.addEventListener('DOMContentLoaded', async function(){
            // console.log('loaded')
            const data= await Tabla_datos()
            usuarios= data
            recorrido_Tabla(usuarios)
        })
        
        
        async function Tabla_datos(){
            const response= await fetch('https://jsonplaceholder.typicode.com/users')
            return await response.json()
        }


        input.addEventListener('keyup', function (event) {
            // console.log(input.value)
            const new_usuarios=usuarios.filter (function (selector){
                return selector.name.toLowerCase().includes(input.value.toLowerCase())

            })
            recorrido_Tabla(new_usuarios)
        })

        
            

        function recorrido_Tabla(users) {
            let body= '';
             for (let i=0; i<users.length; i++){
                  body= body + `<tr> 
                      <td>${users[i].id}</td>
                      <td>${users[i].name}</td>
                     <td>${users[i].username}</td>
                      <td>${users[i].email}</td>  
                      <td>${users[i].address.street}</td>  
                      </tr>`
             }
             document.getElementById('data').innerHTML= body  
        }
