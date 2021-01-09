<template>
    <section class="type-chooser-wrapper">
        <v-select class="type-chooser-input" hide-details v-model="phoneTypeSelection" :items="allPhoneType" menu-props="auto" prepend-icon="mdi-cellphone"></v-select>
        <v-select class="type-chooser-input" hide-details v-model="phoneSeriesSelection" :items="allPhoneTypeSeries" menu-props="auto" prepend-icon="mdi-format-list-numbered"></v-select>
    </section>
</template>

<script>
export default {
    data(){
        return{
            allPhoneType:[
                'iPhone',
                'Windows Phone',
                'OPPO'
            ],
            phoneTypeSelection:'',
            allPhoneTypeSeries:[
                '1',
                '2',
                '3'
            ],
            phoneSeriesSelection:''
        }
    }
}
</script>

<style>
.type-chooser-wrapper{
    display: flex;
    align-items: stretch;
}
.type-chooser-wrapper .type-chooser-input{
    margin-right: 26px;
}
</style>