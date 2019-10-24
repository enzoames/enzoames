// Copyright 2019 enzoames Inc. All Rights Reserved.

import { GA_ID, GA_EA, GA_CAT, GA_EL } from './config';

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

  // PHOTOGRAPHY PAGE

  logAlbumClick(album) {
    this.logEvent(GA_CAT.PHOTOGRAPHY, GA_EA.CLICKED, album);
  }

  // EVENTS PAGE

  logButtonSubmit(category, eventLabel) {
    this.logEvent(category, GA_EA.SUBMITTED, eventLabel);
  }

  logButtonClick(category, eventLabel) {
    this.logEvent(category, GA_EA.CLICKED, eventLabel);
  }

  logEventsBreadcrum() {
    this.logEvent(GA_CAT.EVENTS, GA_EA.CLICKED, GA_EL.EVENTS_BREADCRUM);
  }

  logFormInteraction(category) {
    this.logEvent(category, GA_EA.INTERACTED, GA_EL.FORM);
  }

  logClickEvent(eventValue) {
    this.logEvent(GA_CAT.EVENTS, GA_EA.CLICKED, GA_EL.EVENT_CARD, eventValue);
  }

  // FOOTER

  logClickIcon(eventCategory, eventLabel) {
    this.logEvent(eventCategory, GA_EA.CLICKED, GA_EL.ICON, eventLabel);
  }

  // PAGE IMPRESSION

  logPageImpression(url) {
    this.logEvent(url, GA_EA.IMPRESSION, GA_EL.PAGE);
  }

  // ANALYTICS FUNCTIONS

  logEvent(eventCategory, eventAction, eventLabel, eventValue) {
    this.gtag('event', eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue
    });
  }

  // this function isnt working on GA, HashRouting technically is on one page.
  // Doesn't detect page change, therefore implemented page impression as event
  logPageView(url) {
    this.gtag('event', 'page_view', {
      send_to: GA_ID
    });
  }
}

const Analytics = new AnalyticsClass();

export default Analytics;
