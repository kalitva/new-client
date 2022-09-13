<script setup>
import { onMounted, ref } from 'vue'
import rateExchangeService from '../services/rateExchangeService'

const targets = ['USD', 'EUR', 'JPY', 'GBP', 'INR', 'RUB', 'BRL', 'AED', 'ZAR']
const base = ref('USD')
const rates = ref([])

onMounted(() => {
  rateExchangeService.course(base.value, targets.join`,`)
    .then(rs => rates.value = rs.filter(r => r.code !== base.value))
  rateExchangeService.list()
    .then(console.dir)
})
</script>

<template>
  <div class="exchange">
    <ul class="exchange__rates">
      <li class="exchange__rates__rate" v-for="rate in rates" :key="rate.code">
        <h4 class="exchange__rates__rate__code">{{ rate.code }}</h4>
        <div class="exchange__rates__rate__name">{{ rate.name }}</div>
        <div class="exchange__rates__rate__value">{{ Number(rate.rate).toFixed(2) }}</div>
      </li>
    </ul>
  </div>
</template>

<style>
.exchange__rates {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(5rem, max-content);
  gap: 1rem;
  padding: 2rem;
}

.exchange__rates__rate {
  border-radius: 1rem;
  text-align: center;
  background-color: var(--secondary-lite);
}

.exchange__rates__rate__code {
  padding: 0.2rem 0;
  border-bottom: 3px solid white;
  border-radius: 1rem 1rem 0 0;
  font-size: 1.1rem;
  color: var(--primary-color);
}

.exchange__rates__rate__name {
  padding: 0.1rem;
  color: var(--secondary-font);
}

.exchange__rates__rate__value {
  padding: 0.3rem 0;
  font-size: 1.3rem;
  color: var(--accent-color);
}
</style>
