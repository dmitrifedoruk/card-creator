<template>
    <div id="cardPreview">
        <cardContainer :color="color" :desc="desc" :icon="icon" :id="id" :image="image" :name="name"/>
    </div>
</template>

<script>
    import CardContainer from "./CardContainer";

    export default {
        name: 'cardPreview',
        components: {CardContainer},
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
