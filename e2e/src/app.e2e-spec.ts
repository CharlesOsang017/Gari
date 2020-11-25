import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('Workshop app is running!');
=======
    expect(page.getTitleText()).toEqual('Gari-workshop app is running!');
>>>>>>> origin/Charles
=======
    expect(page.getTitleText()).toEqual('Gari-workshop app is running!');
>>>>>>> 320bf6db6bd949ae0dbb25737b7b5e47dc040958
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
