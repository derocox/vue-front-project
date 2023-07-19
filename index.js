Vue.component('clientes-list', {
    props: ['clientes'],
    template: '<li>{{clientes.nombres}}</li>'
  })


//comentario en JS
var app = new Vue({ 
    el: '#app',
    data () {
        return {
            cliente: null,
        }
    },
    mounted() {
        axios.get('http://django-back-api.eba-bpjmgqjs.us-west-2.elasticbeanstalk.com/api/cliente/').then(response => this.cliente = response.data)
    },
});
