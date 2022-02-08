const siteData = {
  "argos": {
    "categories": ["general", "technology", "home", "entertainment"],
    "brand": "argos.co.uk",
    "url": "https://www.argos.co.uk/search/{!TERM}",
    "preTransformMap": {
      " ": "-"
    },
    "postTransformFunc": ""
  },
  "very": {
    "categories": ["general", "home", "technology", "fashion"],
    "brand": "very.co.uk",
    "url": "https://www.very.co.uk/e/q/{!TERM}.end",
    "preTransformMap": {
      " ": "-"
    },
    "postTransformFunc": ""
  },
  "currys": {
    "categories": ["home", "technology"],
    "brand": "currys.co.uk",
    "url": "https://www.currys.co.uk/search?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "amazon": {
    "categories": ["general"],
    "brand": "amazon.co.uk",
    "url": "https://www.amazon.co.uk/s?k={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "ebay": {
    "categories": ["general"],
    "brand": "ebay.co.uk",
    "url": "https://www.ebay.co.uk/sch/i.html?_nkw={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "debenhams": {
    "categories": ["general", "home", "fashion", "beauty"],
    "brand": "debenhams.com",
    "url": "https://www.debenhams.com/search?text={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "robertdyas": {
    "categories": ["general", "home", "hardware"],
    "brand": "robertdyas.co.uk",
    "url": "https://www.robertdyas.co.uk/catalogsearch/result/?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "wilko": {
    "categories": ["general", "home"],
    "brand": "wilko.com",
    "url": "https://www.wilko.com/en-uk/search/?text={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "johnlewis": {
    "categories": ["general", "technology", "home", "beauty", "fashion"],
    "brand": "johnlewis.com",
    "url": "https://www.johnlewis.com/search?search-term={!TERM}",
    "preTransformMap": {},
    "postTransformFunc": "URLENCODE"
  },

  // entertainment
  "thetoyshop": {
    "categories": ["entertainment"],
    "brand": "thetoyshop.com",
    "url": "https://www.thetoyshop.com/search/?text={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "smythstoys": {
    "categories": ["entertainment"],
    "brand": "smythstoys.com",
    "url": "https://www.smythstoys.com/uk/en-gb/search/?text={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "ikea": {
    "categories": ["home"],
    "brand": "ikea.com",
    "url": "https://www.ikea.com/gb/en/search/products/?q={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "diy": {
    "categories": ["home", "hardware"],
    "brand": "diy.com",
    "url": "https://www.diy.com/search?term={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "homebase": {
    "categories": ["home", "hardware"],
    "brand": "homebase.co.uk",
    "url": "https://www.homebase.co.uk/elysium.search?search={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "wayfair": {
    "categories": ["home"],
    "brand": "wayfair.co.uk",
    "url": "https://www.wayfair.co.uk/keyword.php?keyword={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "marksandspencer": {
    "categories": ["home", "fashion", "beauty"],
    "brand": "marksandspencer.com",
    "url": "https://www.marksandspencer.com/MSFindItemsByKeyword?searchTerm={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "dunelm": {
    "categories": ["home"],
    "brand": "dunelm.com",
    "url": "https://www.dunelm.com/search?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "therange": {
    "categories": ["home"],
    "brand": "therange.co.uk",
    "url": "https://www.therange.co.uk/search?q={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "houseoffraser": {
    "categories": ["home", "fashion", "beauty"],
    "brand": "houseoffraser.co.uk",
    "url": "https://www.marksandspencer.com/MSFindItemsByKeyword?searchTerm={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "procook": {
    "categories": ["home"],
    "brand": "procook.co.uk",
    "url": "https://www.procook.co.uk/shop/search?searchstr={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "lakeland": {
    "categories": ["home"],
    "brand": "lakeland.co.uk",
    "url": "https://www.lakeland.co.uk/search/{!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": "URLENCODE"
  },
  "boots": {
    "categories": ["health", "beauty"],
    "brand": "boots.com",
    "url": "https://www.boots.com/sitesearch?searchTerm={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "superdrug": {
    "categories": ["health", "beauty"],
    "brand": "superdrug.com",
    "url": "https://www.superdrug.com/search?text={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "asos": {
    "categories": ["fashion"],
    "brand": "asos.com",
    "url": "https://www.asos.com/search/?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "matalan": {
    "categories": ["fashion", "home"],
    "brand": "matalan.co.uk",
    "url": "https://www.matalan.co.uk/products/search?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "tkmaxx": {
    "categories": ["fashion", "home"],
    "brand": "tkmaxx.com",
    "url": "https://www.tkmaxx.com/uk/en/search?st={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "toolstation": {
    "categories": ["hardware"],
    "brand": "toolstation.com",
    "url": "https://www.toolstation.com/search?q={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
  "screwfix": {
    "categories": ["hardware"],
    "brand": "screwfix.com",
    "url": "https://www.screwfix.com/search?search={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "overclockers": {
    "categories": ["technology"],
    "brand": "overclockers.co.uk",
    "url": "https://www.overclockers.co.uk/search?sSearch={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "scan": {
    "categories": ["technology"],
    "brand": "scan.co.uk",
    "url": "https://www.scan.co.uk/search?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "ccl": {
    "categories": ["technology"],
    "brand": "cclonline.com",
    "url": "https://www.cclonline.com/search/?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "ebuyer": {
    "categories": ["technology"],
    "brand": "ebuyer.com",
    "url": "https://www.ebuyer.com/search?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "thepihut": {
    "categories": ["technology"],
    "brand": "thepihut.com",
    "url": "https://thepihut.com/pages/search-results?q={!TERM}",
    "preTransformMap": {
      " ": "%20"
    },
    "postTransformFunc": ""
  },
}
