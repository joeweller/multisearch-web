var siteData = {
  "argos": {
    "category": "general",
    "url": "https://www.argos.co.uk/search/{!TERM}",
    "preTransformMap": {
      " ": "-"
    },
    "postTransformFunc": ""
  },
  "currys": {
    "category": "general",
    "url": "https://www.currys.co.uk/search?q={!TERM}",
    "preTransformMap": {
      " ": "+"
    },
    "postTransformFunc": ""
  },
  "johnlewis": {
    "category": "general",
    "url": "https://www.johnlewis.com/search?search-term={!TERM}",
    "preTransformMap": {},
    "postTransformFunc": "URLENCODE"
  }
}
