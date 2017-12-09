import { MyMovieAppPage } from './app.po';

describe('my-movie-app App', function() {
  let page: MyMovieAppPage;

  beforeEach(() => {
    page = new MyMovieAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
