<script>
  import { navy, red } from "../utils"

  export let hex = undefined
  export let icon = undefined
  export let size = undefined
  export let title = undefined

  // NOTE:  we need to identify the components that have a selected property...
  const selectableList = ["Check", "Puzzle", "Radio", "Radio2"]

  let color = hex
  let selected = false

  const handleClick = () => {
    selected = !selected
    color = selected ? red : hex ? hex : navy
  }
</script>

<style>
  .ikon {
    display: flex;
    margin: 5px;
  }
</style>

<div class="ikon" on:click={handleClick} width={size} height={size} {title}>
  {#if selectableList.includes(title)}
    <svelte:component this={icon} hex={color} {size} {selected} />
  {:else}
    <svelte:component this={icon} hex={color} {size} />
  {/if}
</div>
