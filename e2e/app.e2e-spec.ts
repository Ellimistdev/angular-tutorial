import { StubPage } from './app.po';

describe('stub App', () => {
  let page: StubPage;

  beforeEach(() => {
    page = new StubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
