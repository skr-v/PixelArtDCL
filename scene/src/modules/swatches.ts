

export const swatchPrefix = "swatch-";

// z = 0.1 or else clicks would not fire
export const swatchScale = new Vector3(0.16, 0.16,  0.1)
export const swatchSelectedScale = new Vector3(0.18, 0.18, 0.1)

export const swatchZSelected = -0.06
export const swatchZUnselected = -0.03

@Component('swatch')
export class Swatch {
  x: number
  y: number
  active: boolean
  size: number
  constructor(x : number = 0, y : number = 0){
    this.x = x 
    this.y = y 
    //this.color = color 
    this.active = false
    this.size = 0
  }
}

export const swatches = engine.getComponentGroup(Swatch)


export class GrowSwatches implements ISystem {
 
    update(dt: number) {
      for (let swatch of swatches.entities) {
        let state = swatch.getComponent(Swatch)
        let transform = swatch.getComponent(Transform)
        if (state.active && state.size < 1){
          state.size += dt * 2
          transform.scale = Vector3.Lerp(swatchScale, swatchSelectedScale, state.size)
          transform.position.z = Scalar.Lerp(swatchZUnselected, swatchZSelected, state.size)
        }
        else if (!state.active && state.size > 0){
          state.size -= dt * 2
          transform.scale = Vector3.Lerp(swatchScale, swatchSelectedScale, state.size)
          transform.position.z = Scalar.Lerp(swatchZUnselected, swatchZSelected, state.size)
        }
   
      }
    }
  }