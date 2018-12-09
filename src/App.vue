<template>
    <div id="app">


        <!--Form containing at least-->
        <!--id, name, font awesome symbol, image, descriptive text, and color-->
        <template v-if="toggle">
            <div id="cardCreateWrapper">

                <button class="toggle" @click.prevent="toggleDisplay">toggle creator/inventory</button>


                <fieldset id="cardOptions">
                    <legend>Card Creation Options</legend>

                    <label>ID&nbsp;<input id="cardID" v-model="id"/></label>
                    <label>Name&nbsp;<input id="cardName" v-model="name"/></label>
                    <label>Icon&nbsp;<input id="cardIcon" v-model="icon"/></label>
                    <label>Image&nbsp;<input id="cardImage" v-model="image"/></label>
                    <label>Description&nbsp;<textarea id="cardDesc" v-model="desc"/></label>
                    <label>Color&nbsp;<input id="cardColor" type="color" v-model="color"/></label>
                    <button id="saveButton">Save</button>

                </fieldset>

                <div id="cardPreview">
                    <div class="cardContainer card" :style="{backgroundColor: color}">

                        <div class="art">
                            <img :src="image">
                        </div>
                        <div class="description">
                            <h4 class="nameDesc"><i class="fas fa-user"></i>&nbsp;{{name}}</h4>
                            <p class="stats"><i :class="icon"></i>&nbsp;{{desc}}</p>
                            <p class="idCard"><i class="far fa-id-card"></i>&nbsp;{{id}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-else>

            <div id="cardInventoryDisplay">
                <button class="toggle" @click.prevent="toggleDisplay">toggle creator/inventory</button>


            </div>
        </template>

    </div>

</template>

<script>


    export default {
        name: 'app',
        data: function () {
            return {
                id: '#',
                name: 'Data',
                icon: 'fas fa-save',
                image: 'http://old.trekipedia.com/images/library/people/data-tng-165.jpg',
                desc: 'cool android',
                color: 'purple',
                toggle: true,
                savedCards: []
            }
        },
        components: {},
        methods: {
            toggleDisplay: function () {
                if (this.toggle === false) {
                    this.toggle = true;
                }
                else {
                    this.toggle = false;
                }
            },

            saveCard: function () {

            }
        }
    }
</script>

<style>

    #app {
    @import url('https://fonts.googleapis.com/css?family=K2D');
        font-family: 'K2D', Helvetica, Arial, sans-serif;
        text-align: center;
        color: slateblue;
        margin-top: 10px;
    }

    html {
        background-color: cadetblue;
    }

    #cardCreateWrapper {
        display: grid;
        grid-template-rows: 20px 210px 1fr;
        justify-items: center;
        row-gap: 20px;
    }

    .toggle {
        grid-row: 1 / 2;
    }

    #cardOptions {
        grid-row: 2 / 3;
        display: grid;
        grid-template-rows: 20px 20px 20px 20px 1fr 20px;
        justify-items: end;
        align-items: self-start;
        row-gap: 5px;
        border-radius: 5%;
    }

    #cardOptions input, textarea {
        color: firebrick;
        background-color: aquamarine;
    }

    #cardPreview {
        grid-row: 3 / 4;
    }

    #cardID {
        grid-row: 1 / 2;
        width: 185px;
    }

    #cardName {
        grid-row: 2 / 3;
        width: 185px;
    }

    #cardIcon {
        grid-row: 3 / 4;
        width: 185px;
    }

    #cardImage {
        grid-row: 4 / 5;
        width: 185px;
    }

    #cardDesc {
        grid-row: 5 / 6;
        width: 185px;
        height: 20px;
    }

    #cardColor {
        grid-row: 6 / 7;
    }

    #saveButton {
        grid-row: 7 / 8;
    }

    .cardContainer {
        object-fit: contain;
        display: grid;
        grid-template-columns: 1fr;
        justify-self: center;
    }

    .card {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        width: 15rem;
        height: 23rem;
        background-color: blueviolet;
        border-radius: 2%;
        box-shadow: rgba(0, 0, 0, 0.5) .5em .5em .1em;
        overflow: hidden;
        display: grid;
        grid-template-rows: max-content max-content;
        grid-row-gap: 0;
        position: relative;
    }

    .art > img {
        width: 100%;
        height: 250px;
        overflow: hidden;
        margin: 0;
        padding: 0;
        object-fit: cover;
    }

    .description {
        font-family: K2D, sans-serif;
        color: darkcyan;
        padding: 0 .2rem 0 .5rem;
        font-size: 90%;
        display: grid;
        grid-template-rows: max-content max-content 50px;
        grid-row-gap: 10px;
        justify-items: start;
    }

    .nameDesc {
        grid-row: 1 / 2;
        margin: 0;
    }

    .stats {
        grid-row: 2 / 3;
        margin: 0;
    }

    .idCard {
        align-self: end;
        justify-self: end;
        grid-row: 3 / 4;
        margin: 0;
    }


</style>
