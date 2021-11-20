<script>
  import { navy, red } from "../utils"

  export let hex = undefined
  export let key = undefined
  export let size = undefined

  let color = hex
  let selected = false

  const handleClick = () => {
    selected = !selected
    color = selected ? red : hex ? hex : navy
  }
</script>

<div
  on:click={handleClick}
  width={size}
  height={size}
  title={key}
  role="button"
  aria-label="title"
>
  <proto-ikon-loader hex={color} name={key} {size} {selected} />
</div>
