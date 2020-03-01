import { capital } from '../index';
test('number utils capital test', () => {
  expect(capital(123.123)).toBe('壹百贰拾叁元壹角贰分');
  expect(capital(1234567890)).toBe('拾贰亿叁千肆百伍拾陆万柒千捌百玖拾元整');
});
