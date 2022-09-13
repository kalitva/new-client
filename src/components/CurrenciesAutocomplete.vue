<script setup>
import { ref, onMounted } from 'vue'
import rateExchangeService from '../services/rateExchangeService'

let currencyList = []
let filteredCurrencies = ref([])
const input = ref()

onMounted(() => {
  input.value.focus()
  rateExchangeService.list()
    .then(cs => currencyList = Object.freeze(cs))
})

function filterCurrencies() {
  filteredCurrencies.value = currencyList.filter(c => {
    const query = input.value.value.toLowerCase()
    return c.code.toLowerCase().includes(query) || c.name.toLowerCase().includes(query)
  })
}
</script>

<template>
  <div class="autocomplete">
    <input
        class="autocomplete__input"
        ref="input"
        @input="filterCurrencies"
        @blur="$emit('close')"
        @keydown.escape="$emit('close')"
    />
    <ul class="autocomplete__list">
      <li
          class="autocomplete__list__item"
          v-for="currency in filteredCurrencies"
          :key="currency.code"
          @click="$emit('setCurrency', currency.code)"
      >
        <strong class="autocomplete__list__item__code">{{ currency.code }}</strong>
        <span class="autocomplete__list__item__name">{{ currency.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
.autocomplete {
  display: inline-block;
}

.autocomplete__input {
  border: none;
  outline: none;
  border-bottom: 1px solid var(--primary-font);
  width: 5rem;
  font-family: inherit;
  font-size: 1.5rem;
}

.autocomplete__list {
  position: absolute;
  background-color: white;
}

.autocomplete__list__item {
  display: flex;
  justify-content: space-between;
  column-gap: 3rem;
  min-width: 15rem;
  padding: 0.2rem 1rem;
  cursor: pointer;
}

.autocomplete__list__item:hover {
  background-color: var(--secondary-color);
}

.autocomplete__list__item__code {
  font-size: 1.2rem;
}

.autocomplete__list__item__name {
  color: var(--secondary-font);
}
</style>
