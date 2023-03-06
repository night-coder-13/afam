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
        if(product.image2 !== undefined)
        {
            product.image2 = product.image2[0];
        }
        product.image1 = product.image1[0];
         state.product = product;
       },
       ChangeLoader(state){
         state.statusLoader = !state.statusLoader
     },
    },
    actions:{
      async GetCategory({commit}){
         try{
            //  const response = await axios.get('http://192.168.1.102/afam-wp/wp-json/wl/v1/product_cat')
            //  const response = await axios.get('http://192.168.1.100/afam-wp/wp-json/wl/v1/product_cat')
             const response = await axios.get('http://panel.mehdi-abasian.ir/wp-json/wl/v1/product_cat')
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
            //  const response = await axios.get('https//mehdi-abasian.ir/wp-json/wl/v1/archive/'+id)
            //  const response = await axios.get('http://localhost/afam-wp/wp-json/wl/v1/archive/'+id)
             const response = await axios.get('http://panel.mehdi-abasian.ir/wp-json/wl/v1/archive/'+id)
             commit('GetArchive',response.data)
            //  console.log(response.data);
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
            //  const response = await axios.get('https//mehdi-abasian.ir/wp-json/wl/v1/product_cat/'+id)
            //  const response = await axios.get('http://localhost/afam-wp/wp-json/wl/v1/product_cat/'+id)
             const response = await axios.get('http://panel.mehdi-abasian.ir/wp-json/wl/v1/product_cat/'+id)
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
            //  const response = await axios.get('https//mehdi-abasian.ir/wp-json/wl/v1/product/'+id)
            //  const response = await axios.get('http://localhost/afam-wp/wp-json/wl/v1/product/'+id)
             const response = await axios.get('http://panel.mehdi-abasian.ir/wp-json/wl/v1/product/'+id)
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