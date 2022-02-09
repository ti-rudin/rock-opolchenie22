<script>
    import Button from 'smelte/src/components/Button';
    import { onMount } from 'svelte';
    import Content from '../components/Content.svelte';
    import Modal from '../components/Modal.svelte';

    import List from 'smelte/src/components/List';
    import TextField from 'smelte/src/components/TextField';

    let lead_id, gname, gemail, tel;
    onMount(async () => {
        lead_id = await localStorage.getItem('lead_id');
        tel = await localStorage.getItem('tel');
        gname = await localStorage.getItem('gname');
        gemail = await localStorage.getItem('gemail');
    });

    const listOneLine = [
        {
            text: 'Названивают банки и коллекторы',
            icon: 'arrow_right_alt',
        },
        {
            text: 'Кредиторы идут в суд взыскивать долги',
            icon: 'arrow_right_alt',
        },
        {
            text: 'Зарплату и/или пенсию удерживают приставы',
            icon: 'arrow_right_alt',
        },
        {
            text: 'Запрет на выезд за границу',
            icon: 'arrow_right_alt',
        },
        {
            text: 'Приставы грозят конфискацией имущества',
            icon: 'arrow_right_alt',
        },
        {
            text: 'Должника ищут по соседям, родне, друзьям',
            icon: 'arrow_right_alt',
        },
    ];

    const listOneLine2 = [
        {
            text: 'По договорам кредита, займа',
            icon: 'horizontal_rule',
        },
        {
            text: 'По микрозаймам',
            icon: 'horizontal_rule',
        },
        {
            text: 'По налогам',
            icon: 'horizontal_rule',
        },
        {
            text: 'По исполнительному производству',
            icon: 'horizontal_rule',
        },
        {
            text: 'По распискам',
            icon: 'horizontal_rule',
        },
        {
            text: 'По решению суда',
            icon: 'horizontal_rule',
        },
        {
            text: 'За ЖКХ, коммунальные услуги',
            icon: 'horizontal_rule',
        },
        {
            text: 'Всевозможные пени, штрафы',
            icon: 'horizontal_rule',
        },
    ];

    const listOneLine3 = [
        {
            text:
                'Общая консультация клиента по всем его интересующим вопросам, обсуждение потенциальных проблемных участков будущей сделки',
            icon: 'done',
        },
        {
            text:
                'Составление списка рекомендаций и советов по организации операции покупки или продажи конкретного объекта недвижимости',
            icon: 'done',
        },
        {
            text:
                'Подбор вариантов подходящих объектов недвижимости в соответствии с запросами клиента',
            icon: 'done',
        },
        {
            text:
                'Профессиональная юридическая оценка объектов, организация презентаций и осмотров',
            icon: 'done',
        },
        {
            text:
                'Непосредственное участие в переговорах по сделке, обсуждение её условий и вопросов цены',
            icon: 'done',
        },
        {
            text: 'Создание благоприятных условий для проведения сделки и её организация',
            icon: 'done',
        },
        {
            text:
                'Помощь в оформлении всех необходимых для операции документов и направление их в соответствующие инстанции',
            icon: 'done',
        },
        {
            text:
                'Подготовка документации для его нотариального заверения (если подобное требуется, а сделка нотариальная)',
            icon: 'done',
        },
        {
            text:
                'Полная юридическая проверка недвижимости, включая анализ правоустанавливающей документации',
            icon: 'done',
        },
        {
            text:
                'Организация денежных переводов и всех расчётов по сделке, контроль за точным выполнением транзакций',
            icon: 'done',
        },
        {
            text: 'Разработка плана по осуществлению налогового вычета',
            icon: 'done',
        },
    ];

    const listOneLine4 = [
        {
            text: 'Никакого психологического давления',
            icon: 'navigate_next',
        },
        {
            text: 'Никаких побегов от судебных приставов и коллекторов',
            icon: 'navigate_next',
        },
        {
            text: 'Не надо искать средства по друзьям и знакомым',
            icon: 'navigate_next',
        },
        {
            text: 'Не нужно прятать и продавать имущество',
            icon: 'navigate_next',
        },
    ];

    const listOneLine5 = [
        {
            text: 'Списываем долги на 100 % законно, в официальном порядке.',
            icon: 'filter_1',
        },
        {
            text: 'Действуем строго в рамках закона ФЗ № 127 «О несостоятельности (банкротстве)».',
            icon: 'filter_2',
        },
        {
            text: 'Разбираемся индивидуально в каждой ситуации.',
            icon: 'filter_3',
        },
        {
            text: 'Прописываем в договоре все условия, обязательства, гарантии.',
            icon: 'filter_4',
        },
        {
            text: 'Предоставляем исчерпывающую информацию об особенностях процедуры банкротства.',
            icon: 'filter_5',
        },
        {
            text: 'Подробно рассказываем про возможные риски и последствия процедуры.',
            icon: 'filter_6',
        },
        {
            text: 'Используем минимальный пакет документов (согласно законодательству).',
            icon: 'filter_7',
        },
    ];
    const listOneLine6 = [
        {
            text: 'Сбор и подача документов в суд.',
            icon: 'filter_1',
        },
        {
            text: 'Рассмотрение дела в суде.',
            icon: 'filter_2',
        },
        {
            text: 'Получение определения суда о списании долгов.',
            icon: 'filter_3',
        },
    ];
</script>

<style>
</style>

<svelte:head>
    <title>СОПРОВОЖДЕНИЕ СДЕЛКИ КУПЛИ-ПРОДАЖИ</title>
</svelte:head>

<section class="body-font">
    <div class="container px-12 pt-4 mx-auto section-p flex flex-col-reverse sm:flex-row relative">
        <div class="sm:w-5/12">
            <svg
                class="w-full"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 280.34 335.07">
                <defs>
                    <linearGradient
                        id="linear-gradient"
                        x1="111.49"
                        y1="261.12"
                        x2="145.91"
                        y2="370.59"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#2a2839" />
                        <stop offset="1" stop-color="#38435d" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-2"
                        x1="89.14"
                        y1="228.36"
                        x2="83.5"
                        y2="359.38"
                        xlink:href="#linear-gradient" />
                    <linearGradient
                        id="linear-gradient-3"
                        x1="126.34"
                        y1="149.56"
                        x2="155.41"
                        y2="149.56"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#746aa6" />
                        <stop offset="0.31" stop-color="#5d5298" />
                        <stop offset="0.75" stop-color="#423687" />
                        <stop offset="1" stop-color="#382b81" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-4"
                        x1="164.01"
                        y1="151.48"
                        x2="147.49"
                        y2="173.66"
                        xlink:href="#linear-gradient-3" />
                    <linearGradient
                        id="linear-gradient-5"
                        x1="86.84"
                        y1="99.43"
                        x2="102.91"
                        y2="103.45"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#fff" stop-opacity="0" />
                        <stop offset="1" stop-color="#d1b6cb" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-6"
                        x1="127.49"
                        y1="111.21"
                        x2="137.67"
                        y2="159.59"
                        xlink:href="#linear-gradient-3" />
                    <linearGradient
                        id="linear-gradient-7"
                        x1="92.58"
                        y1="96.08"
                        x2="92.58"
                        y2="232.64"
                        xlink:href="#linear-gradient-3" />
                    <linearGradient
                        id="linear-gradient-8"
                        x1="110.75"
                        y1="212.47"
                        x2="110.75"
                        y2="115.93"
                        xlink:href="#linear-gradient" />
                    <linearGradient
                        id="linear-gradient-9"
                        x1="1046.73"
                        y1="383.6"
                        x2="1112"
                        y2="382.91"
                        gradientTransform="matrix(-0.72, -0.23, -0.4, 0.83, 1082.07, 67.22)"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#eef2fa" />
                        <stop offset="0.27" stop-color="#e5ecf6" />
                        <stop offset="1" stop-color="#d1ddee" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-10"
                        x1="102.62"
                        y1="116.25"
                        x2="102.62"
                        y2="105.35"
                        xlink:href="#linear-gradient" />
                    <linearGradient
                        id="linear-gradient-11"
                        x1="91"
                        y1="95.76"
                        x2="91"
                        y2="112.53"
                        xlink:href="#linear-gradient-3" />
                    <linearGradient
                        id="linear-gradient-12"
                        x1="110.58"
                        y1="95.76"
                        x2="110.58"
                        y2="112.53"
                        xlink:href="#linear-gradient-3" />
                    <linearGradient
                        id="linear-gradient-13"
                        x1="76.12"
                        y1="131.17"
                        x2="62.87"
                        y2="198.72"
                        xlink:href="#linear-gradient-3" />
                </defs>
                <title>men</title>
                <g style="isolation:isolate">
                    <g id="Capa_1" data-name="Capa 1">
                        <polygon
                            points="239.69 35.48 238.45 23.87 273.51 11.88 239.69 35.48"
                            style="fill:#9c96c3" />
                        <polygon
                            points="273.51 11.88 248.59 36.8 240.91 27.2 273.51 11.88"
                            style="fill:#dcdcee" />
                        <polygon
                            points="273.51 11.88 238.45 23.87 231.12 14.74 273.51 11.88"
                            style="fill:#dcdcee" />
                        <polygon
                            points="240.91 27.2 239.69 35.48 244.26 31.38 240.91 27.2"
                            style="fill:#8382b3" />
                        <path
                            d="M236.84,30.58l-1.18.78"
                            style="fill:none;stroke:#8382b3;stroke-miterlimit:10;stroke-width:0.992126px" />
                        <path
                            d="M230.71,34.24c-5.58,2.87-11.86,4.8-18,4.07-8.35-1-14.23-6.91-23.38-5.05A23.65,23.65,0,0,0,171.7,50c-1.44,5.56.06,12.1,4.63,15.57C188,74.46,201,60.77,201,43.91c0-21.57-27.83-40-67.68-43.14C85.52-3,22.61,31.36,1.65,101.73"
                            style="fill:none;stroke:#8382b3;stroke-miterlimit:10;stroke-width:0.992126px;stroke-dasharray:2.864720106124878,5.729430198669434" />
                        <path
                            d="M.85,104.49c-.12.45-.25.91-.37,1.37"
                            style="fill:none;stroke:#8382b3;stroke-miterlimit:10;stroke-width:0.992126px" />
                        <path
                            d="M98.83,335.07h34.39c1.34-11.54,2.36-21.14,2.78-26.87,2-26.91.81-62.71,3.41-66.43s-7-24.78-7-24.78l-22.73,5.2L99,259.36s-1,59.37-.41,70.29C98.64,330.67,98.73,332.53,98.83,335.07Z"
                            style="fill:url(#linear-gradient)" />
                        <path
                            d="M95.45,335.07c1.76-9.68,3.35-17.52,4.6-22.06,6.42-23.4,18.85-95.76,18.85-95.76l-55.21,4.94a554.32,554.32,0,0,0-6.14,60,1.83,1.83,0,0,1,.3,2.85l-.43.42c-.13,3.64-.21,7.29-.22,10.94,0,9.06.17,22.95.5,38.7Z"
                            style="fill:url(#linear-gradient-2)" />
                        <path
                            d="M155.37,153.46s.61,6.68-3,10.44-7.6,11.14-7.6,11.14a76.42,76.42,0,0,1-7.36-7.94c-2.58-3.48-10.88-17.68-11-24.92s12.77-18.1,12.77-18.1,7.14,11.7,7.75,18.38S155.37,153.46,155.37,153.46Z"
                            style="fill:url(#linear-gradient-3)" />
                        <path
                            d="M161.15,148.86c-1.21,3.35-1.21,6.83-1.21,11.42s.45,12.53-2.44,14.48-7,5.71-10.49,2.65-5.32-7.94-5.77-12.53,5.16-11.28,7.75-15.32Z"
                            style="fill:#e7bfaa" />
                        <path
                            d="M137.37,167.1s2.74,4.94,9.64,10.31,12.13,2.68,14.14,0,0-22,0-22A13.21,13.21,0,0,1,149,149.56Z"
                            style="fill:url(#linear-gradient-4)" />
                        <polygon
                            points="153.27 156.37 161.15 155.42 161.15 148.86 153.27 149.56
                            153.27 156.37"
                            style="fill:#afbad6" />
                        <path
                            d="M82.48,92.92c-1.25,3.55-13,7.67-13,7.67s35.57,40.73,49.3,40.47-6-38.4-6-38.4-4-2-5.25-5.88,1.37-20.54,1.37-20.54L94.39,67.37S83.73,89.37,82.48,92.92Z"
                            style="fill:#e7bfaa" />
                        <path
                            d="M82.48,92.92c-1.25,3.55-13,7.67-13,7.67s35.57,40.73,49.3,40.47-6-38.4-6-38.4-4-2-5.25-5.88,1.37-20.54,1.37-20.54L94.39,67.37S83.73,89.37,82.48,92.92Z"
                            style="mix-blend-mode:multiply;fill:url(#linear-gradient-5)" />
                        <path
                            d="M126.76,44.9c2.18,2.09,5.78,6.27,5.45,8.66S132,63.35,130,67c-2.68,5-2.37,12.77-4.11,17.31s-10.46,11.43-11.85,12-6.07-.34-8.33-2.1S91.67,77.32,94.39,67.37c0,0-5.2,1-7-8.93-.47-2.59,9.94-9.69,11.58-12.21,4-6.13,18.09-.93,22.15-.52S126.76,44.9,126.76,44.9Z"
                            style="fill:#e7bfaa" />
                        <path
                            d="M131.74,57.51s1.78-6.11-3.43-6.79l-16.26-3.31a54.83,54.83,0,0,1-6.42-2.28s-1.35,6.2-3,7.59-4.92,2.74-5.54,4.71a27,27,0,0,0-.87,4s-2.1-4.19-4.58-4.06-3.28,3.83-1.31,6a40.46,40.46,0,0,0,4,3.93,25.53,25.53,0,0,1-1.63,4.91c-1,2.06-2.89,5.5-2.89,5.5s-2.24-13.91-5.23-20.06-3-23.26,15.06-23c0,0,11.81-9.05,23.5-6.56,10.14,2.16,20.87,10.48,12.11,24.16C132.27,57.05,131.74,57.51,131.74,57.51Z"
                            style="fill:#692e20" />
                        <path
                            d="M112.86,64.71a6.19,6.19,0,0,0,1.87,2.74c1.52,1.36,2.7,1.35,4.52-.42A6.64,6.64,0,0,0,112.86,64.71Z"
                            style="fill:#fff" />
                        <path
                            d="M115.68,65c-.53-.2-.84,1.4-.76,1.75a1.7,1.7,0,0,0,1.62,1.44c1.83.27,2.22-2,2.22-2Z"
                            style="fill:#4c323a" />
                        <path
                            d="M118,66.5c-.79-.06-1.3.75-.83,1.18s1.16.6,1.38-.05S118.76,66.56,118,66.5Z"
                            style="fill:#fff;opacity:0.35000000000000003" />
                        <path
                            d="M111.29,64.79s5.2-.22,8.82,2.8c0,0,.41-.78-.57-1.63a7.55,7.55,0,0,0-3.05-1.39C112.08,63.59,111.29,64.79,111.29,64.79Z"
                            style="fill:#673239" />
                        <path
                            d="M121.64,61.16a3.48,3.48,0,0,0,.87-2.55,17.21,17.21,0,0,0-12.42-.48s-.81.49.47.5S118.94,58.31,121.64,61.16Z"
                            style="fill:#783a40" />
                        <path
                            d="M128.61,69s0,2.37-1.34,2.64c-1.73.37-1.83-1.48-1.78-2.74A3,3,0,0,1,128.61,69Z"
                            style="fill:#fff" />
                        <path
                            d="M128.62,69.36c.41.13-.1,1.31-.3,1.49a1.21,1.21,0,0,1-1.63.13c-1.25-.72-.47-2.39-.47-2.39Z"
                            style="fill:#4c323a" />
                        <path
                            d="M128.58,70c.59.38.54,1.25,0,1.3s-1.12-.2-.95-.79S128,69.62,128.58,70Z"
                            style="fill:#fff;opacity:0.35000000000000003" />
                        <path
                            d="M129.17,69.61c.59,0,.46-.48-.49-.94a6.68,6.68,0,0,0-2.85-.68c-1.13.08-1.23.87-1.23.87a10,10,0,0,1,4.2.81A1.06,1.06,0,0,1,129.17,69.61Z"
                            style="fill:#673239" />
                        <path
                            d="M131.67,63c-2.61-2.78-4.41-3-4.41-3a4.39,4.39,0,0,0-.75,2.33,14.46,14.46,0,0,1,5.15,1.93A1.52,1.52,0,0,0,131.67,63Z"
                            style="fill:#783a40" />
                        <path
                            d="M106.69,62c0,.46.87,1,1,1.19.3.37.11.35.52,4,.31,2.67,2.07,4.38,6.55,4.94,3.42.43,4.25-2.52,5-3.72s1.16-1.3,1.67-1.15.71.4.79,1.87-1,4.57,2.31,5.63c2.28.74,3.12.39,4.23-1.28a22,22,0,0,0,2.24-4.29c.46-1.24.77-2,.24-2.34a10.91,10.91,0,0,0-2.66-1c-2-.59-3.33-1.22-4.67-.94s-1.46.81-2,.65-.45-.71-1.46-1.68-6.32-2.52-8.31-3.11-4.84-1.11-5.13-.34A6.12,6.12,0,0,0,106.69,62Zm17.17,5.1c.53-.93.55-.79,3.07-.19s2.71.82,3,1.44-.09,2.34-1.24,4.26c-.62,1-1.46,2.32-3.48,1.73s-2.14-1.94-2-3.73A11,11,0,0,1,123.86,67.09ZM109.94,62c.54-.38,3.82.73,6.26,1.59s3.26,1.16,3.26,2.24a11.26,11.26,0,0,1-1.17,3.36c-.79,1.59-1.73,2.86-5.64,1.73-2.76-.79-3.64-2.18-3.76-4.77C108.79,63.86,109.39,62.35,109.94,62ZM95.73,60.53s1.31-.81,1.81-.72a1.92,1.92,0,0,1,.63.38l8.56,2.08,2.89-2.12s-7.27-1.85-10.83-2.71c-1.69-.41-4.11,1.77-4.11,1.77A5,5,0,0,1,95.73,60.53Z"
                            style="fill:#302925" />
                        <path
                            d="M122.18,68.18s.74,6.58,2.23,7.93c1.91,1.74,1.12,3.1-.33,3.51s-4.84-.2-4.84-.2a17,17,0,0,1,1.13-5.59A37.19,37.19,0,0,0,122.18,68.18Z"
                            style="fill:#d69587" />
                        <path
                            d="M120.85,82.27a7,7,0,0,1-2.52,3.4,4.06,4.06,0,0,1-2,.65A4.13,4.13,0,0,1,112,83.61a9.84,9.84,0,0,1-.69-3.83,20.74,20.74,0,0,0,5.51,2A14,14,0,0,0,120.85,82.27Z"
                            style="fill:#4c323a" />
                        <path
                            d="M118.33,85.67a4.06,4.06,0,0,1-2,.65A4.13,4.13,0,0,1,112,83.61C112.65,83.26,116.33,86.32,118.33,85.67Z"
                            style="fill:#a95957" />
                        <path
                            d="M126,106.39c7.37,3.63,9.65,8.22,13.3,17.41s7.3,11.28,7.3,11.28-7.76,1.67-16.42,18.8a28.72,28.72,0,0,1-11.4-17.55C116.45,124.64,126,106.39,126,106.39Z"
                            style="fill:url(#linear-gradient-6)" />
                        <path
                            d="M75.87,96.08l-24.45,9.27s-3.94,23.1-3.61,31.7S61.1,231,61.1,231s32.42,3.6,48.72,0,27.55-6.91,27.55-6.91-5.63-83.33-6.91-91.93-4.5-25.81-4.5-25.81l-12.76-6-7.08,5Z"
                            style="fill:url(#linear-gradient-7)" />
                        <path
                            d="M108.92,115.93s8.57,76.75,10.2,85.45l-5.58,11.09s-9.36-6.41-9.9-10-1.26-86.18-1.26-86.18Z"
                            style="fill:url(#linear-gradient-8)" />
                        <path
                            d="M148,135.12c-1.7-.6-9-2.37-11.86-2.3s-11.47-.65-14.88-.16-6.57,5.25-9.48,6.63c-1.54.73-4.59,2.14-8.26,3.79,1.25,3.22,2.42,6.48,3.59,9.74a17.55,17.55,0,0,1,4.63-2.52c4.94-1.38,4.8-2.67,7.47-2.54a12.94,12.94,0,0,0,4.65-.23c2.41-.4,4.07-3.9,5.79-5s4.24-2.24,3.94-3.15-.42-2-6.19-.75c0,0,5.49-2,7.93-2s7.6.63,10,.6S149.64,135.71,148,135.12Z"
                            style="fill:#e7bfaa" />
                        <polygon
                            points="102.08 143.4 108.98 140.01 115.27 153.95 108.54 158.84
                            102.08 143.4"
                            style="fill:#afbad6" />
                        <path
                            d="M123.76,159.9l19.84,4.6a5.29,5.29,0,0,0,5.52-2.75l22-43.63c1-2,.2-3.92-1.82-4.4L149.68,109c-3.62-.12-5.48.71-6.51,2.72l-22.08,43.31C120.05,157.08,120.33,158.44,123.76,159.9Z"
                            style="fill:#969ec2" />
                        <path
                            d="M124.87,160.25l19.94,4.63a5.32,5.32,0,0,0,5.55-2.75l22.13-43.82c1-2,.19-3.94-1.84-4.41l-19.77-4.7a5.43,5.43,0,0,0-5.74,2.76l-22.26,43.71A3,3,0,0,0,124.87,160.25Z"
                            style="fill:url(#linear-gradient-9)" />
                        <path
                            d="M157,152.5c2-.51,4.66-.71,5.33-1.93s1.66-1.53,2.77-2.44.44-1.83,1.77-2.95,0-3.05.11-4.06a14.78,14.78,0,0,0-.22-4.88c-.44-1.83-2.22-2.23-4.55-2.94s-4-.72-4,.4,2.44,2.64,2.44,2.64-4-1.22-5.1-1.62-2.89.51-2.11,1.83,4,3,5,3.55a4.18,4.18,0,0,1,1.56,1.53,17,17,0,0,1-5.11-.82c-2.1-.81-4-2.64-5.43-1.83s-.67,1.83.77,3c0,0,3.11,1.93,4.11,2.34a15.72,15.72,0,0,1-4.66-.51c-1.55-.61-2.33.1-1.89,1.22s4.77,2,4.88,2.44-.77,1.42-1.33,2.64S157,152.5,157,152.5Z"
                            style="fill:#e7bfaa" />
                        <polygon
                            points="112.65 107.07 108.92 115.93 102.38 116.25 92.58 105.75
                            106.89 105.34 112.65 107.07"
                            style="fill:url(#linear-gradient-10)" />
                        <polygon
                            points="78.83 91.79 106.12 105.34 95.07 113.79 75.88 96.08 78.83
                            91.79"
                            style="fill:url(#linear-gradient-11)" />
                        <polygon
                            points="106.12 105.34 115.03 111.93 113.2 100.35 110.3 97.06 106.12
                            105.34"
                            style="fill:url(#linear-gradient-12)" />
                        <path
                            d="M51.42,105.35S43.64,111.23,42,114s-.68,9.3-1.35,16.43,1.92,42.76,5.64,48.65,10.49,7.44,13.88,7.44,48.42-27.7,48.42-27.7l-6.46-15.44L69,155.86s.34-25.1.68-30.68S58.19,106.89,51.42,105.35Z"
                            style="fill:url(#linear-gradient-13)" />
                        <path
                            d="M230.66,117.53v-9l-4.44-1.31a18.59,18.59,0,0,0-1.05-2.52l2.22-4.07-6.4-6.4-4.08,2.21a17.9,17.9,0,0,0-2.51-1l-1.31-4.44H204l-1.31,4.44a18.41,18.41,0,0,0-2.51,1l-4.08-2.21-6.4,6.4,2.22,4.07a18.59,18.59,0,0,0-1,2.52l-4.44,1.31v9l4.44,1.32a18.46,18.46,0,0,0,1,2.51l-2.22,4.07,6.4,6.41,4.08-2.22a18.46,18.46,0,0,0,2.51,1l1.31,4.44h9.06l1.31-4.44a17.94,17.94,0,0,0,2.51-1l4.08,2.22,6.4-6.41-2.22-4.07a18.46,18.46,0,0,0,1.05-2.51ZM218.52,113a10,10,0,1,1-10-10A10,10,0,0,1,218.52,113Z"
                            style="fill:#d5daee" />
                        <path
                            d="M261.86,92.7V87.11l-2.74-.81a12.38,12.38,0,0,0-.65-1.55l1.37-2.51-3.95-3.95-2.51,1.36a10.64,10.64,0,0,0-1.56-.64L251,76.27h-5.58L244.62,79a10.52,10.52,0,0,0-1.55.64l-2.52-1.36-4,3.95L238,84.75a12.38,12.38,0,0,0-.65,1.55l-2.74.81V92.7l2.74.81a12.38,12.38,0,0,0,.65,1.55l-1.37,2.51,4,4,2.52-1.36a10.52,10.52,0,0,0,1.55.64l.81,2.74H251l.81-2.74a10.64,10.64,0,0,0,1.56-.64l2.51,1.36,3.95-4-1.37-2.51a12.38,12.38,0,0,0,.65-1.55Zm-7.5-2.79a6.14,6.14,0,1,1-6.14-6.15A6.14,6.14,0,0,1,254.36,89.91Z"
                            style="fill:#d5daee" />
                        <line
                            x1="194.99"
                            y1="160.1"
                            x2="194.99"
                            y2="172.78"
                            style="fill:none;stroke:#eaf0f2;stroke-miterlimit:10;stroke-width:0.30236199999999996px" />
                        <path
                            d="M201.49,159.22a6.51,6.51,0,1,1-6.5-6.36A6.43,6.43,0,0,1,201.49,159.22Z"
                            style="fill:#807fb4" />
                        <path
                            d="M201.49,181.51a6.51,6.51,0,1,1-6.5-6.36A6.43,6.43,0,0,1,201.49,181.51Z"
                            style="fill:#807fb4" />
                        <polygon
                            points="194.47 161.72 191.47 157.94 194.19 159.05 200.46 153.69
                            194.47 161.72"
                            style="fill:#fff" />
                        <polygon
                            points="194.47 184.26 191.47 180.47 194.19 181.59 200.46 176.23
                            194.47 184.26"
                            style="fill:#fff" />
                        <rect
                            x="205.33"
                            y="161.72"
                            width="75.01"
                            height="6.85"
                            style="fill:#eaf0f2" />
                        <rect
                            x="205.33"
                            y="183.76"
                            width="49.03"
                            height="6.85"
                            style="fill:#eaf0f2" />
                        <rect
                            x="205.33"
                            y="155.01"
                            width="42.89"
                            height="3.51"
                            style="fill:#807fb4" />
                        <rect
                            x="205.33"
                            y="176.85"
                            width="26.57"
                            height="3.51"
                            style="fill:#807fb4" />
                    </g>
                </g>
            </svg>
        </div>
        <div
            class="sm:w-6/12 xl:w-6/12 flex flex-col items-start sm:items-end sm:text-right
            mt-0 sm:mt-0 xl:pt-20 mb-16 sm:mb-0">
            <h2 class="text-4xl lg:text-5xl text-blue-700 leading-none mb-4 font-black ">
                СОПРОВОЖДЕНИЕ СДЕЛКИ КУПЛИ-ПРОДАЖИ
            </h2>
            <p class="text-xl mb-4 sm:mb-12 leading-relaxed text-justify sm:text-right">
                Полное сопровождение сделки купли-продажи – один из наиболее комплексных и выгодных
                пакетов услуг, предлагаемых нашим центром. Если вы продаёте или покупаете квартиру,
                профессиональная помощь юриста и риелтора на всех этапах операции просто необходима.
                Так вы сможете избавиться от самостоятельного решения множественных проблем и
                спокойно заняться подготовкой к переезду.
            </p>

            <Modal>
                <Content leadmes="Сопровождение сделки купли-продажи" knoblabel="ЗАКАЗАТЬ УСЛУГУ" />
            </Modal>
            <!--
            <br />
            <p class="text-lg italic">
                ФЗ № 127: "Все физлица имеют право законно объявить о банкротстве и списать
                кредитные долги."
            </p>
            -->
        </div>
    </div>

    <div class="container px-12 pt-8 mx-auto flex flex-col sm:flex-row">
        <p class="leading-relaxed text-xl mb-4 pttext text-justify max-w-6xl">
            Помощь с оформлением договора купли-продажи, рекомендации и советы о том, как правильно
            проводить переговоры, надёжная и юридически грамотная организация денежных переводов и
            расчётов по транзакции, подготовка всей необходимой документации, мероприятия по оценке
            и поиску объектов – всё это к нам! Полное сопровождение сделки – наиболее оптимальный
            вариант сотрудничества с нами как для продавцов, так и для покупателей недвижимости.
            Заказывать комплексный пакет услуг намного выгоднее, чем приобретать каждый по
            отдельности.
        </p>
    </div>

    <div class="container px-12 mt-8 mx-auto" />
    <!--
    <div class="container px-12 mx-auto">
        <div class="mx-auto mb-12 text-center">
            <h2 class="max-w-4xl mx-auto text-xl md:text-4xl font-bold font-heading">
                Больше 6 432 226 рублей долга списано с нашей помощью
            </h2>
            <p class="max-w-3xl mx-auto leading-relaxed text-xl mb-4 pttext">
                Мы помогаем каждому, кто обращается с просьбой о признании банкротства. Если вы
                потеряли бизнес или работу, взяли неподъемный кредит на лечение или другие
                неотложные нужды, обращайтесь в юридический центр «Титан» — спишем задолженность в
                любом объеме!
            </p>
        </div>
    </div>

    <div class="container px-12 mx-auto">
        <div class="flex flex-wrap -m-4 max-w-4xl mx-auto">
            <div class="p-4 lg:w-1/2">
                <div
                    class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                        alt="team"
                        class="flex-shrink-0 rounded-lg w-48 object-cover object-center sm:mb-0 mb-4"
                        src="12.jpeg" />
                    <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg">СПИСАН ДОЛГ</h2>
                        <h3 class="mb-3 text-xl">594 785 Р</h3>
                        <p class="mb-4 text-lg">
                            Длительность процесса с момента обращения - 54 дня.
                        </p>
                    </div>
                </div>
            </div>
            <div class="p-4 lg:w-1/2">
                <div
                    class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                        alt="team"
                        class="flex-shrink-0 rounded-lg w-48 object-cover object-center sm:mb-0 mb-4"
                        src="12.jpeg" />
                    <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg">СПИСАН ДОЛГ</h2>
                        <h3 class="mb-3 text-xl">1 085 395 Р</h3>
                        <p class="mb-4 text-lg">
                            Длительность процесса с момента обращения - 82 дня.
                        </p>
                    </div>
                </div>
            </div>

            <div class="p-4 lg:w-1/2">
                <div
                    class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                        alt="team"
                        class="flex-shrink-0 rounded-lg w-48 object-cover object-center sm:mb-0 mb-4"
                        src="12.jpeg" />
                    <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg">СПИСАН ДОЛГ</h2>
                        <h3 class="mb-3 text-xl">3 784 644 Р</h3>
                        <p class="mb-4 text-lg">
                            Длительность процесса с момента обращения - 201 день.
                        </p>
                    </div>
                </div>
            </div>

            <div class="p-4 lg:w-1/2">
                <div
                    class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                        alt="team"
                        class="flex-shrink-0 rounded-lg w-48 object-cover object-center sm:mb-0 mb-4"
                        src="12.jpeg" />
                    <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg">СПИСАН ДОЛГ</h2>
                        <h3 class="mb-3 text-xl">967 402 Р</h3>
                        <p class="mb-4 text-lg">
                            Длительность процесса с момента обращения - 165 дней.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container px-12 mx-auto">
        <div class="mx-auto max-w-3xl mb-12 text-center">
            <h2 class="my-3 text-xl md:text-4xl font-bold font-heading">
                3 способа избавиться от долгов
            </h2>
            <p class="leading-relaxed text-xl mb-4 pttext text-left">
                Есть три возможности признать банкротство должника-физлица:
            </p>
            <p class="leading-relaxed text-xl mb-4 pttext text-left">Мировое соглашение</p>
            <p class="leading-relaxed text-lg mb-4 pttext text-left">
                Самый экономичный вариант. Вы заключаете с кредиторами мировое соглашение, по
                условиям которого (при их выполнении) вам прощают долг.
            </p><br />
            <p class="leading-relaxed text-xl mb-4 pttext text-left">Реструктуризация долга</p>
            <p class="leading-relaxed text-lg mb-4 pttext text-left">
                Пересматриваются порядок, условия, сроки выплаты всех имеющихся долгов — банковских
                кредитов, задолженностей по налогам, ЖКХ и пр.
            </p><br />
            <p class="leading-relaxed text-xl mb-4 pttext text-left">Реализация имущества</p>
            <p class="leading-relaxed text-lg mb-4 pttext text-left">
                При нарушении условий мирового соглашения или реструктуризации в счет уплаты долга
                идут средства, вырученные от продажи вашего имущества. Остаток задолженности
                списывается.
            </p>
        </div>
    </div>
-->
    <div class="container px-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-8 text-center">
            <h2 class="my-2 text-xl md:text-4xl font-bold font-heading">
                Какие мероприятия входят в пакет услуг
            </h2>

            <List class="text-xl text-left" items={listOneLine3} />
        </div>
    </div>
    <div class="container px-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-12 text-center">
            <Modal>
                <Content leadmes="Сопровождение сделки купли-продажи" knoblabel="ПОМОЩЬ СПЕЦИАЛИСТА" />
            </Modal>
        </div>
    </div>
    <div class="container px-12 pt-8 mx-auto flex flex-col sm:flex-row">
        <p class="leading-relaxed text-xl mb-4 pttext text-justify max-w-6xl">
            Как видите, перечень услуг, которые включает в себя полное сопровождение сделки очень
            обширен. Мы считаем нашу миссию завершённой, когда покупатель жилья получает свои ключи
            от квартиры или дома, а продавец – всю причитающуюся ему денежную сумму. Если в процессе
            заключения сделки или после её завершения между сторонами возникают какие-либо
            юридические споры, касающиеся купли-продажи объекта, мы, разумеется, моментально
            подключаемся к делу для урегулирования разногласий. 
        </p>
    </div>
    <div class="container px-12 pt-8 mx-auto flex flex-col sm:flex-row">
        <p class="leading-relaxed text-xl mb-4 pttext text-justify max-w-6xl">
           <b> © «ТИТАН ЮРЦЕНТР»:</b> +7 (4822) 395-429,
            mail@urtitan.ru. Юридическая помощь в операциях с недвижимостью (г. Тверь, проспект
            Победы, д. 3, офис 502-а).
        </p>
    </div>
    <!--
<div class="container px-12 mt-8 mx-auto">
    <div class="container px-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-3 text-center">
            <h2 class="my-2 text-xl md:text-4xl font-bold font-heading">
                С вами работают профессионалы
            </h2>
            <p class="leading-relaxed text-xl pttext">
                Предлагаем услуги опытных специалистов, которые входят в положение каждого клиента и
                стараются не просто решить дело в его пользу, но обеспечить психологический комфорт.
            </p>
        </div>
    </div>
    <div class="container px-12 mx-auto ">
        <div class="flex flex-wrap mx-auto justify-center max-w-4xl">
            <div class="w-full md:w-1/2 lg:w-1/2 px-3 mb-6">
                <div class="p-8 shadow rounded">
                    <div class="flex items-center mb-4">
                        <img
                            class="h-16 w-16 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                            alt="" />
                        <div class="pl-4">
                            <p class="text-xl">Юрий Квасов</p>
                            <p class="text-blue-600 text-xl">
                                Партнер ЮрЦентра «Титан»,
                                <br />адвокат
                            </p>
                        </div>
                    </div>
                    <p class="leading-loose text-xl">Опыт работы - более 8 лет.</p>
                </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/2 px-3 mb-6">
                <div class="p-8 shadow rounded">
                    <div class="flex items-center mb-4">
                        <img
                            class="h-16 w-16 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                            alt="" />
                        <div class="pl-4">
                            <p class="text-xl">Анна Викнаева</p>
                            <p class="text-blue-600 text-xl">Старший юрист</p>
                        </div>
                    </div>
                    <p class="leading-loose text-xl">Опыт работы - более 6 лет.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container px-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-3 text-center">
            <h2 class="my-2 text-xl md:text-4xl font-bold font-heading">
                Берем на себя работу с банками
            </h2>
            <p class="leading-relaxed text-xl pttext">
                В рамках процесса мы вместо вас общаемся с кредитными организациями, включая
                крупнейшие банки РФ:
            </p>
        </div>
    </div>

    <div class="container px-8 mx-auto">
        <div class="flex flex-wrap -m-4 max-w-4xl mx-auto">
            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b1.gif" />
            </div>
            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b2.gif" />
            </div>

            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b3.gif" />
            </div>

            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b4.gif" />
            </div>

            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b6.gif" />
            </div>
            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b7.gif" />
            </div>
            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b8.gif" />
            </div>
            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b9.gif" />
            </div>
            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b10.gif" />
            </div>
            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b11.gif" />
            </div>
            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b12.gif" />
            </div>

            <div class="w-1/3 md:w-1/3 lg:w-1/4 p-8">
                <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-32 object-cover object-center sm:mb-0 mb-4"
                    src="b14.gif" />
            </div>
        </div>
    </div>

    <div class="container px-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-3 text-center">
            <h3 class="my-2 text-xl font-bold font-heading">
                А ТАКЖЕ ЕЩЕ С 1163 ФИНАНСОВЫМИ И МИКРОФИНАНСОВЫМИ ОРГАНИЗАЦИЯМИ
            </h3>
        </div>
    </div>

    <div class="container px-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-4 text-center">
            <Modal>
                <Content leadmes="Запрос на процедуру банкротства" knoblabel="ЗАКАЗАТЬ УСЛУГУ" />
            </Modal>
        </div>
    </div>

    <div class="container px-12 pt-4 mx-auto">
        <div class="max-w-3xl mx-auto mb-3 text-left">
            <h2 class="my-2 text-xl md:text-4xl font-bold font-heading">
                Сколько стоит услуга списания долгов?
            </h2>
            <p class="leading-relaxed text-xl pttext">
                Стоимость работы зависит от общей суммы задолженности. В каждом случае стратегия по
                выходу из сложившейся ситуации определяется индивидуально. Однако в любых
                обстоятельствах мы добиваемся того, чтобы дело максимально успешно решилось в вашу
                пользу.
            </p>
        </div>
    </div>

    <div class="container px-12 mx-auto">
        <div class="flex flex-wrap -m-4 max-w-4xl mx-auto text-xl">
            <div class="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 p-8 text-center ">
                <p class="text-xl ">Мини</p>

                <p class="text-lg text-blue-600">Сумма долга</p>
                <p class="text-blue-600">
                    <nobr>до 350 000 р.</nobr>
                </p>

                <p class="leading-loose">
                    Стоимость:
                    <nobr>от 60 000 р.</nobr>
                </p>
                <Modal>
                    <Content
                        leadmes="Запрос на процедуру банкротства - пакет Мини"
                        knoblabel="УЗНАТЬ БОЛЬШЕ" />
                </Modal>
            </div>

            <div class="w-full sm:w-1/3  md:w-1/3 lg:w-1/3 p-8 text-center ">
                <p class="text-xl ">Миди</p>

                <p class="text-lg text-blue-600">Сумма долга</p>
                <p class="text-blue-600">
                    <nobr>350 000 – 1 500 000 р.</nobr>
                </p>

                <p class="leading-loose">
                    Стоимость:
                    <nobr>от 90 000 р.</nobr>
                </p>
                <Modal>
                    <Content
                        leadmes="Запрос на процедуру банкротства - пакет Миди"
                        knoblabel="УЗНАТЬ БОЛЬШЕ" />
                </Modal>
            </div>

            <div class="w-full sm:w-1/3  md:w-1/3 lg:w-1/3 p-8 text-center ">
                <p class="text-xl ">Макси</p>

                <p class="text-lg text-blue-600">Сумма долга</p>
                <p class="text-blue-600">
                    <nobr>более 1 500 000 р.</nobr>
                </p>

                <p class="leading-loose">
                    Стоимость:
                    <nobr>от 110 000 р.</nobr>
                </p>
                <Modal>
                    <Content
                        leadmes="Запрос на процедуру банкротства - пакет Макси"
                        knoblabel="УЗНАТЬ БОЛЬШЕ" />
                </Modal>
            </div>
        </div>
    </div>

    <div class="container px-12 pt-4 mx-auto">
        <div class="max-w-3xl mx-auto mb-3 text-left">
            <h2 class="my-2 text-xl md:text-4xl font-bold font-heading">Отзывы клиентов</h2>
            <p class="leading-relaxed text-xl pttext italic">
                «Большое спасибо сотрудникам «Титана» за хорошую работу! Мы оказались в долгах
                незаметно — муж набрал кредитов на бытовые нужды и решил перекрыть их, взяв большую
                сумму денег в МФО. Мелкие долги покрыли, но по большому кредиту набежали такие
                проценты, что мне стало по-настоящему страшно, когда я увидела в оповещении сумму.
                Мы не смогли бы столько набрать! Стали разбираться, что делать, по ссылке в
                интернете попали сюда. Единственное, что понадобилось от нас с мужем — описать
                ситуацию и предоставить свои документы. Все остальное сделали сотрудники компании.
                На процесс ушло 7 месяцев, пока мужа признали банкротом, кое-что пришлось продать,
                но главное — мы сохранили жилье для дочери! За это невероятно благодарны!»
            </p>
            <p class="leading-relaxed text-xl text-right">— Елена Степановна П.</p>
            <br />
            <p class="leading-relaxed text-xl pttext italic">
                «Попал в долговую яму по глупости, набрав кредитов в микрофинансовых организациях.
                Думал, что быстро отдам, брал один за другим, по мелочи, в итоге донабирался до
                долга, который рос быстрее, чем я зарабатывал в месяц. Пришлось обратиться к
                специалистам за помощью. Очень рад, что это оказался именно «Титан» — здесь работают
                настоящие мастера. Они доходчиво объясняют, что происходит по процессу, когда
                обыватель не понимает из юридических терминов и оборотов ни слова. В итоге я четко
                понял, что и на каком этапе делали юристы, отвязался с их помощью от микрофинансов
                без серьезных потерь и навсегда получил прививку от кредитов. После такого итога
                остается только сказать — искреннее спасибо!»
            </p>
            <p class="leading-relaxed text-xl text-right">— Алексей Ж.</p>
            <br />
            <p class="leading-relaxed text-xl pttext italic">
                «Очень-очень рада что обратилась к Вам. Долго выбирала и сомневалась. Вообще вопрос
                банкротства встал остро в прошлом году, летом 2019. В этой компании
                консультировалась моя хорошая знакомая. Я решила что сначала пойду все узнаю, а
                потом буду решать. И мне очень понравилась и сама консультация, где мне все подробно
                рассказали и объяснили, и то, что никто ничего не навязывал, не уговаривал. И я
                доверилась и решила банкротиться с ними. Дальше помощь во всем: со сбором
                документов, с любыми объяснениями, меня вели буквально за ручку. Я очень
                волновалась, переживала. Меня успокаивали, и снова все объясняли, спокойно и
                терпеливо.Представитель компании присутствовал на всех судебных заседаниях, я нигде
                не была одна, постоянно чувствовалась поддержка. И я очень благодарна за эту
                поддержку, и за такое человеческое отношение ко мне и моим проблемам. Иногда мне
                казалось, что в компании даже больше переживают чтобы у меня все получилось.И вот
                все позади. Я получила определение суда и теперь полностью свободна от долгов. Это
                неописать словами, это состояние свободы я так долго ждала и так долго о нем
                мечтала! И сейчас,оглядываясь назад, я очень рада что решилась на банкротство, и еще
                больше я рада, что мне такповезло сразу с компанией и что там работают такие
                порядочные и приятные люди, которым яочень благодарна за все. Я желаю им счастья, а
                компании роста и процветания. Это так классно,помогать людям.»
            </p>
            <p class="leading-relaxed text-xl text-right">— Ирина Николаевна А.</p>
        </div>
    </div>

    <div class="container px-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-12 text-center">
            <Modal>
                <Content leadmes="Запрос на процедуру банкротства" knoblabel="СТАТЬ КЛИЕНТОМ" />
            </Modal>
        </div>
    </div>

    <div class="container px-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-4">
            <h2 class="my-2 text-3xl font-bold font-heading text-center">
                Семь преимуществ юридического центра «Титан»
            </h2>

            <List class="text-xl text-left" items={listOneLine5} />
        </div>
    </div>

    <div class="container px-12 m-auto">
        <div class=" max-w-3xl mx-auto mb-4 text-center">
            <h2 class="my-2 text-xl md:text-4xl font-bold font-heading">
                Новая жизнь без долгов после прохождения процедуры банкротства!
            </h2>
            <List class="text-xl text-left" items={listOneLine4} />
        </div>
    </div>

    <div class="container px-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-3 text-center">
            <h2 class="my-2 text-xl font-bold font-heading">ОСТАВЬТЕ ЗАЯВКУ</h2>
            <p class="leading-relaxed text-xl pttext">
                И мы решим Вашу проблему профессионально и в минимально возможные сроки .
            </p>
        </div>
    </div>
    <div class="container px-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-12 mt-8 text-center">
            <Modal>
                <Content leadmes="Запрос на процедуру банкротства" knoblabel="ПОДАТЬ ЗАЯВКУ" />
            </Modal>
        </div>
    </div>

    <div class="container px-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-3 ">
            <h2 class="my-2 text-xl md:text-4xl font-bold font-heading text-center">
                Запишитесь на бесплатную консультацию прямо сейчас!
            </h2>
            <p class="leading-relaxed text-xl pttext">
                Позвоните по телефону
                <strong>+7 (4822) 395-429</strong>
                или приезжайте по адресу:
                <strong>г. Тверь, пр-т Победы, д. 3, оф. 502(а) (ТОЦ «Титан»)</strong>. Наш
                специалист выслушает Вас, оценит перспективы и расскажет:
            </p><br />
            <p class="leading-relaxed text-xl pttext">
                — Как общаться с коллекторами<br />
                — Как благополучно разрешить сложившуюся ситуацию<br />
                — Есть ли риски в Вашем положении (и какие)<br />
            </p><br />
            <p class="leading-relaxed text-xl pttext">
                После консультации Вы можете заключить с нами договор.
            </p>
            <p class="leading-relaxed text-xl pttext">Затем процесс проводится в 3 этапа:</p>
            <List class="text-xl text-left" items={listOneLine6} />
            <p class="leading-relaxed text-xl pttext">
                Наши сотрудники предоставят подробные разъяснения на всех этапах рассмотрения дела —
                включая сведения о судебных заседаниях, на каждом из которых будет присутствовать
                наш юрист.
            </p>
        </div>
    </div>

    <div class="container px-12 mt-8 mb-12 mx-auto">
        <div class="max-w-3xl mx-auto mb-12 text-center">
            <Modal>
                <Content
                    leadmes="Запрос на конультацию по процедуре банкротства"
                    knoblabel="ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ" />
            </Modal>
        </div>
    </div> -->
</section>
