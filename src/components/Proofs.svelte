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

  const size = 48

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
    width: 100%;
    padding-bottom: 100px;
  }
  .icon {
    width: 48px;
    height: 48px;
  }
</style>

<div class="proofs">
  {#each Keys as key}
    <div class="icon" title={key}>
      <svelte:component this={Icons[key]} {size} />
    </div>
  {/each}
</div>
