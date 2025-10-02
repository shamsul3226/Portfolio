// api/contact.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // You can process the data here (e.g., send email, store in DB)
    console.log('New message:', { name, email, subject, message });

    return res.status(200).json({ success: true, message: 'Message received!' });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
