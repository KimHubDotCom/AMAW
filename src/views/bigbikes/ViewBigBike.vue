<template>

  <h1>Big Bike Informations</h1>
     <div class="row">
         <div class="col-md-12">
         <table class="table table-hover table-bordered text-center bg-success">
                   <tr>
                        <th style="color:white;">Model Name</th>
                        <th style="color:white;">Rpm</th>
                        <th style="color:white;">Price</th>
                        <th style="color:white;">Color</th>
                   </tr>

                   <tr class="bg-dark">
                       <td  style="color:white;">{{big_bikes.model_name}}</td>
                        <td  style="color:white;">{{big_bikes.rpm}}</td>
                         <td  style="color:white;">{{big_bikes.price}}</td>
                          <td  style="color:white;">{{big_bikes.color}}</td>
                   </tr>




         </table>
         </div>
     </div>

     
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            big_bikes:[]
        }
    },

    mounted(){
        fetch('http://127.0.0.1:8000/api/big_bikes/' + this.id)
            .then(res=>res.json())
            .then(data=>this.big_bikes = data)
            .catch(err=>console.log(err))
        },


}
</script>

<style>

</style>