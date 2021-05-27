<template>
    <div class="main-sections" id="main-sections" ref="main_sections">
        <Section1/>
    </div>
</template>
<style scoped>
.main-sections {
    width: 100%;
    background-color: white;
    position: relative;
    height: 10000px;
    z-index: 1000;
}
</style>
<script>
import Section1 from "./Section1.vue"
export default ({
    name: "main-sections",
    components: {
        Section1
    }
})
</script>
