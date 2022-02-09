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
            text: 'недостатки содержания документа со ссылками на нормативные акты',
            icon: 'check_circle_outline',
        },
        {
            text: 'возможные риски',
            icon: 'check_circle_outline',
        },
        {
            text: 'рекомендуемые действия по устранению указанных недостатков',
            icon: 'check_circle_outline',
        },
    ];

    function saveSettings() {
        localStorage.setItem('tel', tel);
        localStorage.setItem('gname', gname);
        localStorage.setItem('gemail', gemail);

        var myHeaders = new Headers();
        //myHeaders.append("Cookie", "PHPSESSID=zNVB2XyCw0Y2rQaJRa5BF8SUs1yhnjI5; qmb=.; BITRIX_SM_SALE_UID=4");

        var formdata = new FormData();

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        };

        fetch(
            'https://urtitan.bitrix24.ru/rest/6/nukdgqcdzapnn3xy/crm.lead.add.json?fields[TITLE]=Лид - Правовой анализ - ' +
                String(gname) +
                '&fields[NAME]	=' +
                String(gname) +
                '&fields[OPENED]=Y&fields[EMAIL][0][VALUE]=' +
                String(gemail) +
                '&fields[PHONE][0][VALUE]=' +
                String(tel),
            requestOptions,
        )
            .then((response) => response.text())
            .then((result) => {
                let a = JSON.parse(result);
                console.log(a.result);
                console.log(result);
                console.log(a);
                if (a.result > 0) {
                    localStorage.setItem('lead_id', a.result);
                    document.getElementById('myModal').close();
                    document.location.href = 'spasibo#' + a.result;
                } else {
                    //что-то пошло не так
                    if (
                        a.error_description ==
                        'Поле "Рабочий e-mail" содержит некорректный адрес.<br />'
                    ) {
                        gemail = '';
                        saveSettings();
                    }
                }
            })
            .catch((error) => console.log('error', error));

        return true;
    }
</script>

<style>
    .bg-dots {
        background-image: url(https://dev.urtitan.ru/bg-dots.svg);
        background-repeat: no-repeat;
    }
</style>

<svelte:head>
    <title>Правовой анализ документов</title>
</svelte:head>

<section class="body-font">
    <div class="container px-5 mx-auto section-p flex flex-col">
        <div class="m-auto max-w-6xl p-8">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 flex flex-col justify-center">
                    <div class="md:text-4xl text-2xl uppercase font-black">
                        Правовой анализ документов
                    </div>
                    <div class="text-xl mt-4">
                        Нужна помощь в правовом анализе документов? Нажмите кнопку «Запрос помощи» и
                        введите номер телефона — мы перезвоним в течение 5 минут!
                    </div>
                    <div class="mt-5 mb-6 h-10 duration-100">
                        <Modal>
                            <Content leadmes="Запрос на правовой анализ" />
                        </Modal>
                    </div>
                </div>
                <div class="md:w-1/2 flex flex-col justify-center bg-dots">
                    <div class="shadow-2xl w-auto z-10 rounded mt-6 ml-4">
                        <svg
                            id="af461e34-156f-4911-b433-1993d7c9d72f"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1008.92039 607.44997"><path
                                d="M1104.46,620.305a15.34,15.34,0,0,1-15.25952,15.42H417.8a15.34,15.34,0,0,1-15.26-15.41955V161.695a15.34,15.34,0,0,1,15.25958-15.42H1089.2a15.34,15.34,0,0,1,15.26,15.41957h0V620.305Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#e6e6e6" />
                            <path
                                d="M1096.54006,612.795a14.91,14.91,0,0,1-14.91,14.91H425.83a14.91,14.91,0,0,1-14.91-14.91V169.415a14.91,14.91,0,0,1,14.91-14.91h655.83a14.91,14.91,0,0,1,14.88,14.91Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                id="a90d98f2-fe2a-41dc-85de-0aa221261a3e"
                                data-name="b9c54412-061c-4155-b289-fb4c23e4a64e"
                                d="M445.97,173.755h616.22a8.85,8.85,0,0,1,8.85,8.85v415.28a8.85,8.85,0,0,1-8.85,8.85H445.97a8.85,8.85,0,0,1-8.85-8.85h0V182.605a8.85,8.85,0,0,1,8.85-8.85Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#e6e6e6" />
                            <path
                                d="M453.77,183.715h599.95a8.85,8.85,0,0,1,8.85,8.85v393.12a8.85,8.85,0,0,1-8.85,8.85H453.77a8.85,8.85,0,0,1-8.85-8.85h0V192.565a8.85,8.85,0,0,1,8.85-8.85Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                d="M949.46,675.305a15.34,15.34,0,0,1-15.25958,15.42H262.8a15.34,15.34,0,0,1-15.26-15.41961h0V216.695a15.34,15.34,0,0,1,15.25957-15.42H934.2a15.34,15.34,0,0,1,15.26,15.41957h0V675.305Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#e6e6e6" />
                            <path
                                d="M941.54,667.795a14.91,14.91,0,0,1-14.91,14.91H270.83a14.91,14.91,0,0,1-14.91-14.91V224.415a14.91,14.91,0,0,1,14.91-14.91H926.66a14.91,14.91,0,0,1,14.88,14.91Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                id="b54624cf-b287-45f0-8f58-93aafc1fcbba"
                                data-name="a7242049-80b4-49e1-bd08-67354734c824"
                                d="M290.97,228.755H907.19a8.85,8.85,0,0,1,8.85,8.85v415.28a8.85,8.85,0,0,1-8.85,8.85H290.97a8.85,8.85,0,0,1-8.85-8.85h0V237.605a8.85,8.85,0,0,1,8.85-8.85h0Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#e6e6e6" />
                            <path
                                d="M298.77,238.715H898.72a8.85,8.85,0,0,1,8.85,8.85v393.12a8.85,8.85,0,0,1-8.85,8.85H298.77a8.85,8.85,0,0,1-8.85-8.85h0V247.565a8.85,8.85,0,0,1,8.85-8.85Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                d="M797.46,738.305a15.34,15.34,0,0,1-15.25958,15.42H110.8a15.34,15.34,0,0,1-15.26-15.41955V279.695a15.34,15.34,0,0,1,15.25957-15.42H782.2a15.34,15.34,0,0,1,15.26,15.41959h0V738.305Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#e6e6e6" />
                            <path
                                d="M789.54,730.795a14.91,14.91,0,0,1-14.91,14.91H118.83a14.91,14.91,0,0,1-14.91-14.91V287.415a14.91,14.91,0,0,1,14.91-14.91H774.66a14.91,14.91,0,0,1,14.88,14.91Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                id="a665a07e-790f-4a9c-be99-8c13ca89238c"
                                data-name="b7a050eb-0cb2-44a8-b642-35d340850eff"
                                d="M138.97,291.755H755.19a8.85,8.85,0,0,1,8.85,8.85v415.28a8.85,8.85,0,0,1-8.85,8.85H138.97a8.85,8.85,0,0,1-8.85-8.85V300.605a8.85,8.85,0,0,1,8.85-8.85h0Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#e6e6e6" />
                            <path
                                d="M146.77,301.715H746.72a8.85,8.85,0,0,1,8.85,8.85v393.12a8.85,8.85,0,0,1-8.85,8.85H146.77a8.85,8.85,0,0,1-8.85-8.85V310.565A8.85,8.85,0,0,1,146.77,301.715Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                d="M590.14174,386.874v272a6.00477,6.00477,0,0,1-6,6h-285a6.00476,6.00476,0,0,1-6-6v-304a6.00475,6.00475,0,0,1,6-6h249Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#2196f3" />
                            <path
                                id="b3cdc3b1-5d0a-4cee-b54c-a38ee088c012"
                                data-name="Path 40"
                                d="M343.57782,415.072a3.755,3.755,0,0,0,0,7.50892h99.00454a3.755,3.755,0,1,0,.12329-7.50892q-.06165-.001-.12329,0Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                id="b79c0997-055d-434d-8704-cfc1ccad2281"
                                data-name="Path 40"
                                d="M343.57782,450.291a3.755,3.755,0,0,0,0,7.50893H539.58236a3.755,3.755,0,0,0,.12329-7.50893q-.06165-.001-.12329,0Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                id="ed7d1f14-d1d4-40af-b9ad-7b5b5ece23df"
                                data-name="Path 40"
                                d="M343.57782,485.51005a3.755,3.755,0,0,0,0,7.50893H539.58236a3.755,3.755,0,1,0,.12329-7.50893q-.06165-.001-.12329,0Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                id="ba3b747a-a6b2-4f39-a169-6ef4c21cd2ce"
                                data-name="Path 40"
                                d="M343.57782,520.72906a3.755,3.755,0,0,0,0,7.50892H539.58236a3.755,3.755,0,1,0,.12329-7.50892q-.06165-.001-.12329,0Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                id="b6e4b743-2497-479e-800a-91c8b21b3df9"
                                data-name="Path 40"
                                d="M343.57782,555.94807a3.755,3.755,0,0,0,0,7.50892H539.58236a3.755,3.755,0,1,0,.12329-7.50892q-.06165-.00105-.12329,0Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                id="f91f499d-e7c9-446d-84c9-bf78465468f6"
                                data-name="Path 40"
                                d="M343.57782,591.16708a3.755,3.755,0,0,0,0,7.50892H539.58236a3.755,3.755,0,1,0,.12329-7.50892q-.06165-.00105-.12329,0Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#fff" />
                            <path
                                d="M590.14174,386.874h-38a4,4,0,0,1-4-4v-34h0Z"
                                transform="translate(-95.53981 -146.27502)"
                                fill="#2196f3" />
                            <path
                                d="M590.14174,386.874h-38a4,4,0,0,1-4-4v-34h0Z"
                                transform="translate(-95.53981 -146.27502)"
                                opacity="0.2" /></svg>
                    </div>
                </div>
            </div>
            <br />
            <div class="text-xl">
                Правовой анализ документов — процедура проверки нормативного, информационно-справочного,
                коммерческого документа на предмет соответствия нормам действующего
                законодательства. Позволяет прогнозировать любые правовые последствия, возникающие в
                ходе применения рассматриваемого документа в быту или судопроизводстве.
                <br /><br />
                Анализ содержания документов с точки зрения права — полноценная юридическая
                консультация, по окончании которой представитель нашей компании предоставляет
                клиенту официальное заключение. В заключении описаны:
                <List items={listOneLine} />
                <br />
                При работе с различными договорами и документами гарантируем полную конфиденциальность.
                <br /><br />
            </div>
        </div>
    </div>
</section>
