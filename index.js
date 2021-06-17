const HelloVueApp = {
    data() {
        return {
            lists: [{
                name: '标题特效',
                url: 'dllcn/index.html'
            }],
            pageurl: ""
        }
    },
    created() {
        this.pageurl = this.lists[0].url
    },
    methods: {
        todoPage(url) {
            this.pageurl = url;
        }
    }
}

Vue.createApp(HelloVueApp).mount('#container')