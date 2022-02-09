<script>

    import Button from 'smelte/src/components/Button';
    import Sett from '../components/Sett.svelte';
    import { authStore } from '../stores/auth';
    import Uslugi from '../components/Uslugi.svelte';

     function newlead() {

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
            'https://urtitan.bitrix24.ru/rest/6/nukdgqcdzapnn3xy/crm.lead.add.json?fields[TITLE]=Лид с сайта - услуга 1 - '+$authStore.user.displayName+'&fields[NAME]	='+$authStore.user.displayName+'&fields[OPENED]=Y&fields[EMAIL][0][VALUE]='+$authStore.user.email,
            requestOptions,
        )
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
</script>

<style>
    .bg-dots {
        background-image: url(https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5dea7a12bb83ab1f13040de5_cx-dots.svg);
        background-repeat: no-repeat;
    }
</style>

<svelte:head>
    <title>Услуги</title>
</svelte:head>



    <div class="m-auto max-w-6xl p-12">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                <div class="md:text-5xl text-2xl uppercase font-black">
                    Awesome tool for your future team
                </div>
                <div class="text-xl mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </div>
                <div class="my-5 h-16">
                        <Button href="/" on:click={newlead}>Запрос правовой помощи 1</Button>
                </div>
            </div>
            <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
                <div class="bg-dots">
                    <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                        <img
                            alt="card img"
                            class="rounded-t"
                            src="https://s.spielwarenmesse.de/fileadmin/data_archive/Relaunch_Spielwarenmesse/magazine/header/20190618_Header_Memes.jpg" />
                        <div class="text-2xl p-10 bg-white">
                            <img
                                alt="quote"
                                class="float-left mr-1"
                                src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <hr />
        <br />
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                <div class="md:text-5xl text-2xl uppercase font-black">
                    Awesome tool for your future team
                </div>
                <div class="text-xl mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </div>
                <div class="my-5 h-16">
                    <div
                        class="shadow-md font-medium py-2 px-4 text-yellow-100 cursor-pointer
                        bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48">
                        Join us now
                    </div>
                </div>
            </div>
            <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
                <div class="bg-dots">
                    <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                        <img
                            alt="card img"
                            class="rounded-t"
                            src="https://s.spielwarenmesse.de/fileadmin/data_archive/Relaunch_Spielwarenmesse/magazine/header/20190618_Header_Memes.jpg" />
                        <div class="text-2xl p-10 bg-white">
                            <img
                                alt="quote"
                                class="float-left mr-1"
                                src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

