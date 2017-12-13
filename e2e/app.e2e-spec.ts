import { FirstangularappPage } from './app.po';

describe('firstangularapp App', function() {
  let page: FirstangularappPage;

  beforeEach(() => {
    page = new FirstangularappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
