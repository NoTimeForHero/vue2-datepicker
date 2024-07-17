<template>
  <div class="box">
    <section>
      <p>date range</p>
      <date-picker
        v-model="value1"
        class="simple"
        type="date"
        range
        inline
        placeholder="Select date range"
      >
      </date-picker>
    </section>
    <section>
      <p>datetime range</p>
      <date-picker
        v-model="value2"
        type="datetime"
        :range="true"
        :inline="true"
        placeholder="Select datetime range"
      ></date-picker>
    </section>
  </div>
</template>

<style>
.simple {
  .mx-calendar:last-child {
    display: none;
  }
}
</style>

<script>
export default {
  name: 'Range',
  data() {
    return {
      value1: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
      value2: [],
    };
  },
};
</script>
