<script>
  export let key = undefined;
  export let size = undefined;

  let selected = false;

  const handleClick = () => {
    selected = !selected;
  };
</script>

<div
  class="ikon"
  on:click={handleClick}
  width={size}
  height={size}
  title={key}
  role="button"
  aria-label="title"
  {selected}
>
  <proto-ikon-loader name={key} {size} {selected}></proto-ikon-loader>
</div>

<style>
  .ikon {
    color: var(--clrs-navy);
  }

  .ikon[selected='true'] {
    color: var(--clrs-red);
  }
</style>
