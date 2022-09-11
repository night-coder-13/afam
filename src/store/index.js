import axios from "axios";
import Swal from "sweetalert2";
import { createStore } from "vuex";

const store = createStore({
    state:{
        statusLoader:false,
        category:[
        
     ],
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
         // console.log( state.category)
       },
    },
    actions:{
      async GetCategory({commit}){
         try{
             const response = await axios.get('http://localhost/afam-wp/wp-json/wl/v1/product_cat')
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
    }
})

export default store