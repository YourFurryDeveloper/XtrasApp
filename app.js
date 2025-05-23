var $$ = Dom7;  // <-- add this

var app = new Framework7({
  root: '#app',
  el: '#app',
  name: 'Xtras',
  theme: 'ios',
  panel: { swipe: true },
  navbar: { iosCenterTitle: true },
  routes: [
    { path: '/apps/', url: 'apps.html' },
    { path: '/wallpapers/', url: 'wallpapers.html' },
    { path: '/wallpaper1/', url: 'https://google.com' },
  ],
});

var mainView = app.views.create('.view-main');

function downloadWallpaper(url) {
  const link = document.createElement('a');
  link.href = url;
  const urlParts = url.split('/');
  let filename = urlParts[urlParts.length - 1].split('?')[0];
  if (!filename || filename.length < 5) filename = 'wallpaper.jpg';
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

var $$ = Dom7;

$$(document).on('click', '.page[data-name="wallpapers"] .wallpaper-download', function (e) {
  e.preventDefault();
  const imgSrc = $$(this).find('img').attr('src');
  downloadWallpaper(imgSrc);
});
