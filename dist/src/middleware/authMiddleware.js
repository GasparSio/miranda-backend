"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
function authMiddleware(req, res, next) {
    const userAgent = req.get('User-Agent') || '';
    if (!userAgent.includes('Chrome'))
        return res.status(400).json({ error: true, message: 'You need to use Firefox' });
    next();
    return;
}
exports.authMiddleware = authMiddleware;
