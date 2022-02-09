<script>
    export let message;

    import Button from 'smelte/src/components/Button';
    import { onMount } from 'svelte';

    import TextField from 'smelte/src/components/TextField';

    let lead_id, gname, gemail, tel;
    onMount(async () => {
        lead_id = await localStorage.getItem('lead_id');
        tel = await localStorage.getItem('tel');
        gname = await localStorage.getItem('gname');
        gemail = await localStorage.getItem('gemail');
    });
    function saveSettings() {
        if (tel == '' || tel == null || tel == "null") {
            tel = '';
            return true;
        } else {
            if (gname == '' || gname == null || gname == 'null'){gname = ''};
            if (gemail == '' || gemail == null || gemail == 'null'){gemail = ''};

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
                'https://antitan.bitrix24.ru/rest/1/m8z7kjp9rk4orujt/crm.lead.add.json?fields[TITLE]=Лид - ' +
                    message +
                    ' - ' +
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
        };
        ym(71091643,'reachGoal','lead');
    }
</script>

<style>
    .zi {
        z-index: 910;
    }
    .row {
        width: 100%;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
    }

    .mm {
        text-align: center;

        padding: 0px;
    }
</style>

<div class="flex flex-col w-full h-auto  bg-blue-400 zi">
    <!-- Header -->
    <div class="flex w-full h-auto justify-center items-center">
        <div class="flex w-10/12 h-auto py-3 justify-center items-center text-xl font-bold">
            {message}
        </div>
        <!--Header End-->
    </div>
    <!-- Modal Content-->
    <div
        class="flex w-full h-auto pt-8 pb-2 px-2 justify-center items-center rounded text-center text-gray-700 bg-blue-200">
        <div class="mm justify-center items-center">
            <div class="row">
                <TextField class="text-xl" label="Телефон" outlined bind:value={tel} />
            </div>
            <Button on:click={saveSettings}>Отправить запрос</Button>
            <br /><br />
            <p class="text-xl row">
                Достаточно только заполнить поле Телефон, но мы будем благодарны, если Вы также
                укажите Ваше имя и e-mail.
            </p>
            <br />
            <div class="row">
                <TextField class="text-xl" label="Имя" outlined bind:value={gname} />
            </div>
            <div class="row">
                <TextField class="text-xl" bind:value={gemail} label="E-mail" outlined />
            </div>
            <br />
            <p class="text-xs">
                Отправляя запрос, Вы даете разрешение на обработку персональных данных, в
                соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных
                данных»
            </p>
        </div>
    </div>
    <!-- End of Modal Content-->
</div>
