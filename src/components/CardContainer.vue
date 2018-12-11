<template>

    <div class="cardContainer" :style="{backgroundColor: color}">

        <div class="art">
            <img :src="image">
        </div>
        <div class="description">
            <h4 class="nameDesc"><i class="fas fa-user"></i>&nbsp;{{name}}</h4>
            <p class="stats"><i :class="icon"></i>&nbsp;{{desc}}</p>
            <p class="idCard"><i class="far fa-id-card"></i>&nbsp;{{id}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'cardContainer',
        props: {
            color: {},
            desc: {},
            icon: {},
            id: {},
            image: {},
            name: {}
        }
    }
</script>