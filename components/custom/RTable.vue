<template>
  <div :class="['table-container overflow-x-scroll-bar', { bordered, transparent }]">
    <table class="r-table table">
      <thead>
        <tr>
          <th v-if="selectable"></th>
          <slot name="head"></slot>
        </tr>
      </thead>
      <tbody>
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  selectable?: boolean;
  bordered?: boolean;
  transparent?: boolean;
}>();
provide("selectable", () => props.selectable);
</script>

<style lang="scss">
.table-container {
  overflow-x: auto;
  &.bordered {
    border: 1px solid color(border-color, var(--r-border-alpha));
    border-radius: var(--r-radius);
    tr {
      &:not(:last-child) td {
        border-bottom: 1px solid color(border-color, var(--r-border-alpha));
      }
    }
    .table thead tr th {
      border-radius: 0;
    }
  }
  &.transparent tr:not(thead tr) {
    background: transparent;
  }
}
.table {
  width: 100%;
  min-width: 600px;
  border-spacing: 0;
  .sticky {
    position: sticky;
    left: 0;
    background: inherit;
    z-index: 2;
    border-right: 1px solid color(border-color, var(--r-border-alpha));
    @media only screen and (max-width: 600px) {
      max-width: 140px;
    }
  }
  tr {
    background: color(b2);
  }
  thead {
    tr {
      overflow: hidden;
      background: color(b1);
      font-size: var(--r-font-small);
      th {
        text-align: start;
        &:first-child {
          border-radius: var(--r-radius) 0 0 var(--r-radius);
        }
        &:last-child {
          border-radius: 0 var(--r-radius) var(--r-radius) 0;
        }
      }
    }
  }
  td,
  th {
    word-wrap: break-word;
    background: inherit;
    padding: space(2);
  }
  th {
    font-weight: 500;
    text-transform: uppercase;
    opacity: 0.86;
  }
  td {
    transition: all var(--r-duration);
  }

  .tr {
    display: table-row;
  }
  .table-item-selected {
    td {
      background: color(hover, var(--r-hover-alpha));
    }
  }
}
</style>
