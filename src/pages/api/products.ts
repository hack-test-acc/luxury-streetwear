import type { NextApiRequest, NextApiResponse } from 'next';
import { mockProducts } from '@/data/products';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id, slug } = req.query;

    if (id) {
      const product = mockProducts.find((p) => p.id === id);
      if (product) {
        return res.status(200).json(product);
      }
      return res.status(404).json({ error: 'Product not found' });
    }

    if (slug) {
      const product = mockProducts.find((p) => p.slug === slug);
      if (product) {
        return res.status(200).json(product);
      }
      return res.status(404).json({ error: 'Product not found' });
    }

    return res.status(200).json(mockProducts);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
