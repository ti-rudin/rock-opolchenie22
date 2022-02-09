<script>
    import { signOut } from '../firebase';
    import { authStore } from '../stores/auth';
    import Profile from './Profile.svelte';
    import SignInButton from './SignInButton.svelte';
    import Button from 'smelte/src/components/Button';

    function goprofile() {
        console.log("go");
        return true;
    }
</script>

<style>
    .knob {
        width: auto;

        display: flex;
        justify-content: flex-end;
    }

    .name {
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 0.25rem;
    }
</style>

<section class="knob">
    {#if $authStore.status === 'in'}
        <div class="name"><a href="settings"> {$authStore.user.displayName}</a></div>
        <div class="mtmt">
            <Button class="ml-2" href="settings">
                <svg class="fill-current w-6 h-6" viewBox="0 0 20 20">
                    <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd" />
                </svg>
            </Button>

            <!--
             <Profile  {...$authStore.user}/>-->
        </div>
    {:else}
        <SignInButton provider={'google'} />
    {/if}
</section>
