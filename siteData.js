var siteData = {
  // general
  "argos": {
    "category": "general",
    "brand": "argos.co.uk",
    "url": "https://www.argos.co.uk/search/{!TERM}",
    "preTransformMap": {
      " ": "-"
    },
    "postTransformFunc": ""
  },
  "very": {
    "category": "general",
    "brand": "very.co.uk",
    "url": "https://www.very.co.uk/e/q/{!TERM}.end",
    "preTransformMap": {
      " ": "-"
    },
    "postTransformFunc": ""
  },
  "currys": {
    "category": "general",
    "brand": "currys.co.uk",
    "url": "https://www.currys.co.uk/search?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "amazon": {
    "category": "general",
    "brand": "amazon.co.uk",
    "url": "https://www.amazon.co.uk/s?k={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "ebay": {
    "category": "general",
    "brand": "ebay.co.uk",
    "url": "https://www.ebay.co.uk/sch/i.html?_nkw={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "debenhams": {
    "category": "general",
    "brand": "debenhams.com",
    "url": "https://www.debenhams.com/search?text={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "robertdyas": {
    "category": "general",
    "brand": "robertdyas.co.uk",
    "url": "https://www.robertdyas.co.uk/catalogsearch/result/?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "wilko": {
    "category": "general",
    "brand": "wilko.com",
    "url": "https://www.wilko.com/en-uk/search/?text={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "johnlewis": {
    "category": "general",
    "brand": "johnlewis.com",
    "url": "https://www.johnlewis.com/search?search-term={!TERM}",
    "preTransformMap": {},
    "postTransformFunc": "URLENCODE"
  },

  // entertainment
  "thetoyshop": {
    "category": "entertainment",
    "brand": "thetoyshop.com",
    "url": "https://www.thetoyshop.com/search/?text={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "smythstoys": {
    "category": "entertainment",
    "brand": "smythstoys.com",
    "url": "https://www.smythstoys.com/uk/en-gb/search/?text={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  // home
  "ikea": {
    "category": "home",
    "brand": "ikea.com",
    "url": "https://www.ikea.com/gb/en/search/products/?q={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "diy": {
    "category": "home",
    "brand": "diy.com",
    "url": "https://www.diy.com/search?term={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "homebase": {
    "category": "home",
    "brand": "homebase.co.uk",
    "url": "https://www.homebase.co.uk/elysium.search?search={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "wayfair": {
    "category": "home",
    "brand": "wayfair.co.uk",
    "url": "https://www.wayfair.co.uk/keyword.php?keyword={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "marksandspencer": {
    "category": "home",
    "brand": "marksandspencer.com",
    "url": "https://www.marksandspencer.com/MSFindItemsByKeyword?searchTerm={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "dunelm": {
    "category": "home",
    "brand": "dunelm.com",
    "url": "https://www.dunelm.com/search?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "therange": {
    "category": "home",
    "brand": "therange.co.uk",
    "url": "https://www.therange.co.uk/search?q={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "houseoffraser": {
    "category": "home",
    "brand": "houseoffraser.co.uk",
    "url": "https://www.marksandspencer.com/MSFindItemsByKeyword?searchTerm={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "procook": {
    "category": "home",
    "brand": "procook.co.uk",
    "url": "https://www.procook.co.uk/shop/search?searchstr={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "lakeland": {
    "category": "home",
    "brand": "lakeland.co.uk",
    "url": "https://www.lakeland.co.uk/search/{!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": "URLENCODE"
  },
  // health
  "boots": {
    "category": "health",
    "brand": "boots.com",
    "url": "https://www.boots.com/sitesearch?searchTerm={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "superdrug": {
    "category": "health",
    "brand": "superdrug.com",
    "url": "https://www.superdrug.com/search?text={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  // clothes
  "asos": {
    "category": "clothes",
    "brand": "asos.com",
    "url": "https://www.asos.com/search/?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "matalan": {
    "category": "clothes",
    "brand": "matalan.co.uk",
    "url": "https://www.matalan.co.uk/products/search?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "tkmaxx": {
    "category": "clothes",
    "brand": "tkmaxx.com",
    "url": "https://www.tkmaxx.com/uk/en/search?st={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  // hardware
  "toolstation": {
    "category": "hardware",
    "brand": "toolstation.com",
    "url": "https://www.toolstation.com/search?q={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "screwfix": {
    "category": "hardware",
    "brand": "screwfix.com",
    "url": "https://www.screwfix.com/search?search={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  // technology
  "overclockers": {
    "category": "technology",
    "brand": "overclockers.co.uk",
    "url": "https://www.overclockers.co.uk/search?sSearch={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "scan": {
    "category": "technology",
    "brand": "scan.co.uk",
    "url": "https://www.scan.co.uk/search?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "ccl": {
    "category": "technology",
    "brand": "cclonline.com",
    "url": "https://www.cclonline.com/search/?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "ebuyer": {
    "category": "technology",
    "brand": "ebuyer.com",
    "url": "https://www.ebuyer.com/search?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "thepihut": {
    "category": "technology",
    "brand": "thepihut.com",
    "url": "https://thepihut.com/pages/search-results?q={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
}
