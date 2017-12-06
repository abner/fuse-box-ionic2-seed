import { Page } from 'ionic-angular/es2015/navigation/nav-util';
import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: './app.html'
})
export class MyApp {

  pages: Array<{ title: string, component: any }>;
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen, private appCtrl: App ) {
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Contacts', component: ContactPage },
      { title: 'About', component: AboutPage }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: { title: string, component: string | Page }) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.appCtrl.getRootNav().setRoot(page.component);
  }
}
