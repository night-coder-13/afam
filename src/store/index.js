import { createStore } from "vuex";

const store = createStore({
    state:{
        statusLoader:false,
        category:[
            {
                id:1,
                img:'1-26.jpg',
                title:'lorme ipsum'
             },
             {
                id:2,
                img:'1-27.jpg',
                title:'lorme ipsum'
             },
             {
                id:3,
                img:'1-29.jpg',
                title:'lorme ipsum'
             },
             {
                id:4,
                img:'21.jpg',
                title:'lorme ipsum'
             },
             {
                id:1,
                img:'1-26.jpg',
                title:'lorme ipsum'
             },
             {
                id:2,
                img:'1-27.jpg',
                title:'lorme ipsum'
             },
             {
                id:3,
                img:'1-29.jpg',
                title:'lorme ipsum'
             },
             {
                id:4,
                img:'21.jpg',
                title:'lorme ipsum'
             }
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
    },
    mutations:{

    },
    actions:{

    }
})

export default store