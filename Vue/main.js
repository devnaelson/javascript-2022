const Counter = {

    /*     data: function () {
            return {
                counter: 0
            }, */

    // es65 syntax
    data() {
        return {
            counter: 0
        }
    }, mounted() { // if it is mount, then is mounted
        setInterval(() => {
            this.counter++
        }, 1000)
    }
}

//Declarative Rendering
// declaratively render data to the DOM using straightforward template syntax:
Vue.createApp(Counter).mount('#counter')