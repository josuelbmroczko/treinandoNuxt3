<template>
  <div>
    <p>Você está no vídeo de número {{ id }}</p>
    <VideosDetalhes/>
    <VideosControlesPlay/>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
</script>
