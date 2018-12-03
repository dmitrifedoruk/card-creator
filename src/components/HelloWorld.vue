<template>
    <div>
        <Welcome/>
        <div class="greeting">
            <p v-if="showGreeting">{{greeting}}</p>
            <button v-on:click="toggleGreeting">Click me!</button>
        </div>
    </div>
</template>

<script>
    import Welcome from "@/components/Welcome";
    export default {
        name: 'HelloWorld',
        components: {Welcome},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                greeting: "Tea. Earl Grey. Hot",
                showGreeting: false
            }
        },
        methods: {
            toggleGreeting() {
                this.showGreeting = !this.showGreeting;
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>