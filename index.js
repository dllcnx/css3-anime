const HelloVueApp = {
    data() {
        return {
            lists: [{
                name: '标题特效',
                file: 'dllcn',
                url: 'dllcn/index.html'
            }]
        }
    }
}

Vue.createApp(HelloVueApp).mount('#tx')