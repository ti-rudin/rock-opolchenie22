<script>
	// This property is used by Modal.svelte to pass down the close function
  export let onClose;
</script>

<style>
	button {
		position: absolute;
		top: -3rem;
		right: 0;
		color: white;
		background: rgba(128, 0, 0, 0.295);
        border: 2px solid pink;
        padding-left: 15px;
        padding-right: 15px;
	}
</style>

<button on:click={onClose}>Закрыть</button>