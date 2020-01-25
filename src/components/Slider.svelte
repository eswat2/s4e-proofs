<script>
  export let min = 0
  export let max = 100
  export let step = 1
  export let value = 0
  export let width = 100
  export let tag = ""
</script>

<style>
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;
  }
  input {
    margin: 0px;
    margin-left: 70px;
  }
  .value {
    margin-left: 10px;
    text-align: left;
    width: 60px;
  }
</style>

<div class="row">
  <input
    type="range"
    {min}
    {max}
    {step}
    {value}
    bind:value
    style={`width: ${width}px;`} />
  <span class="value">{value}{tag}</span>
</div>
