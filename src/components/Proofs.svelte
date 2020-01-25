<script>
  import {
    ChevronDoubleLeft,
    Close,
    Fingerprint,
    Paw,
    Refresh
  } from "s4e-icons"
  import { SimpleRadio, SimpleRadio2 } from "./toggles"
  import { navy } from "../utils"

  export let size = undefined

  const Icons = {
    ChevronDoubleLeft,
    Close,
    Fingerprint,
    Paw,
    Radio: SimpleRadio,
    Radio2: SimpleRadio2,
    Refresh
  }
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
    <div width={size} height={size} title={key}>
      <svelte:component this={Icons[key]} {size} hex={navy} />
    </div>
  {/each}
</div>
