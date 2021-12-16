const selectors = {
  link: (linkText) => {
    return {
      web: `=${linkText}`,
    };
  },
};

export const MainPage = {
  loadPage() {
    browser.url('/');
    return this;
  },
  openLink(linkText) {
    $(selectors.link(linkText)).click();
  },
};
