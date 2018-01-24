
let stream = weex.requireModule('stream');
export default {
    methods: {
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        },
        GET (api, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                url: 'http://cdn.zwwill.com/yanxuan/' + api
                // url: 'http://10.242.69.181:8089/yanxuan/' + api
            }, callback)
        },
        loadImage(imgName){
            var image = require('../assets/images/'+imgName);
            // console.log(image);
            return image;
        },
        serverStatic(){
            var server = 'http://192.168.1.101:8000/';

            return {
                images:server+'images/'
            };
        }
    }
}
