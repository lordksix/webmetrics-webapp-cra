import dataString from 'lib/dtSting';

describe('test.skip funcion aqi number to string', () => {
  test('test.skip for 1', async () => {
    const data = dataString(1688016874);

    expect(data).toEqual('6/29/2023, 12:34:34 AM GMT-5');
  });

  test('test.skip for 2', async () => {
    const data = dataString(1688026874);

    expect(data).toEqual('6/29/2023, 3:21:14 AM GMT-5');
  });

  test('test.skip for 3', async () => {
    const data = dataString(1688066874);

    expect(data).toEqual('6/29/2023, 2:27:54 PM GMT-5');
  });
});
