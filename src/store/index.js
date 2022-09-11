import axios from "axios";
import Swal from "sweetalert2";
import { createStore } from "vuex";

const store = createStore({
    state:{
        statusLoader:false,
        category:[],
        product:[],
        archive:[],
        contentArchive:[],
        header:{title:'title' , description:'description',image:{a:'',b:'' ,c:''}},
        customer:[
            {img : [
                {a:''},
                {b:''},
                {c:''},
                {d:''},
                {e:''},
            ]},
            {numberProduct:''},
            {numberYearsHistory:''},
            {numberProject:''},
        ],
        feature:{title : '', img : ''},
        quarries:{title : '', img : ''},
        //blog
    },
    getters:{
        changeLoader(state){
            state.statusLoader = !state.statusLoader
            return state.statusLoader
        },
        getLoader(state){
            return state.statusLoader
        },
        getCategory(state){            
            return state.category
        },
    },
    mutations:{
      GetCategory(state,category){
         state.category = category;
       },
       GetArchive(state,archive){
         state.archive = archive;
       },
       GetContentArchive(state,archive){
         state.contentArchive = archive;
       },
       GetProduct(state,product){
         state.product = product;
       },
       ChangeLoader(state){
         state.statusLoader = !state.statusLoader
     },
    },
    actions:{
      async GetCategory({commit}){
         try{
             const response = await axios.get('http://wp.mehdi-abasian.ir/wp-json/wl/v1/product_cat')
             commit('GetCategory',response.data)
            //  console.log(response.data)
         }catch(error){
             Swal.fire({
                 icon: 'warning',
                 title: error,
                 timerProgressBar: true,
                 showConfirmButton: false,
                 timer: '3000',
                 toast: true,
                 position : 'top'
             })
         }
     },
      async GetArchive({commit},id){
         try{
             const response = await axios.get('http://wp.mehdi-abasian.ir/wp-json/wl/v1/archive/'+id)
             commit('GetArchive',response.data)
            //  console.log(response.data)
         }catch(error){
             Swal.fire({
                 icon: 'warning',
                 title: error,
                 timerProgressBar: true,
                 showConfirmButton: false,
                 timer: '3000',
                 toast: true,
                 position : 'top'
             })
         }
     },
      async GetContentArchive({commit},id){
         try{
             const response = await axios.get('http://wp.mehdi-abasian.ir/wp-json/wl/v1/product_cat/'+id)
             commit('GetContentArchive',response.data)
            //   console.log(response.data)
         }catch(error){
             Swal.fire({
                 icon: 'warning',
                 title: error,
                 timerProgressBar: true,
                 showConfirmButton: false,
                 timer: '3000',
                 toast: true,
                 position : 'top'
             })
         }
     },
      async GetProduct({commit},id){
         try{
             const response = await axios.get('http://wp.mehdi-abasian.ir/wp-json/wl/v1/product/'+id)
             commit('GetProduct',response.data)
            //   console.log(response.data)
         }catch(error){
             Swal.fire({
                 icon: 'warning',
                 title: error,
                 timerProgressBar: true,
                 showConfirmButton: false,
                 timer: '3000',
                 toast: true,
                 position : 'top'
             })
         }
     },
    }
})

export default store