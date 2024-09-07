# 百度，高德，腾讯，天地图，WSG84 坐标经纬度互相转换

## demo

[百度，高德，腾讯，天地图等坐标互转](https://kuangyx.cn/docs/%E6%96%87%E7%AB%A0/JS%20Lib/%E7%99%BE%E5%BA%A6%E5%9C%B0%E5%9B%BE%EF%BC%8C%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE%EF%BC%8C%E8%85%BE%E8%AE%AF%E5%9C%B0%E5%9B%BE%EF%BC%8C%E5%A4%A9%E5%9C%B0%E5%9B%BE%E7%AD%89%E5%9D%90%E6%A0%87%E4%BA%92%E8%BD%AC.html)

## TypeScript 

```ts
export type Transform = (coods: number[]) => number[];
/**
 * 墨卡托坐标（EPSG:3857）转=> 地球坐标（EPSG:4326）
 */
export declare const mercator2WSG84: Transform;
/**
 * 地球坐标（EPSG:4326）转=> 墨卡托坐标（EPSG:3857）
 */
export declare const WSG842Mercator: Transform;
/**
 * 墨卡托坐标（EPSG:3857）=> 天地图（EPSG:4490）
 */
export declare const mercator2CGCS2000: Transform;
/**
 * 地球坐标（EPSG:4326）=> 天地图（EPSG:4490）
 */
export declare const WSG842CGCS2000: Transform;
/**
 * 天地图（EPSG:4490）=> 墨卡托坐标（EPSG:3857）
 */
export declare const CGCS20002Mercator: Transform;
/**
 * 天地图（EPSG:4490）=> 地球坐标（EPSG:4326）
 */
export declare const CGCS20002WSG84: Transform;
/**
 * 火星坐标（GCJ02）=> 地球坐标（EPSG:4326）
 */
export declare const GCJ022WSG84: Transform;
/**
 * 地球坐标（EPSG:4326）=> 火星坐标（GCJ02）
 */
export declare const WSG842GCJ02: Transform;
/**
 * 墨卡托坐标（EPSG:3857）=> 火星坐标（GCJ02）
 */
export declare const mercator2GCJ02: Transform;
/**
 * 火星坐标（GCJ02）=> 墨卡托坐标（EPSG:3857）
 */
export declare const GCJ022Mercator: Transform;
/**
 * 墨卡托坐标（EPSG:3857）=> 百度墨卡托（baiduMercator）
 */
export declare const mercator2BaiduMercator: Transform;
/**
 * 百度墨卡托（baiduMercator）=> 墨卡托坐标（EPSG:3857）
 */
export declare const baiduMercator2Mercator: Transform;
/**
 * 地球坐标（EPSG:4326）=> 百度墨卡托（baiduMercator）
 */
export declare const WSG842BaiduMercator: Transform;
/**
 * 百度墨卡托（baiduMercator）=> 地球坐标（EPSG:4326）
 */
export declare const baiduMercator2WSG84: Transform;
/**
 * 地球坐标 => 百度坐标（BD:09）
 */
export declare const WSG842BD09: Transform;
/**
 * 百度坐标（BD:09）=> 地球坐标
 */
export declare const BD092WSG84: Transform;
/**
 * 百度坐标（BD:09）=> 墨卡托坐标（EPSG:3857）
 */
export declare const BD092Mercator: Transform;
/**
 * 百度坐标（BD:09）=> 墨卡托坐标（EPSG:3857）
 */
export declare const mercator2BD09: Transform;
/**
 * 百度墨卡托（baiduMercator）=> 百度坐标（BD:09）
 */
export declare const baiduMercator2BD09: Transform;
/**
 * 百度坐标（BD:09）=> 百度墨卡托（baiduMercator）
 */
export declare const BD092BaiduMercator: Transform;
/**
 * 百度坐标（BD:09）=> 火星坐标（GCJ02）
 */
export declare const BD092GCJ02: Transform;
/**
 * 火星坐标（GCJ02）=> 百度坐标（BD:09）
 */
export declare const GCJ022BD09: Transform;
/**
 * 百度坐标（BD:09）=> 天地图（EPSG:4490）
 */
export declare const BD092CGCS2000: Transform;
/**
 * 天地图（EPSG:4490）=> 百度坐标（BD:09）
 */
export declare const CGCS20002BD09: Transform;
/**
 * 火星坐标（GCJ02）=> 天地图（EPSG:4490）
 */
export declare const GCJ022CGC2000: Transform;
/**
 * 天地图（EPSG:4490）=> 火星坐标（GCJ02）
 */
export declare const CGCS20002GCJ02: Transform;
/**
 * 百度墨卡托 => 天地图（EPSG:4490）
 */
export declare const baiduMercator2CGC2000: Transform;
/**
 * 天地图（EPSG:4490）=> 百度墨卡托
 */
export declare const CGCS20002BaiduMercator: Transform;
```
