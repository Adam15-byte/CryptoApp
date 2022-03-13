const sampleSearchData = [
  {
    id: "shiba-inu",
    name: "Shiba Inu",
    symbol: "SHIB",
    market_cap_rank: 15,
    thumb: "https://assets.coingecko.com/coins/images/11939/thumb/shiba.png",
    large: "https://assets.coingecko.com/coins/images/11939/large/shiba.png",
  },
  {
    id: "shibadoge",
    name: "ShibaDoge",
    symbol: "SHIBDOGE",
    market_cap_rank: 521,
    thumb:
      "https://assets.coingecko.com/coins/images/22018/thumb/5HMWoFW0_400x400.jpg",
    large:
      "https://assets.coingecko.com/coins/images/22018/large/5HMWoFW0_400x400.jpg",
  },
  {
    id: "bone-shibaswap",
    name: "Bone ShibaSwap",
    symbol: "BONE",
    market_cap_rank: 673,
    thumb:
      "https://assets.coingecko.com/coins/images/16916/thumb/bone_icon.png",
    large:
      "https://assets.coingecko.com/coins/images/16916/large/bone_icon.png",
  },
  {
    id: "shibaverse",
    name: "Shibaverse",
    symbol: "VERSE",
    market_cap_rank: 1049,
    thumb: "https://assets.coingecko.com/coins/images/18407/thumb/logo_200.png",
    large: "https://assets.coingecko.com/coins/images/18407/large/logo_200.png",
  },
  {
    id: "king-shiba",
    name: "King Shiba",
    symbol: "KINGSHIB",
    market_cap_rank: 1547,
    thumb:
      "https://assets.coingecko.com/coins/images/19215/thumb/kingshib.jpeg",
    large:
      "https://assets.coingecko.com/coins/images/19215/large/kingshib.jpeg",
  },
  {
    id: "shibavax",
    name: "Shibavax",
    symbol: "SHIBX",
    market_cap_rank: 2178,
    thumb: "https://assets.coingecko.com/coins/images/17913/thumb/shibavax.jpg",
    large: "https://assets.coingecko.com/coins/images/17913/large/shibavax.jpg",
  },
  {
    id: "shibalana",
    name: "Shibalana",
    symbol: "SHIBA",
    market_cap_rank: 3292,
    thumb:
      "https://assets.coingecko.com/coins/images/20003/thumb/output-onlinepngtools_%2810%29.png",
    large:
      "https://assets.coingecko.com/coins/images/20003/large/output-onlinepngtools_%2810%29.png",
  },
  {
    id: "sushiba",
    name: "Sushiba",
    symbol: "SUSHIBA",
    market_cap_rank: null,
    thumb: "https://assets.coingecko.com/coins/images/16139/thumb/sushiba.PNG",
    large: "https://assets.coingecko.com/coins/images/16139/large/sushiba.PNG",
  },
  {
    id: "shibana",
    name: "Shibana",
    symbol: "BANA",
    market_cap_rank: null,
    thumb: "https://assets.coingecko.com/coins/images/21234/thumb/solshib.png",
    large: "https://assets.coingecko.com/coins/images/21234/large/solshib.png",
  },
  {
    id: "shiba-x",
    name: "Shiba X",
    symbol: "SHIBAX",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/22643/thumb/rGUmi5dV_400x400.jpg",
    large:
      "https://assets.coingecko.com/coins/images/22643/large/rGUmi5dV_400x400.jpg",
  },
  {
    id: "shiback",
    name: "SHIBACK",
    symbol: "SHIBACK",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/20414/thumb/J9QOFBP__400x400.jpg",
    large:
      "https://assets.coingecko.com/coins/images/20414/large/J9QOFBP__400x400.jpg",
  },
  {
    id: "xlshiba",
    name: "XLSHIBA",
    symbol: "XLSHIBA",
    market_cap_rank: null,
    thumb: "https://assets.coingecko.com/coins/images/19802/thumb/xlshiba.png",
    large: "https://assets.coingecko.com/coins/images/19802/large/xlshiba.png",
  },
  {
    id: "shibanft",
    name: "ShibaNFT",
    symbol: "SHIBANFT",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/23737/thumb/GiIJ9511_400x400.jpg",
    large:
      "https://assets.coingecko.com/coins/images/23737/large/GiIJ9511_400x400.jpg",
  },
  {
    id: "bscshiba",
    name: "bscShiba",
    symbol: "BSHIBA",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/15362/thumb/XJgsHI8P_400x400.jpg",
    large:
      "https://assets.coingecko.com/coins/images/15362/large/XJgsHI8P_400x400.jpg",
  },
  {
    id: "bitshiba",
    name: "BitShiba",
    symbol: "SHIBA",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/20205/thumb/3g2LGTkS_400x400.jpg",
    large:
      "https://assets.coingecko.com/coins/images/20205/large/3g2LGTkS_400x400.jpg",
  },
  {
    id: "shibapad",
    name: "ShibaPad",
    symbol: "SBP",
    market_cap_rank: null,
    thumb: "https://assets.coingecko.com/coins/images/20992/thumb/shiba200.png",
    large: "https://assets.coingecko.com/coins/images/20992/large/shiba200.png",
  },
  {
    id: "shibamon",
    name: "Shibamon",
    symbol: "SHIBAMON",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/19891/thumb/cm170VEL_400x400.jpg",
    large:
      "https://assets.coingecko.com/coins/images/19891/large/cm170VEL_400x400.jpg",
  },
  {
    id: "redshiba",
    name: "RedShiba",
    symbol: "REDSHIBA",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/17685/thumb/61150ae689ba550530895d9a_200x200.png",
    large:
      "https://assets.coingecko.com/coins/images/17685/large/61150ae689ba550530895d9a_200x200.png",
  },
  {
    id: "shibachu",
    name: "Shibachu",
    symbol: "SHIBCHU",
    market_cap_rank: null,
    thumb: "https://assets.coingecko.com/coins/images/20041/thumb/shichu.jpeg",
    large: "https://assets.coingecko.com/coins/images/20041/large/shichu.jpeg",
  },
  {
    id: "shibapup",
    name: "ShibaPup",
    symbol: "SHIBAPUP",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/15328/thumb/6096950d4ec27bf003a1cdd0_200.png",
    large:
      "https://assets.coingecko.com/coins/images/15328/large/6096950d4ec27bf003a1cdd0_200.png",
  },
  {
    id: "toyshiba",
    name: "ToySHIBA",
    symbol: "TOYSHIBA",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/20124/thumb/xf-iWX5J_400x400.jpg",
    large:
      "https://assets.coingecko.com/coins/images/20124/large/xf-iWX5J_400x400.jpg",
  },
  {
    id: "shibanaut",
    name: "Shibanaut",
    symbol: "SNAUT",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/16316/thumb/shibanaut.PNG",
    large:
      "https://assets.coingecko.com/coins/images/16316/large/shibanaut.PNG",
  },
  {
    id: "shibaduff",
    name: "ShibaDuff",
    symbol: "SHIBADUFF",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/20236/thumb/shibaduff.png",
    large:
      "https://assets.coingecko.com/coins/images/20236/large/shibaduff.png",
  },
  {
    id: "shibacock",
    name: "Shibacock",
    symbol: "COCK",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/15447/thumb/Screenshot_7.png",
    large:
      "https://assets.coingecko.com/coins/images/15447/large/Screenshot_7.png",
  },
  {
    id: "polyshiba",
    name: "PolyShiba",
    symbol: "POLYSHIBA",
    market_cap_rank: null,
    thumb:
      "https://assets.coingecko.com/coins/images/15248/thumb/Poly-Shiba.png",
    large:
      "https://assets.coingecko.com/coins/images/15248/large/Poly-Shiba.png",
  },
];

export default sampleSearchData;
