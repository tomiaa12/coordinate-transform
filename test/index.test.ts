import { expect, test } from "vitest"
import {
  mercator2WSG84,
  WSG842Mercator,
  WSG842CGCS2000,
  mercator2CGCS2000,
  CGCS20002Mercator,
  CGCS20002WSG84,
  GCJ022WSG84,
  WSG842GCJ02,
  mercator2GCJ02,
  GCJ022Mercator,
  mercator2BaiduMercator,
  baiduMercator2Mercator,
  WSG842BaiduMercator,
  baiduMercator2WSG84,
  WSG842BD09,
  BD092WSG84,
  BD092Mercator,
  mercator2BD09,
  baiduMercator2BD09,
  BD092BaiduMercator,
  BD092GCJ02,
  GCJ022BD09,
  BD092CGCS2000,
  CGCS20002BD09,
  GCJ022CGC2000,
  CGCS20002GCJ02,
} from "../src"

/* 墨卡托 <==> 地球坐标 */
test("mercator2WSG84", () => {
  expect(mercator2WSG84([12579102.459639914, 3248973.789650975])).toStrictEqual(
    [113, 28]
  )
})
test("WSG842Mercator", () => {
  expect(WSG842Mercator([113, 28])).toStrictEqual([
    12579102.459639914, 3248973.7896509725,
  ])
})

/* 墨卡托 <==> 天地图 <==> 地球坐标 */
test("mercator2CGCS2000", () => {
  expect(
    mercator2CGCS2000([12579102.459639914, 3248973.789650975])
  ).toStrictEqual([113, 28])
})
test("WSG842CGCS2000", () => {
  expect(WSG842CGCS2000([113, 28])).toStrictEqual([113, 28])
})
test("CGCS20002Mercator", () => {
  expect(CGCS20002Mercator([113, 28])).toStrictEqual([
    12579102.459639914, 3248973.7896509725,
  ])
})
test("CGCS20002WSG84", () => {
  expect(CGCS20002WSG84([113, 28])).toStrictEqual([113, 28])
})

/* 墨卡托 <==> 火星坐标 <==> 地球坐标 */
test("GCJ022WSG84", () => {
  expect(GCJ022WSG84([112.993892, 27.977529])).toStrictEqual([
    112.9882903362801, 27.98087455081691,
  ])
})
test("WSG842GCJ02", () => {
  expect(WSG842GCJ02([112.9882903362801, 27.98087455081691])).toStrictEqual([112.99387163594689,27.977511638344197])
})
test("mercator2GCJ02", () => {
  expect(mercator2GCJ02([12577808.550611,3246558.869828])).toStrictEqual([112.99395823033076,27.977481340959415])
})
test("GCJ022Mercator", () => {
  expect(GCJ022Mercator([112.99395823033076,27.977481340959415])).toStrictEqual([12577806.291685045,3246556.6881387252])
})

/* 墨卡托 <==> 百度墨卡托 <==> 地球坐标 */
test("mercator2BaiduMercator", () => {
  expect(mercator2BaiduMercator([12577806,3246556])).toStrictEqual([12579296.458857015,3226625.524924728])
})
test("baiduMercator2Mercator", () => {
  expect(baiduMercator2Mercator([12579296.458857015,3226625.524924728])).toStrictEqual([12577803.783885831,3246553.705986516])
})
test("WSG842BaiduMercator", () => {
  expect(WSG842BaiduMercator([112,28])).toStrictEqual([12469269.84948125,3229034.249526351])
})
test("baiduMercator2WSG84", () => {
  expect(baiduMercator2WSG84([12469269.84948125,3229034.249526351])).toStrictEqual([111.99998202307063,27.99998354744847])
})


/* 墨卡托 <==> 百度坐标（BD:09） <==> 地球坐标  */
test("WSG842BD09", () => {
  expect(WSG842BD09([112.988344,27.980797])).toStrictEqual([113.00050344320884,27.983185267846597])
})
test("BD092WSG84", () => {
  expect(BD092WSG84([113.00050344320884,27.983185267846597])).toStrictEqual([112.988324093118,27.98077880762298])
})
test("BD092Mercator", () => {
  expect(BD092Mercator([113.00050344320884,27.983185267846597])).toStrictEqual([12577802.70363126,3246550.653108197])
})
test("mercator2BD09", () => {
  expect(mercator2BD09([12577802.70363126,3246550.653108197])).toStrictEqual([113.00048350911615,27.983166780227513])
})

/* 百度坐标（BD:09） <==> 百度墨卡托（baiduMercator） */
test("baiduMercator2BD09", () => {
  expect(baiduMercator2BD09([12579296.458857015,3226625.524924728])).toStrictEqual([113.00049323728066,27.98319114267681])
})
test("BD092BaiduMercator", () => {
  expect(BD092BaiduMercator([113.00049323728066,27.98319114267681])).toStrictEqual([12579292.020677697,3226620.887821236])
})

/* 百度坐标（BD:09） <==> 火星坐标（GCJ02）*/
test("BD092GCJ02", () => {
  expect(BD092GCJ02([113,28])).toStrictEqual([112.99339680708133,27.99423573216376])
})
test("GCJ022BD09", () => {
  expect(GCJ022BD09([112.99339680708133,27.99423573216376])).toStrictEqual([112.99995961852285,27.999963918754656])
})

/* 百度坐标（BD:09） <==> 天地图（EPSG:4490）*/
test("BD092CGCS2000", () => {
  expect(BD092CGCS2000([113,28])).toStrictEqual([112.98781590450174,27.997602749632723])
})
test("CGCS20002BD09", () => {
  expect(CGCS20002BD09([112.98781590450174,27.997602749632723])).toStrictEqual([112.99997989910817,27.99998147555758])
})

/* 火星坐标（GCJ02） <==> 天地图（EPSG:4490）*/
test("GCJ022CGC2000", () => {
  expect(GCJ022CGC2000([112,27])).toStrictEqual([111.99451847531354, 27.003395847376037])
})
test("CGCS20002GCJ02", () => {
  expect(CGCS20002GCJ02([111.99451847531354, 27.003395847376037])).toStrictEqual([111.99998273805113,26.99998428893099])
})