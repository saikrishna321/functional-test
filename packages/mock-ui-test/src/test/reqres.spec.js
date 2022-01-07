import { ReqRes } from '../pages/web/reqres/reqres.page'

describe('Web Test', function () {
  it('Test temp', async function () {
    const mock = await browser.mock('**/api/users/2', {
        method: 'get'
    })
    const expectedJsonString = `{ "data": { "id": 123, "email": "Dileep@mars.in", "first_name": "Dileep", "last_name": "B", "avatar": "https://mock/face.jpg" }, "support": { "url": "https://mock/url", "text": "mock data!" } }`
    mock.respond(expectedJsonString)

    await ReqRes.loadPage();
    await ReqRes.singleUser();
    const actualJson = await ReqRes.getResponse();

    const expectedJson = JSON.parse(expectedJsonString)
    expect(actualJson).toEqual(expectedJson)
  });
});
