import type { NextApiRequest, NextApiResponse } from 'next';

interface OrderData {
  id: string;
  items: any[];
  total: number;
  status: string;
  createdAt: string;
}

const orders: OrderData[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { items, total, shippingAddress } = req.body;

    if (!items || !total || !shippingAddress) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const order: OrderData = {
      id: `ORD-${Date.now()}`,
      items,
      total,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    orders.push(order);

    return res.status(200).json({
      success: true,
      order,
      message: 'Order created successfully',
    });
  }

  if (req.method === 'GET') {
    return res.status(200).json(orders);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
