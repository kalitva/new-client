<template>
  <div class="logo">
    <!--
    <div class="corner blue-corner"></div>
    -->
    <div class="corner red-corner"></div>
    <div class="corner yellow-corner"></div>
    <!--
    <div class="corner green-corner"></div>
    -->
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  flex-wrap: wrap;
  width: 14px;
  gap: 1.2px;
  padding: 0 1rem;
}

.corner {
  width: 13px;
  height: 13px;
}
/*
.blue-corner {
  border-top-left-radius: 100%;
  background: blue;
}
 */

.red-corner {
  border-top-right-radius: 100%;
  background: red;
}

.yellow-corner {
  border-bottom-left-radius: 100%;
  background: yellow;
}

/*
.green-corner {
  border-bottom-right-radius: 100%;
  background: green;
}
 */
</style>
