const methods ={
    Sample: (value) => {
        console.log('test')
    }
}

export default {
    install(Vue) {
        Vue.prototype.$Sample = methods.Sample;
    }
}