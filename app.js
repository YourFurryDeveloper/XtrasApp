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
        content: `
          <div class="page">
            <div class="navbar">
              <div class="navbar-bg"></div>
              <div class="navbar-inner sliding">
                <div class="left">
                  <a  class="link back">
                    <i class="icon icon-back"></i>
                    <span class="if-not-md">Back</span>
                  </a>
                </div>
                <div class="title">Apps</div>
              </div>
            </div>
            <div class="page-content">
            <div class="block-title block-title-medium">Web clip apps</div>

            <div class="list list-strong-ios list-dividers-ios list-outline-ios media-list">
              <ul>
                <li class="item-content">
                  <div class="item-media">
                    <img src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?semt=ais_hybrid&w=740" style="border-radius: 8px" width="44">
                  </div><div class="item-inner">
                    <div class="item-title-row">
                      <div class="item-title">YouTube</div>
                      <button class="button button-round button-fill button-preloader" style="width: 65px;">GET</button>
                    </div><div class="item-subtitle">Google</div>
                  </div>
                </li>
                
                <li class="item-content">
                  <div class="item-media">
                    <img src="https://yt3.googleusercontent.com/K8WVrQAQHTTwsHEtisMYcNai7p7XIlyEAdZg86qYw78ye57r5DRemHQ9Te4PcD_v98HB-ZvQjQ=s900-c-k-c0x00ffffff-no-rj" style="border-radius: 8px" width="44">
                  </div><div class="item-inner">
                    <div class="item-title-row">
                      <div class="item-title">Google</div>
                      <button class="button button-round button-fill button-preloader" style="width: 65px;">GET</button>
                    </div><div class="item-subtitle">Google</div>
                  </div>
                </li>
              </ul>
            </div>
            </div>
          </div>
        `,
      },
    ],
  });
  
  var mainView = app.views.create('.view-main');
