<script>
    import { onMount } from 'svelte';
    import Switch from 'smelte/src/components/Switch';
    import Button from 'smelte/src/components/Button';
    import TextField from 'smelte/src/components/TextField';
    import { authStore } from '../stores/auth';
    import { stateStore } from '../stores/statebot.js';
    //import "smelte/src/tailwind.css";
    //export let urlhost;

    let usersettings = [];
    let uid, gname, gemail, tel;

    uid = $stateStore.usersettings.uid || "";
    gname = $stateStore.usersettings.gname || "";
    gemail = $stateStore.usersettings.gemail || "";
    tel =  localStorage.getItem("tel") || "";
    console.log($stateStore);
    //let getusset = urlhost + 'api/getusersettings.php';
    //let setusset = urlhost + 'api/setusersettings.php';

    //console.log(getusset);
    //onMount(async () => {
    //    let au = $authStore.user.uid;
    //    const res = await fetch(getusset, {
    //        method: 'post',
    //        body: JSON.stringify({ au }),
    //        headers: {
    //            Accept: 'application/json, text/plain, */*',
    //            'Content-Type': 'application/json',
    //            'Access-Control-Allow-Origin': '*',
    //            'Access-Control-Allow-Headers': '*',
    //        },
    //    });
    //    usersettings = await res.json();
    //    console.log(usersettings);
    //    binancekey = usersettings[1];
    //    binancesecret = usersettings[2];
    //    comission = usersettings[3];
    //});
//
    function saveSettings() {
        localStorage.setItem("tel", tel);
        console.log($stateStore.usersettings);
        return true;
    }

    usersettings = {uid, gname, gemail, tel};
    
    
</script>

<style type="text/scss">
    main {
        text-align: center;

        padding: 0px;
    }
    .foolrow {
        width: 400px;
    }

    .row {
        display: flex;
        max-width: 400px;
        margin: auto;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .leftitem {
        border: 0px solid;
        text-align: left;
    }

</style>

<main>
    <br />
    <p class="text-2xl">Настройки профиля</p>
    <br />
    <div class="row">
        <div class="leftitem">
            <div class="foolrow">
                <TextField label="Имя" outlined bind:value={gname} />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="leftitem">
            <div class="foolrow">
                <TextField bind:value={gemail} label="E-mail" outlined />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="leftitem">
            <div class="foolrow">
                <TextField label="Телефон" outlined bind:value={tel} />
            </div>
        </div>
    </div>
    <Button on:click={saveSettings}>Сохранить</Button>
</main>


