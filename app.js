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

  $(document).on('page:init', '.page[data-name="apps"]', function (e) {
    $$('.google-download').on('click', function() {
      console.log("google download");
    });
  });  
