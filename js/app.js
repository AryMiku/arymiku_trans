var app = angular.module('myApp', []);
//app.controller('myCtrl', function($scope,singletonService) {
app.controller('myCtrl', function($scope) {
    $scope.brawlings = [
        {
            Name : "ตอนที่ 153 => ",
            mediafire : "https://www.mediafire.com/file/03gcn00nlerzja4/%5BAryMiku%5D+Brawling+Go+-+153+%5BTH%5D%5BEND%5D.rar",
            gdrive : "https://drive.google.com/file/d/1J2iiy7wkt8_pCBF2ssSaUtaiSwPA-EzR/view?fbclid=IwAR17u_CTjuAZ1gkNF4X_cH3x4ugoQopFR5MNB-vLRw3hoLR4obmHQxaZy3k",
            twoth : "https://2th.me/a/1028/f1041/3014549?fbclid=IwAR2wvAMWZXkCVBNia3gqvTZp7uhe9BOdyQnKAksLj1zKwebv47wa5rrQVpQ"
        },
        {
            Name : "ตอนที่ 152 => ",
            mediafire : "https://bit.ly/2DesuAs",
            gdrive : "https://bit.ly/2vbiFPD",
            twoth : "https://2th.me/a/1028/f1041/3014407"
        },
        {
            Name : "ตอนที่ 151 => ",
            mediafire : "https://bit.ly/2K6V78T",
            gdrive : "https://goo.gl/g5pTkF",
            twoth : "https://2th.me/a/1028/f1041/3014105"
        },
        {
            Name : "ตอนที่ 150 => ",
            mediafire : "https://bit.ly/2TOROXj",
            gdrive : "https://goo.gl/n6n6vh",
            twoth : "https://2th.me/a/1028/f1041/3013751"
        },
        {
            Name : "ตอนที่ 149 => ",
            mediafire : "https://bit.ly/2tJJaL6",
            gdrive : "https://goo.gl/wra471",
            twoth : "https://2th.me/a/1028/f1041/3013578"
        },
        {
            Name : "ตอนที่ 148 => ",
            mediafire : "https://bit.ly/2EkkspD",
            gdrive : "https://goo.gl/hGv5MZ",
            twoth : "https://2th.me/a/1028/f1041/3013542"
        },
        {
            Name : "ตอนที่ 147 => ",
            mediafire : "https://bit.ly/2Ijb0bg",
            gdrive : "https://goo.gl/uD9XYS",
            twoth : "https://2th.me/a/1028/f1041/3013370"
        },
        {
            Name : "ตอนที่ 146 => ",
            mediafire : "https://bit.ly/2UGAzEB",
            gdrive : "https://goo.gl/6qicF2",
            twoth : "https://2th.me/a/1028/f1041/3013231"
        },
        {
            Name : "ตอนที่ 145 => ",
            mediafire : "https://bit.ly/2Sp5ibw",
            gdrive : "https://goo.gl/uQ4QCy",
            twoth : "https://2th.me/a/1028/f1041/3013229"
        },
        {
            Name : "ตอนที่ 144 => ",
            mediafire : "https://bit.ly/2Ry96mo",
            gdrive : "https://goo.gl/QqLhWT",
            twoth : "https://2th.me/a/1028/f1041/3013228"
        },
        {
            Name : "ตอนที่ 143 => ",
            mediafire : "https://bit.ly/2G6KHD1",
            gdrive : "https://goo.gl/UkNFSf",
            twoth : "https://2th.me/a/1028/f1041/3013209"
        },
        {
            Name : "ตอนที่ 142 => ",
            mediafire : "https://bit.ly/2G6KHD1",
            gdrive : "https://goo.gl/XzvG5Q",
            twoth : "https://2th.me/a/1028/f1041/3013208"
        },
        {
            Name : "ตอนที่ 141 => ",
            mediafire : "https://bit.ly/2RwjD1e",
            gdrive : "https://goo.gl/P4k59P",
            twoth : "https://2th.me/a/1028/f1041/3013207"
        },
        {
            Name : "ตอนที่ 140 => ",
            mediafire : "https://bit.ly/2G1Fmw5",
            gdrive : "https://goo.gl/TTGuD3",
            twoth : "https://2th.me/a/1028/f1041/3013107"
        },
        {
            Name : "ตอนที่ 139 => ",
            mediafire : "https://bit.ly/2FyXs9f",
            gdrive : "https://goo.gl/sgjoXs",
            twoth : "https://2th.me/a/1028/f1041/3013034"
        },
        {
            Name : "ตอนที่ 138 => ",
            mediafire : "https://bit.ly/2H8ALdA",
            gdrive : "https://goo.gl/KCnrZB",
            twoth : "https://2th.me/a/1028/f1041/3012929"
        },
        {
            Name : "ตอนที่ 137 => ",
            mediafire : "https://bit.ly/2F8GCOk",
            gdrive : "https://goo.gl/Bwa4Ub",
            twoth : "https://2th.me/a/1028/f1041/3012928"
        },
        {
            Name : "ตอนที่ 136 => ",
            mediafire : "https://bit.ly/2BV2Cbp",
            gdrive : "https://goo.gl/ZkyYKV",
            twoth : "https://2th.me/a/1028/f1041/3012927"
        },
        {
            Name : "ตอนที่ 135 => ",
            mediafire : "https://bit.ly/2SuPl0t",
            gdrive : "https://goo.gl/MTQUgc",
            twoth : "https://2th.me/a/1028/f1041/3012926"
        },
        {
            Name : "ตอนที่ 134 => ",
            mediafire : "https://bit.ly/2AnHzyt",
            gdrive : "https://goo.gl/Z46c4q",
            twoth : "https://2th.me/a/1028/f1041/3012870"
        },
        {
            Name : "ตอนที่ 133 => ",
            mediafire : "https://bit.ly/2QUgk8R",
            gdrive : "https://goo.gl/jqj8uC",
            twoth : "https://2th.me/a/1028/f1041/3012869"
        },
        {
            Name : "ตอนที่ 132 => ",
            mediafire : "https://bit.ly/2EPFSh2",
            gdrive : "https://goo.gl/DxCRjA",
            twoth : "https://2th.me/a/1028/f1041/3012786"
        },
        {
            Name : "ตอนที่ 131 => ",
            mediafire : "https://bit.ly/2rpS2oc",
            gdrive : "https://goo.gl/ZVkzzi",
            twoth : "https://2th.me/a/1028/f1041/3012463"
        },
        {
            Name : "ตอนที่ 130 => ",
            mediafire : "https://bit.ly/2Syc1fV",
            gdrive : "https://goo.gl/3WBTY7",
            twoth : "https://2th.me/a/1028/f1041/3012459"
        },
        {
            Name : "ตอนที่ 129 => ",
            mediafire : "https://bit.ly/2KW8zsR",
            gdrive : "https://goo.gl/xwoDGM",
            twoth : "https://2th.me/a/1028/f1041/3012456"
        },
        {
            Name : "ตอนที่ 128 => ",
            mediafire : "https://bit.ly/2ANT0yI",
            gdrive : "https://goo.gl/TnvFCu",
            twoth : "https://2th.me/a/1028/f1041/3012443"
        },
        {
            Name : "ตอนที่ 127 => ",
            mediafire : "https://bit.ly/2FYzh54",
            gdrive : "https://bit.ly/3atn3N7",
            twoth : "https://2th.me/a/1028/f1041/3012425/p5453220"
        },
        {
            Name : "ตอนที่ 126 => ",
            mediafire : "https://bit.ly/2E1za6t",
            gdrive : "https://goo.gl/xyuwht",
            twoth : "https://2th.me/a/1028/f1041/3012423"
        },
        {
            Name : "ตอนที่ 125 => ",
            mediafire : "https://bit.ly/2DZINm9",
            gdrive : "https://goo.gl/3Vu2wC",
            twoth : "https://2th.me/a/1028/f1041/3012392"
        },
        {
            Name : "ตอนที่ 124 => ",
            mediafire : "https://bit.ly/2F5qmhT",
            gdrive : "https://goo.gl/6eRJHy",
            twoth : "https://2th.me/a/1028/f1041/3011949"
        },
        {
            Name : "ตอนที่ 123 => ",
            mediafire : "https://bit.ly/2J9cFwG",
            gdrive : "https://goo.gl/DTFtV6",
            twoth : "https://2th.me/a/1028/f1041/3011698"
        },
        {
            Name : "ตอนที่ 122 => ",
            mediafire : "https://bit.ly/2CfFW7F",
            gdrive : "https://goo.gl/Va4mRA",
            twoth : "https://2th.me/a/1028/f1041/3011569"
        },
        {
            Name : "ตอนที่ 121 => ",
            mediafire : "https://bit.ly/2Rvyjz3",
            gdrive : "https://goo.gl/agZaYD",
            twoth : "https://2th.me/a/1028/f1041/3011454"
        },
        {
            Name : "ตอนที่ 120 => ",
            mediafire : "https://bit.ly/2QjROJn",
            gdrive : "https://goo.gl/BQ7kny",
            twoth : "https://2th.me/a/1028/f1041/3011331"
        },
        {
            Name : "ตอนที่ 119 => ",
            mediafire : "https://bit.ly/2N1FyLP",
            gdrive : "https://goo.gl/c2KqoN",
            twoth : "https://2th.me/a/1028/f1041/3011276"
        },
        {
            Name : "ตอนที่ 118 => ",
            mediafire : "https://bit.ly/2xCkcim",
            gdrive : "https://goo.gl/EMkui7",
            twoth : "https://2th.me/a/1028/f1041/3011187"
        },
        {
            Name : "ตอนที่ 117 => ",
            mediafire : "https://bit.ly/2oTRN3l",
            gdrive : "https://goo.gl/PpLnJK",
            twoth : "https://2th.me/a/1028/f1041/3011077"
        },
        {
            Name : "ตอนที่ 116 => ",
            mediafire : "https://bit.ly/2Q9wLKD",
            gdrive : "https://goo.gl/EA6qn8",
            twoth : "https://2th.me/a/1028/f1041/3010921"
        },
        {
            Name : "ตอนที่ 115 => ",
            mediafire : "https://bit.ly/2wJAHt8",
            gdrive : "https://goo.gl/u9WLGY",
            twoth : "https://2th.me/a/1028/f1041/3010897"
        },
        {
            Name : "ตอนที่ 114 => ",
            mediafire : "https://bit.ly/2oHDZJj",
            gdrive : "https://goo.gl/KmXHsG",
            twoth : "https://2th.me/a/1028/f1041/3010877"
        },
        {
            Name : "ตอนที่ 113 => ",
            mediafire : "https://bit.ly/2MGiEhM",
            gdrive : "https://goo.gl/U8v8Eq",
            twoth : "https://2th.me/a/1028/f1041/3010804"
        },
        {
            Name : "ตอนที่ 112 => ",
            mediafire : "https://bit.ly/2MWzs3m",
            gdrive : "https://goo.gl/v3qzDJ",
            twoth : "https://2th.me/a/1028/f1041/3010657"
        },
        {
            Name : "ตอนที่ 111 => ",
            mediafire : "https://bit.ly/2MBLQqc",
            gdrive : "https://goo.gl/Q73Mei",
            twoth : "https://2th.me/a/1028/f1041/3010572"
        },
        {
            Name : "ตอนที่ 110 => ",
            mediafire : "http://www.mediafire.com/file/ml1omp3fka6nqwn/%255BAryMiku%255D_Brawling_Go_-_110_%255BTH%255D.rar/file",
            gdrive : "https://drive.google.com/drive/folders/1Xg9ppaFfboA0jjYd2k8tdcdDStJnGGID?usp=sharing",
            twoth : "https://2th.me/a/1028/f1041/3010225"
        },
        {
            Name : "ตอนที่ 109 => ",
            mediafire : "https://bit.ly/2LgcHql",
            gdrive : "https://goo.gl/Qw2cdx",
            twoth : "https://2th.me/a/1028/f1041/3009772"
        },
        {
            Name : "ตอนที่ 108 => ",
            mediafire : "https://bit.ly/2KspDcf",
            gdrive : "https://goo.gl/SNhqmU",
            twoth : "https://2th.me/a/1028/f1041/3009563"
        },
        {
            Name : "ตอนที่ 107 => ",
            mediafire : "http://www.mediafire.com/file/65s5dc685bj0hng/%255BAryMiku%255D_Brawling_Go_-_107_%255BTH%255D.rar/file",
            gdrive : "https://drive.google.com/drive/folders/1jXtHVsXQlqbRyqNXK4hYROyPk364X1Xf?usp=sharing",
            twoth : "https://2th.me/a/1028/f1041/3009464"
        },
        {
            Name : "ตอนที่ 106 => ",
            mediafire : "https://bit.ly/2sUlkLY",
            gdrive : "https://goo.gl/XhsbCH",
            twoth : "https://2th.me/a/1028/f1041/3009274"
        },
        {
            Name : "ตอนที่ 105 => ",
            mediafire : "https://bit.ly/2kYUcI7",
            gdrive : "https://goo.gl/3Sauu9",
            twoth : "https://2th.me/a/1028/f1041/3009266"
        },
        {
            Name : "ตอนที่ 104 => ",
            mediafire : "https://bit.ly/2kBOLyB",
            gdrive : "https://goo.gl/fePPhk",
            twoth : "https://2th.me/a/1028/f1041/3009082"
        },
        {
            Name : "ตอนที่ 103 => ",
            mediafire : "https://bit.ly/2xmTJIB",
            gdrive : "https://goo.gl/NrYudP",
            twoth : "https://2th.me/a/1028/f1041/3009067"
        },
        {
            Name : "ตอนที่ 102 => ",
            mediafire : "http://www.mediafire.com/file/ahv8uvnnq1l2r6x/%255BAryMiku%255D_Brawling_Go_-_102_%255BTH%255D.rar/file",
            gdrive : "https://drive.google.com/drive/folders/1vFiU2MytfRMRYeOtqdW0iuaNDBNjOZfg?usp=sharing",
            twoth : "https://2th.me/a/1028/f1041/3008457"
        },
        {
            Name : "ตอนที่ 101 => ",
            mediafire : "http://www.mediafire.com/file/sgixxotsdcwvzjx/%255BAryMiku%255D_Brawling_Go_-_101_%255BTH%255D.rar/file",
            gdrive : "https://drive.google.com/drive/folders/1GxSSUsAKD7AmECYBRT6-L_UG4bZQY3Fx?usp=sharing",
            twoth : "https://2th.me/a/1028/f1041/3008305"
        },
        {
            Name : "ตอนที่ 100 => ",
            mediafire : "https://bit.ly/2F6m0Sw",
            gdrive : "https://goo.gl/VXmPD8",
            twoth : "https://2th.me/a/1028/f1041/3008205"
        },
        {
            Name : "ตอนที่ 99 => ",
            mediafire : "http://www.mediafire.com/file/0n09zpwjwp06bdj/%255BAryMiku%255D_Brawling_Go_-_99_%255BTH%255D.rar/file",
            gdrive : "https://drive.google.com/drive/folders/1xFEgNDypBGj7ZwqKrZqa2WcyQ5u5reK3",
            twoth : "https://2th.me/a/1028/f1041/3008098"
        },
        {
            Name : "ตอนที่ 98 => ",
            mediafire : "http://www.mediafire.com/file/aps0klv74mzljuk/%255BAryMiku%255D_Brawling_Go_-_98_%255BTH%255D.rar/file",
            gdrive : "https://drive.google.com/drive/folders/1r6iZ51qvLI9J0nnC2u0ElpbGt0eeUE5B",
            twoth : "https://2th.me/a/1028/f1041/3007916"
        },
        {
            Name : "ตอนที่ 97 => ",
            mediafire : "https://bit.ly/2GHYiAU",
            gdrive : "https://drive.google.com/drive/folders/17XkQbN_FveoVl_OO2MusIXSig0k4zrA6",
            twoth : "https://2th.me/a/1028/f1041/3007801"
        },
        {
            Name : "ตอนที่ 96 => ",
            mediafire : "http://bit.ly/2puiVpw",
            gdrive : "https://drive.google.com/drive/folders/1WII1mzwqBEM0urY1qmx7XuB7eec5Wpe2",
            twoth : "https://2th.me/a/1028/f1041/3007579"
        },
        {
            Name : "ตอนที่ 95 => ",
            mediafire : "http://bit.ly/2rOnVK7",
            gdrive : "https://drive.google.com/drive/folders/1T8OP88buzw5lkYAT0kIP0FyeREzDk3dY",
            twoth : "https://2th.me/a/1028/f1041/3006714"
        },
        {
            Name : "ตอนที่ 94 => ",
            mediafire : "http://bit.ly/2DAb56K",
            gdrive : "https://drive.google.com/drive/folders/1bZ1Vx_IYl1Ps-70InazrL6ARZrxG9MjL",
            twoth : "https://2th.me/a/1028/f1041/3006565"
        },
        {
            Name : "ตอนที่ 93 => ",
            mediafire : "http://bit.ly/2FCJr7g",
            gdrive : "https://drive.google.com/drive/folders/1XhjFEpdSRIuNU_qP8FtyTc4xkFiTSMA9",
            twoth : "https://2th.me/a/1028/f1041/3006429"
        },
        {
            Name : "ตอนที่ 92 => ",
            mediafire : "http://bit.ly/2DpStnt",
            gdrive : "https://drive.google.com/drive/folders/1ibu5Uqf5C5720mUpq5w2tgIS3bQrD2oA",
            twoth : "https://2th.me/a/1028/f1041/3006428"
        },
        {
            Name : "ตอนที่ 91 => ",
            mediafire : "http://bit.ly/2CMioEP",
            gdrive : "https://drive.google.com/drive/folders/1EmezV3CD-3uwWQ8BJqHTyD0zsiBMIUfa",
            twoth : "https://2th.me/a/1028/f1041/3006344"
        },
        {
            Name : "ตอนที่ 90 => ",
            mediafire : "http://bit.ly/2mizQKP",
            gdrive : "https://drive.google.com/drive/folders/1423BNbZ3NzGTdASDPZugMgc7vtUCAtyE",
            twoth : "https://2th.me/a/1028/f1041/3006342"
        },
        {
            Name : "ตอนที่ 89 => ",
            mediafire : "http://bit.ly/2yn2sFX",
            gdrive : "https://goo.gl/RQpvxa",
            twoth : "https://2th.me/a/1028/f1041/3006326"
        },
        {
            Name : "ตอนที่ 88 => ",
            mediafire : "http://bit.ly/2AhZRyU",
            gdrive : "https://goo.gl/dZCd3j",
            twoth : "https://2th.me/a/1028/f1041/3005835"
        },
        {
            Name : "ตอนที่ 87 => ",
            mediafire : "http://bit.ly/2h2p3BM",
            gdrive : "https://goo.gl/Veafa5",
            twoth : "https://2th.me/a/1028/f1041/3004723"
        },
        {
            Name : "ตอนที่ 86 => ",
            mediafire : "http://bit.ly/2yBJEGO",
            gdrive : "https://goo.gl/znw3NM",
            twoth : "https://2th.me/a/1028/f1041/3004625"
        },
        {
            Name : "ตอนที่ 85 => ",
            mediafire : "http://bit.ly/2fDUB04",
            gdrive : "https://goo.gl/EHRcpd",
            twoth : "https://2th.me/a/1028/f1041/3003933"
        },
        {
            Name : "ตอนที่ 84 => ",
            mediafire : "http://bit.ly/2x7mmpl",
            gdrive : "https://goo.gl/tPR1QN",
            twoth : "https://2th.me/a/1028/f1041/3003910"
        },
        {
            Name : "ตอนที่ 83 => ",
            mediafire : "http://bit.ly/2wTrX4E",
            gdrive : "https://goo.gl/vAmGLT",
            twoth : "https://2th.me/a/1028/f1041/3003388"
        },
        {
            Name : "ตอนที่ 82 => ",
            mediafire : "http://bit.ly/2uKqV78",
            gdrive : "https://goo.gl/VwKnz5",
            twoth : "https://2th.me/a/1028/f1041/3003104"
        },
        {
            Name : "ตอนที่ 81 => ",
            mediafire : "http://bit.ly/2u8hPVz",
            gdrive : "https://goo.gl/s8Y6BM",
            twoth : "https://2th.me/a/1028/f1041/3002851"
        },
        {
            Name : "ตอนที่ 80 => ",
            mediafire : "http://bit.ly/2tFlGVE",
            gdrive : "https://goo.gl/7s1ySi",
            twoth : "https://2th.me/a/1028/f1041/3002741"
        },
        {
            Name : "ตอนที่ 79 => ",
            mediafire : "http://bit.ly/2uGbuA3",
            gdrive : "https://goo.gl/LZddEx",
            twoth : "https://2th.me/a/1028/f1041/3002548"
        },
        {
            Name : "ตอนที่ 78 => ",
            mediafire : "http://bit.ly/2uBZi30",
            gdrive : "https://goo.gl/MgySSf",
            twoth : "https://2th.me/a/1028/f1041/3002438"
        },
        {
            Name : "ตอนที่ 77 => ",
            mediafire : "http://bit.ly/2uj3GnQ",
            gdrive : "https://goo.gl/4cBsk4",
            twoth : "https://2th.me/a/1028/f1041/3002341"
        },
        {
            Name : "ตอนที่ 76 => ",
            mediafire : "http://bit.ly/2sBAV1F",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3002217"
        },
        {
            Name : "ตอนที่ 75 => ",
            mediafire : "http://bit.ly/2uv0QJE",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3002179"
        },
        {
            Name : "ตอนที่ 74 => ",
            mediafire : "http://bit.ly/2sdsqcX",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3002074"
        },
        {
            Name : "ตอนที่ 73 => ",
            mediafire : "http://bit.ly/2uhYwEI",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001985"
        },
        {
            Name : "ตอนที่ 72 => ",
            mediafire : "http://bit.ly/2tJumeb",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001897"
        },
        {
            Name : "ตอนที่ 71 => ",
            mediafire : "http://bit.ly/2sDgmUE",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001852"
        },
        {
            Name : "ตอนที่ 70 => ",
            mediafire : "http://bit.ly/2tXtjH5",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001816"
        },
        {
            Name : "ตอนที่ 69 => ",
            mediafire : "http://bit.ly/2sFrBuq",
            gdrive : "",
            twoth : "https://2th.me/a/h_manga/f1028/3001807"
        },
        {
            Name : "ตอนที่ 68 => ",
            mediafire : "http://bit.ly/2sTF1F9",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001786"
        },
        {
            Name : "ตอนที่ 67 => ",
            mediafire : "http://bit.ly/2tx4P80",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001782"
        },
        {
            Name : "ตอนที่ 66 => ",
            mediafire : "http://bit.ly/2rChwwW",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001760"
        },
        {
            Name : "ตอนที่ 65 => ",
            mediafire : "http://bit.ly/2sRBFTq",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001743"
        },
        {
            Name : "ตอนที่ 64 => ",
            mediafire : "http://bit.ly/2sGXBjB",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001740"
        },
        {
            Name : "ตอนที่ 63 => ",
            mediafire : "http://bit.ly/2rCDl3i",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001658"
        },
        {
            Name : "ตอนที่ 62 => ",
            mediafire : "http://bit.ly/2tdKhRF",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001649"
        },
        {
            Name : "ตอนที่ 61 => ",
            mediafire : "http://bit.ly/2sAvtPp",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001640"
        },
        {
            Name : "ตอนที่ 60 => ",
            mediafire : "http://bit.ly/2rnJDj7",
            gdrive : "",
            twoth : "https://2th.me/a/1028/f1041/3001618"
        },
        {
            Name : "ตอนที่ 59 => ",
            mediafire : "http://bit.ly/2tn57h1",
            gdrive : "",
            twoth : "https://2th.me/a/h_manga/f1028/3001586"
        },
        {
            Name : "ตอนที่ 58 => ",
            mediafire : "http://bit.ly/2rvJ1ra",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=14250.0"
        },
        {
            Name : "ตอนที่ 57 => ",
            mediafire : "https://www.mediafire.com/file/967107fatn7l278/%255BAryMiku%255D_Brawling_Go_-_57_%255BTH%255D.rar/file",
            gdrive : "",
            twoth : "https://2th.me/a/anime/f178/3001581"
        },
        {
            Name : "ตอนที่ 56 => ",
            mediafire : "https://www.mediafire.com/file/5j6vq4011w03fpp/%255BAryMiku%255D_Brawling_Go_-_56_%255BTH%255D.rar/file",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=14248.0"
        },
        {
            Name : "ตอนที่ 55 => ",
            mediafire : "https://www.mediafire.com/file/oq5q6o41sd8n5sn/%255BAryMiku%255D_Brawling_Go_-_55_%255BTH%255D.rar/file",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=14247.0"
        },
        {
            Name : "ตอนที่ 54 => ",
            mediafire : "https://www.mediafire.com/file/wixjndacht3hcos/%255BAryMiku%255D_Brawling_Go_-_54_%255BTH%255D.rar/file",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=14246.0"
        },
        {
            Name : "ตอนที่ 53 => ",
            mediafire : "https://www.mediafire.com/folder/5krj5v7x8y56y/Brawling_Go_-_53_%5BTH%5D?fbclid=IwAR33JCqNmyOuB3DVApeXJmxITj7gOOSyy0E4HLVG7NG4KQU7hA5X6FD2Wms",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=14245.0"
        },
        {
            Name : "ตอนที่ 52 => ",
            mediafire : "https://www.mediafire.com/folder/5krj5v7x8y56y/Brawling_Go_-_53_%5BTH%5D?fbclid=IwAR33JCqNmyOuB3DVApeXJmxITj7gOOSyy0E4HLVG7NG4KQU7hA5X6FD2Wms",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=13024.0"
        },
        {
            Name : "ตอนที่ 51 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11677.0"
        },
        {
            Name : "ตอนที่ 50 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11675.0"
        },
        {
            Name : "ตอนที่ 49 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11674.0"
        },
        {
            Name : "ตอนที่ 48 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11673.0"
        },
        {
            Name : "ตอนที่ 47 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11672.0"
        },
        {
            Name : "ตอนที่ 46 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11671.0"
        },
        {
            Name : "ตอนที่ 45 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11670.0"
        },
        {
            Name : "ตอนที่ 44 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11669.0"
        },
        {
            Name : "ตอนที่ 43 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11668.0"
        },
        {
            Name : "ตอนที่ 42 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11667.0"
        },
        {
            Name : "ตอนที่ 41 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11666.0"
        },
        {
            Name : "ตอนที่ 40 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11665.0"
        },
        {
            Name : "ตอนที่ 39 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11664.0"
        },
        {
            Name : "ตอนที่ 38 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=11663.0"
        },
        {
            Name : "ตอนที่ 37 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10914.0"
        },
        {
            Name : "ตอนที่ 36 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10913.0"
        },
        {
            Name : "ตอนที่ 35 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10912.0"
        },
        {
            Name : "ตอนที่ 34 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10911.0"
        },
        {
            Name : "ตอนที่ 33 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10910.0"
        },
        {
            Name : "ตอนที่ 32 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10909.0"
        },
        {
            Name : "ตอนที่ 31 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10908.0"
        },
        {
            Name : "ตอนที่ 30 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10907.0"
        },
        {
            Name : "ตอนที่ 29 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10906.0"
        },
        {
            Name : "ตอนที่ 28 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10905.0"
        },
        {
            Name : "ตอนที่ 27 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10904.0"
        },
        {
            Name : "ตอนที่ 26 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10903.0"
        },
        {
            Name : "ตอนที่ 25 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10902.0"
        },
        {
            Name : "ตอนที่ 24 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10901.0"
        },
        {
            Name : "ตอนที่ 23 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10900.0"
        },
        {
            Name : "ตอนที่ 22 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10899.0"
        },
        {
            Name : "ตอนที่ 21 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10898.0"
        },
        {
            Name : "ตอนที่ 20 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10897.0"
        },
        {
            Name : "ตอนที่ 19 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10896.0"
        },
        {
            Name : "ตอนที่ 18 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10895.0"
        },
        {
            Name : "ตอนที่ 17 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10894.0"
        },
        {
            Name : "ตอนที่ 16 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10893.0"
        },
        {
            Name : "ตอนที่ 15 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10892.0"
        },
        {
            Name : "ตอนที่ 14 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10891.0"
        },
        {
            Name : "ตอนที่ 13 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10890.0"
        },
        {
            Name : "ตอนที่ 12 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10889.0"
        },
        {
            Name : "ตอนที่ 11 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10888.0"
        },
        {
            Name : "ตอนที่ 10 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10887.0"
        },
        {
            Name : "ตอนที่ 9 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10886.0"
        },
        {
            Name : "ตอนที่ 8 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10885.0"
        },
        {
            Name : "ตอนที่ 7 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10884.0"
        },
        {
            Name : "ตอนที่ 6 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10883.0"
        },
        {
            Name : "ตอนที่ 5 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10882.0"
        },
        {
            Name : "ตอนที่ 4 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10881.0"
        },
        {
            Name : "ตอนที่ 3 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10880.0"
        },
        {
            Name : "ตอนที่ 2 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10879.0"
        },
        {
            Name : "ตอนที่ 1 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10878.0"
        },
        {
            Name : "ตอนที่ 0 => ",
            mediafire : "",
            gdrive : "",
            twoth : "https://hentaithai.com/forum/index.php?topic=10877.0"
        }
    ];
    $scope.threeP = [
        {
            Name : "ตอนที่ 1 => ",
            mediafire : "http://www.mediafire.com/file/9g7xmmx183fjcxm/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+001+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=11QerTXAlTwmqQ-fdQRfL1qcLTrihronl",
            twoth : "https://2th.me/a/1028/f1041/3015080"
        },
        {
            Name : "ตอนที่ 2 => ",
            mediafire : "http://www.mediafire.com/file/a5lod3ps49ozdi7/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+002+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1Fy8deYJeqQbkMtRVybvXz-qOkNC7K6Nw",
            twoth : "https://2th.me/a/1028/f1041/3015085"
        },
        {
            Name : "ตอนที่ 3 => ",
            mediafire : "http://www.mediafire.com/file/1afr8qbanm726f9/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+003+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1XBsNwgw2VXnT69nWBbKPw698FNWCsy1k",
            twoth : "https://2th.me/a/1028/f1041/3015106"
        },
        {
            Name : "ตอนที่ 4 => ",
            mediafire : "http://www.mediafire.com/file/8d7d1ozbst77v2q/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+004+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1xB3CqPVTf_NhbeIoY2x5xPq-0YV1-qzP",
            twoth : "https://2th.me/a/1028/f1041/3015132"
        },
        {
            Name : "ตอนที่ 5 => ",
            mediafire : "http://www.mediafire.com/file/nqnaw30zha9h39c/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+005+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1srNcstzEoGnOJVB3pHvdhhCU8JzqLMDk",
            twoth : "https://2th.me/a/1028/f1041/3015137"
        },
        {
            Name : "ตอนที่ 6 => ",
            mediafire : "http://www.mediafire.com/file/6doe87tx5863rcy/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+006+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1HrelndHlnwVy8XRwDfEtdVzyrx73f5b-",
            twoth : "https://2th.me/a/1028/f1041/3015144"
        },
        {
            Name : "ตอนที่ 7 => ",
            mediafire : "http://www.mediafire.com/file/18b8vxroohv6oir/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+007+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1ed95rF6syKKgUirQ5dCUNNr5Ry2zHNJs",
            twoth : "https://2th.me/a/1028/f1041/3015145"
        },
        {
            Name : "ตอนที่ 8 => ",
            mediafire : "http://www.mediafire.com/file/1eevvnw18jhzfwj/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+008+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1gpUdgW3tbJyozYcQaTzwBTOm8atYN3Wx",
            twoth : "https://2th.me/a/1028/f1041/3015164"
        },
        {
            Name : "ตอนที่ 9 => ",
            mediafire : "http://www.mediafire.com/file/fqyo6iniuzxtjh2/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+009+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=16WsbpmawSinY_27Xqwml_x95pQDHrOxb",
            twoth : "https://2th.me/a/1028/f1041/3015174"
        },
        {
            Name : "ตอนที่ 10 => ",
            mediafire : "http://www.mediafire.com/file/qklhobkte6re4mq/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+010+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1blxvYjZL2vl_aQ6B8JeGvvot2KIyYKXM",
            twoth : "https://2th.me/a/1028/f1041/3015176"
        },
        {
            Name : "ตอนที่ 11 => ",
            mediafire : "http://www.mediafire.com/file/j98tgj984cxahvw/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+011+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1J9LeDYlrmLBiTQGkRADznBtoV2ZIsZAR",
            twoth : "https://2th.me/a/1028/f1041/3015199"
        },
        {
            Name : "ตอนที่ 12 => ",
            mediafire : "http://www.mediafire.com/file/yxoggk177uv394f/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+012+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1PsWerHnWG_HGQ48mbkVU-XcxVYcNRvYE",
            twoth : "https://2th.me/a/1028/f1041/3015224"
        },
        {
            Name : "ตอนที่ 13 => ",
            mediafire : "http://www.mediafire.com/file/5nz0fcs1350z33k/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+013+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1L9DWq2Pk_pWcEzLlGJmVQGg2iAwlkkeo",
            twoth : "https://2th.me/a/1028/f1041/3015225"
        },
        {
            Name : "ตอนที่ 14 => ",
            mediafire : "http://www.mediafire.com/file/agg42o938a7gmh3/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+014+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1e64vJQLv2TYRk49y3AlPOdTIe3lT0oS9",
            twoth : "https://2th.me/a/1028/f1041/3015226"
        },
        {
            Name : "ตอนที่ 15 => ",
            mediafire : "http://www.mediafire.com/file/0c74un92di5afa7/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+015+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1JwVI7mnm33pFWGnn78tFqbBASvQ_6rI3",
            twoth : "https://2th.me/a/1028/f1041/3015261"
        },
        {
            Name : "ตอนที่ 16 => ",
            mediafire : "http://www.mediafire.com/file/7y83p3gqcl6aivy/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+016+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1noDE469v3bFYVR8pAFKe6KTy1tRUBWlR",
            twoth : "https://2th.me/a/1028/f1041/3015262"
        },
        {
            Name : "ตอนที่ 17 => ",
            mediafire : "http://www.mediafire.com/file/c6zxr0d6gmp2pbi/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+017+%5BTH%5D.rar",
            gdrive : "https://drive.google.com/open?id=1CBASJ_TFT7GDSK-IS8SZRjYtDi4JTVt3",
            twoth : "https://2th.me/a/1028/f1041/3015266"
        },
        {
            Name : "ตอนที่ 18 [จบ] => ",
            mediafire : "http://www.mediafire.com/file/rhcfya3pz1u086x/The+Secret+3P+Sleepover+in+a+7+Square+Meter+Room+-+018+%5BTH%5D%5BEND%5D.rar",
            gdrive : "https://drive.google.com/open?id=1OYmENUrhbkUsX_Sl3NpNdL0U-TEZniUD",
            twoth : "https://2th.me/a/1028/f1041/3015267"
        },
    ];
    $scope.yugioharcv = [
        {
            Name : "ตอนที่ 120 => ",
            mp4 : "https://drive.google.com/open?id=1LKHbQmqcQoZDbaqlAok-DtKvftThLaO_",
            mkv : "https://drive.google.com/open?id=1GVZYZUq7xGe5ydgdKiPzEjASvNQOzZcp",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 121 => ",
            mp4 : "https://drive.google.com/open?id=1sVFu3khWJr2j7f7DE1RtLa276vA2Onf5",
            mkv : "https://drive.google.com/open?id=1sFXeTdfcu_G8JDt7MjiQHs9WMCfJJXo9",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 122 => ",
            mp4 : "https://drive.google.com/open?id=1Y2Kl1N34zNTJPh1gP8CbK0xg1U94uMi8",
            mkv : "https://drive.google.com/open?id=1L50eJp7EjaIe9nQqV85E73fDDk7vsECY",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 123 => ",
            mp4 : "https://drive.google.com/open?id=1yFAjBsI7q28A2qK0Zo45-IZ_5EyynGDx",
            mkv : "https://drive.google.com/open?id=1LkZ8Lv02wZ2y-MhgpstEMI_oPjLHA7Hx",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 124 => ",
            mp4 : "https://drive.google.com/open?id=18T4A3VBbeDOTsJlPzeIU2Xm2H4wIDOXD",
            mkv : "https://drive.google.com/open?id=1A4b80iIVXS-0THIoYheSM8QfjTRV5dIY",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 125 => ",
            mp4 : "https://drive.google.com/open?id=1xl_LxMUYHLMz8IuHtRcMISix-JLJOCFP",
            mkv : "https://drive.google.com/open?id=1NFPni0DmAlnzAKcVi5Sxop2kGpkrCc7D",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 126 => ",
            mp4 : "https://drive.google.com/open?id=1Vtf6GPb6r6iCsJRSvIfKcpzD35QYH28c",
            mkv : "https://drive.google.com/open?id=1NoZ4ZzFa3XppQKYhvk7C4sLHwizfEEr2",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 127 => ",
            mp4 : "https://drive.google.com/open?id=1q55_nKp3IZ4iTwdwlNRKDftavfKAfKQ1",
            mkv : "https://drive.google.com/open?id=1FOHPWWxUVgYt5WHWy2UcDOvbK7uDaQnj",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 128 => ",
            mp4 : "https://drive.google.com/open?id=1Xr-lEb9mmlisW-NBkFSDVfcO0PpW_lg9",
            mkv : "https://drive.google.com/open?id=1ONRb6wAfth9fnd9BxBE983Y9Sl5kiyKN",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 129 => ",
            mp4 : "https://drive.google.com/open?id=1zfzWgfzlx9D3MWMhGdHfQhdr216hlBEK",
            mkv : "https://drive.google.com/open?id=1FwSJ77DNEc3WiWNm1ivfoeNWJXb4WDEn",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 129 => ",
            mp4 : "https://drive.google.com/open?id=1zfzWgfzlx9D3MWMhGdHfQhdr216hlBEK",
            mkv : "https://drive.google.com/open?id=1FwSJ77DNEc3WiWNm1ivfoeNWJXb4WDEn",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 137 => ",
            mp4 : "https://drive.google.com/open?id=1vH5mMhgiGoSHEZLB6wcpgNjbrQye7VJt",
            mkv : "https://drive.google.com/open?id=1ecZJ3rdK1zOZQ-xRe25ILNSepS1SRGDL",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 138 => ",
            mp4 : "https://drive.google.com/open?id=1CMXbd0E-YeMZUZ7Be79CM8_5DM1h9-AS",
            mkv : "https://drive.google.com/open?id=1MJ_dgTX7YlJEeeRHFX2rZmB6hCg9HsLk",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 139 => ",
            mp4 : "https://drive.google.com/open?id=1GmoJ4vjdSX4T-2gPHT7TxDFYyoTDP5bT",
            mkv : "https://drive.google.com/open?id=1BxZ83LxpvQcy_8pyl1etYfD29Zuc2wkp",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 141 => ",
            mp4 : "https://drive.google.com/open?id=1pvNyh4OWiQIhnoJd_dDBMq7S7kJRkqMF",
            mkv : "https://drive.google.com/open?id=1e5kJn-ipKJYE17jxYzERTDt83gypNWMQ",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 142 => ",
            mp4 : "https://drive.google.com/open?id=1K8HUVtyIKES_SB0VsPwZL9Zpj_J-PvZS",
            mkv : "https://drive.google.com/open?id=1VcqtXqe5L9obEKlUpCNQq0QYVLqL9V3d",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 143 => ",
            mp4 : "https://drive.google.com/open?id=1RoRn8v_yQOEvIwUfY9uCI2Y-YXqGgjIR",
            mkv : "https://drive.google.com/open?id=1A4xa67Yt_noLq0ZNau1cHuCTvJYl4YH3",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 144 => ",
            mp4 : "https://drive.google.com/open?id=12v6UoUuOnXJIoUI6Zuao-dBURm2-_ECf",
            mkv : "https://drive.google.com/open?id=1JcS7577RSgQhdDO33hRPROQeF17AJSJl",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 145 => ",
            mp4 : "https://drive.google.com/open?id=1l1LlH89f1RJPyPvjNaxC-15LRPyBR4pc",
            mkv : "https://drive.google.com/open?id=107TZCbo0MCACM-m6JMz5TMNO3CjCAbAr",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 146 => ",
            mp4 : "https://drive.google.com/open?id=1umFWLdPWWkd1mgwzklgyuqkq9XOx0hrc",
            mkv : "https://drive.google.com/open?id=1DehrGfQ_T6vqNGj2yBkcs1EKZGd_p7GC",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        },
        {
            Name : "ตอนที่ 147 => ",
            mp4 : "https://drive.google.com/open?id=19CZSbCIiBasFc1zOfM4GSAi8kM8xM9C_",
            mkv : "https://drive.google.com/open?id=1jcp4mPVK4RzBBFuHDZ57grIaS5CxfhKm",
            ass : "https://github.com/AryMiku/ARC_V_SUB/tree/master/YU-GI-OH%20ARC-V"
        }
    ];

    $scope.aria = [
        {
            Name : "เล่มที่ 8 => ",
            mega : "https://mega.nz/#!z5ZxAQST!DvwwQBN9F-nYCBCqlm_vS1gfpKVe399CnurllLFur5w"
        }
    ]

    $scope.zio = [
        {
            Name : "ตอนที่ 45 => ",
            mega : "https://mega.nz/#!6lY2wIxY!OKsvkORyn0kYklkNHegBiPW6kKyqar5t4pASBKfCjKg"
        },
        {
            Name : "ตอนที่ 46 => ",
            mega : "https://mega.nz/#!q4IiCKbS!KMsi4X9JJCMlynF4TQ1qAkUUQuWlF472xHV0GTUDdT0"
        },
        {
            Name : "ตอนที่ 47 => ",
            mega : "https://mega.nz/#!mpglmS7T!JrgvafhUFQjpmfGKp-Clu5HuL3mEp-MGLIonXbSNhA8"
        },
        {
            Name : "ตอนที่ 48 => ",
            mega : "https://mega.nz/#!P0YBlKSB!iRFw0i_DBivJXohk7lhrJIezWu7RRAQyvCXpLdlBr0E"
        },
        {
            Name : "ตอนที่ 49 => ",
            mega : "https://mega.nz/#!ToZRAIrA!ui9OEMZb4BVbv11wdo0XShiQhUuEnl61UQxE3hIM60E"
        }
    ]

    $scope.nagatoro = [
        {
            Name : "เล่มที่ 1 - 4 => ",
            mega : "https://mega.nz/file/5IlCjLqS#-COazz1gptSN1aMqktfc9_JCLHaw1mKxmdRNo_e3On4",
            gdrive : "https://drive.google.com/file/d/18l5e85imIAzV-m0idhVMyfteKTmUBrW9"
        },
        {
            Name : "เล่มที่ 5 => ",
            mega : "https://mega.nz/#!rshSwKBY!HTsyK0lsbkgdjOSOog7njTNyZephbK6UjncbuAVfVRQ",
            gdrive : "https://drive.google.com/file/d/1Su3OwP5cicitUrNBThemO8mcZJMH2UOs"
        },
        {
            Name : "เล่มที่ 6 => ",
            mega : "https://mega.nz/file/VR1klZ4Y#XwzeDZqY8ZwamGshcw6X3sQ_Rb_nWKqVH84KiBtOBBA",
            gdrive : "https://drive.google.com/open?id=1nz_UIoHgr6Los66cn9cX5WDoH_mDh0RA"
        },
        {
            Name : "เล่มที่ 7 => ",
            mega : "https://mega.nz/file/Ud1m0TwB#ZLqE-zXDF538OylDvW4Aj4NKeu1itFaUMc5L0qFMqUM",
            gdrive : "https://drive.google.com/file/d/1kKhkhfZNjm7yRLfw_p4oR0mFZJQQXaiM"
        }
    ]

    $scope.nagatoro_ComicAnthology = [
        {
            Name : "Comic Anthology ของเล่ม 7 => ",
            mangadex : "https://mangadex.org/chapter/1132275/1"
        }
    ]

    $scope.fate_babi = [
        {
            Name : "ตอนที่ 0 => ",
            mega : "https://mega.nz/#!79onXChS!HfG7Rz8jUk-6H5KaesZu-3yLNncohme6OKtKOmRl2r8"
        }
    ]

    $scope.sao_aliz = [
        {
            Name : "ตอนที่ 1 => ",
            MP4 : "https://drive.google.com/file/d/1RkxgyGDqtAPgFE4xsYV78lEsD7jRX6Zn/view",
            MKV : "https://drive.google.com/file/d/1YNWGJfVW1oghTJmML0CUQV9I-59YeUrT/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 2 => ",
            MP4 : "https://drive.google.com/file/d/1VO0rL5K1DhnMphlgCUIGLhp66zvLojsN/view",
            MKV : "https://drive.google.com/file/d/14faV7JCdtF1qmraRcPhvWDEC6Kwv85xD/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 3 => ",
            MP4 : "https://drive.google.com/file/d/1lOpxhusie_iVEiXY3yoQU50Qhw-QQ3Kr/view",
            MKV : "https://drive.google.com/file/d/1PWAOdidtIGmaOpQ3iU6bayFfGs_qjnoO/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 4 => ",
            MP4 : "https://drive.google.com/file/d/1blbJyHBfOlQM3EuRK27MCPNDFQUIgfen/view",
            MKV : "https://drive.google.com/file/d/1Gn3V-FBuz84pYfmdAJK6fLLy4A7myWVh/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 5 => ",
            MP4 : "https://drive.google.com/file/d/1NL_cEbTH_eEhdEq4HrJjeWPL1uqx7Mhx/view",
            MKV : "https://drive.google.com/file/d/15cG3a4Hi_Y7AFrBVkqOeZVA4fMFluqAY/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 6 => ",
            MP4 : "https://drive.google.com/file/d/1APPTieuvkimAgdi13T-8NDtMV99yQydr/view",
            MKV : "https://drive.google.com/file/d/1gdDcvie5u-QQxCUZ0X2K8FYHj03ozBUJ/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 7 => ",
            MP4 : "https://drive.google.com/file/d/1AoUUCoCYG9eYIcjy7wkXVvw_a8miV8Gu/view",
            MKV : "https://drive.google.com/file/d/1O94bMBIIlrSzZ3NDrqSUljSFsvb5Kkvh/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 8 => ",
            MP4 : "https://drive.google.com/file/d/1rqbQ6mhWiSmK8pM4g7b__qfWqbCZ7z40/view",
            MKV : "https://drive.google.com/file/d/1TfesR_ApxdqMKe9rY9cubd7vztnSmh77/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 9 => ",
            MP4 : "https://drive.google.com/file/d/14csKfzmbl5mhwKaNaWBJd2ZoWP57VMld/view",
            MKV : "https://drive.google.com/file/d/11QwAd6876zo5hvRjwesQSZFJzF3rMyBQ/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 10 => ",
            MP4 : "https://drive.google.com/file/d/1AWlZema0_Do_FAFUF6XDEsNuVFMVS1im/view",
            MKV : "https://drive.google.com/file/d/1uarLAcxEo65GyOTVeSk959EdDS8I9tac/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 11 => ",
            MP4 : "https://drive.google.com/file/d/15A0OgD88eiS80oNGfDYXg5A1NdiT3wQ6/view",
            MKV : "https://drive.google.com/file/d/1Ys119WaZeAid7ThaOT495mHdTdle1ThB/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 12 => ",
            MP4 : "https://drive.google.com/file/d/1OwB23f0-bmhyQWw2SspxHeRu3cb1qrka/view",
            MKV : "https://drive.google.com/file/d/1He2eqeee-dz7VPrmHxjUvK9Mn6YjaqA9/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 13 => ",
            MP4 : "https://drive.google.com/file/d/1bushk0xKLwpKJtL90POXyrZuT_I2aRgn/view",
            MKV : "https://drive.google.com/file/d/1Yy3-DneoSG9dar0XRnLlEMrjM51SIoMy/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 14 => ",
            MP4 : "https://drive.google.com/file/d/1L2atP6UC0sI_43fxpn29i54TjOKXcCiH/view",
            MKV : "https://drive.google.com/file/d/1uHJu9lCiK5FJTg-Lv-56wBS5vuYsVgJv/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 15 => ",
            MP4 : "https://drive.google.com/file/d/18UoXdenmOWKCgi_kQ8HXOBm8Rd6mRZDr/view",
            MKV : "https://drive.google.com/file/d/17jyTXSrKUerfNKs1z7wgTraIzwssZhaN/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 16 => ",
            MP4 : "https://drive.google.com/file/d/1Q8XGU1hqe0OiMgBBGLjAm9wgvFbNlysQ/view",
            MKV : "https://drive.google.com/file/d/1jXJ57SJm-b0xj4zHGPg8BA7IZ4BiAplz/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 17 => ",
            MP4 : "https://drive.google.com/file/d/1-eyW6wRY0jam3rcdgPzhdO4U3vROMfY_/view",
            MKV : "https://drive.google.com/file/d/12Tn-wXtzcJlY6jYLvKe8Aq0pGagDXnWD/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 18 => ",
            MP4 : "https://drive.google.com/file/d/1C9z-zTcyJCWoWf5MhFsnCe9jP7yQ6NS7/view",
            MKV : "https://drive.google.com/file/d/1-4GvdXmPdlVhlrcJSthwpbiNOyUkfouI/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 19 => ",
            MP4 : "https://drive.google.com/file/d/1LnedrXk6soTcNczVj21ExMrB-M8UJ97g/view",
            MKV : "https://drive.google.com/file/d/1OlXndJhW20dw4NqfERewhf0c4tUR2-BF/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 20 => ",
            MP4 : "https://drive.google.com/file/d/1SjdoqGGUs9vazMiPPaQ9aKjvj4z6vgmB/view",
            MKV : "https://drive.google.com/file/d/1NDqM0Q_AYcaG_QVrbHsdQgMKPDnAASrn/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 21 => ",
            MP4 : "https://drive.google.com/file/d/1PlIwK69xbUJRHuovtgB1SZYyhP0IORzN/view",
            MKV : "https://drive.google.com/file/d/1Ute13xmWVNSwosOtbo-L-FgkQWEPUmhH/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 22 => ",
            MP4 : "https://drive.google.com/file/d/17jVhZlyqbD9edWlwGw9O5eK8gRwsjZKb/view",
            MKV : "https://drive.google.com/file/d/1KMFXMVGX5SqJhvZdyCQ409ocezomPEXa/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 23 => ",
            MP4 : "https://drive.google.com/file/d/1FvnIK9dIBlbcrUguXQDTM5HN_f5IQdax/view",
            MKV : "https://drive.google.com/file/d/1TJs4jmbV072kiGcbNsSriGTu_CC-QipR/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
        {
            Name : "ตอนที่ 24 [ตอนจบ] => ",
            MP4 : "https://drive.google.com/file/d/1WiM-yOTlzaUSSpc6vlqTgwkRvjbFx6KC/view",
            MKV : "https://drive.google.com/file/d/1jeXqwThoZjzRh8je7sLyKiJDKm8aFo-q/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Sword%20Art%20Online%20Alicization",
        },
    ]

    $scope.AzurLane = [
        {
            Name : "ตอนที่ 1 => ",
            MP4 : "https://drive.google.com/file/d/1lMryAtVhADkk90gl0ZWj0nK9KNIYGA2G/view",
            MKV : "https://drive.google.com/file/d/1WIOR4ntGBPafXDbnym6fgaJ0JoRkwC8c/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Azur%20Lane",
        },
        {
            Name : "ตอนที่ 2 => ",
            MP4 : "https://drive.google.com/file/d/13U7fbChC_SyI3WoCLwgvbEbt2N2Kw8cw/view",
            MKV : "https://drive.google.com/file/d/120ChOEsK_jiO2q3jT1btDEj2IcX51faF/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Azur%20Lane",
        },
        {
            Name : "ตอนที่ 3 => ",
            MP4 : "https://drive.google.com/file/d/1LotiiB5U2y2dtyPgNEGDNGEvuAyHP2yM/view",
            MKV : "https://drive.google.com/file/d/1KJY-unzoQOxwwdxK5cOMVa8ciD2xnyux/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Azur%20Lane",
        },
        {
            Name : "ตอนที่ 4 => ",
            MP4 : "https://drive.google.com/file/d/1djFk6yTqMXfr1OSt5-vlsv59mUtvVkrZ/view",
            MKV : "https://drive.google.com/file/d/1DmBmcixAfOtJvrI-UwN3kv4NqVsN_gOO/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Azur%20Lane",
        }
    ]

    $scope.ana = [
        {
            Name : "OVA (ตอนเดียวจบ) => ",
            MP4 : "https://drive.google.com/file/d/1BvkZjqPL-GFKmqRb-TTWz2Iw3ESL3w9i/view",
            MKV : "https://drive.google.com/file/d/1IROzSEXaH3dAxdslm2mTzTBiAwHfnEzH/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Nozoki%20Ana",
        }
    ]

    $scope.Kyochuu_Rettou = [
        {
            Name : "OVA (ตอนเดียวจบ) => ",
            MP4 : "https://drive.google.com/file/d/1p59aK-1VZvWvBEvaFQKRKJ4Wxa0P00ix/view",
            MKV : "https://drive.google.com/file/d/1ySBGoz7VPQbPE3JvnfFT2pU74nK_FoxD/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kyochuu%20Rettou",
        },
        {
            Name : "THE MOVIE (ตอนเดียวจบ) => ",
            MP4 : "https://drive.google.com/file/d/1wFNaJI4wenBzxE8oq_htUMXzqLIMZve1/view",
            MKV : "https://drive.google.com/file/d/1eGRBpahojTEBrZZmCITZxqeUnGLs21Sb/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/blob/master/Kyochuu%20Rettou/%5BErai-raws%5D%20Kyochuu%20Rettou%20-%20Movie%20%5B1080p%5D%5BMultiple%20Subtitle%5D.ass",
        }
    ]

    $scope.Shadowverse = [
        {
            Name : "ตอนที่ 01 => ",
            MP4 : "https://drive.google.com/file/d/1HM_wSO8lPWor9aTF_L8Yj7aouL05AHt6/view",
            MKV : "#",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Shadowverse",
        },
    ]

    $scope.Kandakawa = [
        {
            Name : "ตอนที่ 01 => ",
            MP4 : "https://drive.google.com/file/d/1UOTfbktzKwfvWV4rvEv1nKBzSsAkukfm/view",
            MKV : "https://drive.google.com/file/d/1Edgp-yKk4LxDD0-tsPS8zaZEQc3dfIP7/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
        {
            Name : "ตอนที่ 02 => ",
            MP4 : "https://drive.google.com/file/d/1xkVSSKC3gTWzscpZLQVilcMnGpQjcYPu/view",
            MKV : "https://drive.google.com/file/d/1pmdxbp2Ea8-cOu4srg4aQS6y9o4AByB0/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
        {
            Name : "ตอนที่ 03 => ",
            MP4 : "https://drive.google.com/file/d/1LsX9krkM1wHxJk840yPGR6fWc_el_z4H/view",
            MKV : "https://drive.google.com/file/d/1UIsJvYLEh_gRIH0PwQ1UyWyLtobKFhWD/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
        {
            Name : "ตอนที่ 04 => ",
            MP4 : "https://drive.google.com/file/d/1OttNShyEwZ7prlJdTr8KjMoatKCIB_ao/view",
            MKV : "https://drive.google.com/file/d/1KHf0K9MjVbBJmJtfP91Notc0x8jQUov4/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
        {
            Name : "ตอนที่ 05 => ",
            MP4 : "https://drive.google.com/file/d/14HPqq6AVyaxUJx5r1qIQAsyNc5LEtd-g/view",
            MKV : "https://drive.google.com/file/d/1e9VtCDUSfQmzpnDp4IKf4wUZOOroEUcH/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
        {
            Name : "ตอนที่ 06 => ",
            MP4 : "https://drive.google.com/file/d/1jv7RSePHrHyM7aO04rUGHBrJN3n49tV7/view",
            MKV : "https://drive.google.com/file/d/1L-NRjGVnqRTRLBdBGNhcXqiRoiXaG2gt/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
        {
            Name : "ตอนที่ 07 => ",
            MP4 : "https://drive.google.com/file/d/1M6RUGu73mRKzHLMn9TO0OijtJdf2KEqS/view",
            MKV : "https://drive.google.com/file/d/1Lqr-shuER7wvkRccP_sQZYj3S_iI9NKd/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
        {
            Name : "ตอนที่ 08 => ",
            MP4 : "https://drive.google.com/file/d/17SlaRlFLBuSN5b9Njsfzijz06pN8LGtP/view",
            MKV : "https://drive.google.com/file/d/1TARTY5Ce8PWOlwseDzX57BtNK1mesTJa/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
        {
            Name : "ตอนที่ 09 => ",
            MP4 : "https://drive.google.com/file/d/1yp_Yc_4jk-xWvEqQi3auC_P6BOkgfAwM/view",
            MKV : "https://drive.google.com/file/d/184e8LJQVX_lWgRoqFID65J1LHg9vhm8h/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
        {
            Name : "ตอนที่ 10 => ",
            MP4 : "https://drive.google.com/file/d/1PPqBJ0tOJZkp4FUpxoxeUMN_obJVfhww/view",
            MKV : "https://drive.google.com/file/d/134vWC6Y59eHf2KYHkpKaX8Sb3TMqg4ih/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
        {
            Name : "ตอนที่ 11 => ",
            MP4 : "https://drive.google.com/file/d/1A2EYvhjexyzl0vLYqXPe38ReGitOR1km/view",
            MKV : "https://drive.google.com/file/d/1xMFk_P9apKQ7CyH6TKMn7VxZNvGkf96y/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
        {
            Name : "ตอนที่ 12 => ",
            MP4 : "https://drive.google.com/file/d/1yq2U-kV2xnrUZ3Vmz6hgOwiJiRsmWmwB/view",
            MKV : "https://drive.google.com/file/d/1thxYB29KHum_YR9i_zy_gH-82T1t-uoz/view",
            ASS : "https://github.com/AryMiku/ARC_V_SUB/tree/master/Kandagawa%20Jet%20Girls",
        },
    ]

    $scope.Pastels = [
        {
            Name : "Pastel ตอนที่ 001",
            GoogleDrive : "https://drive.google.com/file/d/1bJZslr0ncWN1jerBk6rSwgSvL9h_HGec/view?usp=sharing",
            Picz : "https://www.picz.in.th/album/pastel-001.fcphQ"
        },
    ]

    $scope.aa = "https://www.google.com"

    // $scope.jj = singletonService.getText();


});

/*Table Controller*/ 

app.controller('secretCtrl',function($scope,$http,$q){

    var dataAll = []; 
    $scope.Check = {
        confirmed : true,
        confirmed2 : true,
        confirmed3 : true,
        confirmed4 : true,
        confirmed5 : true,
        confirmed6 : true,
    }
      
    $scope.edragon = async function(){
        Swal.fire({
            title: 'กำลังโหลดจ้า...',
            showConfirmButton: false,
            allowOutsideClick: false,
        });
        swal.showLoading();
        $http.get("https://raw.githubusercontent.com/AryMiku/API_AryMiku/master/API_DowloadAnother.json").then(function(res,status,xhr) {
            /*เอา Data ดึงไปใช้ตรงๆที่หน้าเมนูเลย*/
            $scope.data = res.data;
            dataAll = res.data;
            /*เอาไว้นับว่าควรทำ Pagination*/
            let pages = parseInt($scope.data.length / 8) + 1; //หน้าหนึ่งไม่เกิน 8 เรื่อง
            $scope.page = [];
            for(let i = 0; i < pages; i++){
                $scope.page.push(i+1);
            }
            console.log($scope.page);
            swal.close();
        });
    }



    $scope.seepicture = (Id) => {
        var picture_path = doesFileExist('/pic/secret/'+Id+'.jpg');
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: picture_path,
            imageWidth: 248,
            imageHeight: 350,
            imageAlt: 'Custom image',
            showCancelButton: true,
            confirmButtonText: "ไปหน้า Dowload",
            cancelButtonText: "ปิดหน้านี้",
          }).then((result) => {
              if(result.value){
                window.location.href = 'Dowload.html?id=' + Id
              }
                var b = $scope.data;
                var a = result;
          });
        $scope.pictureshow = '/pic/secret/'+Id+'.jpg';
    }

    $scope.setdatadowload = async () =>{
        let a = await GetData();
        $scope.data = a.data;
        var url = new URL(window.location.href);
        var c = url.searchParams.get("id");
        $scope.idDowload = c;
        $scope.dataOnPage = _.find($scope.data, function(data){
            return data.Id = $scope.idDowload
        });
        console.log($scope.dataOnPage);
    }

    function  doesFileExist(urlToFile)
    {
        //ท่านี้ไม่ดี มันมี error 
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', urlToFile, false);
        xhr.send();

        if (xhr.status == "404") {
            console.log("File doesn't exist");
            urlToFile = '/pic/secret/0.jpg'
            return urlToFile;
        } else {
            console.log("File exists");
            return urlToFile;
        }
    }

    function GetData(){
        var deferred = $q.defer();
        $http.get('https://raw.githubusercontent.com/AryMiku/API_AryMiku/master/API_DowloadAnother.json').then(function (data) {
            deferred.resolve(data);// เสร็จแล้วเอาไปเลย!!
        });
        return deferred.promise; //รอตามสัญญา ขอเวลาอีกไม่นาน
    }


    $scope.edragon2 = async function(){
        var url = new URL(window.location.href);
        var c = url.searchParams.get("id");
        $scope.idDowload = c;
        if($scope.idDowload == ""){
            window.location.href = "index.html"
        }
        var dowloadlink = "https://raw.githubusercontent.com/AryMiku/API_AryMiku/master/" + c + ".json"
        $http.get(dowloadlink).then(function(res) {
            $scope.data = res.data;
            $scope.picture_path = $scope.data.Picture;//doesFileExist('/pic/secret/' + c + '.jpg');
            // $scope.dataOnPage = _.find($scope.data, function(data){
            //     return data.Id == $scope.idDowload
            // });
            //console.log($scope.dataOnPage);
            $scope.dataOnPage = $scope.data;
        })
        .catch(function(){
            Swal.fire({
                title: 'หน้านี้ไม่มีข้อมูลกำลังกลับหน้าหลัก',
                showConfirmButton: false,
                allowOutsideClick: false,
                timer: 2000,
            }).then(function(){
                window.location.href = "index.html"
            });
            swal.showLoading();
        });
        // let data = await GetData();
        // $scope.data = data.data;
        // console.log($scope.data);
    }

    $scope.aaa = ["Hentai","Comedy","16+","School","Love"];

 

    $scope.changepage = function (pa) {
        console.log($scope.data);
    };

    $scope.GetClassType = function(Type){
        let classselect = '';
        if(Type == 'Anime SubThai'){
            classselect = 'badge badge-animesubth'
        }
        else if(Type == 'Manga TH'){
            classselect = 'badge badge-mangath'
        }
        else if(Type == 'Anime Thai'){
            classselect = 'badge badge-animethai'
        }
        else if(Type == 'Manga JP'){
            classselect = 'badge badge-mangajp'
        }
        else if(Type == 'Series'){
            classselect = 'badge badge-series'
        }
        else if(Type == 'Manhwa TH'){
            classselect = 'badge badge-manhwa'
        }
        else if(Type == 'Anime TH'){
            classselect = 'badge badge-animethaisound'
        }
        return classselect
    }

    $scope.SetStoryType = function(Story){
        let classselect = '';
        switch(Story){
            case "Hentai" :
                classselect = 'badge badge-hentai'
                break;
            case "Comedy" :
                classselect = 'badge badge-comedy'
                break;
            case "16+" :
                classselect = 'badge badge-16'
                break;
            case "School" :
                classselect = 'badge badge-school'
                break;
            case "Love" :
                classselect = 'badge badge-love'
                break;
            case "18+" :
                classselect = 'badge badge-18'
                break;
            default :
                classselect = 'badge badge-none'
                break;
        }
        return classselect;
    }

    $scope.ShowPictureHover = function(Id){
        $scope.aaa = '/pic/secret/'+Id+'.jpg'
        let a = "<center><img id='bank2' src="+$scope.aaa+" width='248px' height='350px'></center>"
        $("#bank").append(a);
        $scope.$apply();

    }

    $scope.change = function(){
        $scope.newval = [];
        $scope.data = dataAll
        $scope.data.forEach(function(a,index){
            if($scope.Check.confirmed && a.Type == 'Anime SubThai'){
                $scope.newval.push(a);
            }
            else if($scope.Check.confirmed2 && a.Type == 'Manga TH'){
                $scope.newval.push(a);
            }
            else if($scope.Check.confirmed3 && a.Type == 'Anime Thai'){
                $scope.newval.push(a);
            }
            else if($scope.Check.confirmed4 && a.Type == 'Manga JP'){
                $scope.newval.push(a);
            }
            else if($scope.Check.confirmed5 && a.Type == 'Manhwa TH'){
                $scope.newval.push(a);
            }
            else if($scope.Check.confirmed6 && a.Type == 'Series'){
                $scope.newval.push(a);
            }
        });
        // if(!$scope.confirmed && !$scope.confirmed2 && !$scope.confirmed3){
        //     $scope.data = dataAll;
        // }
        //else{
            $scope.data = $scope.newval;
        //}
        // if(!$scope.confirmed && !$scope.confirmed2){
        //     $scope.data = dataAll
        // }
        // if($scope.confirmed && filter == 1){
        //     $scope.data = $scope.data.filter(word => word.Type == 'Anime SubThai')
        // }
        // else if($scope.confirmed2 && filter == 2){
        //     $scope.data = $scope.data.filter(word => word.Type == 'Manga TH')
        // }
        // else{
        //     $scope.data = dataAll
        // }
    }
})

app.directive('myPostRepeatDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      $('#example').DataTable({
        "columnDefs": [
          { "width": "50%", "targets": 0 },
        ]
      });
    }
  };
});

app.directive('bsTooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                scope.ShowPictureHover(scope.a.Id);
            }, function(){
                // on mouseleave
                $("#bank2").remove();
            });
        }
    };
});