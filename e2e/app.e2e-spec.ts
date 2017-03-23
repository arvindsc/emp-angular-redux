import { EmpAngularReduxPage } from './app.po';

describe('emp-angular-redux App', () => {
  let page: EmpAngularReduxPage;

  beforeEach(() => {
    page = new EmpAngularReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
