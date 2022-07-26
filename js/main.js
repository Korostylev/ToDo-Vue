let app = new Vue({
    el: '#app',
    data: {
        login: '',
        pass: '',
        exit: true,
        new_quest: '',
        questions: [{text: 'Нужное дело', check: false},
            {text: 'Важное дело', check: true},
            {text: 'Безделье', check: false}]
    },
    methods:{
        enter: function(){
            if (this.login == 'admin' && this.pass == 'admin'){
                this.exit = false;
            }
            else {
                alert('Неверный логин или пароль');
            }
            this.login = '';
            this.pass = '';
        },
        add_quest: function(){
            this.questions.push({text: this.new_quest, check: false});
            this.new_quest = '';
        }
    }
})