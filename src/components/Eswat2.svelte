<script>
  import { Fingerprint } from "s4e-icons"

  let url = "https://eswat2.github.io"
  let who = "eswat2"
</script>

<style>
  .eswat2 {
    position: absolute;
    top: 32px;
    right: 32px;
    width: 24px;
    height: 24px;
  }
  a {
    fill: var(--clrs-gray);
  }
  a:hover {
    fill: var(--clrs-navy);
  }
</style>

<a href={url} class="eswat2" aria-label={who} title={who}>
  <Fingerprint />
</a>
