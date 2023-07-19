<script>
  import Toggle from './Toggle.svelte';
  import { navy } from '../utils';

  export let size = undefined;

  // NOTE:  this is loaded on the toplevel page... [ see index.html ]
  const Keys = window.protoIkons.icons.filter(key => key !== 'slug');
</script>

<div class="proofs">
  {#each Keys as key}
    <Toggle hex={navy} {key} {size} />
  {/each}
</div>

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
