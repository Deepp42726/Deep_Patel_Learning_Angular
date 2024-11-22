import { FullCarNamePipe } from './full-car-name.pipe';

describe('FullCarNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullCarNamePipe();
    expect(pipe).toBeTruthy();
  });
});
