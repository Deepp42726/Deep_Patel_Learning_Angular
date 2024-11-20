import { CarDescriptionPipe } from './car-description.pipe';

describe('CarDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new CarDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
