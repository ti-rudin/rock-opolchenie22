<script>
    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';
    import Button from 'smelte/src/components/Button';
    import { onMount } from 'svelte';

    import Popup from '../components/Popup.svelte';

    import CloseButton from '../components/CloseButton.svelte';

    const { open } = getContext('simple-modal');

    let opening = false;
    let opened = false;
    let closing = false;
    let closed = false;
    export let leadmes;
    export let knoblabel = "Запрос правовой помощи" ;
 

    
    const showPopupCustom = () => {
 
        open(
            Popup,
            {
                message: leadmes,
            },
            {
                closeButton: CloseButton,
                styleBg: {
                    
                },
                styleWindow: {
                    border: '2px solid #2196F3',
                    boxShadow: 'inset 0 0 0 2px #15A7EF, 0 0 0 2px #15A7EF',
                    
                },
                styleContent: {
                    color: 'white',
                    
                },
                styleCloseButton: {
                    borderRadius: 0,
                    boxShadow: '0 0 0 2px white',
                    background: 'pink',
                },
                transitionWindow: fly,
                transitionWindowProps: {
                    y: 100,
                    duration: 400,
                },
            },
            {
                onOpen: () => {
                    opening = true;
                },
                onOpened: () => {
                    opening = false;
                    opened = true;
                },
                onClose: () => {
                    opened = false;
                    closing = true;
                },
                onClosed: () => {
                    closing = false;
                    closed = true;
                    setTimeout(() => {
                        closed = false;
                    }, 1000);
                },
            },
        );
        ym(71091643,'reachGoal','clickform');
    };
</script>

<style>
    section {
        padding-top: 0.5em;
    }
</style>

<section>
    <Button on:click={showPopupCustom}>{knoblabel}</Button>
    <br />
</section>
