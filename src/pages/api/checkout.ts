import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { items, amount } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'No items in cart' });
    }

    // Simulate Stripe checkout session creation
    const sessionId = `cs_test_${Math.random().toString(36).substr(2, 9)}`;

    return res.status(200).json({
      sessionId,
      amount,
      status: 'success',
      message: 'Checkout session created successfully',
    });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
