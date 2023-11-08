<template>
    <div class="cjb-cat-list" @click="$emit('curCat',curCat)"> 
        <cjb-cat v-for="(item) in catList" :title="item.catName" :id="item.id" :showInNav="curCat == item.id" @changeCat="changeCat"></cjb-cat>
    </div>
</template>

<script>
import CjbCat from "@/components/CjbCat.vue";
export default {
    data() {
        return {
            curCat: 1,
        }
    },
    props: {
        catList: {
            type: Array,
            required: true,
            default() {
                return [];
            }
        },
    },
    methods: {
        changeCat(id) {
            this.curCat = id;
        }
    }
}
</script>

<style>
    .cjb-cat-list{
        display: flex;
        flex-direction: column;
    }
</style>