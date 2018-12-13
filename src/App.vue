<template>
    <div id="app">


        <card-creator :cards="savedCards" @click="createCard" @remove="removeFromInventory"></card-creator>

    </div>

</template>

<script>


    import CardCreator from "./components/CardCreator";
    import db from '@/components/firebaseDB';

    export default {
        name: 'app',
        data: function () {
            return {
                savedCards: [],
                toggle: true,
            }
        },

        created: function(){
            db.collection("cards").onSnapshot((querySnapshot) => {
                    this.savedCards = [];
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        const card = doc.data();
                        card.dBID = doc.id;
                        this.savedCards.push(card);
                    });
                });

        },

        components: {CardCreator},

        methods: {
            createCard(event) {

                db.collection("cards").add({id:event.id,name:event.name,icon:event.icon,image:event.image,
                    desc:event.desc,color1:event.color1,color2:event.color2,color3:event.color3,
                    createDate:event.createDate});

            },
            removeFromInventory: function(event){
                db.collection("cards").doc(event.dBID).delete()
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

    header {
        background-color: #4e8183;
        width: 110vw;
        font-size: 2rem;
        text-align: start;
        position: relative;
        left: -8px;
        margin-bottom: 10px;
    }

    #cardCreateWrapper {
        display: grid;
        grid-template-rows: 30px max-content 1fr;
        justify-items: center;
        row-gap: 10px;
    }

    .toggle {
        grid-row: 1 / 2;
        align-self: normal;
        justify-self: center;
        background-color: slateblue;
        color: firebrick;
        border-radius: 4%;
        border: inset;
        font-family: 'K2D', sans-serif;
        height: 35px;
        width: 250px;
        font-weight: 500;
        font-size: 1.2rem;
        align-content: center;
    }

    #cardOptions {
        grid-row: 2 / 3;
        display: grid;
        grid-template-rows: 20px 20px 20px 20px 1fr 20px;
        grid-template-columns: 80px 1fr;
        justify-items: end;
        align-items: self-start;
        row-gap: 5px;
        column-gap: 10px;
        border-radius: 5%;
        border: inset;
    }

    #cardOptions input, textarea {
        color: firebrick;
        background-color: #57af92;
        font-family: 'K2D', sans-serif;
    }

    #cardPreview {
        grid-row: 3 / 4;
    }

    #cardInventoryWrapper {
        display: grid;
        grid-template-rows: 35px 1fr;
        grid-template-columns: repeat(auto-fit,auto);
    }

    /*explicitly centers when screen width is down to one column of cards*/
    @media (max-width: 480px) {
        #cardInventoryWrapper {
            justify-items: center;
        }
    }

    #cardInventoryDisplay {
        grid-row: 2 / 3;
        padding: 10px 20px 0 20px;
        display: grid;
        grid-row-gap: 20px;
        grid-column-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(150px, 15rem));
    }

    #idLabel {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }

    #cardID {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        width: 185px;
    }

    #nameLabel {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
    }

    #cardName {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        width: 185px;
    }

    #iconLabel {
        grid-row: 3 / 4;
        grid-column: 1 / 2;
    }

    #cardIcon {
        grid-row: 3 / 4;
        grid-column: 2 / 3;
        width: 185px;
    }

    #imageLabel {
        grid-row: 4 / 5;
        grid-column: 1 / 2;
    }

    #cardImage {
        grid-row: 4 / 5;
        grid-column: 2 / 3;
        width: 185px;
    }

    #descLabel {
        grid-row: 5 / 6;
        grid-column: 1 / 2;
    }

    #cardDesc {
        grid-row: 5 / 6;
        grid-column: 2 / 3;
        width: 185px;
        height: 20px;
    }

    #colorLabel {
        grid-row: 6 / 7;
        grid-column: 1 / 2;
    }

    #cardColor {
        grid-row: 6 / 7;
        grid-column: 2 / 3;
        justify-self: start;
    }

    #saveButton {
        grid-row: 7 / 8;
        grid-column: 2 / 3;
        background-color: slateblue;
        color: firebrick;
        border-radius: 4%;
        border: inset;
        font-family: 'K2D', sans-serif;
        height: 25px;
    }

    .cardContainer {
        object-fit: contain;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content max-content;
        grid-row-gap: 0;
        justify-self: center;
        border: 5px inset;
        width: 15rem;
        height: 23rem;
        background-color: blueviolet;
        border-radius: 2%;
        box-shadow: rgba(0, 0, 0, 0.5) .5em .5em .1em;
        overflow: hidden;
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

    .dateDisplay {
        margin: 5px 0 5px 0;
    }

    .deleteButton {
        align-self: normal;
        justify-self: center;
        background-color: slateblue;
        color: firebrick;
        border-radius: 4%;
        border: inset;
        font-family: 'K2D', sans-serif;
        height: 25px;
        width: 250px;
        font-weight: 500;
        align-content: center;
        margin-bottom: 10px;
    }

</style>
