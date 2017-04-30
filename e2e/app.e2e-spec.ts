import { GreenPage } from './app.po';

describe('green App', () => {
  let page: GreenPage;

  beforeEach(() => {
    page = new GreenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
