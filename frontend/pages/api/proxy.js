import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = createProxyMiddleware({
  target: 'http://3.93.167.118:8000',
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': '',
  },
});

export default function handler(req, res) {
  proxy(req, res, (err) => {
    if (err) {
      console.error('Error occurred while proxying request:', err);
      res.status(500).send('Error occurred while proxying request');
    }
  });
}