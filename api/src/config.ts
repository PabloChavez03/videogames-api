import { env } from 'node:process';
import dotenv from 'dotenv';
import path from 'node:path';
dotenv.config({ path: path.join(__dirname,'./','.env')});

export const DB_NAME = env.DB_NAME || 'postgres';
export const DB_USER = env.DB_USER || 'postgres';
export const DB_PASSWORD = env.DB_PASSWORD || 'postgres';
export const PORT = env.PORT || 5000;
// export const DB_PORT = env.DB_PORT || 5432;
// export const DB_DIALECT = env.DB_DIALECT || 'postgres';