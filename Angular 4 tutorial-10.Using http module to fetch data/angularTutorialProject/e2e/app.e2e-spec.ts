import { AngularTutorialProjectPage } from './app.po';

describe('angular-tutorial-project App', () => {
  let page: AngularTutorialProjectPage;

  beforeEach(() => {
    page = new AngularTutorialProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
