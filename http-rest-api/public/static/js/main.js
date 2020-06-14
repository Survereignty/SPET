const list = new Vue({
    el: '#root',
    data: {
        name: "",
        dates: [],
        html: ""
    },
    created() {
        this.getItems();
    },
    methods: {
        getItems() {
            fetch('http://localhost:3002/students')
                .then(response => response.json())
                .then(commits => this.dates = commits);
        },
        send() {
            const unit = {
                Name: this.name
            };
            fetch('http://localhost:3002/students', {
                method: 'POST',
                body: JSON.stringify(unit)
            })
                .then(response => response.json())
                .then(commits => console.log(commits))
                .then(() => this.getItems())
        }
    }
})