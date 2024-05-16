<template>
    <div class="flex m-3 rounded-md flex-col    ">
        <div class="rounded-md p-10 bg-[#D9D9D9]">
            <marquee behavior="" direction="" class="text-[clamp(15px,4vh,200px)] ">{{defaultstr}}</marquee>
        </div>
        <div class="input flex mt-2 rounded-md">
            <input class="flex-grow rounded-md p-4 bg-[#F0F0F0] text-xl" type="text" placeholder="Enter your text here">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            defaultstr: "Welcome to textboard"
        }
    },
}
</script>

<style lang="scss" scoped>

</style>