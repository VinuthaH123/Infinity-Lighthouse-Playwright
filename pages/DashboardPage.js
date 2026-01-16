const { expect } = require('@playwright/test');

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.infinityText = page.getByText('Infinity');
    this.username = page.locator('.username');
    this.dashboardLink = page.getByRole('link', { name: 'Dashboard' });
    this.inventoryLink = page.getByRole('link', { name: 'Inventory' });
    //this.catalogLink = page.getByRole('link', { name: 'Catalog' });
    this.logoutBtn = page.getByText('Logout');
  }

  async verifyDashboardLoaded() {
    await expect(this.page).toHaveURL(/dashboard/);

  }

  async verifyHeader() {
    await expect(this.infinityText).toBeVisible();
    await expect(this.username).toBeVisible();
    await expect(this.username).toContainText('Hi');
  }

  async verifyLeftMenu() {
    await expect(this.dashboardLink).toBeVisible();
    await expect(this.inventoryLink).toBeVisible();
    //await expect(this.catalogLink).toBeVisible();
  }

  async logout() {
    await this.logoutBtn.click();
    await expect(this.page).toHaveURL(/login/);
  }
}

module.exports = { DashboardPage };