// how often to refresh scene, in seconds
export const refreshInterval: number = 1



export const wallBlocksX: number = 21;
export const wallBlocksY: number = 6;
export const wallWidth = 7;
export const wallHeight = 2;
export const wallOffsetX = 0.75;
export const wallOffsetY = 1;
export const wallPixelPrefix = "wall-pixel-";
export const wallPixelZ = 5;

export const wallPixelScale: Vector3 = new Vector3(wallWidth / wallBlocksX - 0.01, wallHeight / wallBlocksY - 0.01, 0.01)


///// Connect to the REST API

export const apiUrl = "http://127.0.0.1:7753"

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};


/*

Color list

Source:
https://www.patternfly.org/styles/color-palette/

+ some are commented to get the entity count down
+ more wall pixels could be added if the palette is truncated

*/
export const blankColor = "#0099CC"

export const paletteColor =  "#666666"

export const swatchColors = [
  blankColor,
  //"#FDBEBF",
  //"#F7BD7F",
  //"#F39D3C",
  //"#EC7A08",
  //"#B35C00",
  //"#773D00",
  // "#3b1f00",
  //"#FBEABC",
  "#F9D67A",
  //"#F5C12E",
  //"#F0AB00",
  //"#B58100",
  "#795600",
  // "#3d2c00",
  //"#E4F5BC",
  "#C8EB79",
  //"#ACE12E",
  "#92D400",
  //"#6CA100",
  "#486B00",
  // // "#253600",
  //"#CFE7CD",
  //"#9ECF99",
  "#6EC664",
  //"#3F9C35",
  "#2D7623",
  "#1E4F18",
  // // "#0f280d",
  //"#BEDEE1",
  //"#7DBDC3",
  //"#3A9CA6",
  "#007A87",
  //"#005C66",
  "#003D44",
  // // "#001f22",
  //"#BEEDF9",
  //"#7CDBF3",
  //"#35CAED",
  "#00B9E4",
  //"#008BAD",
  //"#005C73",
  // // "#002d39",
  //"#DEF3FF",
  //"#BEE1f4",
  //"#7DC3E8",
  //"#39A5DC",
  "#0088CE",
  //"#00659C",
  // // "#004368",
  // // "#002235",
  //"#C7BFFF",
  //"#A18fff",
  //"#8461f7",
  "#703FEC",
  //"#582FC0",
  "#40199A",
  // // "#1f0066",
  // "#fafafa",
  // // "#f5f5f5",
  // "#ededed",
  // // "#d1d1d1",
  //"#BBBBBB",
  // // "#8b8d8f",
  //"#72767B",
  // // "#4d5258",
  //"#393F44",
  // // "#292e34",
  "#030303",
  // "#CC0000",
  "#A30000",
  //"#8B0000",
  //"#470000",
  // "#2c0000",
  paletteColor
]