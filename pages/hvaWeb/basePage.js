// pages/LoginPage.js
class BasePage {
  constructor(page) {
    this.page = page;
    this.footerHvA = page.locator('footer');
    this.fallBackFont = page.locator('fallback-font');
    this.programmeTitle = page.locator('[data-testid="programmeTitleHeader"]');
    this.programmeTitleSiteSection = page.locator('[data-testid="title-section-header"]');
    this.logo = page.locator('[data-testid="logo"]');
    this.menuItems = page.locator('[data-testid*="nav-dropdown-button"]');
    this.menuItemStudy = page.locator('[data-testid=non-mobile-nav-dropdown-button-0]');
    this.menuItemResearch = page.locator('[data-testid="non-mobile-nav-dropdown-button-1"]');
    this.menuItemAbout = page.locator('[data-testid="non-mobile-nav-dropdown-button-2"]');
    this.menuItemsMobile = page.locator('[data-testid*="nav-dropdown-button"]');
    this.menuItemStudyMobile = page.locator('[data-testid=mobile-nav-dropdown-button-0]');
    this.menuItemResearchMobile = page.locator('[data-testid="mobile-nav-dropdown-button-1"]');
    this.menuItemAboutMobile = page.locator('[data-testid="mobile-nav-dropdown-button-2"]');
    this.breadcrumb = page.locator('[data-testid="breadcrumb"]');
    this.footerMainLinks =  page.locator('[data-testid=footerHeading]');
    this.footerSocialLinks = page.locator('[data-testid=footerSocials]');
    this.footerSocialItems = page.locator('[data-testid=footerSocialMediaListItem]');
    this.footerSocialItemsYoutube = page.locator('[data-testid=YouTube]');
    this.footerSocialItemsFacebook = page.locator('[data-testid=Facebook]');
    this.footerSocialItemsInstagram = page.locator('[data-testid=Instagram]');
    this.subNavMenu = page.locator('#subNavigation');
    this.mobileSubMenu = page.locator('[data-testid="subNavigationMobilePlusButton"]');
    this.menuItemsText = page.locator('[class*=navLink_text__]');
    this.footerMenuHeading = page.locator('[data-testid="footerHeading"]');
    this.buttonName = page.locator('[data-testid="bodyCTA"]');
    this.buttonNameText = page.locator('[class*=cta_text]');
    this.searchButton = page.locator('[data-testid="searchButton"]');
    this.searchBar = page.locator('[data-testid=nav-search-input]');
    this.performSearch = page.locator('#nav-search-button');
    this.clearSearch = page.locator('[data-testid="nav-search-clear"]');
    this.closeModal = page.locator('[data-testid="closeModalText"]');
    this.searchResultsOverviewHeader = page.locator('[class*=searchResultsOverview_heading__]');
    this.searchResultsOverviewSearchTerm = page.locator('[class*=searchResultsOverview_searchTerm__]');
    this.searchNoResults = page.locator('[data-testid="no-results"]');
    this.pagination = page.locator('[data-testid="pagination-component"]');
    this.paginationPage = page.locator('[data-testid="pagination-page-');
    this.paginationNextPage = page.locator('[data-testid="pagination-next-page"]');
    this.paginationPreviousPage = page.locator('[data-testid="pagination-prev-page"]');
    this.footerSloganAndLegal = page.locator('[data-testid=footerSloganAndLegal]');
    this.navLinkOpenbaarmaking = page.locator('[data-testid="navLink-Verantwoorde openbaarmaking"]');
    this.navLinkResponsibleDisclosure = page.locator('[data-testid="navLink-Responsible Disclosure"]');
    this.navLinkDisclaimer = page.locator('[data-testid="navLink-Disclaimer"]');
    this.navLinkPrivacy = page.locator('[data-testid="navLink-Privacy en cookie-instellingen"]');
    this.navLinkPrivacyEN = page.locator('[data-testid="navLink-Privacy"]');
    this.navLinkCookies = page.locator('[data-testid="navLink-adjustCookieSettings"]');
    this.skipLink = page.locator('[data-testid=skiplink]');
    this.loader = page.locator('[class*=loader_loader]');
    this.selectedLanguage = page.locator('[class*=languageSelector_languageSelector__]');
    this.languageNL = page.locator('[data-testid=language-Nederlands]');
    this.languageEN = page.locator('[data-testid=language-English]');
    this.programmeVariants = page.locator('[data-testid=variant]');
    this.h2Title = page.locator('h2');
    this.mobileMenu = page.locator('[data-testid="hamburgerInner"]');
    this.mobileMenuItem = page.locator('[data-testid="mainLinksListItem"]');
    this.pageTitle = page.locator('title');
    this.titleHeader = page.locator('[data-testid="titleHeader"]');
    this.homePageHeader = page.locator('[class*=homepageHeader_container__]');
    this.homePageHeaderTitle = page.locator('[data-testid="homepageHeaderTitle"]');
    this.homePageHeaderListHeader = page.locator('[data-testid="homepageHeaderListHeader"]');
    this.homePageHeaderListItems = page.locator('[class*=homepageHeader_list__]');
    this.homePageHeaderImage = page.locator('[class*=homepageHeader_imageContainer__]');
    this.autocompleteList = page.locator('[data-testid="auto-complete"]');
    this.autocompleteResults = page.locator('[data-testid="CTALinkHref"]');
    this.autocompleteSuggestionsLabel = page.locator('#autocomplete-suggestions-label');
    this.autocompleteHitslabel = page.locator('#autocomplete-hits-label');
    this.submenuActivePage = page.locator('[data-testid="currentPageMarker"]');
    this.submenuYoutubeIcon = page.locator('[data-testid="youtube-icon"]');
  }



  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = BasePage;










// import { expect, locator, page } from '@playwright/test';
//
//
// const basePageSelectors = {
//
// };
//
// export class BasePage {
//
//   constructor(page: Page) {
//     this.page = page;
//     this.footerHvA = this.page.locator(basePageSelectors.footerHvA);
//   }
//
//   async footerHvA() {
//     await page.locator('footer');
//   }
//
//   async programmeTitle() {
//     await this.page.locator(basePageSelectors.programmeTitle);
//   }
//
//   async programmeTitleSiteSection() {
//     await this.page.locator(basePageSelectors.programmeTitleSiteSection);
//   }
//
//   async logo() {
//     await this.page.locator(basePageSelectors.logo);
//   }
//
//   async menuItems() {
//     await this.page.locator(basePageSelectors.menuItems);
//   }
//
//   async menuItemStudy() {
//     await this.page.locator(basePageSelectors.menuItemStudy);
//   }
//
//   async menuItemResearch() {
//     await this.page.locator(basePageSelectors.menuItemResearch);
//   }
//
//   async menuItemAbout() {
//     await this.page.locator(basePageSelectors.menuItemAbout);
//   }
//
//   async menuItemStudyMobile() {
//     await this.page.locator(basePageSelectors.menuItemStudyMobile);
//   }
//
//   async menuItemResearchMobile() {
//     await this.page.locator(basePageSelectors.menuItemResearchMobile);
//   }
//
//   async menuItemAboutMobile() {
//     await this.page.locator(basePageSelectors.menuItemAboutMobile);
//   }
//
//   async breadcrumb() {
//     await this.page.locator(basePageSelectors.breadcrumb);
//   }
//
//   async footerMainLinks() {
//     await this.page.locator(basePageSelectors.footerMainLinks);
//   }
//
//   async footerSocialLinks() {
//     await this.page.locator(basePageSelectors.footerSocialLinks);
//   }
//
//   async footerSocialItems() {
//     await this.page.locator(basePageSelectors.footerSocialItems);
//   }
//
//   async footerSocialItemsYoutube() {
//     await this.page.locator(basePageSelectors.footerSocialItemsYoutube);
//   }
//
//   async footerSocialItemsFacebook() {
//     await this.page.locator(basePageSelectors.footerSocialItemsFacebook);
//   }
//
//   async footerSocialItemsInstagram() {
//     await this.page.locator(basePageSelectors.footerSocialItemsInstagram);
//   }
//
//   async footerSloganAndLegal() {
//     await this.page.locator(basePageSelectors.footerSloganAndLegal);
//   }
//
//   async navLinkOpenbaarmaking() {
//     await this.page.locator(basePageSelectors.navLinkOpenbaarmaking);
//   }
//
//   async navLinkResponsibleDisclosure() {
//     await this.page.locator(basePageSelectors.navLinkResponsibleDisclosure);
//   }
//
//   async navLinkDisclaimer() {
//     await this.page.locator(basePageSelectors.navLinkDisclaimer);
//   }
//
//   async navLinkPrivacy() {
//     await this.page.locator(basePageSelectors.navLinkPrivacy);
//   }
//
//   async navLinkPrivacyEN() {
//     await this.page.locator(basePageSelectors.navLinkPrivacyEN);
//   }
//
//   async navLinkCookies() {
//     await this.page.locator(basePageSelectors.navLinkCookies);
//   }
//
//   async subNavMenu() {
//     await this.page.locator(basePageSelectors.subNavMenu);
//   }
//
//   async menuItemsText() {
//     await this.page.locator(basePageSelectors.menuItemsText);
//   }
//
//   async buttonName() {
//     await this.page.locator(basePageSelectors.buttonName);
//   }
//
//   async searchButton() {
//     await this.page.locator(basePageSelectors.searchButton);
//   }
//
//   async searchBar() {
//     await this.page.locator(basePageSelectors.searchBar);
//   }
//
//   async performSearch() {
//     await this.page.locator(basePageSelectors.performSearch);
//   }
//
//   async clearSearch() {
//     await this.page.locator(basePageSelectors.clearSearch);
//   }
//
//   async searchResultsOverviewHeader() {
//     await this.page.locator(basePageSelectors.searchResultsOverviewHeader);
//   }
//
//   async searchResultsOverviewSearchTerm() {
//     await this.page.locator(basePageSelectors.searchResultsOverviewSearchTerm);
//   }
//
//   async searchNoResults() {
//     await this.page.locator(basePageSelectors.searchNoResults);
//   }
//
//   async pagination() {
//     await this.page.locator(basePageSelectors.pagination);
//   }
//
//   async paginationPage(pageNumber) {
//     await this.page.locator(`${basePageSelectors.paginationPage + pageNumber}"]`);
//   }
//
//   async paginationNextPage() {
//     await this.page.locator(basePageSelectors.paginationNextPage);
//   }
//
//   async paginationPreviousPage() {
//     await this.page.locator(basePageSelectors.paginationPreviousPage);
//   }
//
//   async closeModal() {
//     await this.page.locator(basePageSelectors.closeModal);
//   }
//
//   async cookieConfirm() {
//     await this.page.locator(basePageSelectors.cookieConfirm);
//   }
//
//   async cookieBanner() {
//     await this.page.locator(basePageSelectors.cookieBanner);
//   }
//
//   async cookieBannerHeader() {
//     await this.page.locator(basePageSelectors.cookieBannerHeader);
//   }
//
//   async cookieBannerMessage() {
//     await this.page.locator(basePageSelectors.cookieBannerMessage);
//   }
//
//   async loader() {
//     await this.page.locator(basePageSelectors.loader);
//   }
//
//   async languageSelector() {
//     await this.page.locator(basePageSelectors.selectedLanguage);
//   }
//
//   async languageNL() {
//     await this.page.locator(basePageSelectors.languageNL);
//   }
//
//   async languageEN() {
//     await this.page.locator(basePageSelectors.languageEN);
//   }
//
//   async h2Title() {
//     await this.page.locator(basePageSelectors.h2Title);
//   }
//
//   async mobileMenu() {
//     await this.page.locator(basePageSelectors.mobileMenu);
//   }
//
//   async mobileButton() {
//     await this.page.locator(basePageSelectors.mobileButton);
//   }
//
//   async mobileMenuItem() {
//     await this.page.locator(basePageSelectors.mobileMenuItem);
//   }
//
//   async pageTitle() {
//     await this.page.locator(basePageSelectors.pageTitle);
//   }
//
//   async mobileSubMenu() {
//     await this.page.locator(basePageSelectors.mobileSubMenu);
//   }
//
//   async buttonNameText() {
//     await this.page.locator(basePageSelectors.buttonNameText);
//   }
//
//   async footerMenuHeading() {
//     await this.page.locator(basePageSelectors.footerMenuHeading);
//   }
//
//   async titleHeader() {
//     await this.page.locator(basePageSelectors.titleHeader);
//   }
//
//   async homePageHeader() {
//     await this.page.locator(basePageSelectors.homePageHeader);
//   }
//
//   async homePageHeaderTitle() {
//     await this.page.locator(basePageSelectors.homePageHeaderTitle);
//   }
//
//   async homePageHeaderListHeader() {
//     await this.page.locator(basePageSelectors.homePageHeaderListHeader);
//   }
//
//   async homePageHeaderListItems() {
//     await this.page.locator(basePageSelectors.homePageHeaderListItems);
//   }
//
//   async homePageHeaderImage() {
//     await this.page.locator(basePageSelectors.homePageHeaderImage);
//   }
//
//   async skipLink() {
//     await this.page.locator(basePageSelectors.skipLink);
//   }
//
//   async programmeVariants() {
//     await this.page.locator(basePageSelectors.programmeVariants);
//   }
//
//   async autocompleteList() {
//     await this.page.locator(basePageSelectors.autocompleteList);
//   }
//
//   async autocompleteResults() {
//     await this.page.locator(basePageSelectors.autocompleteResults);
//   }
//
//   async autocompleteSuggestionsLabel() {
//     await this.page.locator(basePageSelectors.autocompleteSuggestionsLabel);
//   }
//
//   async autocompleteHitslabel() {
//     await this.page.locator(basePageSelectors.autocompleteHitslabel);
//   }
//
//   async submenuActivePage() {
//     await this.page.locator(basePageSelectors.submenuActivePage);
//   }
//
//   async submenuYoutubeIcon() {
//     await this.page.locator(basePageSelectors.submenuYoutubeIcon);
//   }
//
//
//
//
//
//   async openMobileSubMenu() {
//     cy.wait(200);
//     this.mobileSubMenu().should('be.visible').invoke('attr', 'aria-expanded', 'false').click({ force: true })
//         .invoke('attr', 'aria-expanded', 'true');
//   }
// }
// export default BasePage;
