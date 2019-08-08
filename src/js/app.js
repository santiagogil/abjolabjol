// JS Goes here - ES6 supported
//javascript file
  window.addEventListener('load', () => {
    let share = document.getElementById('web-share')
    let url = window.location.href
    let title = document.title
    if (share) {
      if (!navigator.share) return share.remove()
      share.addEventListener('click', event => {
        // event.preventDefault()
        if (!navigator.share) return share.remove()
        navigator.share({"url": url, "title": title})
          .then(console.log)
          .catch(console.log)
      })
    }
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());

  // gtag('config', 'UA-141188337-1');
})

// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}


