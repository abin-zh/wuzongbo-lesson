<template>
    <div>
        <cjb-article v-for="(item) in articles" :title="item.title"></cjb-article>
    </div>
</template>

<script>
import CjbArticle from "@/components/CjbArticle.vue";
export default{
    props:{
        articles:{
            type:Array,
            required:true,
            default(){
                return [];
            }
        }
    }    
}
</script>

<style>

</style>