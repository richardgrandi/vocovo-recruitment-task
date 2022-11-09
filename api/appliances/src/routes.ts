import express, { Request, Response } from 'express'
import NodeCache from "node-cache";

import applianceDB, { Appliance } from './db'

const router = express.Router()
const cache = new NodeCache({stdTTL: 300, checkperiod: 180}); 

cache.set("cachedDb", applianceDB);

router.get('/list', (req: Request, res: Response) => {
  if (!cache.get("cachedDb")) {
    cache.set("cachedDb", applianceDB);
  }
  res.json(cache.get("cachedDb"))
})

router.get('/refresh', (req: Request, res: Response) => {
  cache.set("cachedDb", applianceDB);
  res.json(cache.get("cachedDb"));
})

router.delete('/delete/:id', (req: Request, res: Response) => {
  const applianceId:number|false = Number(req.params.id);
  const cachedDb = cache.get("cachedDb") ? cache.get("cachedDb") as Appliance[] : applianceDB as Appliance[];
  const newDb = cachedDb.filter((appliance:Appliance) => appliance.id !== applianceId);
  cache.set("cachedDb", newDb);
  res.json(newDb);
})

router.post('/update/:id', (req: Request, res: Response) => {
  const newDetails = req.body as Appliance;
  const cachedDb = cache.get("cachedDb") ? cache.get("cachedDb") as Appliance[] : applianceDB as Appliance[];
  const i = cachedDb.findIndex(appliance => appliance.id === newDetails.id);
  cachedDb[i] = newDetails;
  cache.set("cachedDb", cachedDb);
  res.json(cachedDb);
})

router.post('/create', (req: Request, res: Response) => {
  const newItem = req.body as Appliance;
  const cachedDb = cache.get("cachedDb") ? cache.get("cachedDb") as Appliance[] : applianceDB as Appliance[];
  cachedDb.push(newItem);
  cache.set("cachedDb", cachedDb);
  res.json(cachedDb);
})

export default router
