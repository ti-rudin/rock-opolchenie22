<script>
    import { prefetch } from '@sapper/app'
    import { onMount, onDestroy } from 'svelte'
  
    let props
    props = true;
    onMount(() => {
      window.onpopstate = function (event) {
        if (document.location.pathname === '/about') {
          props = true
        } else {
          const regex = /\/blog\/([\w-]+)/
          if (regex.test(document.location.pathname)) {
            handlePrefetch(document.location.pathname)
          }
        }
      }
  
      return () => {
        window.onpopstate = null
      }
    })
  
    function handleClick(event) {
      event.preventDefault()
      const clickedHref = event.currentTarget.href
      if (clickedHref === location.href) return
  
      const pathname = clickedHref.replace(location.origin, '').substring(1)
      history.pushState(null, '', pathname)
      handlePrefetch(pathname)
    }
  
    async function handlePrefetch(url) {
      const res = await prefetch(url)
      const { branch } = res
      props = branch[1].props.post
    }
  
    function handleClose() {
      history.pushState(null, '', 'about')
      props = null
    }
  </script>
  
  <svelte:head>
    <title>About</title>
  </svelte:head>
  
  <h1>About this site</h1>
  
  <p>This is the 'about' page. There's not much here.</p>
  
  <a href="" on:click="{handleClick}">lien ici</a>
  
  {#if props}

  <button on:click="{handleClose}"></button>
  {/if}