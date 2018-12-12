<template>
    <div>
        <header>Card Creator.  Go!</header>
    <template v-if="toggle">
        <div id="cardCreateWrapper">

            <button class="toggle" @click.prevent="toggleDisplay">Toggle Creator/Inventory</button>


            <fieldset id="cardOptions">
                <legend>Card Creation Options</legend>

                <label id="idLabel">ID</label><input id="cardID" v-model="id" required/>
                <label id="nameLabel">Name</label><input id="cardName" v-model="name" required/>
                <label id="iconLabel">Icon</label><input id="cardIcon" v-model="icon"/>
                <label id="imageLabel">ImageURL</label><input id="cardImage" type="url" v-model="image" required/>
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

            <InventoryItem
                    v-for="(card,index) in cards"
                    :key="card.createDate"
                    :color="card.color"
                    :desc="card.desc"
                    :icon="card.icon"
                    :id="card.id"
                    :image="card.image"
                    :name="card.name"
                    :create-date="card.createDate"
                    :index="index"
                    @remove="remove"/>

        </div>

        </div>
    </template>

    </div>
</template>

<script>
    import CardPreview from "./CardPreview";
    import InventoryItem from "./InventoryItem";

    export default {
        name: "cardCreator",
        components: {CardPreview,InventoryItem},
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
          cards: {}
        },
        methods: {
            toggleDisplay: function () {
                this.toggle = !this.toggle;
            },

            save: function () {
                const cardDate = new Date();
                const createDate = cardDate.toLocaleString();
                this.$emit('click', {id:this.id,name:this.name,icon:this.icon,image:this.image,
                desc:this.desc,color:this.color,createDate,index:this.index});
            },
            remove: function(event){
                this.$emit('remove', {index:event.index});
            }
        }
    }
</script>

