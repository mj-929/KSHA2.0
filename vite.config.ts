import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

const virtualTourPlugin = () => ({
  name: 'virtual-tour-serve',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      if (req.url && req.url.startsWith('/virtual-tour')) {
        const urlWithoutHash = req.url.split('?')[0].split('#')[0];
        const relativePath = urlWithoutHash.replace(/^\/virtual-tour/, '') || '/index.html';
        const normalizedPath = relativePath === '' || relativePath === '/' ? '/index.html' : relativePath;
        const filePath = path.join('/Users/maheshjayashankar/Sideprojects/KSHA/public/virtual-tour', decodeURIComponent(normalizedPath));

        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase();
          const mimeTypes: Record<string, string> = {
            '.html': 'text/html',
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.xml': 'application/xml',
            '.mp4': 'video/mp4',
            '.woff': 'font/woff',
            '.woff2': 'font/woff2',
            '.ttf': 'font/ttf',
            '.webp': 'image/webp'
          };
          res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
          res.setHeader('Access-Control-Allow-Origin', '*');
          return fs.createReadStream(filePath).pipe(res);
        }
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), virtualTourPlugin()],
  server: {
    port: 8083,
    host: true
  }
});
