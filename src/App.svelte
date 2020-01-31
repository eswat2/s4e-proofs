<script>
  import { Eswat2, Proofs, Slider } from "./components"

  let min = 24
  let max = 480
  let step = 4
  let value = 24
  let width = 200
  let tag = "px"
</script>

<style>
  :root {
    --clrs-navy: #001f3f;
    --clrs-blue: #0074d9;
    --clrs-aqua: #7fdbff;
    --clrs-teal: #39cccc;
    --clrs-olive: #3d9970;
    --clrs-green: #2ecc40;
    --clrs-lime: #01ff70;
    --clrs-yellow: #ffdc00;
    --clrs-orange: #ff851b;
    --clrs-red: #ff4136;
    --clrs-maroon: #85144b;
    --clrs-fuchsia: #f012be;
    --clrs-purple: #b10dc9;
    --clrs-black: #111111;
    --clrs-gray: #aaaaaa;
    --clrs-silver: #dddddd;

    --clrs-bada55: #bada55;
    --clrs-slate: #708090;
    --clrs-slate4: #4e5964;
    --clrs-white: #ffffff;
  }
  main {
    color: var(--clrs-navy);
    font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: var(--clrs-red);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<main>
  <Eswat2 />
  <h1>Ikon Proofs</h1>
  <Slider {min} {max} {step} bind:value {width} {tag} />
  <Proofs size={value} />
</main>
