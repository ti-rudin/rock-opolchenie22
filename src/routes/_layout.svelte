<script>
    import { stateStore } from '../stores/statebot.js';
    import { authStore } from '../stores/auth';
    import Nav from '../components/Nav.svelte';
    import Login from '../components/Login.svelte';
    import NavigationDrawer from 'smelte/src/components/NavigationDrawer';
    import AppBar from 'smelte/src/components/AppBar';
    import breakpoints from 'smelte/src/breakpoints';
    export let segment;
    const bp = breakpoints();
    import 'smelte/src/tailwind.css';

    import dark from 'smelte/src/dark';

    let darkMode = dark();
    let showzagl;

    import Button from 'smelte/src/components/Button';

    function showtogle() {
        $stateStore.showmenu = !$stateStore.showmenu;
        //console.log ($stateStore.show);
        return $stateStore.showmenu;
    }

    //localStorage.setItem('darkmode', 'on');
    if ($bp === 'sm') showzagl = false;

    function menucloseifnotsm() {
        if ($stateStore.showmenu && $bp === 'sm') {
            $stateStore.showmenu = false;
        }
    }

    function gohome() {
        $stateStore.rout = 'botlist';
    }
</script>

<style>
    .menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        border-right: 1px solid #85898b;
        overflow: scroll;
        font-size: larger;
    }
    .logo-block {
        min-height: 6rem;
    }
    .rastyazhka {
        display: inline-flex;
        flex-grow: 2;
    }
    .backknob {
        margin-top: 1rem;
        margin-right: 1rem;
    }

    .zagl {
        width: 19rem;
        height: 100vh;
    }
    .mainflex {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4rem;
        justify-content: center;
    }

    main {
        z-index: 1000;
    }
    .fill-current:hover {
        fill: #2196f3;
    }
    .text-current:hover {
        color: #4299e1;
        background-color: #f0bb0b0c;
    }
</style>

<main class="font-montserrat">
    <AppBar class="bg-gray-200 dark:bg-dark-500 flex p-0 fixed w-full z-100 top-0">
        <div class="text-white flex-none">
            <div
                class="text-white no-underline hover:text-white hover:no-underline"
                aria-current={segment === undefined ? 'page' : undefined}
                on:click={showtogle}>
                <svg
                    width="65"
                    height="65"
                    viewBox="0 0 95 95"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23 19C21.3431 19 20 20.3431 20 22V73C20 74.6569 21.3431 76 23 76H74C75.6569 76 77 74.6569 77 73V22C77 20.3431 75.6569 19 74 19H23ZM74.451 45.7925V38.7638H65.3498V45.7925H74.451ZM74.451 47.6499V73.8756C68.8889 73.5496 64.8755 68.9793 65.3498 62.7365V47.6499H74.451ZM63.2469 38.8696V45.873H54.5285V73.8756H45.4298V45.8723H36.219V38.8696H63.2469Z"
                        fill="#2196F3" />
                </svg>
            </div>
        </div>
        <div class="pr-2 flex-none">
            <div on:click={showtogle}>
                <svg
                    class="fill-current h-6 w-6"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </div>
        </div>
        <div class="flex-grow text-center" />
        <!--титл в строке меню-->

        <div class="flex-none">
            <Button bind:value={$darkMode} class="ml-2">
                <svg
                    class="fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                        fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018
                    0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414
                    1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1
                    0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2
                    0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414
                    1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0
                    011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd" />
                </svg>
            </Button>
        </div>
        <div class="flex-none">
            <Button href="tel:+74822395400" class="mr-2 ml-2">
                <svg
                    class="fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25">
                    <path
                        fill-rule="evenodd"
                        d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0
                    002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042
                    11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279
                    3H5z"
                        clip-rule="evenodd" />
                </svg>
            </Button>
        </div>
    </AppBar>
    <NavigationDrawer
        class="bg-gray-200 dark:bg-dark-500"
        bind:show={$stateStore.showmenu}
        {segment}>
        <div class="menu">
            <div class="flex justify-between logo-block">
                <a
                    class="text-white no-underline hover:text-white hover:no-underline"
                    aria-current={segment === undefined ? 'page' : undefined}
                    href=".">
                    <svg
                        width="95"
                        height="95"
                        viewBox="0 0 95 95"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M23 19C21.3431 19 20 20.3431 20 22V73C20 74.6569 21.3431 76 23 76H74C75.6569 76 77 74.6569 77 73V22C77 20.3431 75.6569 19 74 19H23ZM74.451 45.7925V38.7638H65.3498V45.7925H74.451ZM74.451 47.6499V73.8756C68.8889 73.5496 64.8755 68.9793 65.3498 62.7365V47.6499H74.451ZM63.2469 38.8696V45.873H54.5285V73.8756H45.4298V45.8723H36.219V38.8696H63.2469Z"
                            fill="#2196F3" />
                    </svg>
                </a>
                <div class="backknob">
                    <div on:click={showtogle}>
                        <svg
                            class="fill-current h-6 w-6"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414
                            1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" />
                        </svg>
                    </div>
                </div>
            </div>
            <hr />
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="soprovozhdenie"
                on:click={menucloseifnotsm}>
                Сопровождение операций с недвижимостью
            </a>
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="strahovanie"
                on:click={menucloseifnotsm}>
                Страхование ипотеки
            </a>

            <hr />
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="analis"
                on:click={menucloseifnotsm}>
                Анализ ситуации, консультация
            </a>
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="otsenka"
                on:click={menucloseifnotsm}>
                Оценка недвижимости
            </a>
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="sbor"
                on:click={menucloseifnotsm}>
                Запрос и сбор справок
            </a>
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="proverka"
                on:click={menucloseifnotsm}>
                Проверка объекта
            </a>
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="predstavitelstvo"
                on:click={menucloseifnotsm}>
                Юридическое представительство
            </a>
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="ipoteka"
                on:click={menucloseifnotsm}>
                Оформление ипотеки
            </a>
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="registerooo"
                on:click={menucloseifnotsm}>
                Регистрация собственности
            </a>
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="podacha"
                on:click={menucloseifnotsm}>
                Составление и подача документов
            </a>
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="pereplanirovka"
                on:click={menucloseifnotsm}>
                Перепланировка жилья
            </a>
            <hr />

            <a
                class="text-current py-4 px-4 flex-none"
                aria-current={segment === 'about' ? 'page' : undefined}
                href="about"
                on:click={menucloseifnotsm}>
                О компании
            </a>
            <a
                class="text-current py-4 px-4 flex-none"
                aria-current={segment === 'about' ? 'page' : undefined}
                href="uslugi"
                on:click={menucloseifnotsm}>
                Услуги
            </a>
            <!--
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="blog"
                on:click={menucloseifnotsm}>
                Дневник юриста
            </a>
-->
            <a
                class="py-4 px-4 text-current flex-none"
                rel="prefetch"
                aria-current={segment === 'blog' ? 'page' : undefined}
                href="contacts"
                on:click={menucloseifnotsm}>
                Контакты
            </a>
            <div class="rastyazhka">&nbsp;</div>
            <!--
            <div class="chatpriglos py-4 px-4 text-current flex-none">
                Задайте вопрос нашему юристу он-лайн! Это бесплатно.
            </div>-->
            <script>
                (function (w, d, u) {
                    var s = d.createElement('script');
                    s.async = true;
                    s.src = u + '?' + ((Date.now() / 60000) | 0);
                    var h = d.getElementsByTagName('script')[0];
                    h.parentNode.insertBefore(s, h);
                })(
                    window,
                    document,
                    'https://cdn-ru.bitrix24.ru/b1707097/crm/site_button/loader_2_i0brhz.js',
                );
            </script>
        </div>
    </NavigationDrawer>

    <div class="mainflex">
        {#if $stateStore.showmenu && $bp != 'sm'}
            <div class="zagl">&nbsp;</div>

            <slot />
        {:else}
            <slot />
        {/if}
    </div>
</main>
