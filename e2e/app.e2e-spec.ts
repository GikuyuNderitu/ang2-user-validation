import { Ang2UserValidationPage } from './app.po';

describe('ang2-user-validation App', () => {
  let page: Ang2UserValidationPage;

  beforeEach(() => {
    page = new Ang2UserValidationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
