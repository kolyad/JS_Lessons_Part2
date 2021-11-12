Vue.component('errorbox', {
    props: ["message", "buttonCaption"],
    template: `
        <div class="error-box">
            <h1>{{message}}</h1>
            <button class="btn-ok" @click="$emit('click')">{{buttonCaption}}</button>
        </div>
        `
});