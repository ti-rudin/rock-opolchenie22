<script>
    import { stateStore } from '../stores/statebot.js';
    import Content from '../components/Content.svelte';
    import Modal from '../components/Modal.svelte';
    import Button from 'smelte/src/components/Button';
</script>
 
<style>
</style>

<svelte:head>
    <title>Контакты</title>
</svelte:head>

<section class="body-font">
    <div class="container px-5 py-8 max-w-6xl mx-auto">
        <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2 px-8">
                <div class="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                    <p class="mb-4 text-xl font-heading">
                        Наш офис расположен в торговом центре ТИТАН.
                        <br /><br />
                        Вы можете связаться с нами, позвонив по телефону, воспользоваться уcлугой
                        обратного звонка или начав чат.<br /><br />
                        Нажмите кнопку «Обратный звонок» и введите номер телефона — мы перезвоним в
                        течение 5 минут!<br /><br />
                        Нажмите кнопку «Начать чат» и дождитесь ответа оператора. В рабочее время мы всегда on-line!
                    </p>
                    <br />
                    <div class="flex">
                        <div>
                            <Modal>
                                <Content
                                    leadmes="Заказ обратного звонка"
                                    knoblabel="ОБРАТНЫЙ ЗВОНОК" />
                            </Modal>
                        </div>
                        <div class="p-2" on:ckick = {ym(71091643,'reachGoal','startchat')}>
                            <Button
                                href="https://antitan.bitrix24.ru/online/chat"
                                target="blank">
                                НАЧАТЬ ЧАТ
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 px-8">
                <div class="flex w-auto">
                    <div class="ml-4 px-4 w-16">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#2196F3"
                            width="30px"><path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    </div>
                    <div class="px-4">
                        <h3 class="text-xl font-semibold">Тверь, пр-т Победы, д. 3, офис 501</h3>
                    </div>
                </div>
                <br />
                <a href="tel:+74822395400" class="flex w-auto">
                    <div class="px-4">
                        <div class="px-4 w-16">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#2196F3"
                                width="30px"><path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                        </div>
                    </div>
                    <div class="px-0">
                        <h3 class="text-xl font-semibold">+7 (4822) 395-400</h3>
                    </div>
                </a>
                <br />
                <div class="flex w-auto">
                    <div class="ml-4 px-4 w-16">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#2196F3"
                            width="30px"><path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                    </div>
                    <div class="px-4">
                        <h3 class="text-xl font-semibold">с 10:00 до 18:00 - пн—пт</h3>
                    </div>
                </div>
                <br />
                <div class="flex w-auto">
                   
                    <div class="px-4">
                        <h3 class="text-xl pl-20">ООО "ТИТАН ЮрЦентр"</h3>
                        <h3 class="text-xl pl-20">ОГРН 1206900015354</h3>
                        <h3 class="text-xl pl-20">ИНН 6950246349</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container px-5 py-4 mx-auto">
        <script
            type="text/javascript"
            charset="utf-8"
            async
            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2b212566d223c595fd53960117e2a056a994125f141f755e9e9453f85cb9adb9&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true;apikey=9637e5a7-7074-48b9-a81a-6cffc26089ca">
        </script>
    </div>
</section>
