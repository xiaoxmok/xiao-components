import Loading from './components/loading.vue'

let $vm

export default {
    install(Vue, options){
        if(!$vm) {
            const LoadingPlugin = Vue.extend(Loading)

            $vm = new LoadingPlugin({
                el: document.createElement('div')
            })
            document.body.appendChild($vm.$el)
        }

        $vm.show = false

        let loading = {
            show(text) {
                $vm.show = true
                if(text){
                    $vm.text = text
                }
            },
            hide() {
                $vm.show = false
            }
        }

        if(!Vue.$loading) {
            Vue.$loading = loading
        }

        // Vue.prototype.$loading = Vue.$loading

        Vue.mixin({
            created() {
                this.$loading = Vue.$loading
            }
        })
    }
}
