<template>
  <div>
      <h1>List of Big Bikes</h1>
      <hr>
    
          <div class="col-md-12">
              <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Model Name</th>
                        <th>Rpm</th>
                        <th>Price</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="bigBike in big_bikes" :key="bigBike.id">
                        <td>{{bigBike.model_name}}</td>
                        <td>{{bigBike.rpm}}</td>
                        <td>{{bigBike.price}}</td>
                        <td>{{bigBike.color}}</td>
                        <td>
                            <router-link :to="{name: 'ViewBigBike', params: {id: bigBike.id}}" class="btn btn-sm btn-primary">
                                Open
                                 </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
  
</template>

<script>
export default {
    data() {
        return {
            big_bikes: {
                id:null,
                model_name: '',
                rpm: '',
                price: '',
                color: '',
                
            },
            big_bikes: []
                
                    
        }
    },
    methods: {
        addbigBikes() {

        },
        getData() {
            fetch('http://127.0.0.1:8000/api/big_bikes')
            .then(res=>res.json())
            .then(data=>this.big_bikes = data)
            .catch(err=>console.log(err))
        },
    },
    mounted() {
        this.getData()
    }


 
}
</script>

<style>

</style>