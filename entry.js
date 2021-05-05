//import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'
//import Vue from "vue";

System.register(['vue'], () => {
    let Vue;

    return {
        setters: [v => Vue = v.default],
        execute() {

            new Vue({
                el: "#container",
                data: {
                    age: "4.503 billion years"
                }
            });

        }
    }
})



//console.clear();

//new Vue({
//    el: "#container",
//    data: {
//        age: "4.503 billion years"
//    }
//});