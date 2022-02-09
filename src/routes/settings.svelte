<script>
    import { stateStore } from '../stores/statebot.js';
    clearInterval($stateStore.timerId);
    clearInterval($stateStore.timerIdlist);
    import Sett from '../components/Sett.svelte';
    import { authStore } from '../stores/auth';



</script>

<style>

</style>

<svelte:head>
    <title>Настройки</title>
</svelte:head>


    <Sett/>

