import { NextApiRequest, NextApiResponse } from 'next';

const robotsTxt = `
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /cgi-bin/

Allow: /admin/public/
Allow: /images/

Sitemap: https://www.nexusit.in/sitemap.xml
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();
}