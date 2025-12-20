// Next.js API route to proxy demo booking form data to Google Apps Script
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbxH1wyzn3yUQLDKmwWIETp4oL5J6o2TBTGtb2dnCn54CHEc_zDoULNgOQv0p7MnsNPR/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ error: 'Failed to submit to Google Apps Script' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
}
