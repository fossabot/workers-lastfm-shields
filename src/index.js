const data = {
  schemaVersion: 1,
  label: 'Last Played',
  message: 'The Other Side of the Dark by Buckethead',
  color: 'red',
  labelColor: 'grey',
  namedLogo: 'last.fm',
  style: 'for-the-badge',
};

const handleRequest = async () => new Response(JSON.stringify(data, null, 2), {
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
  status: 200,
});

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
