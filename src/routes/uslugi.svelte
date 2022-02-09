<script>
    import UslugiKonsult from '../components/UslugiKonsult.svelte';
    import UslugiIsk from '../components/UslugiIsk.svelte';
    import UslugiSbor from '../components/UslugiSbor.svelte';
    import UslugiPretenz from '../components/UslugiPretenz.svelte';
    import UslugiVozrazhenie from '../components/UslugiVozrazhenie.svelte';
    import UslugiHodataistvo from '../components/UslugiHodataistvo.svelte';
    import UslugiOtmena from '../components/UslugiOtmena.svelte';
    import UslugiPredstavitelstvo from '../components/UslugiPredstavitelstvo.svelte';
    import UslugiRegisterooo from '../components/UslugiRegisterooo.svelte';
    import UslugiPravanalis from '../components/UslugiPravanalis.svelte';
</script>

<style>
</style>

<svelte:head>
    <title>Услуги</title>
</svelte:head>

<section class="body-font">
    <div class="container px-5 mx-auto section-p flex flex-col">
        <UslugiKonsult />
        <hr />
        <UslugiIsk />
        <hr />
        <UslugiSbor />
        <hr />
        <UslugiPretenz />
        <hr />
        <UslugiVozrazhenie />
        <hr />
        <UslugiHodataistvo />
        <hr />
        <UslugiOtmena />
        <hr />
        <UslugiPredstavitelstvo />
        <hr />
        <UslugiPravanalis />
        <hr />
        <UslugiRegisterooo />
    </div>
</section>
