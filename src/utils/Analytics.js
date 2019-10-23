// Copyright 2019 enzoames Inc. All Rights Reserved.

import { GA_ID, GA_EA, GA_CAT } from './config';

class AnalyticsClass {
  gtag = window.gtag || ((...args) => console.log('::GA::', ...args));

  // init() {
  //   //  this.ga('create', GA_ID, 'auto');
  //   //  // More info about anonymization in Analytics https://support.google.com/analytics/answer/2763052?hl=en
  //   // this.ga('set', 'anonymizeIp', true);
  //   // this.ga('send', 'pageview');
  // }

  // NAV

  logNavClick(label) {
    this.logEvent(GA_CAT.NAV, GA_EA.CLICKED, label);
  }

  // ANALYTICS FUNCTIONS

  logEvent(eventCategory, eventAction, eventLabel, eventValue) {
    this.gtag('event', eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue
    });
  }

  logPageView(url) {
    this.gtag('event', 'page_view', {
      send_to: GA_ID
    });
  }
}

const Analytics = new AnalyticsClass();

export default Analytics;
