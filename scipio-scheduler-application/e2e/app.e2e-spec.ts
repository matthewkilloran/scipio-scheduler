import { ScipioSchedulerApplicationPage } from './app.po';

describe('scipio-scheduler-application App', function() {
  let page: ScipioSchedulerApplicationPage;

  beforeEach(() => {
    page = new ScipioSchedulerApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
