<script setup lang="ts">
const {diasPessados , diferencaEmDias}= useFormatacao()
debugger
const dadaDoDia = new Date('2023, 9, 2')

diasPessados(dadaDoDia)
</script>

<template>
    <div>
            <h1>Componentes - nuxt3</h1>
            <p>autor: josuel</p>
            <p>{{diferencaEmDias}}dias atraz</p>
    </div>
</template>



<style lang="scss" scoped>

</style>
