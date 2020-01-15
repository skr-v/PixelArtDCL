import express = require('express');
import cors = require('cors');
import mongoose, { Document, Schema, Model, model} from "mongoose";
import * as bodyParser from "body-parser";
//import { Interface } from "readline";
const validColorPattern = /^#[0-9A-F]{3,6}$/i;

//
// express app config
//
const expressApp = express();
const pixelRouter = express.Router();
const port = 7753;
const host = "127.0.0.1";

expressApp.use(cors());

// mongoose-mongodb config
const mongoserver = '127.0.0.1:27017'; // replace mongodb server address
const database = 'pixelArtDCL';   // replace database name
mongoose.connect(`mongodb://${mongoserver}/${database}`)
    .then(() => {
        console.log("Database connection successful");
    })
    .catch(err => {
        console.error("Database connection error");
    });

//
// Pixel schema and model
//
export interface IPixel{
  setID?: string,
  userID?: string,
  x: number,
  y: number,
  color?: string,
  note?: string,
  timestamp?: Date
}

let pixels: IPixel[] = []

// PixelSchema
const PixelSchema = new Schema({
    setID: String,
    userID: String,
    x: Number,
    y: Number,
    colour: String,
    note: String,
    timestamp: {type: Date, default: Date.now}
});

// Pixel Model
const Pixel = model('Pixel', PixelSchema);

//
// get all pixels
// GET /api/pixels/
//
pixelRouter.get("/", function(req: express.Request, res: express.Response) {
  res.status(200).json(pixels);
});

//
// get one pixel by {x,y}
// GET /api/pixels/pixel/?x=0&y=0
//
pixelRouter.get("/pixel", function(
  req: express.Request,
  res: express.Response
) {
  let { x, y } = req.query;

  if (isNaN(x) === true || isNaN(y) === true) {
    const msg = `x or y were not a number, x: ${x}, y: ${y}`;
    return res.status(400).json({ error: msg });
  }

  x = parseInt(x);
  y = parseInt(y);

  const pixel = pixels.find((pixel) => pixel.x === x && pixel.y === y
  )
  if (pixel){
    res.status(200).json(pixel || {});
  }
  else{
    const msg = `error getting one pixel, x: ${x}, y: ${y}`;
    console.error(msg);
    return res.status(500).json({ error: msg });
  }
});

//
// post a new pixel which does not exist
// or update a pixel that already exists
// POST /api/pixels/pixel
//
pixelRouter.post("/pixel", bodyParser.json(), function(
  req: express.Request,
  res: express.Response
) {
  let { x, y, color } = req.body;

  console.log(x, y, color)

  if (isNaN(x) === true || isNaN(y) === true) {
    const msg = `x or y were not a number, x: ${x}, y: ${y}`;
    return res.status(400).json({ error: msg });
  }

  x = parseInt(x);
  y = parseInt(y);


  if (color && (typeof color !== "string" || validColorPattern.test(color) === false)) {
    const msg = `the color was not valid hex, color: ${color}`;
    console.error(msg);
    return res.status(400).json({ error: msg });
  }
  

  let pixel = pixels.find((pixel) => pixel.x === x && pixel.y === y
  )
  if (pixel != null){
    if(color){
      // update pixel
      pixel.color = color       
      res.status(200).json(pixel)
      console.log(`changed color of existing pixel`)
    }else{
      // remove pixel
      for( var i = 0; i < pixels.length; i++){ 
        if ( pixels[i].x === x && pixels[i].y === y) {
          pixels.splice(i, 1)
          break
        }
      }
      console.log("removed a pixel")
      res.status(200).json(pixels)
    }
    
  }
  else {
    // new pixel
    let newPixel: IPixel = {x: x, y: y, color: color}
    pixels.push(newPixel)
    res.status(200).json(newPixel)
    console.log("new pixel: " + x, " ", y, " color: " , color)
  }

});



//
// attach the pixels REST router
//
expressApp.use("/api/pixels", pixelRouter);

//
// start up the express app
//
expressApp.listen(port, host);
console.log(`listening http://${host}:${port}`);
