import { TasksFrontEndPage } from './app.po';

describe('tasks-front-end App', () => {
  let page: TasksFrontEndPage;

  beforeEach(() => {
    page = new TasksFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
