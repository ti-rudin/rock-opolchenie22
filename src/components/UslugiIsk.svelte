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
                СТРАХОВАНИЕ ИПОТЕЧНОГО ДОГОВОРА
            </div>
            <div class="text-xl mt-4">
                В качестве доверенного партнёра «РЕСО-Гарантия» мы оказываем услуги по страхованию
                самого широкого профиля под брендом агентства – автострахование (КАСКО, ОСАГО),
                медицинское страхование, туристическое страхование, страхование имущества,
                страхование жизни и т.д.
            </div>
            <div class="my-5 h-8">
                <Modal>
                    <Content
                        leadmes="Услуги по страхованию"
                        uslurl="isk"
                        knoblabel="ПОЛУЧИТЬ СТРАХОВКУ" />
                </Modal>
            </div>
            <a
                href="strahovanie"
                class="shadow-md my-8 px-4 py-2 text-yellow-100 cursor-pointer
                      bg-yellow-600 hover:bg-yellow-500 rounded text-sm text-center w-48">
                ПОДРОБНЕЕ
            </a>
        </div>
        <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
            <div class="bg-dots">
                <div class="shadow-2xl max-w-md z-10 rounded mt-6 ml-4">
                    <div class="text-2xl p-10">
                        В центре нашего внимания – страхование ипотечного кредитау. Являясь дочерней
                        компанией успешного риелторского агентства «ТИТАН», мы прекрасно разбираемся
                        во всех вопросах, связанных с рынком недвижимости. 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
</div>
