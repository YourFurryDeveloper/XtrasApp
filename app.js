var app = new Framework7({
    root: '#app',
    el: '#app',
    name: 'Xtras',
    theme: 'ios',
    panel: {
      swipe: true,
    },
    navbar: {
      iosCenterTitle: true,
    },
    routes: [
      {
        path: '/apps/',
        url: 'apps.html',
      },
      {
        path: '/wallpapers/',
        url: 'wallpapers.html',
      },

      //WALLPAPERS
      {
        path: '/wallpaper1/',
        url: 'https://google.com',
      },
      //----------

    ],
  });

  var mainView = app.views.create('.view-main');

  function downloadWallpaper(url) {
    // Create a hidden anchor element
    const link = document.createElement('a');
    link.href = url;
  
    // Try to extract a filename from the URL or default to 'wallpaper.jpg'
    const urlParts = url.split('/');
    let filename = urlParts[urlParts.length - 1].split('?')[0]; // get last part before query
    if (!filename || filename.length < 5) filename = 'wallpaper.jpg';
  
    link.download = filename;
  
    // Append to body, click it, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  $$(document).on('page:init', '.page[data-name="apps"]', function (e) {
    // Add click listener for wallpaper-download buttons inside this page
    $$('.wallpaper-download').on('click', function (event) {
      event.preventDefault();
  
      const imgSrc = $$(this).find('img').attr('src');
      downloadWallpaper(imgSrc);
    });
  });  
