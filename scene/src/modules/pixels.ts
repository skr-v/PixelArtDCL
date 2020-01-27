import { apiUrl, refreshInterval, swatchColors, wallBlocksX, wallBlocksY, wallWidth, wallHeight, wallPixelZ, wallPixelScale, paletteColor, wallOffsetX, wallOffsetY, blankColor } from "../params";

@Component('pixel')
export class Pixel {
  x: number
  y: number
  //color: string
  constructor(x : number = 0, y : number = 0){
    this.x = x 
    this.y = y 
    //this.color = color 
  }
}

export const pixels = engine.getComponentGroup(Pixel)

export class CheckServer implements ISystem {
    timer: number
    constructor(timer: number){
        this.timer = timer
    }
    update(dt:number){
      this.timer -= dt
      if (this.timer <0){
        this.timer = refreshInterval
        getFromServer()
      }
    }
}

export function getFromServer() {

    let url = `${apiUrl}/api/pixels`
  
    executeTask(async () => {
      try {
        let response = await fetch(url)
        let json = await response.json()
        //log(json)
        for (let pixel of pixels.entities){
          let x = pixel.getComponent(Pixel).x
          let y = pixel.getComponent(Pixel).y
          let pix = json.find((p)=> p.x === x && p.y === y )
          if(pix && pix.color){
            if (wallPixelColorMaterial[pix.color]){
			  let newMaterial = wallPixelColorMaterial[pix.color]
			  pixel.removeComponent(Material)
              pixel.addComponentOrReplace(newMaterial)
             }
             else{
               log("pixel color" + pix.color + " not supported on " + x + " & " + y)
             }   
          }
          else {
			pixel.removeComponent(Material)
            pixel.addComponentOrReplace(wallPixelTransparentMaterial)
          }
        }
        log("got data from server")
      } catch {
        log("error getting all pixels")
      }
  
     })
}

/// Materials

export let wallPixelColorMaterial = {}

for (let i = 0; i< swatchColors.length; i++){
  let material = new Material()
  let color = Color3.FromHexString(swatchColors[i])
  material.ambientColor = color
  material.albedoColor = color
  material.reflectivityColor = color
  wallPixelColorMaterial[swatchColors[i]] = material  
}

  let paletteMaterial = new Material()
  let color = Color3.FromHexString(paletteColor)
  paletteMaterial.ambientColor = color
  paletteMaterial.albedoColor = color
  paletteMaterial.reflectivityColor = color
  wallPixelColorMaterial[paletteColor] = paletteMaterial


let wallPixelOpacity = 0.1

let transparentColor = Color4.FromColor3(Color3.Black(), wallPixelOpacity)

export let wallPixelTransparentMaterial = new Material()
wallPixelTransparentMaterial.alpha = 0.1
wallPixelTransparentMaterial.ambientColor= transparentColor
wallPixelTransparentMaterial.albedoColor=transparentColor
wallPixelTransparentMaterial.reflectivityColor=transparentColor
wallPixelTransparentMaterial.hasAlpha=true
wallPixelTransparentMaterial.transparencyMode =2
