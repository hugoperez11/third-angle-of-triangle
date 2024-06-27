import { describe, it, expect } from 'vitest';
import { thirdAngle } from '../src/thirdAngle'; 

describe('thirdAngle', () => {
  it('should return 90 when the angles are 30 and 60', () => {
    expect(thirdAngle(30, 60)).toBe(90);
  });

  it('should return 60 when the angles are 60 and 60', () => {
    expect(thirdAngle(60, 60)).toBe(60);
  });

  it('should return 59 when the angles are 43 and 78', () => {
    expect(thirdAngle(43, 78)).toBe(59);
  });

  it('should return 150 when the angles are 10 and 20', () => {
    expect(thirdAngle(10, 20)).toBe(150);
  });
});




