const url = process.argv[2] || 'http://localhost:3000/api/blog?limit=1';

try {
  const res = await fetch(url);
  const text = await res.text();
  console.log('STATUS', res.status);
  console.log('BODY', text.slice(0, 500));
} catch (error) {
  console.error('FETCH_ERROR', error.message);
  process.exitCode = 1;
}
