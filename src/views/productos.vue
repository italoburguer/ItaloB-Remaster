<template>
    <div calss="container">
    <h1>Productos</h1>   

 <form @submit.prevent="editarProducto(productoEditar)" v-if="editar">
     <h3>Editar producto</h3>
     
<b-alert :show="dismissCountDown" 
dismissible
 :variant="mensaje.color" 
 @dismissed="dismissCountDown=0" 
 @dismiss-count-down="countDownChanged" 
 > 
 {{mensaje.texto}} 
 </b-alert>

    <input type="text" class="form-control my-2" placeholder="Nombre" v-model="productoEditar.nombre"> 
    <input type="text" class="form-control my-2" placeholder="Descripción" v-model="productoEditar.descripcion">
    <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button> 
    <b-button class="my-2" type="submit" @click="editar=false">Cancelar</b-button>     
     
     </form>
   
   <form @submit.prevent="agregarProducto()" v-if="!editar">
     <h3>Agregar producto</h3>

<b-alert :show="dismissCountDown" 
dismissible
 :variant="mensaje.color" 
 @dismissed="dismissCountDown=0" 
 @dismiss-count-down="countDownChanged" 
 > 
 {{mensaje.texto}} 
 </b-alert>

    <input type="text" class="form-control my-2" placeholder="Nombre" v-model="producto.nombre"> 
    <input type="text" class="form-control my-2" placeholder="Descripción" v-model="producto.descripcion">
    <b-button class="btn-success my-2" type="submit">Agregar</b-button>      
     
     </form>

   <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in productos" :key="index">
      <th scope="row">{{item._id}}</th>
      <td>{{item.nombre}}</td>
      <td>{{item.descripcion}}</td>
      <td>
        <b-button class="btn-danger mx-2" @click="eliminarProducto(item._id)">Eliminar</b-button>
        <b-button class="btn-danger mx-2" @click="activarEdicion(item._id)">Editar</b-button>

      </td>
    </tr>
    

  </tbody>
</table>
    </div>
</template>

<script>
export default {
    data(){
        return{

          productos:[],

          mensaje: {color: 'success', texto: ''}, 
          dismissSecs: 5, 
          dismissCountDown: 0,
      
      producto:{nombre:"",descripcion:""},
      editar:false,
      productoEditar:{}

        
    }
},

created(){

  this.listarProductos();

},


methods: {

  listarProductos(){

   this.axios.get('/producto')
   .then(res=>{
   
       this.productos=res.data;

   })
   .catch(e=>{

     console.log(e.response)
   })

  },

agregarProducto(){

     this.axios.post('/producto-nuevo',this.producto)
    .then(res=>{

       this.productos.push(res.data)
       this.producto.nombre="";
       this.producto.descripcion="";
       this.mensaje.color="success";
       this.mensaje.texto="Producto agregado";
       this.showAlert();
    })
     .catch(e=>{

     console.log(e.response)
   })
},


eliminarProducto(id){

this.axios.delete(`producto/${id}`) 
.then(res => { let index = this.productos.findIndex( item => item._id === res.data._id )
 this.productos.splice(index, 1); 
 this.showAlert(); 
 this.mensaje.texto = 'Producto Eliminado!' 
 this.mensaje.color = 'danger' })
.catch(e=>{

     console.log(e.response);
   })
},

activarEdicion(id){

  this.editar=true;
  this.axios.get(`producto/${id}`)
  .then(res=>{
     this.productoEditar=res.data;
  })
.catch(e=>{

     console.log(e.response);
   })

},

editarProducto(item){

  this.axios.put(`/producto/${item._id}`, item)
   .then(res=>{
  const index= this.productos.findIndex(n=> n._id===res.data._id);
  this.productos[index].nombre=res.data.nombre;
  this.productos[index].descripcion=res.data.descripcion;
  this.showAlert(); 
 this.mensaje.texto = 'Producto Editado!'; 
 this.mensaje.color = 'danger';
 this.editar=false;

   })
   .catch(e=>{

     console.log(e.response);
   })

},

countDownChanged(dismissCountDown) { 
  this.dismissCountDown = dismissCountDown 
  }, 
showAlert() {
   this.dismissCountDown = this.dismissSecs 
   }

}  
};

</script>