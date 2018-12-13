<template>
    <div class="inventoryItem">
        <cardContainer
                :color1="color1"
                :color2="color2"
                :color3="color3"
                :desc="desc"
                :icon="icon"
                :id="id"
                :image="image"
                :name="name"/>
        <p class="dateDisplay">Created on<br/>{{createDate}}</p>
        <button class="deleteButton" @click="remove">Delete</button>

    </div>
</template>

<script>

    import CardContainer from "./CardContainer";

    export default {
        name: "InventoryItem",
        components: {CardContainer},
        props: {
            color1: {},
            color2: {},
            color3: {},
            desc: {},
            icon: {},
            id: {},
            image: {},
            name: {},
            createDate: {},
        },
        methods: {
            remove: function(event){
                this.$emit('remove',event.dBID);
            }
        }
    }
</script>

<style scoped>

</style>