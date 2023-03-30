import dotenv from 'dotenv';

dotenv.config();

const port = Number(process.env.PORT || '8080');
const bodyLimit = '100kb';
const corsHeaders = ['Link'];
const isDev = process.env.NODE_ENV === 'development';
const koaSecretKey = (process.env.KOA_SECRET_KEY || "koa-secret-key") as string;
const githubClientId = process.env.GITHUB_CLIENT_ID as string;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET as string;
const googleClientId = process.env.GOOGLE_CLIENT_ID as string;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

export default { port, bodyLimit, corsHeaders, isDev, koaSecretKey, githubClientId, githubClientSecret, googleClientId, googleClientSecret };
