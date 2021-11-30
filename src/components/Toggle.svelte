<script>
  export let key = undefined
  export let size = undefined

  let selected = false

  const handleClick = () => {
    selected = !selected
  }
</script>

<div
  on:click={handleClick}
  width={size}
  height={size}
  title={key}
  role="button"
  aria-label="title"
  {selected}
>
  <proto-ikon-loader name={key} {size} {selected} />
</div>

<style>
  div {
    color: var(--clrs-navy);
  }
  div[selected="true"] {
    color: var(--clrs-red);
  }
</style>
