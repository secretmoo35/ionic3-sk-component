import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'AboutPage';

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login A', component: 'LoginAPage' },
      { title: 'Login B', component: 'LoginBPage' },
      { title: 'Login C', component: 'LoginCPage' },
      { title: 'Register A', component: 'RegisterAPage' },
      { title: 'Register B', component: 'RegisterBPage' },
      { title: 'Register C', component: 'RegisterCPage' },
      { title: 'Profile A', component: 'ProfileAPage' },
      { title: 'Profile B', component: 'ProfileBPage' },
      { title: 'Feed A', component: 'FeedAPage' },
      { title: 'Chat List A', component: 'ChatListAPage' },
      { title: 'Chat A', component: 'ChatAPage' },
      { title: 'Numpad A', component: 'NumpadAPage' },
      { title: 'Numpad B', component: 'NumpadBPage' },
      { title: 'Slide Tab', component: 'SlideTabPage' },
      { title: 'Grid Product', component: 'GridProductPage' },
      { title: 'List Product', component: 'ListProductPage' },
      { title: 'Product Detail', component: 'ProductDetailPage' },
      { title: 'Dashboard Task', component: 'DashboardTaskPage' },
      { title: 'Hotel List', component: 'HotelListPage' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
