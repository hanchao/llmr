//
//  geojson_tile_data.cpp
//  llmr
//
//  Created by chao han on 14-7-30.
//  Copyright (c) 2014年 chao han. All rights reserved.
//

#include <mbgl/map/geojson_tile_data.hpp>

using namespace mbgl;

GeoJSONTileData::GeoJSONTileData(Tile::ID id, Map &map, const SourceInfo &source)
: TileData(id, map, source) {
    
}

GeoJSONTileData::~GeoJSONTileData() {
}

void GeoJSONTileData::parse(){

}

void GeoJSONTileData::render(Painter &painter, std::shared_ptr<StyleLayer> layer_desc){
    
}

bool GeoJSONTileData::hasData(std::shared_ptr<StyleLayer> layer_desc) const{
    return false;
}

