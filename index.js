import { config } from "./config.js";

const HelloVueApp = {
    data() {
        return {
            txlists: [],
            pageurl: ""
        }
    },
    created() {
        this.txlists = config.txlists ? config.txlists : [];
        this.canvaslists = config.canvaslists ? config.canvaslists : [];
        this.loadinglists = config.loadinglists ? config.loadinglists : [];
        this.pageurl = this.canvaslists[0].url
    },
    methods: {
        todoPage(url) {
            this.pageurl = url;
        }
    }
}

Vue.createApp(HelloVueApp).mount('#container')