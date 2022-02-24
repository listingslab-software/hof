import pJSON from "../package.json";
import * as functions from "firebase-functions";
import {routes} from "./endpoints/routes";
import {personas} from "./endpoints/personas";
import express from "express";
import cors from "cors";

const SSR = express();
SSR.use(cors({origin: true}));
SSR.get("*", (req:any, res:any) => {
  res.status(200).send("nice SSR, mate");
})
exports.SSR = functions.https.onRequest(SSR);

console.log(pJSON.name + " vs " + pJSON.version);

const HOFService = express();
HOFService.use(cors({origin: true}));

HOFService.get("/", (req:any, res:any) => {
  sendResponse(res, req, {
    status: 200,
    message: "Help you with something, brah?",
    routes: `${getServiceURL(req)}/routes`,
    personas: `${getServiceURL(req)}/personas`,
  });
});

HOFService.get("/personas", (req:any, res:any) => {
  sendResponse(res, req, {
    status: 200,
    message: "personas",
    dataType: "Array of persona objects",
    data: personas,
  });
});

HOFService.get("/routes", (req:any, res:any) => {
  sendResponse(res, req, {
    status: 200,
    message: "Array of route objects",
    dataType: "array",
    data: routes,
  });
});

HOFService.get("**", (req: any, res: any) => {
  sendResponse(res, req, {
    status: 404,
    message: "Sorry, endpoint not found",
  });
});

const sendResponse = (res:any, req:any, responseObj:any) => {
  const serviceResponse = {
    service: "HOFService",
    version: pJSON.name + "_" + pJSON.version,
    baseurl: getServiceURL(req) + "/",
    time: Date.now(),
    request: {
      method: req.method,
      endoint: getServiceURL(req) + req.path,
    },
    response: {
      ...responseObj,
    },
  };
  res.status(200).send(JSON.stringify(serviceResponse));
};

const getServiceURL = (req:any) => {
  let serviceURL = "https://us-central1-listingslab-pingpong.cloudfunctions.net/HOFService";
  if ( req.hostname === "localhost" ) {
    serviceURL = "http://localhost:5001/listingslab-pingpong/us-central1/HOFService";
  }
  return serviceURL;
};

exports.HOFService = functions.https.onRequest(HOFService);
