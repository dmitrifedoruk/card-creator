<template>
    <div id="cardPreview">
        <cardContainer
                :color1="color1"
                :color2="color2"
                :color3="color3"
                :desc="desc"
                :icon="icon"
                :id="id"
                :image="image"
                :name="name"/>
    </div>
</template>

<script>
    import CardContainer from "./CardContainer";

    export default {
        name: 'cardPreview',
        components: {CardContainer},
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
