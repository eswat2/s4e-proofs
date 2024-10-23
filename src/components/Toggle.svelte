<script>
  let { key, size } = $props();

  let selected = $state(false)
  let color = $state('navy')

  const handleClick = () => {
    selected = !selected;
    color = selected ? 'red' : 'navy';
  };
</script>

<div
  class={`ikon ${color}`}
  onclick={handleClick}
  width={size}
  height={size}
  title={key}
  role="button"
  aria-label="title"
>
  <proto-ikon-loader name={key} {size} {selected}></proto-ikon-loader>
</div>

<style>
  .navy {
    color: var(--clrs-navy);
  }

  .red {
    color: var(--clrs-red);
  }
</style>
