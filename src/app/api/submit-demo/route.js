// Next.js API route to proxy demo booking form data to Google Apps Script

export async function POST(request) {
  try {
    const body = await request.json();
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbxH1wyzn3yUQLDKmwWIETp4oL5J6o2TBTGtb2dnCn54CHEc_zDoULNgOQv0p7MnsNPR/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    if (response.ok) {
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Failed to submit to Google Apps Script' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
