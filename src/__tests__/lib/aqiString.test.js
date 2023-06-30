import qualityMsg from 'lib/aqiString';

describe('test funcion aqi number to string', () => {
  test('test for 1', async () => {
    const data = qualityMsg(1);

    expect(data).toEqual('Good');
  });

  test('test for 2', async () => {
    const data = qualityMsg(2);

    expect(data).toEqual('Fair');
  });

  test('test for 3', async () => {
    const data = qualityMsg(3);

    expect(data).toEqual('Moderate');
  });

  test('test for 4', async () => {
    const data = qualityMsg(4);

    expect(data).toEqual('Poor');
  });

  test('test for 10', async () => {
    const data = qualityMsg(5);

    expect(data).toEqual('Very Poor');
  });
});
