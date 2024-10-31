<script>
  let { key, size } = $props();

  let selected = $state(false)
  let color = $derived(selected ? 'red' : 'navy')

  const handleClick = () => {
    selected = !selected;
  };
</script>

<div
  class={`ikon ${color}`}
  onclick={handleClick}
  onkeypress={e => e.key === 'Enter' && handleClick()}
  width={size}
  height={size}
  title={key}
  role="button"
  tabindex="0"
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
