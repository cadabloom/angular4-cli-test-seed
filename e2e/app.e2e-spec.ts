import { Angular2clitestPage } from './app.po';

describe('angular2clitest App', function() {
  let page: Angular2clitestPage;

  beforeEach(() => {
    page = new Angular2clitestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
