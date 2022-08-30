import { createStore } from "vuex";

const store = createStore({
    state:{
        productList:[
            {
                id:1,
                title:'title',
                img:'q1.jpg'
            },
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

    },
    mutations:{

    },
    actions:{

    }
})

export default store