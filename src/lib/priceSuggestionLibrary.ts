import type { PriceSuggestion } from "./types";
// Price suggestions based on item name prefixes
// The name should match the start of the item name (case-insensitive)
export const priceSuggestionLibrary: Record<string, PriceSuggestion> = {
    // 1D
    'FHD9': {
        price: 300,
        doorCount: 1,
        drawerCount: 0,
    },
	'1D12': {
        price: 300,
        doorCount: 1,
        drawerCount: 1,
    },
    '1d15': {
        price: 334,
        doorCount: 1,
        drawerCount: 1,
    },
    '1d18': {
        price: 366,
        doorCount: 1,
        drawerCount: 1,
    },
    '1d21': {
        price: 400,
        doorCount: 1,
        drawerCount: 1,
    },
    '1d24': {
        price: 453,
        doorCount: 2,
        drawerCount: 1,
    },
    '1d27': {
        price: 465,
        doorCount: 2,
        drawerCount: 1,
    },
    '1d30': {
        price: 480,
        doorCount: 2,
        drawerCount: 1,
    },
    '1d33': {
        price: 495,
        doorCount: 2,
        drawerCount: 1,
    },
    '1d36': {
        price: 510,
        doorCount: 2,
        drawerCount: 1,
    },

    // 2D
    '2d30': {
        price: 532,
        doorCount: 2,
        drawerCount: 2,
    },
    '2d33': {
        price: 566,
        doorCount: 2,
        drawerCount: 2,
    },
    '2d36': {
        price: 598,
        doorCount: 2,
        drawerCount: 2,
    },
    '2d39': {
        price: 616,
        doorCount: 2,
        drawerCount: 2,
    },
    '2d42': {
        price: 632,
        doorCount: 3,
        drawerCount: 2,
    },
    '2d45': {
        price: 645,
        doorCount: 3,
        drawerCount: 2,
    },
    '2d48': {
        price: 676,
        doorCount: 3,
        drawerCount: 2,
    },
    '2d51': {
        price: 718,
        doorCount: 3,
        drawerCount: 2,
    },
    '2d54': {
        price: 761,
        doorCount: 4,
        drawerCount: 2,
    },
    '2d57': {
        price: 803,
        doorCount: 4,
        drawerCount: 2,
    },
    '2d60': {
        price: 845,
        doorCount: 4,
        drawerCount: 2,
    },

    // Sink Base
    'sb24': {
        price: 348,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb27': {
        price: 375,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb30': {
        price: 395,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb33': {
        price: 413,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb36': {
        price: 434,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb39': {
        price: 448,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb42': {
        price: 458,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb45': {
        price: 487,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb48': {
        price: 513,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb51': {
        price: 539,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb54': {
        price: 565,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb57': {
        price: 591,
        doorCount: 2,
        drawerCount: 1,
    },
    'sb60': {
        price: 617,
        doorCount: 2,
        drawerCount: 1,
    },

    // Three Drawer
    '3d12': {
        price: 436,
        doorCount: 0,
        drawerCount: 3,
    },
    '3d15': {
        price: 458,
        doorCount: 0,
        drawerCount: 3,
    },
    '3d18': {
        price: 487,
        doorCount: 0,
        drawerCount: 3,
    },
    '3d21': {
        price: 513,
        doorCount: 0,
        drawerCount: 3,
    },
    '3d24': {
        price: 545,
        doorCount: 0,
        drawerCount: 3,
    },
    '3d27': {
        price: 613,
        doorCount: 0,
        drawerCount: 3,
    },
    '3d30': {
        price: 684,
        doorCount: 0,
        drawerCount: 3,
    },
    '3d33': {
        price: 750,
        doorCount: 0,
        drawerCount: 3,
    },
    '3d36': {
        price: 818,
        doorCount: 0,
        drawerCount: 3,
    },

    // Four Drawer
    '4d12': {
        price: 482,
        doorCount: 0,
        drawerCount: 4,
    },
    '4d15': {
        price: 508,
        doorCount: 0,
        drawerCount: 4,
    },
    '4d18': {
        price: 532,
        doorCount: 0,
        drawerCount: 4,
    },
    '4d21': {
        price: 560,
        doorCount: 0,
        drawerCount: 4,
    },
    '4d24': {
        price: 590,
        doorCount: 0,
        drawerCount: 4,
    },
    '4d27': {
        price: 663,
        doorCount: 0,
        drawerCount: 4,
    },
    '4d30': {
        price: 740,
        doorCount: 0,
        drawerCount: 4,
    },
    '4d33': {
        price: 814,
        doorCount: 0,
        drawerCount: 4,
    },
    '4d36': {
        price: 888,
        doorCount: 0,
        drawerCount: 4,
    },

    // Bench Seat w/ Drawer
    '1dbs18': {
        price: 371,
        doorCount: 0,
        drawerCount: 1,
    },
    '1dbs21': {
        price: 379,
        doorCount: 0,
        drawerCount: 1,
    },
    '1dbs24': {
        price: 388,
        doorCount: 0,
        drawerCount: 1,
    },
    '1dbs27': {
        price: 397,
        doorCount: 0,
        drawerCount: 1,
    },
    '1dbs30': {
        price: 405,
        doorCount: 0,
        drawerCount: 1,
    },
    '1dbs33': {
        price: 423,
        doorCount: 0,
        drawerCount: 1,
    },
    '2dbs36': {
        price: 551,
        doorCount: 0,
        drawerCount: 2,
    },
    '2dbs39': {
        price: 580,
        doorCount: 0,
        drawerCount: 2,
    },
    '2dbs42': {
        price: 589,
        doorCount: 0,
        drawerCount: 2,
    },
    '2dbs45': {
        price: 608,
        doorCount: 0,
        drawerCount: 2,
    },
    '2dbs48': {
        price: 637,
        doorCount: 0,
        drawerCount: 2,
    },

    // Tray storage single door
    'td7': {
        price: 250,
        doorCount: 1,
        drawerCount: 0,
    },
    'td9': {
        price: 268,
        doorCount: 1,
        drawerCount: 0,
    },
    'td12': {
        price: 275,
        doorCount: 1,
        drawerCount: 0,
    },
    'td15': {
        price: 312,
        doorCount: 1,
        drawerCount: 0,
    },
    'td21': {
        price: 375,
        doorCount: 1,
        drawerCount: 0,
    },

    // Tray storange w/ drawer
    '1dtd9': {
        price: 318,
        doorCount: 1,
        drawerCount: 1,
    },
    '1dtd12': {
        price: 355,
        doorCount: 1,
        drawerCount: 1,
    },
    '1dtd15': {
        price: 390,
        doorCount: 1,
        drawerCount: 1,
    },
    '1dtd18': {
        price: 421,
        doorCount: 1,
        drawerCount: 1,
    },
    
    // OBC Base 12" Deep w/FI
    'ob21': {
        price: 389,
        doorCount: 0,
        drawerCount: 0,
    },
    'ob24': {
        price: 450,
        doorCount: 0,
        drawerCount: 0,
    },
    'ob27': {
        price: 463,
        doorCount: 0,
        drawerCount: 0,
    },
    'ob30': {
        price: 505,
        doorCount: 0,
        drawerCount: 0,
    },
    'ob33': {
        price: 538,
        doorCount: 0,
        drawerCount: 0,
    },
    'ob36': {
        price: 575,
        doorCount: 0,
        drawerCount: 0,
    },

    // Corner cabs
    '3636ps': {
        price: 1437,
        doorCount: 0,
        drawerCount: 0,
    },
    'lbc3636': {
        price: 687,
        doorCount: 0,
        drawerCount: 0,
    },
    'sr3636': {
        price: 1086,
        doorCount: 0,
        drawerCount: 0,
    },
    '3d3636': {
        price: 1627,
        doorCount: 0,
        drawerCount: 0,
    },

    // Blind corners
    'dc36': {
        price: 398,
        doorCount: 0,
        drawerCount: 1,
    },
    'dc39': {
        price: 416,
        doorCount: 0,
        drawerCount: 1,
    },
    'dc42': {
        price: 437,
        doorCount: 0,
        drawerCount: 1,
    },
    'dc45': {
        price: 450,
        doorCount: 0,
        drawerCount: 1,
    },
    'dc48': {
        price: 466,
        doorCount: 0,
        drawerCount: 1,
    },

    // vanity cabinets
    'vsb24': {
        price: 388,
        doorCount: 2,
        drawerCount: 0,
    },
    'vsb27': {
        price: 410,
        doorCount: 2,
        drawerCount: 0,
    },
    'vsb30': {
        price: 434,
        doorCount: 2,
        drawerCount: 0,
    },
    'vsb33': {
        price: 455,
        doorCount: 2,
        drawerCount: 0,
    },
    'vsb39': {
        price: 514,
        doorCount: 2,
        drawerCount: 0,
    },
    'vsb42': {
        price: 549,
        doorCount: 2,
        drawerCount: 0,
    },
    'vsb45': {
        price: 585,
        doorCount: 2,
        drawerCount: 0,
    },
    'vsb48': {
        price: 621,
        doorCount: 2,
        drawerCount: 0,
    },
    'vsb51': {
        price: 666,
        doorCount: 2,
        drawerCount: 0,
    },
    'vsb54': {
        price: 692,
        doorCount: 2,
        drawerCount: 0,
    },
    'vsb57': {
        price: 528,
        doorCount: 2,
        drawerCount: 0,
    },
    'vsb60': {
        price: 763,
        doorCount: 2,
        drawerCount: 0,
    },

    // SINK BSE W/DRAWERS 34 1/2
    '2vsb36': {
        price: 625,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vsb39': {
        price: 640,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vsb42': {
        price: 660,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vsb45': {
        price: 692,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vsb48': {
        price: 783,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vsb4d54': {
        price: 942,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vsb4d60': {
        price: 1008,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vsb4d72': {
        price: 1097,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vsb4d84': {
        price: 1255,
        doorCount: 2,
        drawerCount: 2,
    },

    // ONE DRAWER				
    '1vd12': {
        price: 300,
        doorCount: 1,
        drawerCount: 1,
    },
    '1vd15': {
        price: 334,
        doorCount: 1,
        drawerCount: 1,
    },
    '1vd18': {
        price: 366,
        doorCount: 1,
        drawerCount: 1,
    },
    '1vd21': {
        price: 400,
        doorCount: 1,
        drawerCount: 1,
    },
    '1vd24': {
        price: 453,
        doorCount: 2,
        drawerCount: 1,
    },
    '1vd27': {
        price: 465,
        doorCount: 2,
        drawerCount: 1,
    },
    '1vd30': {
        price: 532,
        doorCount: 2,
        drawerCount: 1,
    },
    '1vd33': {
        price: 566,
        doorCount: 2,
        drawerCount: 1,
    },
    '1vd36': {
        price: 510,
        doorCount: 2,
        drawerCount: 1,
    },
    // TWO DRAWER				
    '2vd30': {
        price: 540,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vd33': {
        price: 564,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vd36': {
        price: 594,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vd39': {
        price: 644,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vd42': {
        price: 690,
        doorCount: 2,
        drawerCount: 2,
    },
    '2vd48': {
        price: 726,
        doorCount: 2,
        drawerCount: 2,
    },
    // THREE DRAWER				
    '3vd12': {
        price: 436,
        doorCount: 0,
        drawerCount: 3,
    },
    '3vd15': {
        price: 458,
        doorCount: 0,
        drawerCount: 3,
    },
    '3vd18': {
        price: 487,
        doorCount: 0,
        drawerCount: 3,
    },
    '3vd21': {
        price: 513,
        doorCount: 0,
        drawerCount: 3,
    },
    '3vd24': {
        price: 545,
        doorCount: 0,
        drawerCount: 3,
    },
    '3vd27': {
        price: 613,
        doorCount: 0,
        drawerCount: 3,
    },
    '3vd30': {
        price: 684,
        doorCount: 0,
        drawerCount: 3,
    },
    '3vd33': {
        price: 750,
        doorCount: 0,
        drawerCount: 3,
    },
    '3vd36': {
        price: 818,
        doorCount: 0,
        drawerCount: 3,
    },
    // FOUR DRAWERS				
    '4vd12': {
        price: 482,
        doorCount: 0,
        drawerCount: 4,
    },
    '4vd15': {
        price: 508,
        doorCount: 0,
        drawerCount: 4,
    },
    '4vd18': {
        price: 532,
        doorCount: 0,
        drawerCount: 4,
    },
    '4vd21': {
        price: 560,
        doorCount: 0,
        drawerCount: 4,
    },
    '4vd24': {
        price: 590,
        doorCount: 0,
        drawerCount: 4,
    },
    '4vd27': {
        price: 663,
        doorCount: 0,
        drawerCount: 4,
    },
    '4vd30': {
        price: 740,
        doorCount: 0,
        drawerCount: 4,
    },
    '4vd33': {
        price: 814,
        doorCount: 0,
        drawerCount: 4,
    },
    '4vd36': {
        price: 888,
        doorCount: 0,
        drawerCount: 4,
    },

    // VANITY  BASE W/2 SIDE DRAWERS				
    '2vss30': {
        price: 510,
        doorCount: 1,
        drawerCount: 2,
    },
    '2vss33': {
        price: 530,
        doorCount: 1,
        drawerCount: 2,
    },
    '2vss36': {
        price: 550,
        doorCount: 1,
        drawerCount: 2,
    },
    '2vss39': {
        price: 568,
        doorCount: 1,
        drawerCount: 2,
    },
    '2vss42': {
        price: 586,
        doorCount: 1,
        drawerCount: 2,
    },
    '2vss45': {
        price: 600,
        doorCount: 1,
        drawerCount: 2,
    },
    '2vss48': {
        price: 625,
        doorCount: 1,
        drawerCount: 2,
    },
    // VANITY  BASE W/3 SIDE DRAWERS				
    '3vss30': {
        price: 605,
        doorCount: 1,
        drawerCount: 3,
    },
    '3vss33': {
        price: 625,
        doorCount: 1,
        drawerCount: 3,
    },
    '3vss36': {
        price: 640,
        doorCount: 1,
        drawerCount: 3,
    },
    '3vss39': {
        price: 660,
        doorCount: 1,
        drawerCount: 3,
    },
    '3vss42': {
        price: 675,
        doorCount: 1,
        drawerCount: 3,
    },
    '3vss45': {
        price: 700,
        doorCount: 1,
        drawerCount: 3,
    },
    '3vss48': {
        price: 720,
        doorCount: 1,
        drawerCount: 3,
    },
                    
    // VANITY UNDER COUNTER DRAWER				
    'vuc18': {
        price: 155,
        doorCount: 0,
        drawerCount: 1,
    },
    'vuc21': {
        price: 180,
        doorCount: 0,
        drawerCount: 1,
    },
    'vuc24': {
        price: 200,
        doorCount: 0,
        drawerCount: 1,
    },
    'vuc27': {
        price: 218,
        doorCount: 0,
        drawerCount: 1,
    },
    'vuc30': {
        price: 274,
        doorCount: 0,
        drawerCount: 1,
    },
    'vuc33': {
        price: 292,
        doorCount: 0,
        drawerCount: 1,
    },
    'vuc36': {
        price: 313,
        doorCount: 0,
        drawerCount: 1,
    },

    // UpJohn's
    'uj2436': {
        price: 753,
        doorCount: 2,
        drawerCount: 0,
    },
    'uj3036': {
        price: 780,
        doorCount: 2,
        drawerCount: 0,
    },
    'uj3636': {
        price: 826,
        doorCount: 2,
        drawerCount: 0,
    },

    // Tri-view mirrors
    '30X30': {
        price: 486,
        doorCount: 0,
        drawerCount: 0,
    },
    '36X30': {
        price: 545,
        doorCount: 0,
        drawerCount: 0,
    },
    '42X30': {
        price: 603,
        doorCount: 0,
        drawerCount: 0,
    },
    '42X36': {
        price: 750,
        doorCount: 0,
        drawerCount: 0,
    },

    // Wall 12" tall
    'w912': {
        price: 145,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1212': {
        price: 145,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1512': {
        price: 145,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1812': {
        price: 145,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2112': {
        price: 145,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2412': {
        price: 145,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2712': {
        price: 175,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3012': {
        price: 205,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3312': {
        price: 210,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3612': {
        price: 220,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3912': {
        price: 237,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4212': {
        price: 255,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4512': {
        price: 330,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4812': {
        price: 380,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5112': {
        price: 404,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5412': {
        price: 428,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5712': {
        price: 451,
        doorCount: 3,
        drawerCount: 0,
    },

    // Wall 15" tall
    'w915': {
        price: 175,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1215': {
        price: 175,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1515': {
        price: 175,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2115': {
        price: 175,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2415': {
        price: 175,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2715': {
        price: 197,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3015': {
        price: 220,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3915': {
        price: 270,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4215': {
        price: 290,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4515': {
        price: 345,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5115': {
        price: 420,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5415': {
        price: 444,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5715': {
        price: 469,
        doorCount: 3,
        drawerCount: 0,
    },

    // Wall 18" tall
    'w918': {
        price: 225,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1218': {
        price: 225,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1518': {
        price: 225,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1818': {
        price: 225,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2118': {
        price: 225,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2418': {
        price: 225,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2718': {
        price: 233,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3018': {
        price: 240,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3318': {
        price: 255,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3618': {
        price: 275,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3918': {
        price: 280,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4218': {
        price: 300,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4518': {
        price: 350,
        doorCount: 3,
        drawerCount: 0,
    },
    'w4818': {
        price: 400,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5118': {
        price: 425,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5418': {
        price: 450,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5718': {
        price: 475,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6018': {
        price: 500,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6318': {
        price: 525,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6918': {
        price: 575,
        doorCount: 3,
        drawerCount: 0,
    },
    'w7218': {
        price: 600,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7518': {
        price: 625,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7818': {
        price: 650,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8118': {
        price: 675,
        doorCount: 4,
        drawerCount: 0,
    },

    // Wall 21" tall
    'w921': {
        price: 235,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1221': {
        price: 235,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1521': {
        price: 235,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1821': {
        price: 235,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2421': {
        price: 235,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2721': {
        price: 264,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3021': {
        price: 255,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3321': {
        price: 265,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3621': {
        price: 285,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3921': {
        price: 298,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4221': {
        price: 310,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4521': {
        price: 360,
        doorCount: 3,
        drawerCount: 0,
    },
    'w4821': {
        price: 410,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5121': {
        price: 436,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5421': {
        price: 461,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5721': {
        price: 487,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6021': {
        price: 513,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6321': {
        price: 538,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6621': {
        price: 564,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6921': {
        price: 589,
        doorCount: 3,
        drawerCount: 0,
    },
    'w7221': {
        price: 615,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7521': {
        price: 641,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7821': {
        price: 666,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8121': {
        price: 692,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8421': {
        price: 718,
        doorCount: 4,
        drawerCount: 0,
    },

    // Wall 24" tall
    'w924': {
        price: 245,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1224': {
        price: 245,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1524': {
        price: 245,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1824': {
        price: 245,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2424': {
        price: 245,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2724': {
        price: 276,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3024': {
        price: 265,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3324': {
        price: 280,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3624': {
        price: 290,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3924': {
        price: 305,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4224': {
        price: 320,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4524': {
        price: 375,
        doorCount: 3,
        drawerCount: 0,
    },
    'w4824': {
        price: 425,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5124': {
        price: 452,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5424': {
        price: 478,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5724': {
        price: 505,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6024': {
        price: 531,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6324': {
        price: 558,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6624': {
        price: 584,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6924': {
        price: 611,
        doorCount: 3,
        drawerCount: 0,
    },
    'w7224': {
        price: 638,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7524': {
        price: 664,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7824': {
        price: 691,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8124': {
        price: 717,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8424': {
        price: 744,
        doorCount: 4,
        drawerCount: 0,
    },

    // Wall 27" tall
    'w927': {
        price: 300,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1227': {
        price: 300,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1527': {
        price: 300,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1827': {
        price: 300,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2127': {
        price: 300,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2427': {
        price: 300,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2727': {
        price: 300,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3027': {
        price: 303,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3327': {
        price: 316,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3627': {
        price: 329,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3927': {
        price: 356,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4227': {
        price: 361,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4527': {
        price: 413,
        doorCount: 3,
        drawerCount: 0,
    },
    'w4827': {
        price: 463,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5127': {
        price: 492,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5427': {
        price: 521,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5727': {
        price: 550,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6027': {
        price: 579,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6327': {
        price: 608,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6627': {
        price: 637,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6927': {
        price: 666,
        doorCount: 3,
        drawerCount: 0,
    },
    'w7227': {
        price: 695,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7527': {
        price: 723,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7827': {
        price: 752,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8127': {
        price: 781,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8427': {
        price: 810,
        doorCount: 4,
        drawerCount: 0,
    },

    // Wall 30" tall
    'w930': {
        price: 205,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1230': {
        price: 220,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1530': {
        price: 235,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1830': {
        price: 255,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2430': {
        price: 300,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2730': {
        price: 315,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3030': {
        price: 330,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3330': {
        price: 345,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3630': {
        price: 365,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3930': {
        price: 380,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4230': {
        price: 400,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4530': {
        price: 440,
        doorCount: 3,
        drawerCount: 0,
    },
    'w4830': {
        price: 490,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5130': {
        price: 508,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5430': {
        price: 525,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5730': {
        price: 565,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6030': {
        price: 605,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6330': {
        price: 660,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6630': {
        price: 715,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6930': {
        price: 738,
        doorCount: 3,
        drawerCount: 0,
    },
    'w7230': {
        price: 760,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7530': {
        price: 792,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7830': {
        price: 823,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8130': {
        price: 855,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8430': {
        price: 875,
        doorCount: 4,
        drawerCount: 0,
    },

    // Wall 33" tall
    'w933': {
        price: 236,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1233': {
        price: 253,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1533': {
        price: 271,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1833': {
        price: 294,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2133': {
        price: 305,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2433': {
        price: 345,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2733': {
        price: 363,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3033': {
        price: 380,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3333': {
        price: 397,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3633': {
        price: 420,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3933': {
        price: 437,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4233': {
        price: 460,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4533': {
        price: 506,
        doorCount: 3,
        drawerCount: 0,
    },
    'w4833': {
        price: 564,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5133': {
        price: 585,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5433': {
        price: 604,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5733': {
        price: 650,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6033': {
        price: 696,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6333': {
        price: 759,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6633': {
        price: 823,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6933': {
        price: 849,
        doorCount: 3,
        drawerCount: 0,
    },
    'w7233': {
        price: 872,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7533': {
        price: 908,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7833': {
        price: 945,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8133': {
        price: 981,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8433': {
        price: 1007,
        doorCount: 4,
        drawerCount: 0,
    },


    // Wall 36" tall
    'w936': {
        price: 246,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1236': {
        price: 264,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1536': {
        price: 282,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1836': {
        price: 306,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2136': {
        price: 318,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2436': {
        price: 360,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2736': {
        price: 378,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3036': {
        price: 396,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3336': {
        price: 414,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3636': {
        price: 432,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3936': {
        price: 450,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4236': {
        price: 468,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4536': {
        price: 504,
        doorCount: 3,
        drawerCount: 0,
    },
    'w4836': {
        price: 588,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5136': {
        price: 610,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5436': {
        price: 630,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5736': {
        price: 678,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6036': {
        price: 726,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6336': {
        price: 792,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6636': {
        price: 858,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6936': {
        price: 886,
        doorCount: 3,
        drawerCount: 0,
    },
    'w7236': {
        price: 912,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7536': {
        price: 950,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7836': {
        price: 988,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8136': {
        price: 1026,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8436': {
        price: 1050,
        doorCount: 4,
        drawerCount: 0,
    },

    // Wall 42" tall
    'w942': {
        price: 267,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1242': {
        price: 286,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1542': {
        price: 306,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1842': {
        price: 332,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2142': {
        price: 345,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2442': {
        price: 390,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2742': {
        price: 410,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3042': {
        price: 429,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3342': {
        price: 449,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3642': {
        price: 475,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3942': {
        price: 494,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4242': {
        price: 520,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4542': {
        price: 572,
        doorCount: 3,
        drawerCount: 0,
    },
    'w4842': {
        price: 637,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5142': {
        price: 661,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5442': {
        price: 683,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5742': {
        price: 735,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6042': {
        price: 787,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6342': {
        price: 858,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6642': {
        price: 930,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6942': {
        price: 960,
        doorCount: 3,
        drawerCount: 0,
    },
    'w7242': {
        price: 988,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7542': {
        price: 1029,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7842': {
        price: 1070,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8142': {
        price: 1112,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8442': {
        price: 1138,
        doorCount: 4,
        drawerCount: 0,
    },

    // Wall 48" tall
    'w948': {
        price: 305,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1248': {
        price: 327,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1548': {
        price: 350,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1848': {
        price: 379,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2148': {
        price: 394,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2448': {
        price: 446,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2748': {
        price: 469,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3048': {
        price: 490,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3348': {
        price: 513,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3648': {
        price: 543,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3948': {
        price: 565,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4248': {
        price: 594,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4548': {
        price: 654,
        doorCount: 3,
        drawerCount: 0,
    },
    'w4848': {
        price: 728,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5148': {
        price: 755,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5448': {
        price: 781,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5748': {
        price: 840,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6048': {
        price: 899,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6348': {
        price: 981,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6648': {
        price: 1063,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6948': {
        price: 1097,
        doorCount: 3,
        drawerCount: 0,
    },
    'w7248': {
        price: 1129,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7548': {
        price: 1176,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7848': {
        price: 1223,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8148': {
        price: 1270,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8448': {
        price: 1301,
        doorCount: 4,
        drawerCount: 0,
    },

    // Wall 54" tall
    'w954': {
        price: 343,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1254': {
        price: 368,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1554': {
        price: 393,
        doorCount: 1,
        drawerCount: 0,
    },
    'w1854': {
        price: 427,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2154': {
        price: 444,
        doorCount: 1,
        drawerCount: 0,
    },
    'w2454': {
        price: 501,
        doorCount: 2,
        drawerCount: 0,
    },
    'w2754': {
        price: 527,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3054': {
        price: 552,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3354': {
        price: 577,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3654': {
        price: 611,
        doorCount: 2,
        drawerCount: 0,
    },
    'w3954': {
        price: 635,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4254': {
        price: 669,
        doorCount: 2,
        drawerCount: 0,
    },
    'w4554': {
        price: 735,
        doorCount: 3,
        drawerCount: 0,
    },
    'w4854': {
        price: 819,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5154': {
        price: 850,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5454': {
        price: 878,
        doorCount: 3,
        drawerCount: 0,
    },
    'w5754': {
        price: 945,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6054': {
        price: 1012,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6354': {
        price: 1103,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6654': {
        price: 1196,
        doorCount: 3,
        drawerCount: 0,
    },
    'w6954': {
        price: 1234,
        doorCount: 3,
        drawerCount: 0,
    },
    'w7254': {
        price: 1270,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7554': {
        price: 1323,
        doorCount: 4,
        drawerCount: 0,
    },
    'w7854': {
        price: 1376,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8154': {
        price: 1429,
        doorCount: 4,
        drawerCount: 0,
    },
    'w8454': {
        price: 1463,
        doorCount: 4,
        drawerCount: 0,
    },

    // Wall blind corners
    'wc2412': {
        price: 150,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2712': {
        price: 150,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3012': {
        price: 150,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3312': {
        price: 166,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3612': {
        price: 197,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3912': {
        price: 220,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4212': {
        price: 246,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4512': {
        price: 279,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4812': {
        price: 313,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5412': {
        price: 400,
        doorCount: 2,
        drawerCount: 0,
    },

    'wc2415': {
        price: 160,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2715': {
        price: 160,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3015': {
        price: 160,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3315': {
        price: 208,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3615': {
        price: 247,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3915': {
        price: 274,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4215': {
        price: 307,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4515': {
        price: 348,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4815': {
        price: 391,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5415': {
        price: 500,
        doorCount: 2,
        drawerCount: 0,
    },

    'wc2418': {
        price: 170,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2718': {
        price: 177,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3018': {
        price: 217,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3318': {
        price: 249,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3618': {
        price: 296,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3918': {
        price: 329,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4218': {
        price: 369,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4518': {
        price: 418,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4818': {
        price: 469,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5418': {
        price: 600,
        doorCount: 2,
        drawerCount: 0,
    },

    'wc2421': {
        price: 180,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2721': {
        price: 207,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3021': {
        price: 253,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3321': {
        price: 291,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3621': {
        price: 345,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3921': {
        price: 384,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4221': {
        price: 430,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4521': {
        price: 488,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4821': {
        price: 548,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5421': {
        price: 700,
        doorCount: 2,
        drawerCount: 0,
    },

    'wc2424': {
        price: 188,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2724': {
        price: 236,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3024': {
        price: 289,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3324': {
        price: 332,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3624': {
        price: 395,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3924': {
        price: 439,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4224': {
        price: 492,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4524': {
        price: 557,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4824': {
        price: 626,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5424': {
        price: 800,
        doorCount: 2,
        drawerCount: 0,
    },

    'wc2427': {
        price: 212,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2727': {
        price: 266,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3027': {
        price: 325,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3327': {
        price: 374,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3627': {
        price: 444,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3927': {
        price: 494,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4227': {
        price: 553,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4527': {
        price: 627,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4827': {
        price: 704,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5427': {
        price: 900,
        doorCount: 2,
        drawerCount: 0,
    },

    'wc2430': {
        price: 265,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2730': {
        price: 295,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3030': {
        price: 325,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3330': {
        price: 340,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3630': {
        price: 370,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3930': {
        price: 380,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4230': {
        price: 395,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4530': {
        price: 418,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4830': {
        price: 440,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5430': {
        price: 500,
        doorCount: 2,
        drawerCount: 0,
    },

    'wc2433': {
        price: 305,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2733': {
        price: 340,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3033': {
        price: 374,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3333': {
        price: 391,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3633': {
        price: 426,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3933': {
        price: 437,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4233': {
        price: 455,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4533': {
        price: 481,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4833': {
        price: 506,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5433': {
        price: 575,
        doorCount: 2,
        drawerCount: 0,
    },

    'wc2436': {
        price: 318,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2736': {
        price: 354,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3036': {
        price: 390,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3336': {
        price: 408,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3636': {
        price: 444,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3936': {
        price: 456,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4236': {
        price: 474,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4536': {
        price: 502,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4836': {
        price: 528,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5436': {
        price: 600,
        doorCount: 2,
        drawerCount: 0,
    },

    'wc2442': {
        price: 345,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2742': {
        price: 384,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3042': {
        price: 423,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3342': {
        price: 443,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3642': {
        price: 481,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3942': {
        price: 494,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4242': {
        price: 514,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4542': {
        price: 544,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4842': {
        price: 572,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5442': {
        price: 650,
        doorCount: 2,
        drawerCount: 0,
    },

    'wc2448': {
        price: 394,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2748': {
        price: 439,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3048': {
        price: 483,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3348': {
        price: 506,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3648': {
        price: 550,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3948': {
        price: 565,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4248': {
        price: 587,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4548': {
        price: 622,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4848': {
        price: 654,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5448': {
        price: 743,
        doorCount: 2,
        drawerCount: 0,
    },

    'wc2454': {
        price: 444,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc2754': {
        price: 494,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3054': {
        price: 544,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3354': {
        price: 570,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3654': {
        price: 618,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc3954': {
        price: 635,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4254': {
        price: 661,
        doorCount: 1,
        drawerCount: 0,
    },
    'wc4554': {
        price: 699,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc4854': {
        price: 735,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc5454': {
        price: 836,
        doorCount: 2,
        drawerCount: 0,
    },

    // Wall easy access corners
    'wc2412ezr': {
        price: 445,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2712ezr': {
        price: 500,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2415ezr': {
        price: 490,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2715ezr': {
        price: 550,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2418ezr': {
        price: 534,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2718ezr': {
        price: 600,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2421ezr': {
        price: 583,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2721ezr': {
        price: 655,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2424ezr': {
        price: 636,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2724ezr': {
        price: 714,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2427ezr': {
        price: 693,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2727ezr': {
        price: 779,
        doorCount: 2,
        drawerCount: 0,
    },
    // ?? above prices are likely wrong
    'wc2430ezr': {
        price: 445,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2730ezr': {
        price: 500,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2433ezr': {
        price: 490,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2733ezr': {
        price: 550,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2436ezr': {
        price: 534,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2736ezr': {
        price: 600,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2442ezr': {
        price: 583,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2742ezr': {
        price: 655,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2448ezr': {
        price: 636,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2748ezr': {
        price: 714,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2454ezr': {
        price: 693,
        doorCount: 2,
        drawerCount: 0,
    },
    'wc2754ezr': {
        price: 779,
        doorCount: 2,
        drawerCount: 0,
    },

    // tall cabinets 12" deep
    'UT158412': {
        price: 965,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT188412': {
        price: 965,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT218412': {
        price: 1170,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT248412': {
        price: 1530,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT278412': {
        price: 1730,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT308412': {
        price: 1730,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT338412': {
        price: 1940,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT368412': {
        price: 1940,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT398412': {
        price: 2160,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT428412': {
        price: 2160,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT159012': {
        price: 1034,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT189012': {
        price: 1034,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT219012': {
        price: 1254,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT249012': {
        price: 1639,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT279012': {
        price: 1854,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT309012': {
        price: 1854,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT339012': {
        price: 2079,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT369012': {
        price: 2079,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT399012': {
        price: 2314,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT429012': {
        price: 2314,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT159612': {
        price: 1103,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT189612': {
        price: 1200,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT219612': {
        price: 1337,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT249612': {
        price: 1749,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT279612': {
        price: 1977,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT309612': {
        price: 1977,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT339612': {
        price: 2217,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT369612': {
        price: 2217,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT399612': {
        price: 2469,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT429612': {
        price: 2469,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT1510812': {
        price: 1241,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT1810812': {
        price: 1350,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT2110812': {
        price: 1504,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT2410812': {
        price: 1967,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT2710812': {
        price: 2224,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3010812': {
        price: 2224,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3310812': {
        price: 2494,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3610812': {
        price: 2494,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3910812': {
        price: 2777,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT4210812': {
        price: 2777,
        doorCount: 4,
        drawerCount: 0,
    },

    // tall cabinets 18" deep
    'UT1584': {
        price: 1055,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT1884': {
        price: 1055,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT2184': {
        price: 1290,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT2484': {
        price: 1650,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT2784': {
        price: 1880,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3084': {
        price: 1880,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3384': {
        price: 2000,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3684': {
        price: 2115,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3984': {
        price: 2300,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT4284': {
        price: 2450,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT1590': {
        price: 1130,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT1890': {
        price: 1130,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT2190': {
        price: 1382,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT2490': {
        price: 1768,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT2790': {
        price: 2014,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3090': {
        price: 2014,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3390': {
        price: 2143,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3690': {
        price: 2266,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3990': {
        price: 2464,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT4290': {
        price: 2625,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT1596': {
        price: 1206,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT1896': {
        price: 1325,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT2196': {
        price: 1474,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT2496': {
        price: 1886,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT2796': {
        price: 2149,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3096': {
        price: 2149,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3396': {
        price: 2286,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3696': {
        price: 2417,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT3996': {
        price: 2629,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT4296': {
        price: 2800,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT15108': {
        price: 1356,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT18108': {
        price: 1491,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT21108': {
        price: 1659,
        doorCount: 2,
        drawerCount: 0,
    },
    'UT24108': {
        price: 2121,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT27108': {
        price: 2417,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT30108': {
        price: 2417,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT33108': {
        price: 2571,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT36108': {
        price: 2719,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT39108': {
        price: 2957,
        doorCount: 4,
        drawerCount: 0,
    },
    'UT42108': {
        price: 3150,
        doorCount: 4,
        drawerCount: 0,
    },

    // Oven cabs
    'OV31.5 84': {
        price: 1113,
        doorCount: 2,
        drawerCount: 1,
    },
    'OV31.5 90': {
        price: 1193,
        doorCount: 2,
        drawerCount: 1,
    },
    'OV31.5 102': {
        price: 1352,
        doorCount: 2,
        drawerCount: 1,
    },
    'OV31.5 108': {
        price: 1431,
        doorCount: 2,
        drawerCount: 1,
    },
    'OV31.5 120': {
        price: 1590,
        doorCount: 2,
        drawerCount: 1,
    },
    'MOV31.5 84': {
        price: 1500,
        doorCount: 2,
        drawerCount: 1,
    },
    'MOV31.6 90': {
        price: 1607,
        doorCount: 2,
        drawerCount: 1,
    },
    'MOV31.7 102': {
        price: 1821,
        doorCount: 2,
        drawerCount: 1,
    },
    'MOV31.8 108': {
        price: 1929,
        doorCount: 2,
        drawerCount: 1,
    },
    'MOV31.9 120': {
        price: 2143,
        doorCount: 2,
        drawerCount: 1,
    },

    // Open adjust wall shelves no base
    'OW2160': {
        price: 600,
        doorCount: 0,
        drawerCount: 0,
    },
    'OW2460': {
        price: 670,
        doorCount: 0,
        drawerCount: 0,
    },
    'OW2760': {
        price: 760,
        doorCount: 0,
        drawerCount: 0,
    },
    'OW3060': {
        price: 840,
        doorCount: 0,
        drawerCount: 0,
    },
    'OW3360': {
        price: 930,
        doorCount: 0,
        drawerCount: 0,
    },
    'OW3660': {
        price: 1010,
        doorCount: 0,
        drawerCount: 0,
    },
    'OW4560': {
        price: 1250,
        doorCount: 0,
        drawerCount: 0,
    },
    'OW4860': {
        price: 1325,
        doorCount: 0,
        drawerCount: 0,
    },

    // Open adjust tallshelves base
    'OBK2184': {
        price: 900,
        doorCount: 0,
        drawerCount: 0,
    },
    'OBK2484': {
        price: 1000,
        doorCount: 0,
        drawerCount: 0,
    },
    'OBK2784': {
        price: 1100,
        doorCount: 0,
        drawerCount: 0,
    },
    'OBK3084': {
        price: 1300,
        doorCount: 0,
        drawerCount: 0,
    },
    'OBK3384': {
        price: 1400,
        doorCount: 0,
        drawerCount: 0,
    },
    'OBK3684': {
        price: 1550,
        doorCount: 0,
        drawerCount: 0,
    },
    'OBK3984': {
        price: 1650,
        doorCount: 0,
        drawerCount: 0,
    },
    'OBK4284': {
        price: 1800,
        doorCount: 0,
        drawerCount: 0,
    },
    'OBK4584': {
        price: 1930,
        doorCount: 0,
        drawerCount: 0,
    },
    'OBK4884': {
        price: 2150,
        doorCount: 0,
        drawerCount: 0,
    },
};

