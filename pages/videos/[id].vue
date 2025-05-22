<template>
  <div>
    <p>Você está no vídeo de número {{ id }}</p>
    <VideosDetalhes/>
    <VideosControlesPlay/>
  </div>
</template>

<script setup>
definePageMeta({
  layout:"exibição",///assim eu defino os layoutes e posso chamar a onde quiser ou dentro de uma função assim''' name="exibição"''''
})
const route = useRoute()
const id = route.params.id
</script>
