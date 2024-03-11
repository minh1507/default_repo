import express, { Express, Router } from 'express';

export class SysClass{
    protected app: Express | null = null; 
    protected router: Router | null = null;
    constructor(){
        this.app = express();
        this.router = express.Router()
    }
}