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
                <label id="colorLabel">Color</label>
                <span id="cardColor">
                <input id="cardColor1" type="color" value="red" v-model="color1"/>
                <input id="cardColor2" type="color" value="red" v-model="color2"/>
                    <input id="cardColor3" type="color" value="red" v-model="color3"/>
                </span>
                <button id="saveButton" @click.prevent="save">Save</button>

            </fieldset>

            <cardPreview
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

    <template v-else>
    <div id="cardInventoryWrapper">

            <button class="toggle" @click.prevent="toggleDisplay">Toggle Creator/Inventory</button>

        <div id="cardInventoryDisplay">

            <InventoryItem
                    v-for="(card,index) in cards"
                    :key="card.createDate"
                    :color1="card.color1"
                    :color2="card.color2"
                    :color3="card.color3"
                    :desc="card.desc"
                    :icon="card.icon"
                    :id="card.id"
                    :image="card.image"
                    :name="card.name"
                    :create-date="card.createDate"
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
                color1: 'purple',
                color2: 'green',
                color3: 'darkcyan',
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
                const cardDate = new Date(); //current date obj
                const createDate = cardDate.toLocaleString(); //formatted for display
                this.$emit('click', {id:this.id,name:this.name,icon:this.icon,image:this.image,
                desc:this.desc,color1:this.color1,color2:this.color2,color3:this.color3,createDate});
            },
            remove: function(){
                this.$emit('remove');
            }
        }
    }
</script>

