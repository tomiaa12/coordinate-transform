import proj4 from "proj4"

// @ts-ignore
import projzh from "projzh"

proj4.defs("EPSG:4490", "+proj=longlat +ellps=GRS80 +no_defs +type=crs")
export type Transform = (coods: number[]) => number[]

const MERCATOR = "EPSG:3857",
  WSG84 = "EPSG:4326",
  CGCS2000 = "EPSG:4490"

/* 墨卡托 <==> 地球坐标 */
/**
 * 墨卡托坐标（EPSG:3857）转=> 地球坐标（EPSG:4326）
 */
export const mercator2WSG84: Transform = coord => proj4(MERCATOR, WSG84, coord)

/**
 * 地球坐标（EPSG:4326）转=> 墨卡托坐标（EPSG:3857）
 */
export const WSG842Mercator: Transform = coord => proj4(WSG84, MERCATOR, coord)

/* 墨卡托 <==> 天地图 <==> 地球坐标 */
/**
 * 墨卡托坐标（EPSG:3857）=> 天地图（EPSG:4490）
 */
export const mercator2CGCS2000: Transform = coord =>
  proj4(MERCATOR, CGCS2000, coord)

/**
 * 地球坐标（EPSG:4326）=> 天地图（EPSG:4490）
 */
export const WSG842CGCS2000: Transform = coord => proj4(WSG84, CGCS2000, coord)

/**
 * 天地图（EPSG:4490）=> 墨卡托坐标（EPSG:3857）
 */
export const CGCS20002Mercator: Transform = coord =>
  proj4(CGCS2000, MERCATOR, coord)

/**
 * 天地图（EPSG:4490）=> 地球坐标（EPSG:4326）
 */
export const CGCS20002WSG84: Transform = coord => proj4(CGCS2000, WSG84, coord)

/* 墨卡托 <==> 火星坐标 <==> 地球坐标 */
/**
 * 火星坐标（GCJ02）=> 地球坐标（EPSG:4326）
 */
export const GCJ022WSG84: Transform = coord => projzh.datum.gcj02.toWGS84(coord)

/**
 * 地球坐标（EPSG:4326）=> 火星坐标（GCJ02）
 */
export const WSG842GCJ02: Transform = coord =>
  projzh.datum.gcj02.fromWGS84(coord)

/**
 * 墨卡托坐标（EPSG:3857）=> 火星坐标（GCJ02）
 */
export const mercator2GCJ02: Transform = coord =>
  projzh.datum.gcj02.fromWGS84(mercator2WSG84(coord))

/**
 * 火星坐标（GCJ02）=> 墨卡托坐标（EPSG:3857）
 */
export const GCJ022Mercator: Transform = coord =>
  WSG842Mercator(projzh.datum.gcj02.toWGS84(coord))

/* 墨卡托 <==> 百度墨卡托 <==> 地球坐标 */
/**
 * 墨卡托坐标（EPSG:3857）=> 百度墨卡托（baiduMercator）
 */
export const mercator2BaiduMercator: Transform = coord =>
  projzh.smerc2bmerc(coord)

/**
 * 百度墨卡托（baiduMercator）=> 墨卡托坐标（EPSG:3857）
 */
export const baiduMercator2Mercator: Transform = coord =>
  projzh.bmerc2smerc(coord)

/**
 * 地球坐标（EPSG:4326）=> 百度墨卡托（baiduMercator）
 */
export const WSG842BaiduMercator: Transform = coord => projzh.ll2bmerc(coord)

/**
 * 百度墨卡托（baiduMercator）=> 地球坐标（EPSG:4326）
 */
export const baiduMercator2WSG84: Transform = coord => projzh.bmerc2ll(coord)

/* 墨卡托 <==> 百度坐标（BD:09） <==> 地球坐标  */
/**
 * 地球坐标 => 百度坐标（BD:09）
 */
export const WSG842BD09: Transform = coord => projzh.datum.bd09.fromWGS84(coord)

/**
 * 百度坐标（BD:09）=> 地球坐标
 */
export const BD092WSG84: Transform = coord => projzh.datum.bd09.toWGS84(coord)

/**
 * 百度坐标（BD:09）=> 墨卡托坐标（EPSG:3857）
 */
export const BD092Mercator: Transform = coord => WSG842Mercator(projzh.datum.bd09.toWGS84(coord))

/**
 * 百度坐标（BD:09）=> 墨卡托坐标（EPSG:3857）
 */
export const mercator2BD09: Transform = coord => projzh.datum.bd09.fromWGS84(mercator2WSG84(coord))


/* 百度坐标（BD:09） <==> 百度墨卡托（baiduMercator） */
/**
 * 百度墨卡托（baiduMercator）=> 百度坐标（BD:09）
 */
export const baiduMercator2BD09: Transform = coord => WSG842BD09(baiduMercator2WSG84(coord))

/**
 * 百度坐标（BD:09）=> 百度墨卡托（baiduMercator）
 */
export const BD092BaiduMercator: Transform = coord => WSG842BaiduMercator(BD092WSG84(coord))

/* 百度坐标（BD:09） <==> 火星坐标（GCJ02）*/
/**
 * 百度坐标（BD:09）=> 火星坐标（GCJ02）
 */
export const BD092GCJ02: Transform = coord => WSG842GCJ02(BD092WSG84(coord))

/**
 * 火星坐标（GCJ02）=> 百度坐标（BD:09）
 */
export const GCJ022BD09: Transform = coord => WSG842BD09(GCJ022WSG84(coord))

/* 百度坐标（BD:09） <==> 天地图（EPSG:4490）*/
/**
 * 百度坐标（BD:09）=> 天地图（EPSG:4490）
 */
export const BD092CGCS2000: Transform = coord => WSG842CGCS2000(BD092WSG84(coord))

/**
 * 天地图（EPSG:4490）=> 百度坐标（BD:09）
 */
export const CGCS20002BD09: Transform = coord => WSG842BD09(CGCS20002WSG84(coord))

/* 火星坐标（GCJ02） <==> 天地图（EPSG:4490）*/
/**
 * 火星坐标（GCJ02）=> 天地图（EPSG:4490）
 */
export const GCJ022CGC2000: Transform = coord => WSG842CGCS2000(GCJ022WSG84(coord))

/**
 * 天地图（EPSG:4490）=> 火星坐标（GCJ02）
 */
export const CGCS20002GCJ02: Transform = coord => WSG842GCJ02(CGCS20002WSG84(coord))

/* 百度墨卡托 <==> 天地图（EPSG:4490）*/
/**
 * 百度墨卡托 => 天地图（EPSG:4490）
 */
export const baiduMercator2CGC2000: Transform = coord => WSG842CGCS2000(baiduMercator2WSG84(coord))

/**
 * 天地图（EPSG:4490）=> 百度墨卡托
 */
export const CGCS20002BaiduMercator: Transform = coord => WSG842BaiduMercator(CGCS20002WSG84(coord))
