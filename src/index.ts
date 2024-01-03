import express, { Application } from "express"
import cors from "cors"

const app: Application = express();
const port: number| string| undefined= process.env