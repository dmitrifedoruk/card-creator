<template>

    <div class="cardContainer"
         :style="{backgroundColor: color1,
         color: color2,
         borderColor: color3}">

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
            color1: {},
            color2: {},
            color3: {},
            desc: {},
            icon: {},
            id: {},
            image: {},
            name: {}
        }
    }
</script>