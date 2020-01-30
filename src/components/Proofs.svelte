<script>
  import * as Icons from "s4e-ikons"
  import Toggle from "./Toggle.svelte"
  import { navy } from "../utils"

  export let size = undefined

  const Keys = Object.keys(Icons)
</script>

<style>
  .proofs {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 100px;
  }
</style>

<div class="proofs">
  {#each Keys as key}
    <Toggle hex={navy} icon={Icons[key]} {size} title={key} />
  {/each}
</div>
