import jsonServer from 'json-server';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const server = jsonServer.create();

// Uncomment to allow write operations
// const filePath = path.join('db.json');
// const data = fs.readFileSync(filePath, "utf-8");
// const db = JSON.parse(data);
// const router = jsonServer.router(db);

// Comment out to allow write operations
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}));

server.use(router);

const PORT = Number(process.env.PORT) || 3000;

try {
    server.listen(PORT, () => {
        console.log(`JSON Server is running on PORT ${PORT}`);
    });
} catch (error) {
    console.error('Error starting the server:', error);
}

// Export the Server API
export default server;
