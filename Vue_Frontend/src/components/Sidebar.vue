<template>
    <div>
        <ul>
            <li class="absolute" v-for="item in items" v-bind:key="item.name" :class="[open ? 'left-0' : 'left-[-100%]']">
                <a :href="item.link">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        let open = ref(false);
        let items = [
            {name: "Home", link:"#"},
            {name: "About", link:"#"},
            {name: "Contact", link:"#"}
        ]
        return {
            items
            ,open
        }
    }
}
</script>

<style lang="scss" scoped>

</style>