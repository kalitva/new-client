<script setup>
import { onMounted } from 'vue'
import rateExchangeService from '../services/rateExchangeService'

onMounted(() => {
  rateExchangeService.course('USD', 'EUR')
    .then(console.dir)
  rateExchangeService.list()
    .then(console.dir)
})
</script>

<template>
  <div>
    <div>EXCHANGE</div>
    <div>EXCHANGE</div>
    <div>EXCHANGE</div>
    <div>EXCHANGE</div>
    <div>EXCHANGE</div>
  </div>
</template>
