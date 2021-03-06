{
  "version": 3,
  "sprite": "https://www.mapbox.com/mapbox-gl-styles/sprites/outdoors",
  "glyphs": "https://mapbox.s3.amazonaws.com/gl-glyphs-256/{fontstack}/{range}.pbf",
  "sources": {
    "mapbox": {
      "type": "vector",
      "url": "mapbox://mapbox.mapbox-terrain-v1,mapbox.mapbox-streets-v5",
      "maxZoom": 14
    },
     "mapzenwater": {
          "type": "geojson",
          "url": "http://vector.mapzen.com/osm/water/{z}/{x}/{y}.json",
          "maxZoom": 18
      }
  },
  "constants": {
    "@land": "rgb(244,239,225)",
    "@water": "#cdd",
    "@water_dark": "#185869",
    "@crop": "#eeeed4",
    "@grass": "#e6e6cc",
    "@scrub": "#dfe5c8",
    "@wood": "#cee2bd",
    "@snow": "#f4f8ff",
    "@rock": "#ddd",
    "@sand": "#ffd",
    "@cemetery": "#edf4ed",
    "@pitch": "#fff",
    "@park": "#d4e4bc",
    "@piste": "blue",
    "@school": "#e8dfe0",
    "@hospital": "#f8eee0",
    "@builtup": "#f6faff",
    "@case": "#fff",
    "@motorway": "#cda0a0",
    "@main": "#ddc0b9",
    "@street": "#fff",
    "@text": "#666",
    "@text_stroke": "rgba(255,255,255,0.8)",
    "@country_text": "#222",
    "@marine_text": "#a0bdc0",
    "@water_text": "#185869",
    "@land_night": "#017293",
    "@water_night": "#103",
    "@water_dark_night": "#003366",
    "@crop_night": "#178d96",
    "@grass_night": "#23948a",
    "@scrub_night": "#31a186",
    "@wood_night": "#45b581",
    "@park_night": "#51bd8b",
    "@snow_night": "#5ad9fe",
    "@rock_night": "#999",
    "@sand_night": "#437162",
    "@cemetery_night": "#218c96",
    "@pitch_night": "rgba(255,255,255,0.2)",
    "@school_night": "#01536a",
    "@hospital_night": "#015e7a",
    "@builtup_night": "#014b60",
    "@admin_night": "#ffb680",
    "@text_night": "#fff",
    "@text_water_night": "#2a5b8a",
    "@text_stroke_night": "#103",
    "@text2_stroke_night": "rgba(1,69,89,0.8)",
    "@case_night": "#015e7a",
    "@street_case_night": "#015b76",
    "@motorway_night": "#bbdde7",
    "@main_night": "#64b2c9",
    "@street_night": "#0186ac",
    "@contour_night": "#ffff80",
    "@river_canal_width": {
      "stops": [[10, 0.5], [11, 1], [13, 2], [15, 3]]
    },
    "@stream_width": {
      "stops": [[12, 0.25], [13, 0.5], [15, 1.5], [17, 2]]
    },
    "@motorway_width": {
      "stops": [[4, 0], [5, 0.5], [7, 0.8], [9, 1], [10, 1.2], [11, 2], [12, 3], [13, 4], [14, 6], [15, 9], [16, 12], [17, 14]]
    },
    "@motorway_casing_width": {
      "stops": [[6.5, 0.6], [7, 0.8], [9, 2.8], [10, 3], [11, 4], [12, 5], [13, 6.5], [14, 9], [15, 12], [16, 15], [17, 17]]
    },
    "@motorway_link_width": {
      "stops": [[11, 1.2], [13, 2], [15, 3], [17, 4]]
    },
    "@motorway_link_casing_width": {
      "stops": [[11, 2.8], [13, 3.5], [15, 5], [17, 6]]
    },
    "@main_width": {
      "stops": [[4, 1], [11, 1], [12, 1.5], [13, 2], [14, 3], [15, 6], [16, 10], [17, 12]]
    },
    "@main_casing_width": {
      "stops": [[8, 2.9], [11, 2.9], [12, 3.5], [13, 4], [14, 5.5], [15, 9], [16, 12], [17, 14]]
    },
    "@street_width": {
      "stops": [[13.5, 0], [14, 1.5], [15, 3], [16, 8]]
    },
    "@street_casing_width": {
      "stops": [[12, 0.4], [13, 1], [14, 2.5], [15, 4], [16, 10]]
    },
    "@street_casing_opacity": {
      "stops": [[13, 0], [13.5, 1]]
    },
    "@service_casing_width": {
      "stops": [[13, 0.5], [14, 3], [15, 3.5], [16, 4], [17, 5], [18, 6]]
    },
    "@runway_width": {
      "stops": [[9, 1], [10, 2], [11, 3], [12, 5], [13, 7], [14, 11], [15, 15], [16, 19], [17, 23]]
    },
    "@taxiway_width": {
      "stops": [[9, 0.2], [11, 0.2], [12, 1], [13, 1.5], [14, 2], [15, 3], [16, 4], [17, 5]]
    },
    "@aerialway_width": {
      "stops": [[12.5, 0.8], [13, 1.4], [14, 1.6], [15, 2], [16, 2.4], [17, 3]]
    },
    "@aerialway_casing_width": {
      "stops": [[12.5, 2], [13, 2.5], [14, 3], [15, 3.5], [16, 4], [21, 5]]
    },
    "@path_width": {
      "stops": [[13, 1.2], [14, 1.5], [15, 1.8]]
    },
    "@admin_l2_width": {
      "stops": [[1, 0.5], [2, 0.7], [3, 0.7], [4, 0.8], [5, 1], [7, 2], [9, 3]]
    },
    "@admin_l3_width": {
      "stops": [[5, 0.6], [7, 1], [11, 2]]
    },
    "@road_label_1_size": {
      "stops": [[12, 11], [13, 12], [14, 13], [15, 14], [16, 16], [17, 18]]
    },
    "@road_label_2_size": {
      "stops": [[12, 11], [13, 12], [15, 14], [17, 16]]
    },
    "@road_label_3_size": {
      "stops": [[14, 10], [15, 12], [17, 14]]
    },
    "@fence_width": {
      "stops": [[16, 0.6], [18, 1]]
    },
    "@hedge_width": {
      "stops": [[15, 0.6], [16, 1.2], [18, 1.6]]
    },
    "@barrier_line_land_width": {
      "stops": [[13, 0.4], [14, 0.75], [15, 1.5], [16, 3], [17, 6], [18, 12], [19, 24], [20, 48]]
    },
    "@country_label_size": {
      "stops": [[0, 14], [11, 24]]
    },
    "@poi_label_1-2_size": {
      "stops": [[14, 10], [15, 11], [16, 12]]
    },
    "@poi_label_3_size": {
      "stops": [[15, 10], [16, 11]]
    },
    "@hillshade_rasterize": {
        "enabled": {
            "stops": [[10, false], [11, true]]
        },
        "size": {
            "stops": [[10, 1024], [11, 512], [12, 256]]
        },
        "blur": 1
    }
  },
  "layers": [{
    "id": "background",
    "type": "background",
    "style": {
      "background-color": "@land"
    },
    "style.night": {
      "background-color": "@land_night"
    }
  }, {
    "id": "landcover_snow",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "snow" },
    "type": "fill",
    "style": {
      "fill-color": "@snow"
    },
    "style.night": {
      "fill-color": "@snow_night"
    }
  }, {
    "id": "landcover_crop",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "crop" },
    "type": "fill",
    "style": {
      "fill-color": "@crop"
    },
    "style.night": {
      "fill-color": "@crop_night"
    }
  }, {
    "id": "landcover_grass",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "grass" },
    "type": "fill",
    "style": {
      "fill-color": "@grass",
      "fill-opacity": {
        "stops": [[12, 1], [13, 0.8], [16, 0.2]]
      }
    },
    "style.night": {
      "fill-color": "@grass_night",
      "fill-opacity": {
        "stops": [[12, 1], [13, 0.8], [16, 0.2]]
      }
    }
  }, {
    "id": "landcover_scrub",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "scrub" },
    "type": "fill",
    "style": {
      "fill-color": "@scrub",
      "fill-opacity": {
        "stops": [[12, 1], [13, 0.8], [16, 0.2]]
      }
    },
    "style.night": {
      "fill-color": "@scrub_night",
      "fill-opacity": {
        "stops": [[12, 1], [13, 0.8], [16, 0.2]]
      }
    }
  }, {
    "id": "landcover_wood",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "wood" },
    "type": "fill",
    "style": {
      "fill-color": "@wood",
      "fill-opacity": {
        "stops": [[12, 1], [13, 0.8], [16, 0.2]]
      }
    },
    "style.night": {
      "fill-color": "@wood_night",
      "fill-opacity": {
        "stops": [[12, 1], [13, 0.8], [16, 0.2]]
      }
    }
  }, {
    "id": "landuse_wood",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "wood" },
    "type": "fill",
    "style": {
      "fill-color": "@wood"
    },
    "style.night": {
      "fill-color": "@wood_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_school",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "school" },
    "type": "fill",
    "style": {
      "fill-color": "@school"
    },
    "style.night": {
      "fill-color": "@school_night"
    }
  }, {
    "id": "landuse_sand",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "sand" },
    "type": "fill",
    "style": {
      "fill-color": "@sand"
    },
    "style.night": {
      "fill-color": "@sand_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_pitch",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "pitch" },
    "type": "fill",
    "style": {
      "fill-color": "rgba(255,255,255,0.5)",
      "fill-outline-color": "@pitch"
    },
    "style.night": {
      "fill-color": "@pitch_night",
      "fill-outline-color": "@pitch"
    }
  }, {
    "id": "landuse_park",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "park" },
    "type": "fill",
    "style": {
      "fill-color": "@park"
    },
    "style.night": {
      "fill-color": "@park_night"
    }
  }, {
    "id": "landuse_industrial",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "industrial" },
    "type": "fill",
    "style": {
      "fill-color": "rgba(246,250,255,0.5)"
    },
    "style.night": {
      "fill-color": "@builtup_night"
    }
  }, {
    "id": "landuse_scrub",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "scrub" },
    "type": "fill",
    "style": {
      "fill-color": "@scrub"
    },
    "style.night": {
      "fill-color": "@scrub_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_grass",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "grass" },
    "type": "fill",
    "style": {
      "fill-color": "@grass"
    },
    "style.night": {
      "fill-color": "@grass_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_crop",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "crop" },
    "type": "fill",
    "style": {
      "fill-color": "@crop"
    },
    "style.night": {
      "fill-color": "@crop_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_rock",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "rock" },
    "type": "fill",
    "style": {
      "fill-color": "@rock"
    },
    "style.night": {
      "fill-color": "@rock_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_snow",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "snow" },
    "type": "fill",
    "style": {
      "fill-color": "@snow"
    },
    "style.night": {
      "fill-color": "@snow_night",
      "fill-opacity": 0.8
    }
  }, {
    "id": "landuse_hospital",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "hospital" },
    "type": "fill",
    "style": {
      "fill-color": "@hospital"
    },
    "style.night": {
      "fill-color": "@hospital_night"
    }
  }, {
    "id": "landuse_cemetery",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "cemetery" },
    "type": "fill",
    "style": {
      "fill-color": "@cemetery"
    },
    "style.night": {
      "fill-color": "@cemetery_night"
    }
  }, {
    "id": "overlay_wetland",
    "source": "mapbox",
    "source-layer": "landuse_overlay",
    "filter": { "class": ["wetland", "wetland_noveg"] },
    "type": "fill",
    "style": {
      "fill-color": "rgba(210,225,225,0.2)",
      "fill-image": "wetland_noveg_64"
    },
    "style.night": {
      "fill-color": "rgba(210,225,225,0.2)",
      "fill-image": "wetland_noveg_64"
    }
  }, {
    "id": "overlay_breakwater_pier",
    "source": "mapbox",
    "source-layer": "landuse_overlay",
    "filter": { "class": ["breakwater", "pier"] },
    "type": "fill",
    "style": {
      "fill-color": "@land"
    },
    "style.night": {
      "fill-color": "@land_night"
    }
  }, {
    "id": "waterway_river_canal",
    "source": "mapbox",
    "source-layer": "waterway",
    "filter": { "type": ["river", "canal"] },
    "type": "line",
    "render": {
      "line-cap": "round"
    },
    "style": {
      "line-color": "#87abaf",
      "line-width": "@river_canal_width"
    },
    "style.night": {
      "line-color": "rgb(10,20,71)",
      "line-width": "@river_canal_width"
    }
  }, {
    "id": "waterway_stream",
    "source": "mapbox",
    "source-layer": "waterway",
    "filter": { "type": "stream" },
    "type": "line",
    "render": {
      "line-cap": "round"
    },
    "style": {
      "line-color": "#87abaf",
      "line-width": "@stream_width"
    },
    "style.night": {
      "line-color": "rgb(10,20,71)",
      "line-width": "@stream_width"
    }
  }, {
    "id": "building_shadow",
    "source": "mapbox",
    "source-layer": "building",
    "type": "fill",
    "style": {
      "fill-color": "#d5d1c6",
      "fill-translate": [1, 1],
      "fill-opacity": {
        "stops": [[15.5, 0], [16, 1]]
      },
      "fill-outline-color": "#d5d1c6"
    },
    "style.night": {
      "fill-color": "#026688",
      "fill-translate": [1, 1],
      "fill-opacity": {
        "stops": [[15.5, 0], [16, 1]]
      },
      "fill-outline-color": "#026688"
    }
  }, {
    "id": "building",
    "ref": "building_shadow",
    "style": {
      "fill-color": "#ebe7db"
    },
    "style.night": {
      "fill-color": "#027797"
    }
  }, {
    "id": "building_wall",
    "ref": "building_shadow",
    "style": {
      "fill-color": "#ebe7db",
      "fill-opacity": {
        "stops": [[15.5, 0], [16, 0.7]]
      },
      "fill-outline-color": "#d5d1c6"
    },
    "style.night": {
      "fill-color": "#027797",
      "fill-opacity": {
        "stops": [[15.5, 0], [16, 0.7]]
      },
      "fill-outline-color": "#026688"
    }
  }, {
    "id": "hillshade_full_highlight",
    "source": "mapbox",
    "source-layer": "hillshade",
    "filter": { "class": "full_highlight" },
    "type": "fill",
    "rasterize": "@hillshade_rasterize",
    "style": {
      "fill-color": "#fffff3",
      "fill-antialias": false,
      "fill-opacity": {
        "stops": [[14, 0.3], [15, 0.3], [16, 0.2], [17, 0.2], [18, 0.1]]
      }
    },
    "style.night": {
      "fill-color": "#fdfdad",
      "fill-antialias": false,
      "fill-opacity": {
        "stops": [[13, 0.4], [14, 0.3], [16, 0.2], [17, 0.1], [18, 0.05]]
      }
    }
  }, {
    "id": "hillshade_medium_highlight",
    "source": "mapbox",
    "source-layer": "hillshade",
    "filter": { "class": "medium_highlight" },
    "type": "fill",
    "rasterize": "@hillshade_rasterize",
    "style": {
      "fill-color": "#ffd",
      "fill-antialias": false,
      "fill-opacity": {
        "stops": [[14, 0.3], [15, 0.3], [16, 0.2], [17, 0.2], [18, 0.1]]
      }
    },
    "style.night": {
      "fill-color": "#ffe1b7",
      "fill-antialias": false,
      "fill-opacity": {
        "stops": [[14, 0.3], [16, 0.2], [17, 0.15], [18, 0.05]]
      }
    }
  }, {
    "id": "hillshade_medium_shadow",
    "source": "mapbox",
    "source-layer": "hillshade",
    "filter": { "class": "medium_shadow" },
    "type": "fill",
    "rasterize": "@hillshade_rasterize",
    "style": {
      "fill-color": "#206",
      "fill-antialias": false,
      "fill-opacity": {
        "stops": [[14, 0.08], [15, 0.075], [16, 0.05], [17, 0.05], [18, 0.025]]
      }
    },
    "style.night": {
      "fill-color": "#206",
      "fill-antialias": false,
      "fill-opacity": {
        "stops": [[15, 0.3], [16, 0.2], [17, 0.1], [18, 0.05]]
      }
    }
  }, {
    "id": "hillshade_full_shadow",
    "source": "mapbox",
    "source-layer": "hillshade",
    "filter": { "class": "full_shadow" },
    "type": "fill",
    "rasterize": "@hillshade_rasterize",
    "style": {
      "fill-color": "#103",
      "fill-antialias": false,
      "fill-opacity": {
        "stops": [[14, 0.08], [15, 0.075], [16, 0.05], [17, 0.05], [18, 0.025]]
      }
    },
    "style.night": {
      "fill-color": "#103",
      "fill-antialias": false,
      "fill-opacity": {
        "stops": [[15, 0.3], [16, 0.2], [17, 0.1], [18, 0.05]]
      }
    }
  }, {
    "id": "contour_line_loud",
    "source": "mapbox",
    "source-layer": "contour",
    "filter": { "index": 5 },
    "type": "line",
    "render": {
      "line-join": "round"
    },
    "style": {
      "line-color": "#008",
      "line-width": 0.9,
      "line-opacity": {
        "stops": [[11, 0.05], [12, 0.11]]
      }
    },
    "style.night": {
      "line-color": "@contour_night",
      "line-width": 0.9,
      "line-opacity": {
        "stops": [[11, 0.1], [12, 0.2]]
      }
    }
  }, {
    "id": "contour_line_regular",
    "source": "mapbox",
    "source-layer": "contour",
    "type": "line",
    "render": {
      "line-join": "round"
    },
    "style": {
      "line-color": "#008",
      "line-width": 0.5,
      "line-opacity": {
        "stops": [[11, 0.05], [12, 0.11]]
      }
    },
    "style.night": {
      "line-color": "@contour_night",
      "line-width": 0.5,
      "line-opacity": {
        "stops": [[11, 0.1], [12, 0.4]]
      }
    }
  }, {
    "id": "barrier_line_gate",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "gate" },
    "type": "line",
    "style": {
      "line-width": 2.5,
      "line-color": "#aab"
    },
    "style.night": {
      "line-width": 2.5,
      "line-color": "#59596f"
    }
  }, {
    "id": "barrier_line_fence",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "fence" },
    "type": "line",
    "style": {
      "line-color": "#aeada3",
      "line-width": "@fence_width"
    },
    "style.night": {
      "line-color": "#014b61",
      "line-width": "@fence_width"
    }
  }, {
    "id": "barrier_line_hedge",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "hedge" },
    "type": "line",
    "style": {
      "line-color": "#8de99b",
      "line-width": "@hedge_width"
    },
    "style.night": {
      "line-color": "#2e7a57",
      "line-width": "@hedge_width"
    }
  }, {
    "id": "barrier_line_land",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "land" },
    "type": "line",
    "style": {
      "line-color": "@land",
      "line-width": "@barrier_line_land_width"
    },
    "style.night": {
      "line-color": "@land_night",
      "line-width": "@barrier_line_land_width"
    }
  }, {
    "id": "barrier_line_land_fill",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "land" },
    "type": "fill",
    "style": {
      "fill-color": "@land"
    },
    "style.night": {
      "fill-color": "@land_night"
    }
  }, {
    "id": "barrier_line_cliff",
    "source": "mapbox",
    "source-layer": "barrier_line",
    "filter": { "class": "cliff" },
    "type": "line",
    "style": {
      "line-color": "#987",
      "line-width": 4
    },
    "style.night": {
      "line-color": "#63574b",
      "line-width": 4
    }
  }, {
    "id": "water",
    "source": "mapbox",
    "source-layer": "water",
    "type": "fill",
    "style": {
      "fill-color": "@water",
      "fill-outline-color": "#a2bdc0"
    },
    "style.night": {
      "fill-color": "@water_night",
      "fill-outline-color": "@water_dark_night"
    }
  }, {
    "id": "aeroway_fill",
    "source": "mapbox",
    "source-layer": "aeroway",
    "type": "fill",
    "style": {
      "fill-color": "#ddd"
    },
    "style.night": {
      "fill-color": "#367"
    }
  }, {
    "id": "aeroway_runway",
    "source": "mapbox",
    "source-layer": "aeroway",
    "filter": { "type": "runway" },
    "type": "line",
    "style": {
      "line-color": "#ddd",
      "line-width": "@runway_width"
    },
    "style.night": {
      "line-color": "#367",
      "line-width": "@runway_width"
    }
  }, {
    "id": "aeroway_taxiway",
    "source": "mapbox",
    "source-layer": "aeroway",
    "filter": { "type": "taxiway" },
    "type": "line",
    "style": {
      "line-color": "#ddd",
      "line-width": "@taxiway_width"
    },
    "style.night": {
      "line-color": "#367",
      "line-width": "@taxiway_width"
    }
  }, {
    "id": "tunnel_motorway_link_casing",
    "source": "mapbox",
    "source-layer": "tunnel",
    "filter": { "class": "motorway_link" },
    "type": "line",
    "style": {
      "line-color": "@case",
      "line-dasharray": [6, 6],
      "line-width": "@motorway_link_casing_width"
    },
    "style.night": {
      "line-color": "@case_night",
      "line-dasharray": [6, 6],
      "line-width": "@motorway_link_casing_width"
    }
  }, {
    "id": "tunnel_service_casing",
    "source": "mapbox",
    "source-layer": "tunnel",
    "filter": { "class": "service" },
    "type": "line",
    "style": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-dasharray": [6, 6],
      "line-width": "@service_casing_width"
    },
    "style.night": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-dasharray": [6, 6],
      "line-width": "@service_casing_width"
    }
  }, {
    "id": "tunnel_main_casing",
    "source": "mapbox",
    "source-layer": "tunnel",
    "filter": { "class": "main" },
    "type": "line",
    "style": {
      "line-color": "@case",
      "line-dasharray": [6, 6],
      "line-width": "@main_casing_width",
      "line-opacity": {
        "stops": [[8, 0], [9, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-dasharray": [6, 6],
      "line-width": "@main_casing_width",
      "line-opacity": {
        "stops": [[8, 0], [9, 1]]
      }
    }
  }, {
    "id": "tunnel_street_casing",
    "source": "mapbox",
    "source-layer": "tunnel",
    "filter": { "class": ["street", "street_limited"] },
    "type": "line",
    "style": {
      "line-color": "#d9d5c6",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    },
    "style.night": {
      "line-color": "@street_case_night",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    }
  }, {
    "id": "tunnel_motorway_link",
    "ref": "tunnel_motorway_link_casing",
    "style": {
      "line-color": "#e6cec7",
      "line-width": "@motorway_link_width"
    },
    "style.night": {
      "line-color": "#78b0c1",
      "line-width": "@motorway_link_width"
    }
  }, {
    "id": "tunnel_service",
    "ref": "tunnel_service_casing",
    "style": {
      "line-color": "#e6cec7",
      "line-width": 2
    },
    "style.night": {
      "line-color": "#017ca0",
      "line-width": 2
    }
  }, {
    "id": "tunnel_street",
    "ref": "tunnel_street_casing",
    "style": {
      "line-color": "#d9d5c6",
      "line-width": "@street_width"
    },
    "style.night": {
      "line-color": "@street_night",
      "line-width": "@street_width"
    }
  }, {
    "id": "tunnel_main",
    "ref": "tunnel_main_casing",
    "style": {
      "line-color": "#e6cec7",
      "line-width": "@main_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    },
    "style.night": {
      "line-color": "#78b0c1",
      "line-width": "@main_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    }
  }, {
    "id": "tunnel_motorway_casing",
    "source": "mapbox",
    "source-layer": "tunnel",
    "filter": { "class": "motorway" },
    "type": "line",
    "style": {
      "line-color": "@case",
      "line-dasharray": [6, 6],
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "stops": [[8.5, 0], [9, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-dasharray": [6, 6],
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "stops": [[8.5, 0], [9, 1]]
      }
    }
  }, {
    "id": "tunnel_motorway",
    "ref": "tunnel_motorway_casing",
    "style": {
      "line-color": "#e6cec7",
      "line-width": "@motorway_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    },
    "style.night": {
      "line-color": "#78b0c1",
      "line-width": "@motorway_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    }
  }, {
    "id": "road_path_case",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": "path" },
    "type": "line",
    "style": {
      "line-color": "#ffd",
      "line-opacity": 0.4,
      "line-width": {
        "stops": [[14, 3], [15, 4]]
      }
    },
    "style.night": {
      "line-color": "@land_night",
      "line-opacity": 0.2
    }
  }, {
    "id": "road_path_footway",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "footway" },
    "type": "line",
    "style": {
      "line-color": "#bba",
      "line-dasharray": [10, 4],
      "line-width": "@path_width"
    },
    "style.night": {
      "line-color": "#fff",
      "line-dasharray": [10, 4],
      "line-width": "@path_width"
    }
  }, {
    "id": "road_path_path",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "path" },
    "type": "line",
    "style": {
      "line-color": "#987",
      "line-dasharray": [10, 4],
      "line-opacity": 0.8,
      "line-width": {
        "stops": [[13, 0.8], [14, 0.9], [15, 1.2]]
      }
    },
    "style.night": {
      "line-color": "#fff",
      "line-dasharray": [10, 4],
      "line-opacity": 0.8,
      "line-width": {
        "stops": [[13, 0.8], [14, 0.9], [15, 1.2]]
      }
    }
  }, {
    "id": "road_path_cycleway",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "cycleway" },
    "type": "line",
    "style": {
      "line-color": "#488",
      "line-dasharray": [10, 4],
      "line-width": "@path_width"
    },
    "style.night": {
      "line-color": "#94e6ff",
      "line-dasharray": [10, 4],
      "line-width": "@path_width"
    }
  }, {
    "id": "road_path_mtb",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "mtb" },
    "type": "line",
    "style": {
      "line-color": "#488",
      "line-dasharray": [12, 4],
      "line-width": "@path_width"
    },
    "style.night": {
      "line-color": "#94e6ff",
      "line-dasharray": [12, 4],
      "line-width": "@path_width"
    }
  }, {
    "id": "road_path_piste",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "piste" },
    "type": "line",
    "style": {
      "line-color": "#87b",
      "line-dasharray": [8, 4],
      "line-width": "@path_width"
    },
    "style.night": {
      "line-color": "#715dae",
      "line-dasharray": [8, 4],
      "line-width": "@path_width"
    }
  }, {
    "id": "road_path_steps",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "type": "steps" },
    "type": "line",
    "style": {
      "line-color": "#bba",
      "line-dasharray": [10, 4],
      "line-width": 4
    },
    "style.night": {
      "line-color": "#016684",
      "line-dasharray": [10, 4],
      "line-opacity": 0.3,
      "line-width": 6
    }
  }, {
    "id": "road_major_rail",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "major_rail" },
    "type": "line",
    "style": {
      "line-color": "#c8c4c0",
      "line-width": 0.8
    },
    "style.night": {
      "line-color": "#c8c4c0",
      "line-width": 0.8
    }
  }, {
    "id": "road_motorway_link_casing",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": "motorway_link" },
    "type": "line",
    "render": {
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "@case",
      "line-width": "@motorway_link_casing_width"
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@motorway_link_casing_width"
    }
  }, {
    "id": "road_service_casing",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": "service" },
    "type": "line",
    "render": {
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-width": "@service_casing_width"
    },
    "style.night": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-width": "@service_casing_width"
    }
  }, {
    "id": "road_main_casing",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": "main" },
    "type": "line",
    "render": {
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "@case",
      "line-width": "@main_casing_width",
      "line-opacity": {
        "stops": [[8, 0], [9, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@main_casing_width",
      "line-opacity": {
        "stops": [[8, 0], [9, 1]]
      }
    }
  }, {
    "id": "road_street_casing",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": ["street", "street_limited"] },
    "type": "line",
    "render": {
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "#d9d5c6",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    },
    "style.night": {
      "line-color": "@street_case_night",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    }
  }, {
    "id": "road_motorway_link",
    "ref": "road_motorway_link_casing",
    "style": {
      "line-color": "@motorway",
      "line-width": "@motorway_link_width"
    },
    "style.night": {
      "line-color": "@motorway_night",
      "line-width": "@motorway_link_width"
    }
  }, {
    "id": "road_service",
    "ref": "road_service_casing",
    "style": {
      "line-color": "@street",
      "line-width": 2
    },
    "style.night": {
      "line-color": "@street_night",
      "line-width": 2
    }
  }, {
    "id": "road_street",
    "ref": "road_street_casing",
    "style": {
      "line-color": "@street",
      "line-width": "@street_width"
    },
    "style.night": {
      "line-color": "@street_night",
      "line-width": "@street_width"
    }
  }, {
    "id": "road_main",
    "ref": "road_main_casing",
    "style": {
      "line-color": "@main",
      "line-width": "@main_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    },
    "style.night": {
      "line-color": "@main_night",
      "line-width": "@main_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    }
  }, {
    "id": "road_motorway_casing",
    "source": "mapbox",
    "source-layer": "road",
    "filter": { "class": "motorway" },
    "type": "line",
    "render": {
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "@case",
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "stops": [[8.5, 0], [9, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "stops": [[8.5, 0], [9, 1]]
      }
    }
  }, {
    "id": "road_motorway",
    "ref": "road_motorway_casing",
    "style": {
      "line-color": "@motorway",
      "line-width": "@motorway_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    },
    "style.night": {
      "line-color": "@motorway_night",
      "line-width": "@motorway_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    }
  }, {
    "id": "road_major_rail_hatching",
    "ref": "road_major_rail",
    "style": {
      "line-color": "#c8c4c0",
      "line-dasharray": [2, 31],
      "line-width": 5
    },
    "style.night": {
      "line-color": "#c8c4c0",
      "line-dasharray": [2, 31],
      "line-width": 5
    }
  }, {
    "id": "bridge_motorway_link_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "motorway_link" },
    "type": "line",
    "style": {
      "line-color": "@case",
      "line-width": "@motorway_link_casing_width"
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@motorway_link_casing_width"
    }
  }, {
    "id": "bridge_service_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "service" },
    "type": "line",
    "style": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-width": "@service_casing_width"
    },
    "style.night": {
      "line-color": "#000",
      "line-opacity": 0.04,
      "line-width": "@service_casing_width"
    }
  }, {
    "id": "bridge_main_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "main" },
    "type": "line",
    "style": {
      "line-color": "@case",
      "line-width": "@main_casing_width",
      "line-opacity": {
        "stops": [[8, 0], [9, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@main_casing_width",
      "line-opacity": {
        "stops": [[8, 0], [9, 1]]
      }
    }
  }, {
    "id": "bridge_street_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": ["street", "street_limited"] },
    "type": "line",
    "style": {
      "line-color": "#d9d5c6",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    },
    "style.night": {
      "line-color": "@street_case_night",
      "line-width": "@street_casing_width",
      "line-opacity": "@street_casing_opacity"
    }
  }, {
    "id": "bridge_motorway_link",
    "ref": "bridge_motorway_link_casing",
    "style": {
      "line-color": "@motorway",
      "line-width": "@motorway_link_width"
    },
    "style.night": {
      "line-color": "@motorway_night",
      "line-width": "@motorway_link_width"
    }
  }, {
    "id": "bridge_service",
    "ref": "bridge_service_casing",
    "style": {
      "line-color": "@street",
      "line-width": 2
    },
    "style.night": {
      "line-color": "@street_night",
      "line-width": 2
    }
  }, {
    "id": "bridge_street",
    "ref": "bridge_street_casing",
    "style": {
      "line-color": "@street",
      "line-width": "@street_width"
    },
    "style.night": {
      "line-color": "@street_night",
      "line-width": "@street_width"
    }
  }, {
    "id": "bridge_main",
    "ref": "bridge_main_casing",
    "style": {
      "line-color": "@main",
      "line-width": "@main_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    },
    "style.night": {
      "line-color": "@main_night",
      "line-width": "@main_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    }
  }, {
    "id": "bridge_motorway_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "motorway" },
    "type": "line",
    "style": {
      "line-color": "@case",
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "stops": [[8.5, 0], [9, 1]]
      }
    },
    "style.night": {
      "line-color": "@case_night",
      "line-width": "@motorway_casing_width",
      "line-opacity": {
        "stops": [[8.5, 0], [9, 1]]
      }
    }
  }, {
    "id": "bridge_motorway",
    "ref": "bridge_motorway_casing",
    "style": {
      "line-color": "@motorway",
      "line-width": "@motorway_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    },
    "style.night": {
      "line-color": "@motorway_night",
      "line-width": "@motorway_width",
      "line-opacity": {
        "stops": [[5.5, 0], [6, 1]]
      }
    }
  }, {
    "id": "bridge_aerialway_casing",
    "source": "mapbox",
    "source-layer": "bridge",
    "filter": { "class": "aerialway" },
    "type": "line",
    "style": {
      "line-color": "white",
      "line-opacity": 0.5,
      "line-width": "@aerialway_casing_width"
    },
    "style.night": {
      "line-color": "white",
      "line-opacity": 0.5,
      "line-width": "@aerialway_casing_width"
    }
  }, {
    "id": "bridge_aerialway",
    "ref": "bridge_aerialway_casing",
    "style": {
      "line-color": "#876",
      "line-opacity": 0.5,
      "line-width": "@aerialway_width"
    },
    "style.night": {
      "line-color": "#876",
      "line-opacity": 0.5,
      "line-width": "@aerialway_width"
    }
  }, {
    "id": "admin_l3",
    "source": "mapbox",
    "source-layer": "admin",
    "filter": { "admin_level": [3, 4, 5] },
    "type": "line",
    "render": {
      "line-join": "round"
    },
    "style": {
      "line-color": "#88a",
      "line-dasharray": [60, 20],
      "line-opacity": {
        "stops": [[3, 0], [5, 1]]
      },
      "line-width": "@admin_l3_width"
    },
    "style.night": {
      "line-color": "@admin_night",
      "line-dasharray": [60, 20],
      "line-opacity": {
        "stops": [[3, 0], [5, 1]]
      },
      "line-width": "@admin_l3_width"
    }
  }, {
    "id": "admin_l2",
    "source": "mapbox",
    "source-layer": "admin",
    "filter": { "admin_level": 2 },
    "type": "line",
    "render": {
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "#88a",
      "line-width": "@admin_l2_width"
    },
    "style.night": {
      "line-color": "@admin_night",
      "line-width": "@admin_l2_width"
    }
  }, {
    "id": "admin_maritime_cover",
    "source": "mapbox",
    "source-layer": "admin",
    "filter": { "maritime": 1 },
    "type": "line",
    "render": {
      "line-join": "round",
      "line-cap": "round"
    },
    "style": {
      "line-color": "@water",
      "line-width": 5
    },
    "style.night": {
      "line-color": "@water_night",
      "line-width": 5
    }
  }, {
    "id": "admin_maritime",
    "ref": "admin_maritime_cover",
    "style": {
      "line-color": "#c0d6d6",
      "line-width": {
        "stops": [[5, 1], [7, 2], [11, 3]]
      }
    },
    "style.night": {
      "line-color": "#0a1347",
      "line-width": {
        "stops": [[5, 1], [7, 2], [11, 3]]
      }
    }
  }, {
    "id": "country_label_line",
    "source": "mapbox",
    "source-layer": "country_label_line",
    "type": "line",
    "render": {
      "text-max-width": 5
    },
    "style": {
      "line-color": "@country_text",
      "line-width": 0.5,
      "line-opacity": 0.5
    },
    "style.night": {
      "line-color": "@text_night",
      "line-width": 0.5,
      "line-opacity": 0.5
    }
  }, {
    "id": "country_label",
    "source": "mapbox",
    "source-layer": "country_label",
    "filter": { "$type": "Point" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 24,
      "text-max-width": 5
    },
    "style": {
      "text-color": "@country_text",
      "text-halo-color": "rgba(255,255,255,0.5)",
      "text-halo-width": 0.5,
      "text-size": "@country_label_size"
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.4,
      "text-size": "@country_label_size"
    }
  }, {
    "id": "marine_label_line_1",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "LineString", "labelrank": 1 },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "curve",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 30,
      "text-max-angle": 0.5,
      "text-letter-spacing": 0.4
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "stops": [[2, 20], [3, 25], [4, 30], [21, 30]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "stops": [[2, 20], [3, 25], [4, 30], [21, 30]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_line_2",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "LineString", "labelrank": 2 },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "curve",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 24,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "stops": [[2, 13], [3, 14], [4, 20], [5, 24], [21, 24]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "stops": [[2, 13], [3, 14], [4, 20], [5, 24], [21, 24]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_line_3",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "LineString", "labelrank": 3 },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "curve",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 18,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "stops": [[2, 12], [3, 13], [4, 15], [5, 18], [21, 18]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "stops": [[2, 12], [3, 13], [4, 15], [5, 18], [21, 18]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_line_other",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "LineString", "labelrank": [4, 5, 6] },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "curve",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 16,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "stops": [[3, 12], [4, 14], [5, 16], [21, 16]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "stops": [[3, 12], [4, 14], [5, 16], [21, 16]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_point_1",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "Point", "labelrank": 1 },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 30,
      "text-max-width": 8,
      "text-letter-spacing": 0.4,
      "text-line-height": 2
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "stops": [[2, 20], [3, 25], [4, 30], [21, 30]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "stops": [[2, 20], [3, 25], [4, 30], [21, 30]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_point_2",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "Point", "labelrank": 2 },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 24,
      "text-max-width": 8,
      "text-letter-spacing": 0.2,
      "text-line-height": 1.5
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "stops": [[2, 13], [3, 14], [4, 20], [5, 24], [21, 24]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "stops": [[2, 13], [3, 14], [4, 20], [5, 24], [21, 24]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_point_3",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "Point", "labelrank": 3 },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 18,
      "text-max-width": 8,
      "text-letter-spacing": 0.1,
      "text-line-height": 1.3
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "stops": [[2, 12], [3, 13], [4, 15], [5, 18], [21, 18]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "stops": [[2, 12], [3, 13], [4, 15], [5, 18], [21, 18]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "marine_label_point_other",
    "source": "mapbox",
    "source-layer": "marine_label",
    "filter": { "$type": "Point", "labelrank": [4, 5, 6] },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 16,
      "text-max-width": 8,
      "text-letter-spacing": 0.1,
      "text-line-height": 1.2
    },
    "style": {
      "text-color": "@marine_text",
      "text-size": {
        "stops": [[3, 12], [4, 14], [5, 16], [21, 16]]
      },
      "text-halo-color": "@water"
    },
    "style.night": {
      "text-color": "@water_dark_night",
      "text-size": {
        "stops": [[3, 12], [4, 14], [5, 16], [21, 16]]
      },
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "state_label",
    "source": "mapbox",
    "source-layer": "state_label",
    "filter": { "$type": "Point" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-font": "Open Sans Regular, Arial Unicode MS Regular",
      "text-max-size": 16,
      "text-max-width": 8
    },
    "style": {
      "text-color": "#333",
      "text-halo-width": 0.4,
      "text-halo-color": "rgba(244,239,225,0.8)",
      "text-size": {
        "stops": [[2.99, 0], [3, 10], [8.99, 16], [9, 0]]
      }
    },
    "style.night": {
      "text-color": "#fff",
      "text-halo-width": 0.4,
      "text-halo-color": "@land_night",
      "text-size": {
        "stops": [[2.99, 0], [3, 10], [8.99, 16], [9, 0]]
      }
    }
  }, {
    "id": "place_label_city",
    "source": "mapbox",
    "source-layer": "place_label",
    "filter": { "type": "city", "$type": "Point" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 20,
      "text-max-width": 8
    },
    "style": {
      "text-color": "#444",
      "text-halo-width": 0.4,
      "text-halo-color": "@text_stroke",
      "text-size": {
        "stops": [[2.99, 0], [3, 10], [6, 14], [13.99, 20], [14, 0]]
      }
    },
    "style.night": {
      "text-color": "#fff",
      "text-halo-width": 0.4,
      "text-halo-color": "@text2_stroke_night",
      "text-size": {
        "stops": [[2.99, 0], [3, 10], [6, 14], [13.99, 20], [14, 0]]
      }
    }
  }, {
    "id": "place_label_town",
    "source": "mapbox",
    "source-layer": "place_label",
    "filter": { "type": "town", "$type": "Point" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 24,
      "text-max-width": 8
    },
    "style": {
      "text-color": "#716656",
      "text-halo-width": 0.3,
      "text-halo-color": "@text_stroke",
      "text-size": {
        "stops": [[8, 10], [11, 13], [13, 17], [15, 22]]
      }
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-width": 0.3,
      "text-halo-color": "@text2_stroke_night",
      "text-size": {
        "stops": [[8, 10], [11, 13], [13, 17], [15, 22]]
      }
    }
  }, {
    "id": "place_label_village",
    "source": "mapbox",
    "source-layer": "place_label",
    "filter": { "type": "village", "$type": "Point" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 22,
      "text-max-width": 8
    },
    "style": {
      "text-color": "#635644",
      "text-halo-width": 0.3,
      "text-halo-color": "@text_stroke",
      "text-size": {
        "stops": [[8, 8], [11, 10], [13, 14], [15, 16], [16, 20]]
      }
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-width": 0.3,
      "text-halo-color": "@text2_stroke_night",
      "text-size": {
        "stops": [[8, 8], [11, 10], [13, 14], [15, 16], [16, 20]]
      }
    }
  }, {
    "id": "place_label_other",
    "source": "mapbox",
    "source-layer": "place_label",
    "filter": { "type": ["hamlet", "suburb", "neighbourhood"], "$type": "Point" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 18,
      "text-max-width": 6
    },
    "style": {
      "text-color": "#7d6c55",
      "text-halo-color": "@text_stroke",
      "text-size": {
        "stops": [[12, 11], [13, 12], [15, 14], [17, 18]]
      }
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.3,
      "text-size": {
        "stops": [[12, 11], [13, 12], [15, 14], [17, 18]]
      }
    }
  }, {
    "id": "road_label_1",
    "source": "mapbox",
    "source-layer": "road_label",
    "filter": { "class": ["motorway", "main"], "$type": "LineString" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "curve",
      "text-padding": 2,
      "text-font": "Open Sans Regular, Arial Unicode MS Regular",
      "text-max-size": 18,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "#585042",
      "text-halo-color": "@land",
      "text-halo-width": 0.6,
      "text-size": "@road_label_1_size"
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.5,
      "text-size": "@road_label_1_size"
    }
  }, {
    "id": "road_label_2",
    "source": "mapbox",
    "source-layer": "road_label",
    "filter": { "class": ["street", "street_limited"], "$type": "LineString" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "curve",
      "text-padding": 2,
      "text-font": "Open Sans Regular, Arial Unicode MS Regular",
      "text-max-size": 16,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "#585042",
      "text-halo-color": "@land",
      "text-halo-width": 0.6,
      "text-size": "@road_label_2_size"
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.5,
      "text-size": "@road_label_2_size"
    }
  }, {
    "id": "road_label_3",
    "source": "mapbox",
    "source-layer": "road_label",
    "filter": { "class": ["service", "driveway", "path"], "$type": "LineString" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "curve",
      "text-padding": 2,
      "text-font": "Open Sans Regular, Arial Unicode MS Regular",
      "text-max-size": 14,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "#585042",
      "text-halo-color": "@land",
      "text-halo-width": 0.6,
      "text-size": "@road_label_3_size"
    },
    "style.night": {
      "text-color": "@text_night",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.5,
      "text-size": "@road_label_3_size"
    }
  }, {
    "id": "contour_label",
    "source": "mapbox",
    "source-layer": "contour",
    "filter": { "index": [5, 10], "$type": "LineString" },
    "type": "text",
    "render": {
      "text-path": "curve",
      "text-field": "{ele} m",
      "text-font": "Open Sans Regular, Arial Unicode MS Regular",
      "text-max-size": 10,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "@text",
      "text-halo-color": "@land",
      "text-halo-width": 0.3,
      "text-size": 10
    },
    "style.night": {
      "text-color": "@contour_night",
      "text-halo-color": "@land_night",
      "text-halo-width": 0.3,
      "text-size": 10
    }
  }, {
    "id": "water_label",
    "source": "mapbox",
    "source-layer": "water_label",
    "filter": { "$type": "Point" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 12,
      "text-max-width": 8
    },
    "style": {
      "text-color": "@water_dark",
      "text-halo-color": "rgba(255,255,255,0.75)"
    },
    "style.night": {
      "text-color": "@text_water_night",
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "waterway_label",
    "source": "mapbox",
    "source-layer": "waterway_label",
    "filter": { "$type": "LineString" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "curve",
      "text-font": "Open Sans Semibold Italic, Arial Unicode MS Bold",
      "text-max-size": 12,
      "text-max-angle": 0.5
    },
    "style": {
      "text-color": "@water_dark",
      "text-halo-width": 0.4,
      "text-halo-color": "@text_stroke"
    },
    "style.night": {
      "text-color": "@text_water_night",
      "text-halo-color": "@water_night"
    }
  }, {
    "id": "poi",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": [1, 2] },
    "type": "icon",
    "render": {
      "icon-image": "{maki}-12",
      "icon-size": 12
    },
    "style.night": {}
  }, {
    "id": "poi_label_1-2",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": [1, 2], "$type": "Point" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-padding": 2,
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 12,
      "text-max-width": 10,
      "text-alignment": "center"
    },
    "style": {
      "text-color": "#444",
      "text-size": "@poi_label_1-2_size",
      "text-halo-color": "@land",
      "text-halo-width": 0.3
    },
    "style.night": {
      "text-color": "#fff",
      "text-size": "@poi_label_1-2_size",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.3
    }
  }, {
    "id": "poi_3",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": 3 },
    "type": "icon",
    "render": {
      "icon-image": "{maki}-12",
      "icon-size": 12
    },
    "style": {
      "icon-opacity": {
        "stops": [[15.5, 0], [15.75, 1]]
      }
    },
    "style.night": {
      "icon-opacity": {
        "stops": [[15.5, 0], [15.75, 1]]
      }
    }
  }, {
    "id": "poi_label_3",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": 3, "$type": "Point" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-padding": 2,
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 11,
      "text-max-width": 10,
      "text-alignment": "center"
    },
    "style": {
      "text-color": "#444",
      "text-size": "@poi_label_3_size",
      "text-halo-color": "@land",
      "text-halo-width": 0.3,
      "text-opacity": {
        "stops": [[15.5, 0], [15.75, 1]]
      }
    },
    "style.night": {
      "text-color": "#fff",
      "text-size": "@poi_label_3_size",
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.3,
      "text-opacity": {
        "stops": [[15.5, 0], [15.75, 1]]
      }
    }
  }, {
    "id": "poi_4",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": 4 },
    "type": "icon",
    "render": {
      "icon-image": "{maki}-12",
      "icon-size": 12
    },
    "style": {
      "icon-opacity": {
        "stops": [[17.5, 0], [17.75, 1]]
      }
    },
    "style.night": {
      "icon-opacity": {
        "stops": [[17.5, 0], [17.75, 1]]
      }
    }
  }, {
    "id": "poi_label_4",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "scalerank": 4, "$type": "Point" },
    "type": "text",
    "render": {
      "text-field": "{name}",
      "text-path": "horizontal",
      "text-padding": 2,
      "text-font": "Open Sans Semibold, Arial Unicode MS Bold",
      "text-max-size": 10,
      "text-max-width": 10,
      "text-alignment": "center"
    },
    "style": {
      "text-color": "#444",
      "text-size": 10,
      "text-opacity": {
        "stops": [[17.5, 0], [17.75, 1]]
      },
      "text-halo-color": "@land",
      "text-halo-width": 0.3
    },
    "style.night": {
      "text-color": "#fff",
      "text-size": 10,
      "text-opacity": {
        "stops": [[17.5, 0], [17.75, 1]]
      },
      "text-halo-color": "@text2_stroke_night",
      "text-halo-width": 0.3
    }
  }, {
    "id": "poi_aerodrome",
    "source": "mapbox",
    "source-layer": "poi_label",
    "filter": { "maki": "airport" },
    "type": "icon",
    "render": {
      "icon-image": "{maki}-12",
      "icon-size": 12
    },
    "style": {
      "icon-opacity": {
        "stops": [[12, 0], [12.25, 1]]
      }
    },
    "style.night": {
      "icon-opacity": {
        "stops": [[12, 0], [12.25, 1]]
      }
    }
             }, {
             "id": "mapzenwater",
             "source": "mapzenwater",
             "type": "fill",
             "style": {
             "fill-color": "#0000ff"
             },
             "style.night": {
             "fill-color": "#ff00ff"
             }
             }]
}