<template>
    <div>
    <template v-if="toggle">
        <div id="cardCreateWrapper">

            <button class="toggle" @click.prevent="toggleDisplay">Toggle Creator/Inventory</button>


            <fieldset id="cardOptions">
                <legend>Card Creation Options</legend>

                <label id="idLabel">ID</label><input id="cardID" v-model="id"/>
                <label id="nameLabel">Name</label><input id="cardName" v-model="name"/>
                <label id="iconLabel">Icon</label><input id="cardIcon" v-model="icon"/>
                <label id="imageLabel">Image</label><input id="cardImage" v-model="image"/>
                <label id="descLabel">Description</label><textarea id="cardDesc" v-model="desc"/>
                <label id="colorLabel">Color</label><input id="cardColor" type="color" value="red" v-model="color"/>
                <button id="saveButton" @click.prevent="save">Save</button>

            </fieldset>

            <cardPreview :color="color" :desc="desc" :icon="icon" :id="id" :image="image" :name="name"/>

        </div>
    </template>

    <template v-else>
    <div id="cardInventoryWrapper">

            <button class="toggle" @click.prevent="toggleDisplay">Toggle Creator/Inventory</button>

        <div id="cardInventoryDisplay">

            <cardContainer
                    v-for="card in cards"
                    :key="card.createDate"
                    :color="card.color"
                    :desc="card.desc"
                    :icon="card.icon"
                    :id="card.id"
                    :image="card.image"
                    :name="card.name"/>

        </div>



        </div>
    </template>
    </div>
</template>

<script>
    import CardPreview from "./CardPreview";
    import CardContainer from "./CardContainer";

    export default {
        name: "cardCreator",
        components: {CardPreview,CardContainer},
        data: function () {
            return {
                id: '#',
                name: 'Data',
                icon: 'fas fa-save',
                image: 'http://old.trekipedia.com/images/library/people/data-tng-165.jpg',
                desc: 'cool android',
                color: 'purple',
                toggle: true,
            }
        },
        props: {
          cards: []
        },
        methods: {
            toggleDisplay: function () {
                this.toggle = !this.toggle;
            },

            save: function () {
                const createDate = Date.now();
                this.$emit('click', {id:this.id,name:this.name,icon:this.icon,image:this.image,
                desc:this.desc,color:this.color,createDate});
            }
        }
    }
</script>

