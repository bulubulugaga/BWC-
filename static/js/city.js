// 市级城市列表
const citys = [
  {
    "id": "110000",
    "name": "北京",
    "fullname": "北京市",
    "pinyin": [
      "bei",
      "jing"
    ],
    "location": {
      "lat": 39.90469,
      "lng": 116.40717
    },
    "cidx": [
      0,
      15
    ]
  },
  {
    "id": "120000",
    "name": "天津",
    "fullname": "天津市",
    "pinyin": [
      "tian",
      "jin"
    ],
    "location": {
      "lat": 39.0851,
      "lng": 117.19937
    },
    "cidx": [
      16,
      31
    ]
  }, {
    "id": "130100",
    "name": "石家庄",
    "fullname": "石家庄市",
    "pinyin": [
      "shi",
      "jia",
      "zhuang"
    ],
    "location": {
      "lat": 38.04276,
      "lng": 114.5143
    },
    "cidx": [
      0,
      21
    ]
  },
  {
    "id": "130200",
    "name": "唐山",
    "fullname": "唐山市",
    "pinyin": [
      "tang",
      "shan"
    ],
    "location": {
      "lat": 39.63048,
      "lng": 118.18058
    },
    "cidx": [
      22,
      36
    ]
  },
  {
    "id": "130300",
    "name": "秦皇岛",
    "fullname": "秦皇岛市",
    "pinyin": [
      "qin",
      "huang",
      "dao"
    ],
    "location": {
      "lat": 39.93545,
      "lng": 119.59964
    },
    "cidx": [
      37,
      43
    ]
  },
  {
    "id": "130400",
    "name": "邯郸",
    "fullname": "邯郸市",
    "pinyin": [
      "han",
      "dan"
    ],
    "location": {
      "lat": 36.62556,
      "lng": 114.53918
    },
    "cidx": [
      44,
      61
    ]
  },
  {
    "id": "130500",
    "name": "邢台",
    "fullname": "邢台市",
    "pinyin": [
      "xing",
      "tai"
    ],
    "location": {
      "lat": 37.07055,
      "lng": 114.50443
    },
    "cidx": [
      62,
      80
    ]
  },
  {
    "id": "130600",
    "name": "保定",
    "fullname": "保定市",
    "pinyin": [
      "bao",
      "ding"
    ],
    "location": {
      "lat": 38.87396,
      "lng": 115.46459
    },
    "cidx": [
      81,
      104
    ]
  },
  {
    "id": "130700",
    "name": "张家口",
    "fullname": "张家口市",
    "pinyin": [
      "zhang",
      "jia",
      "kou"
    ],
    "location": {
      "lat": 40.82444,
      "lng": 114.88755
    },
    "cidx": [
      105,
      120
    ]
  },
  {
    "id": "130800",
    "name": "承德",
    "fullname": "承德市",
    "pinyin": [
      "cheng",
      "de"
    ],
    "location": {
      "lat": 40.9515,
      "lng": 117.9634
    },
    "cidx": [
      121,
      131
    ]
  },
  {
    "id": "130900",
    "name": "沧州",
    "fullname": "沧州市",
    "pinyin": [
      "cang",
      "zhou"
    ],
    "location": {
      "lat": 38.30441,
      "lng": 116.83869
    },
    "cidx": [
      132,
      147
    ]
  },
  {
    "id": "131000",
    "name": "廊坊",
    "fullname": "廊坊市",
    "pinyin": [
      "lang",
      "fang"
    ],
    "location": {
      "lat": 39.53775,
      "lng": 116.68376
    },
    "cidx": [
      148,
      157
    ]
  },
  {
    "id": "131100",
    "name": "衡水",
    "fullname": "衡水市",
    "pinyin": [
      "heng",
      "shui"
    ],
    "location": {
      "lat": 37.73886,
      "lng": 115.67054
    },
    "cidx": [
      158,
      168
    ]
  },
  {
    "id": "140100",
    "name": "太原",
    "fullname": "太原市",
    "pinyin": [
      "tai",
      "yuan"
    ],
    "location": {
      "lat": 37.87059,
      "lng": 112.55067
    },
    "cidx": [
      169,
      178
    ]
  },
  {
    "id": "140200",
    "name": "大同",
    "fullname": "大同市",
    "pinyin": [
      "da",
      "tong"
    ],
    "location": {
      "lat": 40.07637,
      "lng": 113.30001
    },
    "cidx": [
      179,
      188
    ]
  },
  {
    "id": "140300",
    "name": "阳泉",
    "fullname": "阳泉市",
    "pinyin": [
      "yang",
      "quan"
    ],
    "location": {
      "lat": 37.85668,
      "lng": 113.58047
    },
    "cidx": [
      189,
      193
    ]
  },
  {
    "id": "140400",
    "name": "长治",
    "fullname": "长治市",
    "pinyin": [
      "chang",
      "zhi"
    ],
    "location": {
      "lat": 36.19581,
      "lng": 113.11649
    },
    "cidx": [
      194,
      205
    ]
  },
  {
    "id": "140500",
    "name": "晋城",
    "fullname": "晋城市",
    "pinyin": [
      "jin",
      "cheng"
    ],
    "location": {
      "lat": 35.49039,
      "lng": 112.85113
    },
    "cidx": [
      206,
      211
    ]
  },
  {
    "id": "140600",
    "name": "朔州",
    "fullname": "朔州市",
    "pinyin": [
      "shuo",
      "zhou"
    ],
    "location": {
      "lat": 39.33155,
      "lng": 112.43286
    },
    "cidx": [
      212,
      217
    ]
  },
  {
    "id": "140700",
    "name": "晋中",
    "fullname": "晋中市",
    "pinyin": [
      "jin",
      "zhong"
    ],
    "location": {
      "lat": 37.68702,
      "lng": 112.75278
    },
    "cidx": [
      218,
      228
    ]
  },
  {
    "id": "140800",
    "name": "运城",
    "fullname": "运城市",
    "pinyin": [
      "yun",
      "cheng"
    ],
    "location": {
      "lat": 35.02628,
      "lng": 111.00699
    },
    "cidx": [
      229,
      241
    ]
  },
  {
    "id": "140900",
    "name": "忻州",
    "fullname": "忻州市",
    "pinyin": [
      "xin",
      "zhou"
    ],
    "location": {
      "lat": 38.4167,
      "lng": 112.73418
    },
    "cidx": [
      242,
      255
    ]
  },
  {
    "id": "141000",
    "name": "临汾",
    "fullname": "临汾市",
    "pinyin": [
      "lin",
      "fen"
    ],
    "location": {
      "lat": 36.08822,
      "lng": 111.51962
    },
    "cidx": [
      256,
      272
    ]
  },
  {
    "id": "141100",
    "name": "吕梁",
    "fullname": "吕梁市",
    "pinyin": [
      "lv",
      "liang"
    ],
    "location": {
      "lat": 37.51934,
      "lng": 111.14165
    },
    "cidx": [
      273,
      285
    ]
  },
  {
    "id": "150100",
    "name": "呼和浩特",
    "fullname": "呼和浩特市",
    "pinyin": [
      "hu",
      "he",
      "hao",
      "te"
    ],
    "location": {
      "lat": 40.84149,
      "lng": 111.75199
    },
    "cidx": [
      286,
      294
    ]
  },
  {
    "id": "150200",
    "name": "包头",
    "fullname": "包头市",
    "pinyin": [
      "bao",
      "tou"
    ],
    "location": {
      "lat": 40.65781,
      "lng": 109.84021
    },
    "cidx": [
      295,
      303
    ]
  },
  {
    "id": "150300",
    "name": "乌海",
    "fullname": "乌海市",
    "pinyin": [
      "wu",
      "hai"
    ],
    "location": {
      "lat": 39.65384,
      "lng": 106.79546
    },
    "cidx": [
      304,
      306
    ]
  },
  {
    "id": "150400",
    "name": "赤峰",
    "fullname": "赤峰市",
    "pinyin": [
      "chi",
      "feng"
    ],
    "location": {
      "lat": 42.2586,
      "lng": 118.88894
    },
    "cidx": [
      307,
      318
    ]
  },
  {
    "id": "150500",
    "name": "通辽",
    "fullname": "通辽市",
    "pinyin": [
      "tong",
      "liao"
    ],
    "location": {
      "lat": 43.65247,
      "lng": 122.24469
    },
    "cidx": [
      319,
      326
    ]
  },
  {
    "id": "150600",
    "name": "鄂尔多斯",
    "fullname": "鄂尔多斯市",
    "pinyin": [
      "e",
      "er",
      "duo",
      "si"
    ],
    "location": {
      "lat": 39.60845,
      "lng": 109.78087
    },
    "cidx": [
      327,
      335
    ]
  },
  {
    "id": "150700",
    "name": "呼伦贝尔",
    "fullname": "呼伦贝尔市",
    "pinyin": [
      "hu",
      "lun",
      "bei",
      "er"
    ],
    "location": {
      "lat": 49.21163,
      "lng": 119.76584
    },
    "cidx": [
      336,
      349
    ]
  },
  {
    "id": "150800",
    "name": "巴彦淖尔",
    "fullname": "巴彦淖尔市",
    "pinyin": [
      "ba",
      "yan",
      "nao",
      "er"
    ],
    "location": {
      "lat": 40.74317,
      "lng": 107.38773
    },
    "cidx": [
      350,
      356
    ]
  },
  {
    "id": "150900",
    "name": "乌兰察布",
    "fullname": "乌兰察布市",
    "pinyin": [
      "wu",
      "lan",
      "cha",
      "bu"
    ],
    "location": {
      "lat": 40.99391,
      "lng": 113.13376
    },
    "cidx": [
      357,
      367
    ]
  },
  {
    "id": "152200",
    "name": "兴安",
    "fullname": "兴安盟",
    "pinyin": [
      "xing",
      "an"
    ],
    "location": {
      "lat": 46.08208,
      "lng": 122.03818
    },
    "cidx": [
      368,
      373
    ]
  },
  {
    "id": "152500",
    "name": "锡林郭勒",
    "fullname": "锡林郭勒盟",
    "pinyin": [
      "xi",
      "lin",
      "guo",
      "le"
    ],
    "location": {
      "lat": 43.9332,
      "lng": 116.04775
    },
    "cidx": [
      374,
      385
    ]
  },
  {
    "id": "152900",
    "name": "阿拉善",
    "fullname": "阿拉善盟",
    "pinyin": [
      "a",
      "la",
      "shan"
    ],
    "location": {
      "lat": 38.85153,
      "lng": 105.72898
    },
    "cidx": [
      386,
      388
    ]
  }, {
    "id": "210100",
    "name": "沈阳",
    "fullname": "沈阳市",
    "pinyin": [
      "shen",
      "yang"
    ],
    "location": {
      "lat": 41.67718,
      "lng": 123.4631
    },
    "cidx": [
      389,
      401
    ]
  },
  {
    "id": "210200",
    "name": "大连",
    "fullname": "大连市",
    "pinyin": [
      "da",
      "lian"
    ],
    "location": {
      "lat": 38.91369,
      "lng": 121.61476
    },
    "cidx": [
      402,
      411
    ]
  },
  {
    "id": "210300",
    "name": "鞍山",
    "fullname": "鞍山市",
    "pinyin": [
      "an",
      "shan"
    ],
    "location": {
      "lat": 41.10777,
      "lng": 122.9946
    },
    "cidx": [
      412,
      418
    ]
  },
  {
    "id": "210400",
    "name": "抚顺",
    "fullname": "抚顺市",
    "pinyin": [
      "fu",
      "shun"
    ],
    "location": {
      "lat": 41.87971,
      "lng": 123.95722
    },
    "cidx": [
      419,
      425
    ]
  },
  {
    "id": "210500",
    "name": "本溪",
    "fullname": "本溪市",
    "pinyin": [
      "ben",
      "xi"
    ],
    "location": {
      "lat": 41.29413,
      "lng": 123.76686
    },
    "cidx": [
      426,
      431
    ]
  },
  {
    "id": "210600",
    "name": "丹东",
    "fullname": "丹东市",
    "pinyin": [
      "dan",
      "dong"
    ],
    "location": {
      "lat": 39.9998,
      "lng": 124.35601
    },
    "cidx": [
      432,
      437
    ]
  },
  {
    "id": "210700",
    "name": "锦州",
    "fullname": "锦州市",
    "pinyin": [
      "jin",
      "zhou"
    ],
    "location": {
      "lat": 41.09515,
      "lng": 121.12703
    },
    "cidx": [
      438,
      444
    ]
  },
  {
    "id": "210800",
    "name": "营口",
    "fullname": "营口市",
    "pinyin": [
      "ying",
      "kou"
    ],
    "location": {
      "lat": 40.66683,
      "lng": 122.2349
    },
    "cidx": [
      445,
      450
    ]
  },
  {
    "id": "210900",
    "name": "阜新",
    "fullname": "阜新市",
    "pinyin": [
      "fu",
      "xin"
    ],
    "location": {
      "lat": 42.02166,
      "lng": 121.67011
    },
    "cidx": [
      451,
      457
    ]
  },
  {
    "id": "211000",
    "name": "辽阳",
    "fullname": "辽阳市",
    "pinyin": [
      "liao",
      "yang"
    ],
    "location": {
      "lat": 41.26809,
      "lng": 123.23736
    },
    "cidx": [
      458,
      464
    ]
  },
  {
    "id": "211100",
    "name": "盘锦",
    "fullname": "盘锦市",
    "pinyin": [
      "pan",
      "jin"
    ],
    "location": {
      "lat": 41.11996,
      "lng": 122.07078
    },
    "cidx": [
      465,
      468
    ]
  },
  {
    "id": "211200",
    "name": "铁岭",
    "fullname": "铁岭市",
    "pinyin": [
      "tie",
      "ling"
    ],
    "location": {
      "lat": 42.2862,
      "lng": 123.84241
    },
    "cidx": [
      469,
      475
    ]
  },
  {
    "id": "211300",
    "name": "朝阳",
    "fullname": "朝阳市",
    "pinyin": [
      "chao",
      "yang"
    ],
    "location": {
      "lat": 41.57347,
      "lng": 120.4508
    },
    "cidx": [
      476,
      482
    ]
  },
  {
    "id": "211400",
    "name": "葫芦岛",
    "fullname": "葫芦岛市",
    "pinyin": [
      "hu",
      "lu",
      "dao"
    ],
    "location": {
      "lat": 40.711,
      "lng": 120.83699
    },
    "cidx": [
      483,
      488
    ]
  },
  {
    "id": "220100",
    "name": "长春",
    "fullname": "长春市",
    "pinyin": [
      "chang",
      "chun"
    ],
    "location": {
      "lat": 43.81602,
      "lng": 125.32357
    },
    "cidx": [
      489,
      498
    ]
  },
  {
    "id": "220200",
    "name": "吉林",
    "fullname": "吉林市",
    "pinyin": [
      "ji",
      "lin"
    ],
    "location": {
      "lat": 43.83784,
      "lng": 126.54944
    },
    "cidx": [
      499,
      507
    ]
  },
  {
    "id": "220300",
    "name": "四平",
    "fullname": "四平市",
    "pinyin": [
      "si",
      "ping"
    ],
    "location": {
      "lat": 43.16646,
      "lng": 124.35036
    },
    "cidx": [
      508,
      513
    ]
  },
  {
    "id": "220400",
    "name": "辽源",
    "fullname": "辽源市",
    "pinyin": [
      "liao",
      "yuan"
    ],
    "location": {
      "lat": 42.88805,
      "lng": 125.14368
    },
    "cidx": [
      514,
      517
    ]
  },
  {
    "id": "220500",
    "name": "通化",
    "fullname": "通化市",
    "pinyin": [
      "tong",
      "hua"
    ],
    "location": {
      "lat": 41.72829,
      "lng": 125.9399
    },
    "cidx": [
      518,
      524
    ]
  },
  {
    "id": "220600",
    "name": "白山",
    "fullname": "白山市",
    "pinyin": [
      "bai",
      "shan"
    ],
    "location": {
      "lat": 41.9408,
      "lng": 126.42443
    },
    "cidx": [
      525,
      530
    ]
  },
  {
    "id": "220700",
    "name": "松原",
    "fullname": "松原市",
    "pinyin": [
      "song",
      "yuan"
    ],
    "location": {
      "lat": 45.1411,
      "lng": 124.82515
    },
    "cidx": [
      531,
      535
    ]
  },
  {
    "id": "220800",
    "name": "白城",
    "fullname": "白城市",
    "pinyin": [
      "bai",
      "cheng"
    ],
    "location": {
      "lat": 45.6196,
      "lng": 122.83871
    },
    "cidx": [
      536,
      540
    ]
  },
  {
    "id": "222400",
    "name": "延边",
    "fullname": "延边朝鲜族自治州",
    "pinyin": [
      "yan",
      "bian"
    ],
    "location": {
      "lat": 42.89119,
      "lng": 129.5091
    },
    "cidx": [
      541,
      548
    ]
  },
  {
    "id": "230100",
    "name": "哈尔滨",
    "fullname": "哈尔滨市",
    "pinyin": [
      "ha",
      "er",
      "bin"
    ],
    "location": {
      "lat": 45.80216,
      "lng": 126.5358
    },
    "cidx": [
      549,
      566
    ]
  },
  {
    "id": "230200",
    "name": "齐齐哈尔",
    "fullname": "齐齐哈尔市",
    "pinyin": [
      "qi",
      "qi",
      "ha",
      "er"
    ],
    "location": {
      "lat": 47.35431,
      "lng": 123.91796
    },
    "cidx": [
      567,
      582
    ]
  },
  {
    "id": "230300",
    "name": "鸡西",
    "fullname": "鸡西市",
    "pinyin": [
      "ji",
      "xi"
    ],
    "location": {
      "lat": 45.29524,
      "lng": 130.96954
    },
    "cidx": [
      583,
      591
    ]
  },
  {
    "id": "230400",
    "name": "鹤岗",
    "fullname": "鹤岗市",
    "pinyin": [
      "he",
      "gang"
    ],
    "location": {
      "lat": 47.34989,
      "lng": 130.29785
    },
    "cidx": [
      592,
      599
    ]
  },
  {
    "id": "230500",
    "name": "双鸭山",
    "fullname": "双鸭山市",
    "pinyin": [
      "shuang",
      "ya",
      "shan"
    ],
    "location": {
      "lat": 46.64658,
      "lng": 131.1591
    },
    "cidx": [
      600,
      607
    ]
  },
  {
    "id": "230600",
    "name": "大庆",
    "fullname": "大庆市",
    "pinyin": [
      "da",
      "qing"
    ],
    "location": {
      "lat": 46.58758,
      "lng": 125.10307
    },
    "cidx": [
      608,
      616
    ]
  },
  {
    "id": "230700",
    "name": "伊春",
    "fullname": "伊春市",
    "pinyin": [
      "yi",
      "chun"
    ],
    "location": {
      "lat": 47.72752,
      "lng": 128.84049
    },
    "cidx": [
      617,
      626
    ]
  },
  {
    "id": "230800",
    "name": "佳木斯",
    "fullname": "佳木斯市",
    "pinyin": [
      "jia",
      "mu",
      "si"
    ],
    "location": {
      "lat": 46.79977,
      "lng": 130.31882
    },
    "cidx": [
      627,
      636
    ]
  },
  {
    "id": "230900",
    "name": "七台河",
    "fullname": "七台河市",
    "pinyin": [
      "qi",
      "tai",
      "he"
    ],
    "location": {
      "lat": 45.77065,
      "lng": 131.00306
    },
    "cidx": [
      637,
      640
    ]
  },
  {
    "id": "231000",
    "name": "牡丹江",
    "fullname": "牡丹江市",
    "pinyin": [
      "mu",
      "dan",
      "jiang"
    ],
    "location": {
      "lat": 44.55269,
      "lng": 129.63244
    },
    "cidx": [
      641,
      650
    ]
  },
  {
    "id": "231100",
    "name": "黑河",
    "fullname": "黑河市",
    "pinyin": [
      "hei",
      "he"
    ],
    "location": {
      "lat": 50.24523,
      "lng": 127.52852
    },
    "cidx": [
      651,
      656
    ]
  },
  {
    "id": "231200",
    "name": "绥化",
    "fullname": "绥化市",
    "pinyin": [
      "sui",
      "hua"
    ],
    "location": {
      "lat": 46.65246,
      "lng": 126.96932
    },
    "cidx": [
      657,
      666
    ]
  },
  {
    "id": "232700",
    "name": "大兴安岭",
    "fullname": "大兴安岭地区",
    "pinyin": [
      "da",
      "xing",
      "an",
      "ling"
    ],
    "location": {
      "lat": 51.92398,
      "lng": 124.59216
    },
    "cidx": [
      667,
      670
    ]
  }, {
    "id": "310000",
    "name": "上海",
    "fullname": "上海市",
    "pinyin": [
      "shang",
      "hai"
    ],
    "location": {
      "lat": 31.23037,
      "lng": 121.4737
    },
    "cidx": [
      102,
      117
    ]
  }, {
    "id": "320100",
    "name": "南京",
    "fullname": "南京市",
    "pinyin": [
      "nan",
      "jing"
    ],
    "location": {
      "lat": 32.05838,
      "lng": 118.79647
    },
    "cidx": [
      671,
      681
    ]
  },
  {
    "id": "320200",
    "name": "无锡",
    "fullname": "无锡市",
    "pinyin": [
      "wu",
      "xi"
    ],
    "location": {
      "lat": 31.49099,
      "lng": 120.31237
    },
    "cidx": [
      682,
      688
    ]
  },
  {
    "id": "320300",
    "name": "徐州",
    "fullname": "徐州市",
    "pinyin": [
      "xu",
      "zhou"
    ],
    "location": {
      "lat": 34.2044,
      "lng": 117.28577
    },
    "cidx": [
      689,
      698
    ]
  },
  {
    "id": "320400",
    "name": "常州",
    "fullname": "常州市",
    "pinyin": [
      "chang",
      "zhou"
    ],
    "location": {
      "lat": 31.81072,
      "lng": 119.97365
    },
    "cidx": [
      699,
      704
    ]
  },
  {
    "id": "320500",
    "name": "苏州",
    "fullname": "苏州市",
    "pinyin": [
      "su",
      "zhou"
    ],
    "location": {
      "lat": 31.29834,
      "lng": 120.58319
    },
    "cidx": [
      705,
      713
    ]
  },
  {
    "id": "320600",
    "name": "南通",
    "fullname": "南通市",
    "pinyin": [
      "nan",
      "tong"
    ],
    "location": {
      "lat": 31.97958,
      "lng": 120.89371
    },
    "cidx": [
      714,
      721
    ]
  },
  {
    "id": "320700",
    "name": "连云港",
    "fullname": "连云港市",
    "pinyin": [
      "lian",
      "yun",
      "gang"
    ],
    "location": {
      "lat": 34.59669,
      "lng": 119.22295
    },
    "cidx": [
      722,
      727
    ]
  },
  {
    "id": "320800",
    "name": "淮安",
    "fullname": "淮安市",
    "pinyin": [
      "huai",
      "an"
    ],
    "location": {
      "lat": 33.61016,
      "lng": 119.01595
    },
    "cidx": [
      728,
      734
    ]
  },
  {
    "id": "320900",
    "name": "盐城",
    "fullname": "盐城市",
    "pinyin": [
      "yan",
      "cheng"
    ],
    "location": {
      "lat": 33.34951,
      "lng": 120.16164
    },
    "cidx": [
      735,
      743
    ]
  },
  {
    "id": "321000",
    "name": "扬州",
    "fullname": "扬州市",
    "pinyin": [
      "yang",
      "zhou"
    ],
    "location": {
      "lat": 32.39358,
      "lng": 119.41269
    },
    "cidx": [
      744,
      749
    ]
  },
  {
    "id": "321100",
    "name": "镇江",
    "fullname": "镇江市",
    "pinyin": [
      "zhen",
      "jiang"
    ],
    "location": {
      "lat": 32.18959,
      "lng": 119.425
    },
    "cidx": [
      750,
      755
    ]
  },
  {
    "id": "321200",
    "name": "泰州",
    "fullname": "泰州市",
    "pinyin": [
      "tai",
      "zhou"
    ],
    "location": {
      "lat": 32.45546,
      "lng": 119.92554
    },
    "cidx": [
      756,
      761
    ]
  },
  {
    "id": "321300",
    "name": "宿迁",
    "fullname": "宿迁市",
    "pinyin": [
      "su",
      "qian"
    ],
    "location": {
      "lat": 33.96193,
      "lng": 118.27549
    },
    "cidx": [
      762,
      766
    ]
  },
  {
    "id": "330100",
    "name": "杭州",
    "fullname": "杭州市",
    "pinyin": [
      "hang",
      "zhou"
    ],
    "location": {
      "lat": 30.27415,
      "lng": 120.15515
    },
    "cidx": [
      767,
      779
    ]
  },
  {
    "id": "330200",
    "name": "宁波",
    "fullname": "宁波市",
    "pinyin": [
      "ning",
      "bo"
    ],
    "location": {
      "lat": 29.87386,
      "lng": 121.55027
    },
    "cidx": [
      780,
      789
    ]
  },
  {
    "id": "330300",
    "name": "温州",
    "fullname": "温州市",
    "pinyin": [
      "wen",
      "zhou"
    ],
    "location": {
      "lat": 27.99492,
      "lng": 120.69939
    },
    "cidx": [
      790,
      801
    ]
  },
  {
    "id": "330400",
    "name": "嘉兴",
    "fullname": "嘉兴市",
    "pinyin": [
      "jia",
      "xing"
    ],
    "location": {
      "lat": 30.74501,
      "lng": 120.7555
    },
    "cidx": [
      802,
      808
    ]
  },
  {
    "id": "330500",
    "name": "湖州",
    "fullname": "湖州市",
    "pinyin": [
      "hu",
      "zhou"
    ],
    "location": {
      "lat": 30.89305,
      "lng": 120.08805
    },
    "cidx": [
      809,
      813
    ]
  },
  {
    "id": "330600",
    "name": "绍兴",
    "fullname": "绍兴市",
    "pinyin": [
      "shao",
      "xing"
    ],
    "location": {
      "lat": 30.03033,
      "lng": 120.5802
    },
    "cidx": [
      814,
      819
    ]
  },
  {
    "id": "330700",
    "name": "金华",
    "fullname": "金华市",
    "pinyin": [
      "jin",
      "hua"
    ],
    "location": {
      "lat": 29.07812,
      "lng": 119.64759
    },
    "cidx": [
      820,
      828
    ]
  },
  {
    "id": "330800",
    "name": "衢州",
    "fullname": "衢州市",
    "pinyin": [
      "qu",
      "zhou"
    ],
    "location": {
      "lat": 28.93592,
      "lng": 118.87419
    },
    "cidx": [
      829,
      834
    ]
  },
  {
    "id": "330900",
    "name": "舟山",
    "fullname": "舟山市",
    "pinyin": [
      "zhou",
      "shan"
    ],
    "location": {
      "lat": 29.98539,
      "lng": 122.20778
    },
    "cidx": [
      835,
      838
    ]
  },
  {
    "id": "331000",
    "name": "台州",
    "fullname": "台州市",
    "pinyin": [
      "tai",
      "zhou"
    ],
    "location": {
      "lat": 28.65611,
      "lng": 121.42056
    },
    "cidx": [
      839,
      847
    ]
  },
  {
    "id": "331100",
    "name": "丽水",
    "fullname": "丽水市",
    "pinyin": [
      "li",
      "shui"
    ],
    "location": {
      "lat": 28.4672,
      "lng": 119.92293
    },
    "cidx": [
      848,
      856
    ]
  },
  {
    "id": "340100",
    "name": "合肥",
    "fullname": "合肥市",
    "pinyin": [
      "he",
      "fei"
    ],
    "location": {
      "lat": 31.82057,
      "lng": 117.22901
    },
    "cidx": [
      857,
      865
    ]
  },
  {
    "id": "340200",
    "name": "芜湖",
    "fullname": "芜湖市",
    "pinyin": [
      "wu",
      "hu"
    ],
    "location": {
      "lat": 31.35246,
      "lng": 118.43313
    },
    "cidx": [
      866,
      873
    ]
  },
  {
    "id": "340300",
    "name": "蚌埠",
    "fullname": "蚌埠市",
    "pinyin": [
      "beng",
      "bu"
    ],
    "location": {
      "lat": 32.91548,
      "lng": 117.38932
    },
    "cidx": [
      874,
      880
    ]
  },
  {
    "id": "340400",
    "name": "淮南",
    "fullname": "淮南市",
    "pinyin": [
      "huai",
      "nan"
    ],
    "location": {
      "lat": 32.62549,
      "lng": 116.9998
    },
    "cidx": [
      881,
      887
    ]
  },
  {
    "id": "340500",
    "name": "马鞍山",
    "fullname": "马鞍山市",
    "pinyin": [
      "ma",
      "an",
      "shan"
    ],
    "location": {
      "lat": 31.67067,
      "lng": 118.50611
    },
    "cidx": [
      888,
      893
    ]
  },
  {
    "id": "340600",
    "name": "淮北",
    "fullname": "淮北市",
    "pinyin": [
      "huai",
      "bei"
    ],
    "location": {
      "lat": 33.95479,
      "lng": 116.79834
    },
    "cidx": [
      894,
      897
    ]
  },
  {
    "id": "340700",
    "name": "铜陵",
    "fullname": "铜陵市",
    "pinyin": [
      "tong",
      "ling"
    ],
    "location": {
      "lat": 30.94486,
      "lng": 117.81232
    },
    "cidx": [
      898,
      901
    ]
  },
  {
    "id": "340800",
    "name": "安庆",
    "fullname": "安庆市",
    "pinyin": [
      "an",
      "qing"
    ],
    "location": {
      "lat": 30.54294,
      "lng": 117.06354
    },
    "cidx": [
      902,
      911
    ]
  },
  {
    "id": "341000",
    "name": "黄山",
    "fullname": "黄山市",
    "pinyin": [
      "huang",
      "shan"
    ],
    "location": {
      "lat": 29.71517,
      "lng": 118.33866
    },
    "cidx": [
      912,
      918
    ]
  },
  {
    "id": "341100",
    "name": "滁州",
    "fullname": "滁州市",
    "pinyin": [
      "chu",
      "zhou"
    ],
    "location": {
      "lat": 32.30181,
      "lng": 118.31683
    },
    "cidx": [
      919,
      926
    ]
  },
  {
    "id": "341200",
    "name": "阜阳",
    "fullname": "阜阳市",
    "pinyin": [
      "fu",
      "yang"
    ],
    "location": {
      "lat": 32.88963,
      "lng": 115.81495
    },
    "cidx": [
      927,
      934
    ]
  },
  {
    "id": "341300",
    "name": "宿州",
    "fullname": "宿州市",
    "pinyin": [
      "su",
      "zhou"
    ],
    "location": {
      "lat": 33.64614,
      "lng": 116.96391
    },
    "cidx": [
      935,
      939
    ]
  },
  {
    "id": "341500",
    "name": "六安",
    "fullname": "六安市",
    "pinyin": [
      "liu",
      "an"
    ],
    "location": {
      "lat": 31.73488,
      "lng": 116.52324
    },
    "cidx": [
      940,
      946
    ]
  },
  {
    "id": "341600",
    "name": "亳州",
    "fullname": "亳州市",
    "pinyin": [
      "bo",
      "zhou"
    ],
    "location": {
      "lat": 33.84461,
      "lng": 115.77931
    },
    "cidx": [
      947,
      950
    ]
  },
  {
    "id": "341700",
    "name": "池州",
    "fullname": "池州市",
    "pinyin": [
      "chi",
      "zhou"
    ],
    "location": {
      "lat": 30.66469,
      "lng": 117.49142
    },
    "cidx": [
      951,
      954
    ]
  },
  {
    "id": "341800",
    "name": "宣城",
    "fullname": "宣城市",
    "pinyin": [
      "xuan",
      "cheng"
    ],
    "location": {
      "lat": 30.94078,
      "lng": 118.75866
    },
    "cidx": [
      955,
      961
    ]
  },
  {
    "id": "350100",
    "name": "福州",
    "fullname": "福州市",
    "pinyin": [
      "fu",
      "zhou"
    ],
    "location": {
      "lat": 26.07421,
      "lng": 119.29647
    },
    "cidx": [
      962,
      974
    ]
  },
  {
    "id": "350200",
    "name": "厦门",
    "fullname": "厦门市",
    "pinyin": [
      "xia",
      "men"
    ],
    "location": {
      "lat": 24.47951,
      "lng": 118.08948
    },
    "cidx": [
      975,
      980
    ]
  },
  {
    "id": "350300",
    "name": "莆田",
    "fullname": "莆田市",
    "pinyin": [
      "pu",
      "tian"
    ],
    "location": {
      "lat": 25.454,
      "lng": 119.00771
    },
    "cidx": [
      981,
      985
    ]
  },
  {
    "id": "350400",
    "name": "三明",
    "fullname": "三明市",
    "pinyin": [
      "san",
      "ming"
    ],
    "location": {
      "lat": 26.26385,
      "lng": 117.63922
    },
    "cidx": [
      986,
      997
    ]
  },
  {
    "id": "350500",
    "name": "泉州",
    "fullname": "泉州市",
    "pinyin": [
      "quan",
      "zhou"
    ],
    "location": {
      "lat": 24.87389,
      "lng": 118.67587
    },
    "cidx": [
      998,
      1009
    ]
  },
  {
    "id": "350600",
    "name": "漳州",
    "fullname": "漳州市",
    "pinyin": [
      "zhang",
      "zhou"
    ],
    "location": {
      "lat": 24.51347,
      "lng": 117.64725
    },
    "cidx": [
      1010,
      1020
    ]
  },
  {
    "id": "350700",
    "name": "南平",
    "fullname": "南平市",
    "pinyin": [
      "nan",
      "ping"
    ],
    "location": {
      "lat": 27.33175,
      "lng": 118.12043
    },
    "cidx": [
      1021,
      1030
    ]
  },
  {
    "id": "350800",
    "name": "龙岩",
    "fullname": "龙岩市",
    "pinyin": [
      "long",
      "yan"
    ],
    "location": {
      "lat": 25.07504,
      "lng": 117.01722
    },
    "cidx": [
      1031,
      1037
    ]
  },
  {
    "id": "350900",
    "name": "宁德",
    "fullname": "宁德市",
    "pinyin": [
      "ning",
      "de"
    ],
    "location": {
      "lat": 26.66571,
      "lng": 119.54819
    },
    "cidx": [
      1038,
      1046
    ]
  },
  {
    "id": "360100",
    "name": "南昌",
    "fullname": "南昌市",
    "pinyin": [
      "nan",
      "chang"
    ],
    "location": {
      "lat": 28.68202,
      "lng": 115.85794
    },
    "cidx": [
      1047,
      1055
    ]
  },
  {
    "id": "360200",
    "name": "景德镇",
    "fullname": "景德镇市",
    "pinyin": [
      "jing",
      "de",
      "zhen"
    ],
    "location": {
      "lat": 29.26869,
      "lng": 117.17839
    },
    "cidx": [
      1056,
      1059
    ]
  },
  {
    "id": "360300",
    "name": "萍乡",
    "fullname": "萍乡市",
    "pinyin": [
      "ping",
      "xiang"
    ],
    "location": {
      "lat": 27.62289,
      "lng": 113.85427
    },
    "cidx": [
      1060,
      1064
    ]
  },
  {
    "id": "360400",
    "name": "九江",
    "fullname": "九江市",
    "pinyin": [
      "jiu",
      "jiang"
    ],
    "location": {
      "lat": 29.70548,
      "lng": 116.00146
    },
    "cidx": [
      1065,
      1077
    ]
  },
  {
    "id": "360500",
    "name": "新余",
    "fullname": "新余市",
    "pinyin": [
      "xin",
      "yu"
    ],
    "location": {
      "lat": 27.81776,
      "lng": 114.91713
    },
    "cidx": [
      1078,
      1079
    ]
  },
  {
    "id": "360600",
    "name": "鹰潭",
    "fullname": "鹰潭市",
    "pinyin": [
      "ying",
      "tan"
    ],
    "location": {
      "lat": 28.26019,
      "lng": 117.06919
    },
    "cidx": [
      1080,
      1082
    ]
  },
  {
    "id": "360700",
    "name": "赣州",
    "fullname": "赣州市",
    "pinyin": [
      "gan",
      "zhou"
    ],
    "location": {
      "lat": 25.83109,
      "lng": 114.93476
    },
    "cidx": [
      1083,
      1100
    ]
  },
  {
    "id": "360800",
    "name": "吉安",
    "fullname": "吉安市",
    "pinyin": [
      "ji",
      "an"
    ],
    "location": {
      "lat": 27.11382,
      "lng": 114.99376
    },
    "cidx": [
      1101,
      1113
    ]
  },
  {
    "id": "360900",
    "name": "宜春",
    "fullname": "宜春市",
    "pinyin": [
      "yi",
      "chun"
    ],
    "location": {
      "lat": 27.81443,
      "lng": 114.41612
    },
    "cidx": [
      1114,
      1123
    ]
  },
  {
    "id": "361000",
    "name": "抚州",
    "fullname": "抚州市",
    "pinyin": [
      "fu",
      "zhou"
    ],
    "location": {
      "lat": 27.94781,
      "lng": 116.35809
    },
    "cidx": [
      1124,
      1134
    ]
  },
  {
    "id": "361100",
    "name": "上饶",
    "fullname": "上饶市",
    "pinyin": [
      "shang",
      "rao"
    ],
    "location": {
      "lat": 28.45463,
      "lng": 117.94357
    },
    "cidx": [
      1135,
      1146
    ]
  },
  {
    "id": "370100",
    "name": "济南",
    "fullname": "济南市",
    "pinyin": [
      "ji",
      "nan"
    ],
    "location": {
      "lat": 36.65184,
      "lng": 117.12009
    },
    "cidx": [
      1147,
      1158
    ]
  },
  {
    "id": "370200",
    "name": "青岛",
    "fullname": "青岛市",
    "pinyin": [
      "qing",
      "dao"
    ],
    "location": {
      "lat": 36.06623,
      "lng": 120.38299
    },
    "cidx": [
      1159,
      1168
    ]
  },
  {
    "id": "370300",
    "name": "淄博",
    "fullname": "淄博市",
    "pinyin": [
      "zi",
      "bo"
    ],
    "location": {
      "lat": 36.8131,
      "lng": 118.0548
    },
    "cidx": [
      1169,
      1176
    ]
  },
  {
    "id": "370400",
    "name": "枣庄",
    "fullname": "枣庄市",
    "pinyin": [
      "zao",
      "zhuang"
    ],
    "location": {
      "lat": 34.81071,
      "lng": 117.32196
    },
    "cidx": [
      1177,
      1182
    ]
  },
  {
    "id": "370500",
    "name": "东营",
    "fullname": "东营市",
    "pinyin": [
      "dong",
      "ying"
    ],
    "location": {
      "lat": 37.43365,
      "lng": 118.67466
    },
    "cidx": [
      1183,
      1187
    ]
  },
  {
    "id": "370600",
    "name": "烟台",
    "fullname": "烟台市",
    "pinyin": [
      "yan",
      "tai"
    ],
    "location": {
      "lat": 37.46353,
      "lng": 121.44801
    },
    "cidx": [
      1188,
      1199
    ]
  },
  {
    "id": "370700",
    "name": "潍坊",
    "fullname": "潍坊市",
    "pinyin": [
      "wei",
      "fang"
    ],
    "location": {
      "lat": 36.70686,
      "lng": 119.16176
    },
    "cidx": [
      1200,
      1211
    ]
  },
  {
    "id": "370800",
    "name": "济宁",
    "fullname": "济宁市",
    "pinyin": [
      "ji",
      "ning"
    ],
    "location": {
      "lat": 35.41459,
      "lng": 116.58724
    },
    "cidx": [
      1212,
      1222
    ]
  },
  {
    "id": "370900",
    "name": "泰安",
    "fullname": "泰安市",
    "pinyin": [
      "tai",
      "an"
    ],
    "location": {
      "lat": 36.19994,
      "lng": 117.0884
    },
    "cidx": [
      1223,
      1228
    ]
  },
  {
    "id": "371000",
    "name": "威海",
    "fullname": "威海市",
    "pinyin": [
      "wei",
      "hai"
    ],
    "location": {
      "lat": 37.51348,
      "lng": 122.12171
    },
    "cidx": [
      1229,
      1232
    ]
  },
  {
    "id": "371100",
    "name": "日照",
    "fullname": "日照市",
    "pinyin": [
      "ri",
      "zhao"
    ],
    "location": {
      "lat": 35.41646,
      "lng": 119.52719
    },
    "cidx": [
      1233,
      1236
    ]
  },
  {
    "id": "371300",
    "name": "临沂",
    "fullname": "临沂市",
    "pinyin": [
      "lin",
      "yi"
    ],
    "location": {
      "lat": 35.10465,
      "lng": 118.35646
    },
    "cidx": [
      1237,
      1248
    ]
  },
  {
    "id": "371400",
    "name": "德州",
    "fullname": "德州市",
    "pinyin": [
      "de",
      "zhou"
    ],
    "location": {
      "lat": 37.4355,
      "lng": 116.35927
    },
    "cidx": [
      1249,
      1259
    ]
  },
  {
    "id": "371500",
    "name": "聊城",
    "fullname": "聊城市",
    "pinyin": [
      "liao",
      "cheng"
    ],
    "location": {
      "lat": 36.45702,
      "lng": 115.98549
    },
    "cidx": [
      1260,
      1267
    ]
  },
  {
    "id": "371600",
    "name": "滨州",
    "fullname": "滨州市",
    "pinyin": [
      "bin",
      "zhou"
    ],
    "location": {
      "lat": 37.38211,
      "lng": 117.97279
    },
    "cidx": [
      1268,
      1274
    ]
  },
  {
    "id": "371700",
    "name": "菏泽",
    "fullname": "菏泽市",
    "pinyin": [
      "he",
      "ze"
    ],
    "location": {
      "lat": 35.23363,
      "lng": 115.48115
    },
    "cidx": [
      1275,
      1283
    ]
  }, {
    "id": "410100",
    "name": "郑州",
    "fullname": "郑州市",
    "pinyin": [
      "zheng",
      "zhou"
    ],
    "location": {
      "lat": 34.74725,
      "lng": 113.62493
    },
    "cidx": [
      1284,
      1295
    ]
  },
  {
    "id": "410200",
    "name": "开封",
    "fullname": "开封市",
    "pinyin": [
      "kai",
      "feng"
    ],
    "location": {
      "lat": 34.79726,
      "lng": 114.30731
    },
    "cidx": [
      1296,
      1304
    ]
  },
  {
    "id": "410300",
    "name": "洛阳",
    "fullname": "洛阳市",
    "pinyin": [
      "luo",
      "yang"
    ],
    "location": {
      "lat": 34.61812,
      "lng": 112.45361
    },
    "cidx": [
      1305,
      1319
    ]
  },
  {
    "id": "410400",
    "name": "平顶山",
    "fullname": "平顶山市",
    "pinyin": [
      "ping",
      "ding",
      "shan"
    ],
    "location": {
      "lat": 33.76609,
      "lng": 113.19241
    },
    "cidx": [
      1320,
      1329
    ]
  },
  {
    "id": "410500",
    "name": "安阳",
    "fullname": "安阳市",
    "pinyin": [
      "an",
      "yang"
    ],
    "location": {
      "lat": 36.09771,
      "lng": 114.3931
    },
    "cidx": [
      1330,
      1338
    ]
  },
  {
    "id": "410600",
    "name": "鹤壁",
    "fullname": "鹤壁市",
    "pinyin": [
      "he",
      "bi"
    ],
    "location": {
      "lat": 35.747,
      "lng": 114.29745
    },
    "cidx": [
      1339,
      1343
    ]
  },
  {
    "id": "410700",
    "name": "新乡",
    "fullname": "新乡市",
    "pinyin": [
      "xin",
      "xiang"
    ],
    "location": {
      "lat": 35.30323,
      "lng": 113.92675
    },
    "cidx": [
      1344,
      1355
    ]
  },
  {
    "id": "410800",
    "name": "焦作",
    "fullname": "焦作市",
    "pinyin": [
      "jiao",
      "zuo"
    ],
    "location": {
      "lat": 35.21563,
      "lng": 113.24201
    },
    "cidx": [
      1356,
      1365
    ]
  },
  {
    "id": "410900",
    "name": "濮阳",
    "fullname": "濮阳市",
    "pinyin": [
      "pu",
      "yang"
    ],
    "location": {
      "lat": 35.76189,
      "lng": 115.02932
    },
    "cidx": [
      1366,
      1371
    ]
  },
  {
    "id": "411000",
    "name": "许昌",
    "fullname": "许昌市",
    "pinyin": [
      "xu",
      "chang"
    ],
    "location": {
      "lat": 34.0357,
      "lng": 113.85233
    },
    "cidx": [
      1372,
      1377
    ]
  },
  {
    "id": "411100",
    "name": "漯河",
    "fullname": "漯河市",
    "pinyin": [
      "luo",
      "he"
    ],
    "location": {
      "lat": 33.58149,
      "lng": 114.01681
    },
    "cidx": [
      1378,
      1382
    ]
  },
  {
    "id": "411200",
    "name": "三门峡",
    "fullname": "三门峡市",
    "pinyin": [
      "san",
      "men",
      "xia"
    ],
    "location": {
      "lat": 34.77261,
      "lng": 111.2003
    },
    "cidx": [
      1383,
      1388
    ]
  },
  {
    "id": "411300",
    "name": "南阳",
    "fullname": "南阳市",
    "pinyin": [
      "nan",
      "yang"
    ],
    "location": {
      "lat": 32.99073,
      "lng": 112.52851
    },
    "cidx": [
      1389,
      1401
    ]
  },
  {
    "id": "411400",
    "name": "商丘",
    "fullname": "商丘市",
    "pinyin": [
      "shang",
      "qiu"
    ],
    "location": {
      "lat": 34.41427,
      "lng": 115.65635
    },
    "cidx": [
      1402,
      1410
    ]
  },
  {
    "id": "411500",
    "name": "信阳",
    "fullname": "信阳市",
    "pinyin": [
      "xin",
      "yang"
    ],
    "location": {
      "lat": 32.14714,
      "lng": 114.09279
    },
    "cidx": [
      1411,
      1420
    ]
  },
  {
    "id": "411600",
    "name": "周口",
    "fullname": "周口市",
    "pinyin": [
      "zhou",
      "kou"
    ],
    "location": {
      "lat": 33.62583,
      "lng": 114.69695
    },
    "cidx": [
      1421,
      1430
    ]
  },
  {
    "id": "411700",
    "name": "驻马店",
    "fullname": "驻马店市",
    "pinyin": [
      "zhu",
      "ma",
      "dian"
    ],
    "location": {
      "lat": 33.01142,
      "lng": 114.02299
    },
    "cidx": [
      1431,
      1440
    ]
  },
  {
    "id": "419001",
    "name": "济源",
    "fullname": "济源市",
    "pinyin": [
      "ji",
      "yuan"
    ],
    "location": {
      "lat": 35.06707,
      "lng": 112.60273
    }
  },
  {
    "id": "420100",
    "name": "武汉",
    "fullname": "武汉市",
    "pinyin": [
      "wu",
      "han"
    ],
    "location": {
      "lat": 30.59276,
      "lng": 114.30525
    },
    "cidx": [
      1441,
      1453
    ]
  },
  {
    "id": "420200",
    "name": "黄石",
    "fullname": "黄石市",
    "pinyin": [
      "huang",
      "shi"
    ],
    "location": {
      "lat": 30.19953,
      "lng": 115.0389
    },
    "cidx": [
      1454,
      1459
    ]
  },
  {
    "id": "420300",
    "name": "十堰",
    "fullname": "十堰市",
    "pinyin": [
      "shi",
      "yan"
    ],
    "location": {
      "lat": 32.62918,
      "lng": 110.79801
    },
    "cidx": [
      1460,
      1467
    ]
  },
  {
    "id": "420500",
    "name": "宜昌",
    "fullname": "宜昌市",
    "pinyin": [
      "yi",
      "chang"
    ],
    "location": {
      "lat": 30.69186,
      "lng": 111.28642
    },
    "cidx": [
      1468,
      1480
    ]
  },
  {
    "id": "420600",
    "name": "襄阳",
    "fullname": "襄阳市",
    "pinyin": [
      "xiang",
      "yang"
    ],
    "location": {
      "lat": 32.009,
      "lng": 112.12255
    },
    "cidx": [
      1481,
      1489
    ]
  },
  {
    "id": "420700",
    "name": "鄂州",
    "fullname": "鄂州市",
    "pinyin": [
      "e",
      "zhou"
    ],
    "location": {
      "lat": 30.39085,
      "lng": 114.89495
    },
    "cidx": [
      1490,
      1492
    ]
  },
  {
    "id": "420800",
    "name": "荆门",
    "fullname": "荆门市",
    "pinyin": [
      "jing",
      "men"
    ],
    "location": {
      "lat": 31.03546,
      "lng": 112.19945
    },
    "cidx": [
      1493,
      1497
    ]
  },
  {
    "id": "420900",
    "name": "孝感",
    "fullname": "孝感市",
    "pinyin": [
      "xiao",
      "gan"
    ],
    "location": {
      "lat": 30.92483,
      "lng": 113.91645
    },
    "cidx": [
      1498,
      1504
    ]
  },
  {
    "id": "421000",
    "name": "荆州",
    "fullname": "荆州市",
    "pinyin": [
      "jing",
      "zhou"
    ],
    "location": {
      "lat": 30.33479,
      "lng": 112.24069
    },
    "cidx": [
      1505,
      1512
    ]
  },
  {
    "id": "421100",
    "name": "黄冈",
    "fullname": "黄冈市",
    "pinyin": [
      "huang",
      "gang"
    ],
    "location": {
      "lat": 30.45347,
      "lng": 114.87238
    },
    "cidx": [
      1513,
      1522
    ]
  },
  {
    "id": "421200",
    "name": "咸宁",
    "fullname": "咸宁市",
    "pinyin": [
      "xian",
      "ning"
    ],
    "location": {
      "lat": 29.84126,
      "lng": 114.32245
    },
    "cidx": [
      1523,
      1528
    ]
  },
  {
    "id": "421300",
    "name": "随州",
    "fullname": "随州市",
    "pinyin": [
      "sui",
      "zhou"
    ],
    "location": {
      "lat": 31.69013,
      "lng": 113.38262
    },
    "cidx": [
      1529,
      1531
    ]
  },
  {
    "id": "422800",
    "name": "恩施",
    "fullname": "恩施土家族苗族自治州",
    "pinyin": [
      "en",
      "shi"
    ],
    "location": {
      "lat": 30.27217,
      "lng": 109.48817
    },
    "cidx": [
      1532,
      1539
    ]
  },
  {
    "id": "429004",
    "name": "仙桃",
    "fullname": "仙桃市",
    "pinyin": [
      "xian",
      "tao"
    ],
    "location": {
      "lat": 30.36251,
      "lng": 113.4545
    }
  },
  {
    "id": "429005",
    "name": "潜江",
    "fullname": "潜江市",
    "pinyin": [
      "qian",
      "jiang"
    ],
    "location": {
      "lat": 30.40147,
      "lng": 112.8993
    }
  },
  {
    "id": "429006",
    "name": "天门",
    "fullname": "天门市",
    "pinyin": [
      "tian",
      "men"
    ],
    "location": {
      "lat": 30.66339,
      "lng": 113.16614
    }
  },
  {
    "id": "429021",
    "name": "神农架",
    "fullname": "神农架林区",
    "pinyin": [
      "shen",
      "nong",
      "jia"
    ],
    "location": {
      "lat": 31.74452,
      "lng": 110.67598
    }
  },
  {
    "id": "430100",
    "name": "长沙",
    "fullname": "长沙市",
    "pinyin": [
      "chang",
      "sha"
    ],
    "location": {
      "lat": 28.22778,
      "lng": 112.93886
    },
    "cidx": [
      1540,
      1548
    ]
  },
  {
    "id": "430200",
    "name": "株洲",
    "fullname": "株洲市",
    "pinyin": [
      "zhu",
      "zhou"
    ],
    "location": {
      "lat": 27.82767,
      "lng": 113.13396
    },
    "cidx": [
      1549,
      1557
    ]
  },
  {
    "id": "430300",
    "name": "湘潭",
    "fullname": "湘潭市",
    "pinyin": [
      "xiang",
      "tan"
    ],
    "location": {
      "lat": 27.82975,
      "lng": 112.94411
    },
    "cidx": [
      1558,
      1562
    ]
  },
  {
    "id": "430400",
    "name": "衡阳",
    "fullname": "衡阳市",
    "pinyin": [
      "heng",
      "yang"
    ],
    "location": {
      "lat": 26.89324,
      "lng": 112.57195
    },
    "cidx": [
      1563,
      1574
    ]
  },
  {
    "id": "430500",
    "name": "邵阳",
    "fullname": "邵阳市",
    "pinyin": [
      "shao",
      "yang"
    ],
    "location": {
      "lat": 27.2389,
      "lng": 111.4677
    },
    "cidx": [
      1575,
      1586
    ]
  },
  {
    "id": "430600",
    "name": "岳阳",
    "fullname": "岳阳市",
    "pinyin": [
      "yue",
      "yang"
    ],
    "location": {
      "lat": 29.35728,
      "lng": 113.12919
    },
    "cidx": [
      1587,
      1595
    ]
  },
  {
    "id": "430700",
    "name": "常德",
    "fullname": "常德市",
    "pinyin": [
      "chang",
      "de"
    ],
    "location": {
      "lat": 29.03158,
      "lng": 111.69854
    },
    "cidx": [
      1596,
      1604
    ]
  },
  {
    "id": "430800",
    "name": "张家界",
    "fullname": "张家界市",
    "pinyin": [
      "zhang",
      "jia",
      "jie"
    ],
    "location": {
      "lat": 29.11667,
      "lng": 110.47839
    },
    "cidx": [
      1605,
      1608
    ]
  },
  {
    "id": "430900",
    "name": "益阳",
    "fullname": "益阳市",
    "pinyin": [
      "yi",
      "yang"
    ],
    "location": {
      "lat": 28.55391,
      "lng": 112.35516
    },
    "cidx": [
      1609,
      1614
    ]
  },
  {
    "id": "431000",
    "name": "郴州",
    "fullname": "郴州市",
    "pinyin": [
      "chen",
      "zhou"
    ],
    "location": {
      "lat": 25.77063,
      "lng": 113.01485
    },
    "cidx": [
      1615,
      1625
    ]
  },
  {
    "id": "431100",
    "name": "永州",
    "fullname": "永州市",
    "pinyin": [
      "yong",
      "zhou"
    ],
    "location": {
      "lat": 26.42034,
      "lng": 111.61225
    },
    "cidx": [
      1626,
      1636
    ]
  },
  {
    "id": "431200",
    "name": "怀化",
    "fullname": "怀化市",
    "pinyin": [
      "huai",
      "hua"
    ],
    "location": {
      "lat": 27.56974,
      "lng": 110.0016
    },
    "cidx": [
      1637,
      1648
    ]
  },
  {
    "id": "431300",
    "name": "娄底",
    "fullname": "娄底市",
    "pinyin": [
      "lou",
      "di"
    ],
    "location": {
      "lat": 27.69728,
      "lng": 111.99458
    },
    "cidx": [
      1649,
      1653
    ]
  },
  {
    "id": "433100",
    "name": "湘西",
    "fullname": "湘西土家族苗族自治州",
    "pinyin": [
      "xiang",
      "xi"
    ],
    "location": {
      "lat": 28.31173,
      "lng": 109.73893
    },
    "cidx": [
      1654,
      1661
    ]
  },
  {
    "id": "440100",
    "name": "广州",
    "fullname": "广州市",
    "pinyin": [
      "guang",
      "zhou"
    ],
    "location": {
      "lat": 23.12908,
      "lng": 113.26436
    },
    "cidx": [
      1662,
      1672
    ]
  },
  {
    "id": "440200",
    "name": "韶关",
    "fullname": "韶关市",
    "pinyin": [
      "shao",
      "guan"
    ],
    "location": {
      "lat": 24.81039,
      "lng": 113.59723
    },
    "cidx": [
      1673,
      1682
    ]
  },
  {
    "id": "440300",
    "name": "深圳",
    "fullname": "深圳市",
    "pinyin": [
      "shen",
      "zhen"
    ],
    "location": {
      "lat": 22.54286,
      "lng": 114.05956
    },
    "cidx": [
      1683,
      1691
    ]
  },
  {
    "id": "440400",
    "name": "珠海",
    "fullname": "珠海市",
    "pinyin": [
      "zhu",
      "hai"
    ],
    "location": {
      "lat": 22.27073,
      "lng": 113.57668
    },
    "cidx": [
      1692,
      1695
    ]
  },
  {
    "id": "440500",
    "name": "汕头",
    "fullname": "汕头市",
    "pinyin": [
      "shan",
      "tou"
    ],
    "location": {
      "lat": 23.3535,
      "lng": 116.68221
    },
    "cidx": [
      1696,
      1702
    ]
  },
  {
    "id": "440600",
    "name": "佛山",
    "fullname": "佛山市",
    "pinyin": [
      "fo",
      "shan"
    ],
    "location": {
      "lat": 23.02185,
      "lng": 113.12192
    },
    "cidx": [
      1703,
      1707
    ]
  },
  {
    "id": "440700",
    "name": "江门",
    "fullname": "江门市",
    "pinyin": [
      "jiang",
      "men"
    ],
    "location": {
      "lat": 22.57865,
      "lng": 113.08161
    },
    "cidx": [
      1708,
      1714
    ]
  },
  {
    "id": "440800",
    "name": "湛江",
    "fullname": "湛江市",
    "pinyin": [
      "zhan",
      "jiang"
    ],
    "location": {
      "lat": 21.27134,
      "lng": 110.35894
    },
    "cidx": [
      1715,
      1723
    ]
  },
  {
    "id": "440900",
    "name": "茂名",
    "fullname": "茂名市",
    "pinyin": [
      "mao",
      "ming"
    ],
    "location": {
      "lat": 21.66329,
      "lng": 110.92523
    },
    "cidx": [
      1724,
      1728
    ]
  },
  {
    "id": "441200",
    "name": "肇庆",
    "fullname": "肇庆市",
    "pinyin": [
      "zhao",
      "qing"
    ],
    "location": {
      "lat": 23.0469,
      "lng": 112.46528
    },
    "cidx": [
      1729,
      1736
    ]
  },
  {
    "id": "441300",
    "name": "惠州",
    "fullname": "惠州市",
    "pinyin": [
      "hui",
      "zhou"
    ],
    "location": {
      "lat": 23.11075,
      "lng": 114.41679
    },
    "cidx": [
      1737,
      1741
    ]
  },
  {
    "id": "441400",
    "name": "梅州",
    "fullname": "梅州市",
    "pinyin": [
      "mei",
      "zhou"
    ],
    "location": {
      "lat": 24.28844,
      "lng": 116.12264
    },
    "cidx": [
      1742,
      1749
    ]
  },
  {
    "id": "441500",
    "name": "汕尾",
    "fullname": "汕尾市",
    "pinyin": [
      "shan",
      "wei"
    ],
    "location": {
      "lat": 22.78566,
      "lng": 115.37514
    },
    "cidx": [
      1750,
      1753
    ]
  },
  {
    "id": "441600",
    "name": "河源",
    "fullname": "河源市",
    "pinyin": [
      "he",
      "yuan"
    ],
    "location": {
      "lat": 23.74365,
      "lng": 114.70065
    },
    "cidx": [
      1754,
      1759
    ]
  },
  {
    "id": "441700",
    "name": "阳江",
    "fullname": "阳江市",
    "pinyin": [
      "yang",
      "jiang"
    ],
    "location": {
      "lat": 21.85829,
      "lng": 111.98256
    },
    "cidx": [
      1760,
      1763
    ]
  },
  {
    "id": "441800",
    "name": "清远",
    "fullname": "清远市",
    "pinyin": [
      "qing",
      "yuan"
    ],
    "location": {
      "lat": 23.68201,
      "lng": 113.05615
    },
    "cidx": [
      1764,
      1771
    ]
  },
  {
    "id": "441900",
    "name": "东莞",
    "fullname": "东莞市",
    "pinyin": [
      "dong",
      "guan"
    ],
    "location": {
      "lat": 23.02067,
      "lng": 113.75179
    },
    "cidx": [
      1772,
      1772
    ]
  },
  {
    "id": "442000",
    "name": "中山",
    "fullname": "中山市",
    "pinyin": [
      "zhong",
      "shan"
    ],
    "location": {
      "lat": 22.51595,
      "lng": 113.3926
    },
    "cidx": [
      1773,
      1773
    ]
  },
  {
    "id": "445100",
    "name": "潮州",
    "fullname": "潮州市",
    "pinyin": [
      "chao",
      "zhou"
    ],
    "location": {
      "lat": 23.6567,
      "lng": 116.62296
    },
    "cidx": [
      1774,
      1776
    ]
  },
  {
    "id": "445200",
    "name": "揭阳",
    "fullname": "揭阳市",
    "pinyin": [
      "jie",
      "yang"
    ],
    "location": {
      "lat": 23.54972,
      "lng": 116.37271
    },
    "cidx": [
      1777,
      1781
    ]
  },
  {
    "id": "445300",
    "name": "云浮",
    "fullname": "云浮市",
    "pinyin": [
      "yun",
      "fu"
    ],
    "location": {
      "lat": 22.91525,
      "lng": 112.04453
    },
    "cidx": [
      1782,
      1786
    ]
  },
  {
    "id": "450100",
    "name": "南宁",
    "fullname": "南宁市",
    "pinyin": [
      "nan",
      "ning"
    ],
    "location": {
      "lat": 22.81673,
      "lng": 108.3669
    },
    "cidx": [
      1787,
      1798
    ]
  },
  {
    "id": "450200",
    "name": "柳州",
    "fullname": "柳州市",
    "pinyin": [
      "liu",
      "zhou"
    ],
    "location": {
      "lat": 24.32543,
      "lng": 109.41552
    },
    "cidx": [
      1799,
      1808
    ]
  },
  {
    "id": "450300",
    "name": "桂林",
    "fullname": "桂林市",
    "pinyin": [
      "gui",
      "lin"
    ],
    "location": {
      "lat": 25.27361,
      "lng": 110.29002
    },
    "cidx": [
      1809,
      1825
    ]
  },
  {
    "id": "450400",
    "name": "梧州",
    "fullname": "梧州市",
    "pinyin": [
      "wu",
      "zhou"
    ],
    "location": {
      "lat": 23.47691,
      "lng": 111.27917
    },
    "cidx": [
      1826,
      1832
    ]
  },
  {
    "id": "450500",
    "name": "北海",
    "fullname": "北海市",
    "pinyin": [
      "bei",
      "hai"
    ],
    "location": {
      "lat": 21.48112,
      "lng": 109.12008
    },
    "cidx": [
      1833,
      1836
    ]
  },
  {
    "id": "450600",
    "name": "防城港",
    "fullname": "防城港市",
    "pinyin": [
      "fang",
      "cheng",
      "gang"
    ],
    "location": {
      "lat": 21.68713,
      "lng": 108.35472
    },
    "cidx": [
      1837,
      1840
    ]
  },
  {
    "id": "450700",
    "name": "钦州",
    "fullname": "钦州市",
    "pinyin": [
      "qin",
      "zhou"
    ],
    "location": {
      "lat": 21.9797,
      "lng": 108.65431
    },
    "cidx": [
      1841,
      1844
    ]
  },
  {
    "id": "450800",
    "name": "贵港",
    "fullname": "贵港市",
    "pinyin": [
      "gui",
      "gang"
    ],
    "location": {
      "lat": 23.11306,
      "lng": 109.59764
    },
    "cidx": [
      1845,
      1849
    ]
  },
  {
    "id": "450900",
    "name": "玉林",
    "fullname": "玉林市",
    "pinyin": [
      "yu",
      "lin"
    ],
    "location": {
      "lat": 22.65451,
      "lng": 110.18098
    },
    "cidx": [
      1850,
      1856
    ]
  },
  {
    "id": "451000",
    "name": "百色",
    "fullname": "百色市",
    "pinyin": [
      "bai",
      "se"
    ],
    "location": {
      "lat": 23.90216,
      "lng": 106.61838
    },
    "cidx": [
      1857,
      1868
    ]
  },
  {
    "id": "451100",
    "name": "贺州",
    "fullname": "贺州市",
    "pinyin": [
      "he",
      "zhou"
    ],
    "location": {
      "lat": 24.40346,
      "lng": 111.56655
    },
    "cidx": [
      1869,
      1873
    ]
  },
  {
    "id": "451200",
    "name": "河池",
    "fullname": "河池市",
    "pinyin": [
      "he",
      "chi"
    ],
    "location": {
      "lat": 24.69291,
      "lng": 108.0854
    },
    "cidx": [
      1874,
      1884
    ]
  },
  {
    "id": "451300",
    "name": "来宾",
    "fullname": "来宾市",
    "pinyin": [
      "lai",
      "bin"
    ],
    "location": {
      "lat": 23.7521,
      "lng": 109.22238
    },
    "cidx": [
      1885,
      1890
    ]
  },
  {
    "id": "451400",
    "name": "崇左",
    "fullname": "崇左市",
    "pinyin": [
      "chong",
      "zuo"
    ],
    "location": {
      "lat": 22.37895,
      "lng": 107.36485
    },
    "cidx": [
      1891,
      1897
    ]
  },
  {
    "id": "460100",
    "name": "海口",
    "fullname": "海口市",
    "pinyin": [
      "hai",
      "kou"
    ],
    "location": {
      "lat": 20.04422,
      "lng": 110.19989
    },
    "cidx": [
      1898,
      1901
    ]
  },
  {
    "id": "460200",
    "name": "三亚",
    "fullname": "三亚市",
    "pinyin": [
      "san",
      "ya"
    ],
    "location": {
      "lat": 18.25248,
      "lng": 109.51209
    },
    "cidx": [
      1902,
      1905
    ]
  },
  {
    "id": "460300",
    "name": "三沙",
    "fullname": "三沙市",
    "pinyin": [
      "san",
      "sha"
    ],
    "location": {
      "lat": 16.83272,
      "lng": 112.33356
    },
    "cidx": [
      1906,
      1908
    ]
  },
  {
    "id": "460400",
    "name": "儋州",
    "fullname": "儋州市",
    "pinyin": [
      "dan",
      "zhou"
    ],
    "location": {
      "lat": 19.52093,
      "lng": 109.58069
    },
    "cidx": [
      1909,
      1909
    ]
  },
  {
    "id": "469001",
    "name": "五指山",
    "fullname": "五指山市",
    "pinyin": [
      "wu",
      "zhi",
      "shan"
    ],
    "location": {
      "lat": 18.77515,
      "lng": 109.51696
    }
  },
  {
    "id": "469002",
    "name": "琼海",
    "fullname": "琼海市",
    "pinyin": [
      "qiong",
      "hai"
    ],
    "location": {
      "lat": 19.25838,
      "lng": 110.47464
    }
  },
  {
    "id": "469005",
    "name": "文昌",
    "fullname": "文昌市",
    "pinyin": [
      "wen",
      "chang"
    ],
    "location": {
      "lat": 19.54329,
      "lng": 110.79774
    }
  },
  {
    "id": "469006",
    "name": "万宁",
    "fullname": "万宁市",
    "pinyin": [
      "wan",
      "ning"
    ],
    "location": {
      "lat": 18.79532,
      "lng": 110.38975
    }
  },
  {
    "id": "469007",
    "name": "东方",
    "fullname": "东方市",
    "pinyin": [
      "dong",
      "fang"
    ],
    "location": {
      "lat": 19.09614,
      "lng": 108.65367
    }
  },
  {
    "id": "469021",
    "name": "定安",
    "fullname": "定安县",
    "pinyin": [
      "ding",
      "an"
    ],
    "location": {
      "lat": 19.68121,
      "lng": 110.3593
    }
  },
  {
    "id": "469022",
    "name": "屯昌",
    "fullname": "屯昌县",
    "pinyin": [
      "tun",
      "chang"
    ],
    "location": {
      "lat": 19.35182,
      "lng": 110.10347
    }
  },
  {
    "id": "469023",
    "name": "澄迈",
    "fullname": "澄迈县",
    "pinyin": [
      "cheng",
      "mai"
    ],
    "location": {
      "lat": 19.73849,
      "lng": 110.00487
    }
  },
  {
    "id": "469024",
    "name": "临高",
    "fullname": "临高县",
    "pinyin": [
      "lin",
      "gao"
    ],
    "location": {
      "lat": 19.91243,
      "lng": 109.69077
    }
  },
  {
    "id": "469025",
    "name": "白沙",
    "fullname": "白沙黎族自治县",
    "pinyin": [
      "bai",
      "sha"
    ],
    "location": {
      "lat": 19.22543,
      "lng": 109.45167
    }
  },
  {
    "id": "469026",
    "name": "昌江",
    "fullname": "昌江黎族自治县",
    "pinyin": [
      "chang",
      "jiang"
    ],
    "location": {
      "lat": 19.29828,
      "lng": 109.05559
    }
  },
  {
    "id": "469027",
    "name": "乐东",
    "fullname": "乐东黎族自治县",
    "pinyin": [
      "le",
      "dong"
    ],
    "location": {
      "lat": 18.74986,
      "lng": 109.17361
    }
  },
  {
    "id": "469028",
    "name": "陵水",
    "fullname": "陵水黎族自治县",
    "pinyin": [
      "ling",
      "shui"
    ],
    "location": {
      "lat": 18.50596,
      "lng": 110.0372
    }
  },
  {
    "id": "469029",
    "name": "保亭",
    "fullname": "保亭黎族苗族自治县",
    "pinyin": [
      "bao",
      "ting"
    ],
    "location": {
      "lat": 18.63905,
      "lng": 109.70259
    }
  },
  {
    "id": "469030",
    "name": "琼中",
    "fullname": "琼中黎族苗族自治县",
    "pinyin": [
      "qiong",
      "zhong"
    ],
    "location": {
      "lat": 19.03334,
      "lng": 109.83839
    }
  }, {
    "id": "500000",
    "name": "重庆",
    "fullname": "重庆市",
    "pinyin": [
      "chong",
      "qing"
    ],
    "location": {
      "lat": 29.56471,
      "lng": 106.55073
    },
    "cidx": [
      297,
      334
    ]
  }, {
    "id": "510100",
    "name": "成都",
    "fullname": "成都市",
    "pinyin": [
      "cheng",
      "du"
    ],
    "location": {
      "lat": 30.5702,
      "lng": 104.06476
    },
    "cidx": [
      1910,
      1929
    ]
  },
  {
    "id": "510300",
    "name": "自贡",
    "fullname": "自贡市",
    "pinyin": [
      "zi",
      "gong"
    ],
    "location": {
      "lat": 29.3392,
      "lng": 104.77844
    },
    "cidx": [
      1930,
      1935
    ]
  },
  {
    "id": "510400",
    "name": "攀枝花",
    "fullname": "攀枝花市",
    "pinyin": [
      "pan",
      "zhi",
      "hua"
    ],
    "location": {
      "lat": 26.58228,
      "lng": 101.71872
    },
    "cidx": [
      1936,
      1940
    ]
  },
  {
    "id": "510500",
    "name": "泸州",
    "fullname": "泸州市",
    "pinyin": [
      "lu",
      "zhou"
    ],
    "location": {
      "lat": 28.8717,
      "lng": 105.44257
    },
    "cidx": [
      1941,
      1947
    ]
  },
  {
    "id": "510600",
    "name": "德阳",
    "fullname": "德阳市",
    "pinyin": [
      "de",
      "yang"
    ],
    "location": {
      "lat": 31.12679,
      "lng": 104.3979
    },
    "cidx": [
      1948,
      1953
    ]
  },
  {
    "id": "510700",
    "name": "绵阳",
    "fullname": "绵阳市",
    "pinyin": [
      "mian",
      "yang"
    ],
    "location": {
      "lat": 31.46751,
      "lng": 104.6796
    },
    "cidx": [
      1954,
      1962
    ]
  },
  {
    "id": "510800",
    "name": "广元",
    "fullname": "广元市",
    "pinyin": [
      "guang",
      "yuan"
    ],
    "location": {
      "lat": 32.43549,
      "lng": 105.84357
    },
    "cidx": [
      1963,
      1969
    ]
  },
  {
    "id": "510900",
    "name": "遂宁",
    "fullname": "遂宁市",
    "pinyin": [
      "sui",
      "ning"
    ],
    "location": {
      "lat": 30.53286,
      "lng": 105.59273
    },
    "cidx": [
      1970,
      1974
    ]
  },
  {
    "id": "511000",
    "name": "内江",
    "fullname": "内江市",
    "pinyin": [
      "nei",
      "jiang"
    ],
    "location": {
      "lat": 29.58015,
      "lng": 105.05844
    },
    "cidx": [
      1975,
      1979
    ]
  },
  {
    "id": "511100",
    "name": "乐山",
    "fullname": "乐山市",
    "pinyin": [
      "le",
      "shan"
    ],
    "location": {
      "lat": 29.55221,
      "lng": 103.76539
    },
    "cidx": [
      1980,
      1990
    ]
  },
  {
    "id": "511300",
    "name": "南充",
    "fullname": "南充市",
    "pinyin": [
      "nan",
      "chong"
    ],
    "location": {
      "lat": 30.83731,
      "lng": 106.11073
    },
    "cidx": [
      1991,
      1999
    ]
  },
  {
    "id": "511400",
    "name": "眉山",
    "fullname": "眉山市",
    "pinyin": [
      "mei",
      "shan"
    ],
    "location": {
      "lat": 30.07563,
      "lng": 103.84851
    },
    "cidx": [
      2000,
      2005
    ]
  },
  {
    "id": "511500",
    "name": "宜宾",
    "fullname": "宜宾市",
    "pinyin": [
      "yi",
      "bin"
    ],
    "location": {
      "lat": 28.7513,
      "lng": 104.6417
    },
    "cidx": [
      2006,
      2015
    ]
  },
  {
    "id": "511600",
    "name": "广安",
    "fullname": "广安市",
    "pinyin": [
      "guang",
      "an"
    ],
    "location": {
      "lat": 30.45596,
      "lng": 106.63322
    },
    "cidx": [
      2016,
      2021
    ]
  },
  {
    "id": "511700",
    "name": "达州",
    "fullname": "达州市",
    "pinyin": [
      "da",
      "zhou"
    ],
    "location": {
      "lat": 31.20864,
      "lng": 107.46791
    },
    "cidx": [
      2022,
      2028
    ]
  },
  {
    "id": "511800",
    "name": "雅安",
    "fullname": "雅安市",
    "pinyin": [
      "ya",
      "an"
    ],
    "location": {
      "lat": 30.01053,
      "lng": 103.0424
    },
    "cidx": [
      2029,
      2036
    ]
  },
  {
    "id": "511900",
    "name": "巴中",
    "fullname": "巴中市",
    "pinyin": [
      "ba",
      "zhong"
    ],
    "location": {
      "lat": 31.86715,
      "lng": 106.74733
    },
    "cidx": [
      2037,
      2041
    ]
  },
  {
    "id": "512000",
    "name": "资阳",
    "fullname": "资阳市",
    "pinyin": [
      "zi",
      "yang"
    ],
    "location": {
      "lat": 30.12859,
      "lng": 104.62798
    },
    "cidx": [
      2042,
      2044
    ]
  },
  {
    "id": "513200",
    "name": "阿坝",
    "fullname": "阿坝藏族羌族自治州",
    "pinyin": [
      "a",
      "ba"
    ],
    "location": {
      "lat": 31.8994,
      "lng": 102.22477
    },
    "cidx": [
      2045,
      2057
    ]
  },
  {
    "id": "513300",
    "name": "甘孜",
    "fullname": "甘孜藏族自治州",
    "pinyin": [
      "gan",
      "zi"
    ],
    "location": {
      "lat": 30.04932,
      "lng": 101.96254
    },
    "cidx": [
      2058,
      2075
    ]
  },
  {
    "id": "513400",
    "name": "凉山",
    "fullname": "凉山彝族自治州",
    "pinyin": [
      "liang",
      "shan"
    ],
    "location": {
      "lat": 27.88164,
      "lng": 102.26746
    },
    "cidx": [
      2076,
      2092
    ]
  },
  {
    "id": "520100",
    "name": "贵阳",
    "fullname": "贵阳市",
    "pinyin": [
      "gui",
      "yang"
    ],
    "location": {
      "lat": 26.64702,
      "lng": 106.63024
    },
    "cidx": [
      2093,
      2102
    ]
  },
  {
    "id": "520200",
    "name": "六盘水",
    "fullname": "六盘水市",
    "pinyin": [
      "liu",
      "pan",
      "shui"
    ],
    "location": {
      "lat": 26.59336,
      "lng": 104.83023
    },
    "cidx": [
      2103,
      2106
    ]
  },
  {
    "id": "520300",
    "name": "遵义",
    "fullname": "遵义市",
    "pinyin": [
      "zun",
      "yi"
    ],
    "location": {
      "lat": 27.72545,
      "lng": 106.92723
    },
    "cidx": [
      2107,
      2120
    ]
  },
  {
    "id": "520400",
    "name": "安顺",
    "fullname": "安顺市",
    "pinyin": [
      "an",
      "shun"
    ],
    "location": {
      "lat": 26.25367,
      "lng": 105.9462
    },
    "cidx": [
      2121,
      2126
    ]
  },
  {
    "id": "520500",
    "name": "毕节",
    "fullname": "毕节市",
    "pinyin": [
      "bi",
      "jie"
    ],
    "location": {
      "lat": 27.29847,
      "lng": 105.30504
    },
    "cidx": [
      2127,
      2134
    ]
  },
  {
    "id": "520600",
    "name": "铜仁",
    "fullname": "铜仁市",
    "pinyin": [
      "tong",
      "ren"
    ],
    "location": {
      "lat": 27.69066,
      "lng": 109.18099
    },
    "cidx": [
      2135,
      2144
    ]
  },
  {
    "id": "522300",
    "name": "黔西南",
    "fullname": "黔西南布依族苗族自治州",
    "pinyin": [
      "qian",
      "xi",
      "nan"
    ],
    "location": {
      "lat": 25.08988,
      "lng": 104.90437
    },
    "cidx": [
      2145,
      2152
    ]
  },
  {
    "id": "522600",
    "name": "黔东南",
    "fullname": "黔东南苗族侗族自治州",
    "pinyin": [
      "qian",
      "dong",
      "nan"
    ],
    "location": {
      "lat": 26.58364,
      "lng": 107.98416
    },
    "cidx": [
      2153,
      2168
    ]
  },
  {
    "id": "522700",
    "name": "黔南",
    "fullname": "黔南布依族苗族自治州",
    "pinyin": [
      "qian",
      "nan"
    ],
    "location": {
      "lat": 26.25427,
      "lng": 107.52226
    },
    "cidx": [
      2169,
      2180
    ]
  },
  {
    "id": "530100",
    "name": "昆明",
    "fullname": "昆明市",
    "pinyin": [
      "kun",
      "ming"
    ],
    "location": {
      "lat": 24.87966,
      "lng": 102.83322
    },
    "cidx": [
      2181,
      2194
    ]
  },
  {
    "id": "530300",
    "name": "曲靖",
    "fullname": "曲靖市",
    "pinyin": [
      "qu",
      "jing"
    ],
    "location": {
      "lat": 25.49002,
      "lng": 103.79625
    },
    "cidx": [
      2195,
      2203
    ]
  },
  {
    "id": "530400",
    "name": "玉溪",
    "fullname": "玉溪市",
    "pinyin": [
      "yu",
      "xi"
    ],
    "location": {
      "lat": 24.3518,
      "lng": 102.54714
    },
    "cidx": [
      2204,
      2212
    ]
  },
  {
    "id": "530500",
    "name": "保山",
    "fullname": "保山市",
    "pinyin": [
      "bao",
      "shan"
    ],
    "location": {
      "lat": 25.11205,
      "lng": 99.16181
    },
    "cidx": [
      2213,
      2217
    ]
  },
  {
    "id": "530600",
    "name": "昭通",
    "fullname": "昭通市",
    "pinyin": [
      "zhao",
      "tong"
    ],
    "location": {
      "lat": 27.33817,
      "lng": 103.7168
    },
    "cidx": [
      2218,
      2228
    ]
  },
  {
    "id": "530700",
    "name": "丽江",
    "fullname": "丽江市",
    "pinyin": [
      "li",
      "jiang"
    ],
    "location": {
      "lat": 26.85648,
      "lng": 100.2271
    },
    "cidx": [
      2229,
      2233
    ]
  },
  {
    "id": "530800",
    "name": "普洱",
    "fullname": "普洱市",
    "pinyin": [
      "pu",
      "er"
    ],
    "location": {
      "lat": 22.82521,
      "lng": 100.96624
    },
    "cidx": [
      2234,
      2243
    ]
  },
  {
    "id": "530900",
    "name": "临沧",
    "fullname": "临沧市",
    "pinyin": [
      "lin",
      "cang"
    ],
    "location": {
      "lat": 23.88426,
      "lng": 100.08884
    },
    "cidx": [
      2244,
      2251
    ]
  },
  {
    "id": "532300",
    "name": "楚雄",
    "fullname": "楚雄彝族自治州",
    "pinyin": [
      "chu",
      "xiong"
    ],
    "location": {
      "lat": 25.04495,
      "lng": 101.52767
    },
    "cidx": [
      2252,
      2261
    ]
  },
  {
    "id": "532500",
    "name": "红河",
    "fullname": "红河哈尼族彝族自治州",
    "pinyin": [
      "hong",
      "he"
    ],
    "location": {
      "lat": 23.36422,
      "lng": 103.3756
    },
    "cidx": [
      2262,
      2274
    ]
  },
  {
    "id": "532600",
    "name": "文山",
    "fullname": "文山壮族苗族自治州",
    "pinyin": [
      "wen",
      "shan"
    ],
    "location": {
      "lat": 23.39849,
      "lng": 104.21504
    },
    "cidx": [
      2275,
      2282
    ]
  },
  {
    "id": "532800",
    "name": "西双版纳",
    "fullname": "西双版纳傣族自治州",
    "pinyin": [
      "xi",
      "shuang",
      "ban",
      "na"
    ],
    "location": {
      "lat": 22.00749,
      "lng": 100.79739
    },
    "cidx": [
      2283,
      2285
    ]
  },
  {
    "id": "532900",
    "name": "大理",
    "fullname": "大理白族自治州",
    "pinyin": [
      "da",
      "li"
    ],
    "location": {
      "lat": 25.60648,
      "lng": 100.26764
    },
    "cidx": [
      2286,
      2297
    ]
  },
  {
    "id": "533100",
    "name": "德宏",
    "fullname": "德宏傣族景颇族自治州",
    "pinyin": [
      "de",
      "hong"
    ],
    "location": {
      "lat": 24.43232,
      "lng": 98.58486
    },
    "cidx": [
      2298,
      2302
    ]
  },
  {
    "id": "533300",
    "name": "怒江",
    "fullname": "怒江傈僳族自治州",
    "pinyin": [
      "nu",
      "jiang"
    ],
    "location": {
      "lat": 25.81763,
      "lng": 98.8567
    },
    "cidx": [
      2303,
      2306
    ]
  },
  {
    "id": "533400",
    "name": "迪庆",
    "fullname": "迪庆藏族自治州",
    "pinyin": [
      "di",
      "qing"
    ],
    "location": {
      "lat": 27.81908,
      "lng": 99.70305
    },
    "cidx": [
      2307,
      2309
    ]
  },
  {
    "id": "540100",
    "name": "拉萨",
    "fullname": "拉萨市",
    "pinyin": [
      "la",
      "sa"
    ],
    "location": {
      "lat": 29.64415,
      "lng": 91.1145
    },
    "cidx": [
      2310,
      2317
    ]
  },
  {
    "id": "540200",
    "name": "日喀则",
    "fullname": "日喀则市",
    "pinyin": [
      "ri",
      "ka",
      "ze"
    ],
    "location": {
      "lat": 29.26705,
      "lng": 88.88116
    },
    "cidx": [
      2318,
      2335
    ]
  },
  {
    "id": "540300",
    "name": "昌都",
    "fullname": "昌都市",
    "pinyin": [
      "chang",
      "du"
    ],
    "location": {
      "lat": 31.14073,
      "lng": 97.17225
    },
    "cidx": [
      2336,
      2346
    ]
  },
  {
    "id": "540400",
    "name": "林芝",
    "fullname": "林芝市",
    "pinyin": [
      "lin",
      "zhi"
    ],
    "location": {
      "lat": 29.64895,
      "lng": 94.36155
    },
    "cidx": [
      2347,
      2353
    ]
  },
  {
    "id": "540500",
    "name": "山南",
    "fullname": "山南市",
    "pinyin": [
      "shan",
      "nan"
    ],
    "location": {
      "lat": 29.23705,
      "lng": 91.77313
    },
    "cidx": [
      2354,
      2365
    ]
  },
  {
    "id": "540600",
    "name": "那曲",
    "fullname": "那曲市",
    "pinyin": [
      "na",
      "qu"
    ],
    "location": {
      "lat": 31.47614,
      "lng": 92.05136
    },
    "cidx": [
      2366,
      2376
    ]
  },
  {
    "id": "542500",
    "name": "阿里",
    "fullname": "阿里地区",
    "pinyin": [
      "a",
      "li"
    ],
    "location": {
      "lat": 30.40051,
      "lng": 81.1454
    },
    "cidx": [
      2377,
      2383
    ]
  }, {
    "id": "610100",
    "name": "西安",
    "fullname": "西安市",
    "pinyin": [
      "xi",
      "an"
    ],
    "location": {
      "lat": 34.34127,
      "lng": 108.93984
    },
    "cidx": [
      2384,
      2396
    ]
  },
  {
    "id": "610200",
    "name": "铜川",
    "fullname": "铜川市",
    "pinyin": [
      "tong",
      "chuan"
    ],
    "location": {
      "lat": 34.89673,
      "lng": 108.94515
    },
    "cidx": [
      2397,
      2400
    ]
  },
  {
    "id": "610300",
    "name": "宝鸡",
    "fullname": "宝鸡市",
    "pinyin": [
      "bao",
      "ji"
    ],
    "location": {
      "lat": 34.36194,
      "lng": 107.23732
    },
    "cidx": [
      2401,
      2412
    ]
  },
  {
    "id": "610400",
    "name": "咸阳",
    "fullname": "咸阳市",
    "pinyin": [
      "xian",
      "yang"
    ],
    "location": {
      "lat": 34.32932,
      "lng": 108.70929
    },
    "cidx": [
      2413,
      2426
    ]
  },
  {
    "id": "610500",
    "name": "渭南",
    "fullname": "渭南市",
    "pinyin": [
      "wei",
      "nan"
    ],
    "location": {
      "lat": 34.49997,
      "lng": 109.51015
    },
    "cidx": [
      2427,
      2437
    ]
  },
  {
    "id": "610600",
    "name": "延安",
    "fullname": "延安市",
    "pinyin": [
      "yan",
      "an"
    ],
    "location": {
      "lat": 36.58529,
      "lng": 109.48978
    },
    "cidx": [
      2438,
      2450
    ]
  },
  {
    "id": "610700",
    "name": "汉中",
    "fullname": "汉中市",
    "pinyin": [
      "han",
      "zhong"
    ],
    "location": {
      "lat": 33.06761,
      "lng": 107.02377
    },
    "cidx": [
      2451,
      2461
    ]
  },
  {
    "id": "610800",
    "name": "榆林",
    "fullname": "榆林市",
    "pinyin": [
      "yu",
      "lin"
    ],
    "location": {
      "lat": 38.2852,
      "lng": 109.73458
    },
    "cidx": [
      2462,
      2473
    ]
  },
  {
    "id": "610900",
    "name": "安康",
    "fullname": "安康市",
    "pinyin": [
      "an",
      "kang"
    ],
    "location": {
      "lat": 32.68486,
      "lng": 109.02932
    },
    "cidx": [
      2474,
      2483
    ]
  },
  {
    "id": "611000",
    "name": "商洛",
    "fullname": "商洛市",
    "pinyin": [
      "shang",
      "luo"
    ],
    "location": {
      "lat": 33.87036,
      "lng": 109.94041
    },
    "cidx": [
      2484,
      2490
    ]
  },
  {
    "id": "620100",
    "name": "兰州",
    "fullname": "兰州市",
    "pinyin": [
      "lan",
      "zhou"
    ],
    "location": {
      "lat": 36.06138,
      "lng": 103.83417
    },
    "cidx": [
      2491,
      2498
    ]
  },
  {
    "id": "620200",
    "name": "嘉峪关",
    "fullname": "嘉峪关市",
    "pinyin": [
      "jia",
      "yu",
      "guan"
    ],
    "location": {
      "lat": 39.77194,
      "lng": 98.28971
    },
    "cidx": [
      2499,
      2499
    ]
  },
  {
    "id": "620300",
    "name": "金昌",
    "fullname": "金昌市",
    "pinyin": [
      "jin",
      "chang"
    ],
    "location": {
      "lat": 38.52006,
      "lng": 102.18759
    },
    "cidx": [
      2500,
      2501
    ]
  },
  {
    "id": "620400",
    "name": "白银",
    "fullname": "白银市",
    "pinyin": [
      "bai",
      "yin"
    ],
    "location": {
      "lat": 36.5447,
      "lng": 104.13773
    },
    "cidx": [
      2502,
      2506
    ]
  },
  {
    "id": "620500",
    "name": "天水",
    "fullname": "天水市",
    "pinyin": [
      "tian",
      "shui"
    ],
    "location": {
      "lat": 34.58085,
      "lng": 105.72486
    },
    "cidx": [
      2507,
      2513
    ]
  },
  {
    "id": "620600",
    "name": "武威",
    "fullname": "武威市",
    "pinyin": [
      "wu",
      "wei"
    ],
    "location": {
      "lat": 37.9282,
      "lng": 102.63797
    },
    "cidx": [
      2514,
      2517
    ]
  },
  {
    "id": "620700",
    "name": "张掖",
    "fullname": "张掖市",
    "pinyin": [
      "zhang",
      "ye"
    ],
    "location": {
      "lat": 38.92592,
      "lng": 100.44981
    },
    "cidx": [
      2518,
      2523
    ]
  },
  {
    "id": "620800",
    "name": "平凉",
    "fullname": "平凉市",
    "pinyin": [
      "ping",
      "liang"
    ],
    "location": {
      "lat": 35.54303,
      "lng": 106.6653
    },
    "cidx": [
      2524,
      2530
    ]
  },
  {
    "id": "620900",
    "name": "酒泉",
    "fullname": "酒泉市",
    "pinyin": [
      "jiu",
      "quan"
    ],
    "location": {
      "lat": 39.73255,
      "lng": 98.49394
    },
    "cidx": [
      2531,
      2537
    ]
  },
  {
    "id": "621000",
    "name": "庆阳",
    "fullname": "庆阳市",
    "pinyin": [
      "qing",
      "yang"
    ],
    "location": {
      "lat": 35.70978,
      "lng": 107.64292
    },
    "cidx": [
      2538,
      2545
    ]
  },
  {
    "id": "621100",
    "name": "定西",
    "fullname": "定西市",
    "pinyin": [
      "ding",
      "xi"
    ],
    "location": {
      "lat": 35.58113,
      "lng": 104.62524
    },
    "cidx": [
      2546,
      2552
    ]
  },
  {
    "id": "621200",
    "name": "陇南",
    "fullname": "陇南市",
    "pinyin": [
      "long",
      "nan"
    ],
    "location": {
      "lat": 33.401,
      "lng": 104.92166
    },
    "cidx": [
      2553,
      2561
    ]
  },
  {
    "id": "622900",
    "name": "临夏",
    "fullname": "临夏回族自治州",
    "pinyin": [
      "lin",
      "xia"
    ],
    "location": {
      "lat": 35.60122,
      "lng": 103.21091
    },
    "cidx": [
      2562,
      2569
    ]
  },
  {
    "id": "623000",
    "name": "甘南",
    "fullname": "甘南藏族自治州",
    "pinyin": [
      "gan",
      "nan"
    ],
    "location": {
      "lat": 34.98327,
      "lng": 102.91102
    },
    "cidx": [
      2570,
      2577
    ]
  },
  {
    "id": "630100",
    "name": "西宁",
    "fullname": "西宁市",
    "pinyin": [
      "xi",
      "ning"
    ],
    "location": {
      "lat": 36.61729,
      "lng": 101.77782
    },
    "cidx": [
      2578,
      2584
    ]
  },
  {
    "id": "630200",
    "name": "海东",
    "fullname": "海东市",
    "pinyin": [
      "hai",
      "dong"
    ],
    "location": {
      "lat": 36.48209,
      "lng": 102.40173
    },
    "cidx": [
      2585,
      2590
    ]
  },
  {
    "id": "632200",
    "name": "海北",
    "fullname": "海北藏族自治州",
    "pinyin": [
      "hai",
      "bei"
    ],
    "location": {
      "lat": 36.95454,
      "lng": 100.90096
    },
    "cidx": [
      2591,
      2594
    ]
  },
  {
    "id": "632300",
    "name": "黄南",
    "fullname": "黄南藏族自治州",
    "pinyin": [
      "huang",
      "nan"
    ],
    "location": {
      "lat": 35.51991,
      "lng": 102.01507
    },
    "cidx": [
      2595,
      2598
    ]
  },
  {
    "id": "632500",
    "name": "海南",
    "fullname": "海南藏族自治州",
    "pinyin": [
      "hai",
      "nan"
    ],
    "location": {
      "lat": 36.28663,
      "lng": 100.62037
    },
    "cidx": [
      2599,
      2603
    ]
  },
  {
    "id": "632600",
    "name": "果洛",
    "fullname": "果洛藏族自治州",
    "pinyin": [
      "guo",
      "luo"
    ],
    "location": {
      "lat": 34.47141,
      "lng": 100.24475
    },
    "cidx": [
      2604,
      2609
    ]
  },
  {
    "id": "632700",
    "name": "玉树",
    "fullname": "玉树藏族自治州",
    "pinyin": [
      "yu",
      "shu"
    ],
    "location": {
      "lat": 33.00528,
      "lng": 97.0065
    },
    "cidx": [
      2610,
      2615
    ]
  },
  {
    "id": "632800",
    "name": "海西",
    "fullname": "海西蒙古族藏族自治州",
    "pinyin": [
      "hai",
      "xi"
    ],
    "location": {
      "lat": 37.3771,
      "lng": 97.37122
    },
    "cidx": [
      2616,
      2622
    ]
  },
  {
    "id": "640100",
    "name": "银川",
    "fullname": "银川市",
    "pinyin": [
      "yin",
      "chuan"
    ],
    "location": {
      "lat": 38.48644,
      "lng": 106.23248
    },
    "cidx": [
      2623,
      2628
    ]
  },
  {
    "id": "640200",
    "name": "石嘴山",
    "fullname": "石嘴山市",
    "pinyin": [
      "shi",
      "zui",
      "shan"
    ],
    "location": {
      "lat": 38.9841,
      "lng": 106.38418
    },
    "cidx": [
      2629,
      2631
    ]
  },
  {
    "id": "640300",
    "name": "吴忠",
    "fullname": "吴忠市",
    "pinyin": [
      "wu",
      "zhong"
    ],
    "location": {
      "lat": 37.99755,
      "lng": 106.19879
    },
    "cidx": [
      2632,
      2636
    ]
  },
  {
    "id": "640400",
    "name": "固原",
    "fullname": "固原市",
    "pinyin": [
      "gu",
      "yuan"
    ],
    "location": {
      "lat": 36.0158,
      "lng": 106.24259
    },
    "cidx": [
      2637,
      2641
    ]
  },
  {
    "id": "640500",
    "name": "中卫",
    "fullname": "中卫市",
    "pinyin": [
      "zhong",
      "wei"
    ],
    "location": {
      "lat": 37.50026,
      "lng": 105.19676
    },
    "cidx": [
      2642,
      2644
    ]
  },
  {
    "id": "650100",
    "name": "乌鲁木齐",
    "fullname": "乌鲁木齐市",
    "pinyin": [
      "wu",
      "lu",
      "mu",
      "qi"
    ],
    "location": {
      "lat": 43.82663,
      "lng": 87.61688
    },
    "cidx": [
      2645,
      2652
    ]
  },
  {
    "id": "650200",
    "name": "克拉玛依",
    "fullname": "克拉玛依市",
    "pinyin": [
      "ke",
      "la",
      "ma",
      "yi"
    ],
    "location": {
      "lat": 45.57999,
      "lng": 84.88927
    },
    "cidx": [
      2653,
      2656
    ]
  },
  {
    "id": "650400",
    "name": "吐鲁番",
    "fullname": "吐鲁番市",
    "pinyin": [
      "tu",
      "lu",
      "fan"
    ],
    "location": {
      "lat": 42.9513,
      "lng": 89.18954
    },
    "cidx": [
      2657,
      2659
    ]
  },
  {
    "id": "650500",
    "name": "哈密",
    "fullname": "哈密市",
    "pinyin": [
      "ha",
      "mi"
    ],
    "location": {
      "lat": 42.81855,
      "lng": 93.51538
    },
    "cidx": [
      2660,
      2662
    ]
  },
  {
    "id": "652300",
    "name": "昌吉",
    "fullname": "昌吉回族自治州",
    "pinyin": [
      "chang",
      "ji"
    ],
    "location": {
      "lat": 44.01117,
      "lng": 87.30822
    },
    "cidx": [
      2663,
      2669
    ]
  },
  {
    "id": "652700",
    "name": "博州",
    "fullname": "博尔塔拉蒙古自治州",
    "pinyin": [
      "bo",
      "zhou"
    ],
    "location": {
      "lat": 44.90597,
      "lng": 82.06665
    },
    "cidx": [
      2670,
      2673
    ]
  },
  {
    "id": "652800",
    "name": "巴州",
    "fullname": "巴音郭楞蒙古自治州",
    "pinyin": [
      "ba",
      "zhou"
    ],
    "location": {
      "lat": 41.76404,
      "lng": 86.14517
    },
    "cidx": [
      2674,
      2682
    ]
  },
  {
    "id": "652900",
    "name": "阿克苏",
    "fullname": "阿克苏地区",
    "pinyin": [
      "a",
      "ke",
      "su"
    ],
    "location": {
      "lat": 41.16842,
      "lng": 80.26008
    },
    "cidx": [
      2683,
      2691
    ]
  },
  {
    "id": "653000",
    "name": "克州",
    "fullname": "克孜勒苏柯尔克孜自治州",
    "pinyin": [
      "ke",
      "zhou"
    ],
    "location": {
      "lat": 39.7153,
      "lng": 76.16661
    },
    "cidx": [
      2692,
      2695
    ]
  },
  {
    "id": "653100",
    "name": "喀什",
    "fullname": "喀什地区",
    "pinyin": [
      "ka",
      "shi"
    ],
    "location": {
      "lat": 39.47042,
      "lng": 75.98976
    },
    "cidx": [
      2696,
      2707
    ]
  },
  {
    "id": "653200",
    "name": "和田",
    "fullname": "和田地区",
    "pinyin": [
      "he",
      "tian"
    ],
    "location": {
      "lat": 37.11431,
      "lng": 79.92247
    },
    "cidx": [
      2708,
      2715
    ]
  },
  {
    "id": "654000",
    "name": "伊犁",
    "fullname": "伊犁哈萨克自治州",
    "pinyin": [
      "yi",
      "li"
    ],
    "location": {
      "lat": 43.91689,
      "lng": 81.32416
    },
    "cidx": [
      2716,
      2726
    ]
  },
  {
    "id": "654200",
    "name": "塔城",
    "fullname": "塔城地区",
    "pinyin": [
      "ta",
      "cheng"
    ],
    "location": {
      "lat": 46.74532,
      "lng": 82.98046
    },
    "cidx": [
      2727,
      2733
    ]
  },
  {
    "id": "654300",
    "name": "阿勒泰",
    "fullname": "阿勒泰地区",
    "pinyin": [
      "a",
      "le",
      "tai"
    ],
    "location": {
      "lat": 47.84564,
      "lng": 88.14023
    },
    "cidx": [
      2734,
      2740
    ]
  },
  {
    "id": "659001",
    "name": "石河子",
    "fullname": "石河子市",
    "pinyin": [
      "shi",
      "he",
      "zi"
    ],
    "location": {
      "lat": 44.30653,
      "lng": 86.07893
    }
  },
  {
    "id": "659002",
    "name": "阿拉尔",
    "fullname": "阿拉尔市",
    "pinyin": [
      "a",
      "la",
      "er"
    ],
    "location": {
      "lat": 40.54798,
      "lng": 81.28067
    }
  },
  {
    "id": "659003",
    "name": "图木舒克",
    "fullname": "图木舒克市",
    "pinyin": [
      "tu",
      "mu",
      "shu",
      "ke"
    ],
    "location": {
      "lat": 39.86495,
      "lng": 79.06902
    }
  },
  {
    "id": "659004",
    "name": "五家渠",
    "fullname": "五家渠市",
    "pinyin": [
      "wu",
      "jia",
      "qu"
    ],
    "location": {
      "lat": 44.16799,
      "lng": 87.54017
    }
  },
  {
    "id": "659005",
    "name": "北屯",
    "fullname": "北屯市",
    "pinyin": [
      "bei",
      "tun"
    ],
    "location": {
      "lat": 47.36327,
      "lng": 87.80014
    }
  },
  {
    "id": "659006",
    "name": "铁门关",
    "fullname": "铁门关市",
    "pinyin": [
      "tie",
      "men",
      "guan"
    ],
    "location": {
      "lat": 41.86868,
      "lng": 85.67583
    }
  },
  {
    "id": "659007",
    "name": "双河",
    "fullname": "双河市",
    "pinyin": [
      "shuang",
      "he"
    ],
    "location": {
      "lat": 44.84418,
      "lng": 82.35501
    }
  },
  {
    "id": "659008",
    "name": "可克达拉",
    "fullname": "可克达拉市",
    "pinyin": [
      "ke",
      "ke",
      "da",
      "la"
    ],
    "location": {
      "lat": 43.94799,
      "lng": 81.04476
    }
  },
  {
    "id": "659009",
    "name": "昆玉",
    "fullname": "昆玉市",
    "pinyin": [
      "kun",
      "yu"
    ],
    "location": {
      "lat": 37.20948,
      "lng": 79.29133
    }
  },
  {
    "id": "659010",
    "name": "胡杨河",
    "fullname": "胡杨河市",
    "pinyin": [
      "hu",
      "yang",
      "he"
    ],
    "location": {
      "lat": 44.69295,
      "lng": 84.827387
    }
  }, {
    "id": "710100",
    "name": "台北",
    "fullname": "台北市",
    "pinyin": [
      "tai",
      "bei"
    ],
    "location": {
      "lat": 25.030724,
      "lng": 121.520076
    },
    "cidx": [
      2741,
      2752
    ]
  },
  {
    "id": "710200",
    "name": "高雄",
    "fullname": "高雄市",
    "pinyin": [
      "gao",
      "xiong"
    ],
    "location": {
      "lat": 22.630576,
      "lng": 120.306839
    },
    "cidx": [
      2753,
      2790
    ]
  },
  {
    "id": "710300",
    "name": "台南",
    "fullname": "台南市",
    "pinyin": [
      "tai",
      "nan"
    ],
    "location": {
      "lat": 22.998601,
      "lng": 120.187817
    },
    "cidx": [
      2791,
      2827
    ]
  },
  {
    "id": "710400",
    "name": "台中",
    "fullname": "台中市",
    "pinyin": [
      "tai",
      "zhong"
    ],
    "location": {
      "lat": 24.143171,
      "lng": 120.679882
    },
    "cidx": [
      2828,
      2856
    ]
  },
  {
    "id": "710600",
    "name": "南投",
    "fullname": "南投县",
    "pinyin": [
      "nan",
      "tou"
    ],
    "location": {
      "lat": 23.919619,
      "lng": 120.670008
    },
    "cidx": [
      2857,
      2869
    ]
  },
  {
    "id": "710700",
    "name": "基隆",
    "fullname": "基隆市",
    "pinyin": [
      "ji",
      "long"
    ],
    "location": {
      "lat": 25.122105,
      "lng": 121.741526
    },
    "cidx": [
      2870,
      2876
    ]
  },
  {
    "id": "710800",
    "name": "新竹",
    "fullname": "新竹市",
    "pinyin": [
      "xin",
      "zhu"
    ],
    "location": {
      "lat": 24.784924,
      "lng": 120.990745
    },
    "cidx": [
      2877,
      2879
    ]
  },
  {
    "id": "710900",
    "name": "嘉义",
    "fullname": "嘉义市",
    "pinyin": [
      "jia",
      "yi"
    ],
    "location": {
      "lat": 23.485079,
      "lng": 120.472462
    },
    "cidx": [
      2880,
      2881
    ]
  },
  {
    "id": "711100",
    "name": "新北",
    "fullname": "新北市",
    "pinyin": [
      "xin",
      "bei"
    ],
    "location": {
      "lat": 25.1853,
      "lng": 121.663675
    },
    "cidx": [
      2882,
      2910
    ]
  },
  {
    "id": "711200",
    "name": "宜兰",
    "fullname": "宜兰县",
    "pinyin": [
      "yi",
      "lan"
    ],
    "location": {
      "lat": 24.759707,
      "lng": 121.754442
    },
    "cidx": [
      2911,
      2922
    ]
  },
  {
    "id": "711300",
    "name": "新竹",
    "fullname": "新竹县",
    "pinyin": [
      "xin",
      "zhu"
    ],
    "location": {
      "lat": 24.839233,
      "lng": 121.002012
    },
    "cidx": [
      2923,
      2935
    ]
  },
  {
    "id": "711400",
    "name": "桃园",
    "fullname": "桃园市",
    "pinyin": [
      "tao",
      "yuan"
    ],
    "location": {
      "lat": 24.982757,
      "lng": 121.213608
    },
    "cidx": [
      2936,
      2948
    ]
  },
  {
    "id": "711500",
    "name": "苗栗",
    "fullname": "苗栗县",
    "pinyin": [
      "miao",
      "li"
    ],
    "location": {
      "lat": 24.696762,
      "lng": 120.884337
    },
    "cidx": [
      2949,
      2966
    ]
  },
  {
    "id": "711700",
    "name": "彰化",
    "fullname": "彰化县",
    "pinyin": [
      "zhang",
      "hua"
    ],
    "location": {
      "lat": 24.068523,
      "lng": 120.557479
    },
    "cidx": [
      2967,
      2992
    ]
  },
  {
    "id": "711900",
    "name": "嘉义",
    "fullname": "嘉义县",
    "pinyin": [
      "jia",
      "yi"
    ],
    "location": {
      "lat": 23.434473,
      "lng": 120.624255
    },
    "cidx": [
      2993,
      3010
    ]
  },
  {
    "id": "712100",
    "name": "云林",
    "fullname": "云林县",
    "pinyin": [
      "yun",
      "lin"
    ],
    "location": {
      "lat": 23.664943,
      "lng": 120.480738
    },
    "cidx": [
      3011,
      3030
    ]
  },
  {
    "id": "712400",
    "name": "屏东",
    "fullname": "屏东县",
    "pinyin": [
      "ping",
      "dong"
    ],
    "location": {
      "lat": 22.666716,
      "lng": 120.492005
    },
    "cidx": [
      3031,
      3063
    ]
  },
  {
    "id": "712500",
    "name": "台东",
    "fullname": "台东县",
    "pinyin": [
      "tai",
      "dong"
    ],
    "location": {
      "lat": 22.764364,
      "lng": 121.113207
    },
    "cidx": [
      3064,
      3079
    ]
  },
  {
    "id": "712600",
    "name": "花莲",
    "fullname": "花莲县",
    "pinyin": [
      "hua",
      "lian"
    ],
    "location": {
      "lat": 24.000674,
      "lng": 121.59729
    },
    "cidx": [
      3080,
      3092
    ]
  },
  {
    "id": "712700",
    "name": "澎湖",
    "fullname": "澎湖县",
    "pinyin": [
      "peng",
      "hu"
    ],
    "location": {
      "lat": 23.552351,
      "lng": 119.58457
    },
    "cidx": [
      3093,
      3098
    ]
  }, {
    "id": "810000",
    "name": "香港",
    "fullname": "香港特别行政区",
    "pinyin": [
      "xiang",
      "gang"
    ],
    "location": {
      "lat": 22.27534,
      "lng": 114.16546
    },
    "cidx": [
      469,
      486
    ]
  },
  {
    "id": "820000",
    "name": "澳门",
    "fullname": "澳门特别行政区",
    "pinyin": [
      "ao",
      "men"
    ],
    "location": {
      "lat": 22.19875,
      "lng": 113.54913
    },
    "cidx": [
      487,
      490
    ]
  }
];

export default citys;
