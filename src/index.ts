import { transform } from "ol/proj"
import proj4 from "proj4"

// @ts-ignore
import projzh from "projzh"

const a = [12574374.258817, 3277228.033098]

proj4.defs("EPSG:4490", "+proj=longlat +ellps=GRS80 +no_defs +type=crs")

export type Coord = number[]
const MERCATOR = "EPSG:3857",
  WSG84 = "EPSG:4326",
  TDT = "EPSG:4490"

/*
 * 
 */
export const mercator2WSG84 = (coord: Coord) => proj4(MERCATOR, WSG84, coord)

export const WSG842Mercator = (coord: Coord) => proj4(WSG84, MERCATOR, coord)

export const mercator2TDT = (coord: Coord) => proj4(MERCATOR, TDT, coord)
export const WSG842TDT = (coord: Coord) => proj4(MERCATOR, TDT, coord)
export const TDT2mercator = (coord: Coord) => proj4(TDT, MERCATOR, coord)

console.log(WSG842Mercator(mercator2WSG84(a)))
