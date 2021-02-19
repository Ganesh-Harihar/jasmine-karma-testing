import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostModel } from '../models/post.model';
describe('HttpService', () => {
  let service: HttpService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });
    service = TestBed.get(HttpService);
    httpTestController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test httpClient get method', () => {
    let posts: Array<PostModel> = [
      { id: 1, userId: 1, title: 'Test Title 1', body: 'Sample body 1' },
      { id: 2, userId: 2, title: 'Test Title 2', body: 'Sample body 2' }
    ]

    service.getPostList().subscribe((data) => {
      expect(posts).toBe(data, 'should check mocked data');
    });

    const req = httpTestController.expectOne(service.BASE_URL + 'posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toBe('json');

    req.flush(posts);
  });

  it('should add post and return data', () => {
    let newPost: PostModel = { id: 101, userId: 101, title: 'New post', body: 'New body' };

    service.addPost(newPost).subscribe((data) => {
      expect(newPost).toBe(data);
    });

    const req = httpTestController.expectOne(service.BASE_URL + 'posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toBe('json');

    req.flush(newPost);
  });

  it('should test 404 error', () => {
    let errorMessage: string = 'mock 404 error occurred';

    service.getPostList().subscribe((data) => {
      fail('failing with error 404');
    }, (error) => {
      expect(error.status).toEqual(404);
      expect(error.error).toEqual(errorMessage);
    });

    const req = httpTestController.expectOne(service.BASE_URL + 'posts');
    req.flush(errorMessage, { status: 404, statusText: 'Not found' });
  });

});
