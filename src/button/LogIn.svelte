<script>
    let user = { loggedIn: false }

    function toggle () {
        user.loggedIn = !user.loggedIn;
    }

</script>

{#if user.loggedIn}
  <button class="log-in" on:click={toggle}>
    Log Out
  </button>
{/if}

{#if !user.loggedIn}
  <button class="log-out" on:click={toggle}>
    Log In
  </button>
{/if}

<style>
    button {
        width:            200px;
        border-radius:    4px;
        background-color: #72c2db;
        color:            white
    }
</style>