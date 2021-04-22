import 'reflect-metadata';
import { config } from 'dotenv';
import express from 'express';

import { getConfig } from './config';
config();

import { Server } from './infrastructure/server';

const serverInstance = express();

const serverApp = new Server(serverInstance, getConfig().settings.apiPort);
