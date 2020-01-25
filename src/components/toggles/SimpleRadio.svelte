<script>
  import { Radio } from "s4e-icons"
  import { navy, red } from "../../utils"

  export let hex = undefined
  export let size = undefined

  let color = hex
  let selected = false

  const handleClick = () => {
    selected = !selected
    color = selected ? red : hex ? hex : navy
  }
</script>

<div on:click={handleClick}>
  <Radio hex={color} {size} {selected} />
</div>
