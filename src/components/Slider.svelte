<script>
  import { onMount } from "svelte"
  import RangeTouch from "rangetouch"

  export let min = 0
  export let max = 100
  export let step = 1
  export let value = 0
  export let width = 100
  export let tag = ""

  let range = undefined

  onMount(() => {
    range = new RangeTouch('input[type="range"]', { thumbWidth: 20 })
  })
</script>

<style>
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;
  }
  .value {
    margin-left: 10px;
    text-align: left;
    width: 60px;
  }

  input[type="range"] {
    height: 38px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    background: var(--clrs-teal);
    border-radius: 0px;
    border: 1px solid var(--clrs-navy);
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    border: 1px solid var(--clrs-navy);
    height: 30px;
    width: 15px;
    border-radius: 5px;
    background: var(--clrs-white);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -11px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: var(--clrs-blue);
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    background: var(--clrs-teal);
    border-radius: 0px;
    border: 1px solid var(--clrs-navy);
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    border: 1px solid var(--clrs-navy);
    height: 30px;
    width: 15px;
    border-radius: 5px;
    background: var(--clrs-white);
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: var(--clrs-teal);
    border: 1px solid var(--clrs-navy);
    border-radius: 0px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  }
  input[type="range"]::-ms-fill-upper {
    background: var(--clrs-teal);
    border: 1px solid var(--clrs-black);
    border-radius: 0px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  }
  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    border: 1px solid var(--clrs-navy);
    height: 30px;
    width: 15px;
    border-radius: 5px;
    background: var(--clrs-white);
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: var(--clrs-teal);
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: var(--clrs-teal);
  }

  input[type="range"] {
    margin: 0px;
    border: none;
  }
  label {
    width: 60px;
    margin-right: 10px;
    text-align: right;
  }
</style>

<div class="row">
  <label for="size">Size:</label>
  <input
    id="size"
    type="range"
    {min}
    {max}
    {step}
    bind:value
    style={`width: ${width}px;`} />
  <span class="value">{value}{tag}</span>
</div>
