const HelloVueApp = {
    data() {
        return {
            txlists: [{
                name: '标题特效',
                url: 'tx/dllcn/index.html'
            }],
            canvaslists: [
                {
                    name: 'webglCanvas',
                    url: 'canvas/webglCanvas/index.html'
                },
                {
                    name: 'AnimatedBackground',
                    url: 'canvas/AnimatedBackground/index.html'
                },
                {
                    name: 'PoppingBubbles',
                    url: 'canvas/PoppingBubbles/index.html'
                },
                {
                    name: '3DBackground',
                    url: 'canvas/3DBackground/index.html'
                },
                {
                    name: '3DBackground2',
                    url: 'canvas/3DBackground/index2.html'
                }
            ],
            loadinglists: [{
                name: 'css3-flower-loading',
                url: 'loading/css3-flower-loading/index.html'
            }],
            pageurl: ""
        }
    },
    created() {
        this.pageurl = this.canvaslists[0].url
    },
    methods: {
        todoPage(url) {
            this.pageurl = url;
        }
    }
}

Vue.createApp(HelloVueApp).mount('#container')