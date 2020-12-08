import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { environment } from '../../src/environments/environment';

describe('workspace-project App', () => {
  let page: AppPage;

  // Does not wait for the angular $http and $timeout to finish (as we have a polling service in background)
  browser.waitForAngularEnabled(false);

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    const title = 'Welcome to ' + environment.title + '!';
    expect(page.getTitleText()).toEqual(title);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
