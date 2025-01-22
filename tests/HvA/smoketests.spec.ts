import { test, expect } from '@playwright/test';
import BasePage = require("../../pages/hvaWeb/basePage");
let basePage: BasePage;

test.describe('Default page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.hva.nl/opleidingen/commerciele-economie');
        basePage = new BasePage(page);
        await page.waitForTimeout(1000);
        const cookieBanner = page.locator('#CookieInfoDialogContainer');
            if (await cookieBanner.count() > 0) {
                const cookieButton = page.locator('#CookieInfoDialogButtonsIntro');
                await expect(cookieButton).toContainText('Alle cookies toestaan');
                await expect(cookieButton).toBeVisible();
                await cookieButton.click();
            } else {
                console.log('no cookies');
            }
    });

    test('Has footer and logo displayed', async ({ page }) => {
        await expect(basePage.footerHvA).toContainText('Creating Tomorrow');
        await expect(basePage.logo).toBeVisible();
    });

    test('Has page title', async ({ page }) => {
        await expect(basePage.programmeTitle).toContainText('Commerciële Economie');
    });

    test('Has menu item displayed', async ({ page }) => {
        await expect(basePage.menuItems).toHaveCount(6);
        await expect(basePage.menuItemStudy).toBeVisible();
        await basePage.menuItemStudy.click();
        await expect(basePage.buttonName).toContainText('Alles over studeren');
 });

    test('Has sub menu navigation items displayed', async ({ page }) => {
        await expect(basePage.subNavMenu).toBeVisible();
        await basePage.menuItemsText.filter({ hasText: 'Kom kennismaken' }).click();
        await expect(basePage.menuItemsText.filter({ hasText: 'Kom kennismaken' })).toHaveAttribute('aria-current', 'page');

        await basePage.menuItemsText.filter({ hasText: 'Wat kun je ermee' }).click();
        await expect(basePage.menuItemsText.filter({ hasText: 'Wat kun je ermee' })).toHaveAttribute('aria-current', 'page');

        await basePage.menuItemsText.filter({ hasText: 'Schrijf je in' }).click();
        await expect(basePage.menuItemsText.filter({ hasText: 'Schrijf je in' })).toHaveAttribute('aria-current', 'page');

        await basePage.menuItemsText.filter({ hasText: 'Contact' }).click();
        await expect(basePage.menuItemsText.filter({ hasText: 'Contact' })).toHaveAttribute('aria-current', 'page');

        await basePage.menuItemsText.filter({ hasText: 'Voor bedrijven' }).click();
        await expect(basePage.menuItemsText.filter({ hasText: 'Voor bedrijven' })).toHaveAttribute('aria-current', 'page');
    });
});
