//
//  geojson_tile_data.h
//  llmr
//
//  Created by chao han on 14-7-30.
//  Copyright (c) 2014年 chao han. All rights reserved.
//

#ifndef __llmr__geojson_tile_data__
#define __llmr__geojson_tile_data__

#include <iostream>
#include <mbgl/map/tile.hpp>
#include <mbgl/map/tile_data.hpp>
#include <mbgl/renderer/raster_bucket.hpp>

namespace mbgl {
class GeoJSONTileData : public TileData {
    
public:
    GeoJSONTileData(Tile::ID id, Map &map, const SourceInfo &source);
    ~GeoJSONTileData();

public:
    virtual void parse();
    virtual void render(Painter &painter, std::shared_ptr<StyleLayer> layer_desc);
    virtual bool hasData(std::shared_ptr<StyleLayer> layer_desc) const;
};

}
#endif /* defined(__llmr__geojson_tile_data__) */
