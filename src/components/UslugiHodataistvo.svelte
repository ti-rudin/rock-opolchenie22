<script>
    import Button from 'smelte/src/components/Button';
    import { onMount } from 'svelte';
    import Content from './Content.svelte';
    import Modal from './Modal.svelte';
</script>

<style>
    .bg-dots {
        background-image: url(https://dev.urtitan.ru/bg-dots.svg);
        background-repeat: no-repeat;
    }
</style>

<div class="m-auto max-w-6xl p-8">
    <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 max-w-6xl flex flex-col justify-center">
            <div class="md:text-4xl text-2xl uppercase font-black">
                ПРОВЕРКА ЮРИДИЧЕСКОЙ ИСТОРИИ (ЧИСТОТЫ) ОБЪЕКТА
            </div>
            <div class="text-xl mt-4">
                Нередки случаи, когда после долгожданного приобретения дома новый собственник
                сталкивается с неожиданными обстоятельствами, которые приводят к штрафам, аресту
                имущества и другим неприятным последствиям.
            </div>
            <div class="my-5 h-8">
                <Modal>
                    <Content leadmes="Проверка юридической чистоты объекта" uslurl="hodataistvo" knoblabel="ПРОВЕРИТЬ ОБЪЕКТ"/>
                </Modal>
            </div>
            <a
                href="proverka"
                class="shadow-md my-8 px-4 py-2 text-yellow-100 cursor-pointer
                      bg-yellow-600 hover:bg-yellow-500 rounded text-sm text-center w-48">
                ПОДРОБНЕЕ
            </a>
        </div>
        <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
            <div class="bg-dots">
                <div class="shadow-2xl max-w-md z-10 rounded mt-6 ml-4">
                    <div class="text-2xl p-10">
                        Проверка юридической чистоты объекта – это гарантия того, что сделка по
                        покупке вами квартиры, участка или иной недвижимости не будет аннулирована.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
</div>
