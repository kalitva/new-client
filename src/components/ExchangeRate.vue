<script setup>
import { onMounted, ref, watch } from 'vue'
import rateExchangeService from '../services/rateExchangeService'
import CurrenciesAutocomplete from './CurrenciesAutocomplete.vue'

const COMMA = ','
const DELAY_BEFORE_CLOSE = 300

const currencies = ref(new Set(['USD', 'EUR', 'JPY', 'GBP']))
const base = ref('USD')
const rates = ref([])
const showBaseFrom = ref(false)
const showAddCurrencyForm = ref(false)

onMounted(() => updateRates())
watch(currencies.value, updateRates)
watch(base, updateRates)

function updateRates() {
  const to = Array.from(currencies.value).join(COMMA)
  rateExchangeService.course(base.value, to)
    .then(rs => rates.value = rs.filter(r => r.code !== base.value))
}

function close() {
  setTimeout(() => {
    showBaseFrom.value = false
    showAddCurrencyForm.value = false
  }, DELAY_BEFORE_CLOSE)
}
</script>

<template>
  <div class="exchange">
    <h2 class="exchange__header">Rate exchange</h2>
    <div class="exchange__base">
      <label class="exchange__base__label"><em>Base</em>: </label>
      <strong class="exchange__base__value" v-if="!showBaseFrom" @click="showBaseFrom = true">
        {{ base }}
      </strong>
      <currencies-autocomplete
          v-if="showBaseFrom"
          @close="close"
          @choose="c => base = c"
      />
    </div>
    <ul class="exchange__rates">
      <li
          class="exchange__rates__rate"
          title="double click to delete"
          v-for="rate in rates"
          :key="rate.code"
          @dblclick="currencies.delete(rate.code)"
      >
        <h4 class="exchange__rates__rate__code">{{ rate.code }}</h4>
        <div class="exchange__rates__rate__name">{{ rate.name }}</div>
        <div class="exchange__rates__rate__value">{{ Number(rate.rate).toFixed(2) }}</div>
      </li>
      <li class="exchange__rates__add-rate" @click="showAddCurrencyForm = true">
        <img src="src/assets/plus.svg" width="15" v-if="!showAddCurrencyForm" />
        <currencies-autocomplete
            v-if="showAddCurrencyForm"
            @close="close"
            @choose="c => currencies.add(c)"
        />
      </li>
    </ul>
  </div>
</template>

<style>
.exchange__header {
  margin-top: 2rem;
  text-align: center;
  font-weight: normal;
  font-style: italic;
}

.exchange__base {
  padding: 0.5rem 1rem;
}

.exchange__base__label {
  padding: 0 1rem;
  font-size: 1.3rem;
  color: var(--secondary-font);
}

.exchange__base__value {
  font-size: 1.5rem;
  cursor: pointer;
}

.exchange__rates {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(5rem, max-content);
  gap: 1rem;
  padding: 1rem 2rem;
}

.exchange__rates__rate {
  border-radius: 1rem;
  text-align: center;
  user-select: none;
  background-color: var(--secondary-color);
}

.exchange__rates__add-rate {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
}

.exchange__rates__add-rate:hover {
  background-color: var(--secondary-color);
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
