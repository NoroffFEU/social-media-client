const TEST_ID = 1;
const TEST_BAD_ID = 'banana';
const TEST_STRING = 'Test';
const TEST_TOKEN = 'Token';

const TEST_PROFILE = {
  id: TEST_ID,
  name: TEST_STRING,
  accessToken: TEST_TOKEN,
};

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'Ok',
    json: () => Promise.resolve(TEST_PROFILE),
  });
}

function fetchFailure(status = 404, statusText = 'Not Found') {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

export {
  fetchFailure,
  fetchSuccess,
  TEST_PROFILE,
  TEST_ID,
  TEST_BAD_ID,
  TEST_STRING,
  TEST_TOKEN,
};
