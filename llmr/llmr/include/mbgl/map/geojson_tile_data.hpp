//
//  geojson_tile_data.h
//  llmr
//
//  Created by chao han on 14-7-30.
//  Copyright (c) 2014年 chao han. All rights reserved.
//

#ifndef __llmr__geojson_tile_data__
#define __llmr__geojson_tile_data__

#include <mbgl/map/tile.hpp>
#include <mbgl/map/tile_data.hpp>
#include <mbgl/geometry/elements_buffer.hpp>
#include <mbgl/geometry/fill_buffer.hpp>
#include <mbgl/geometry/icon_buffer.hpp>
#include <mbgl/geometry/line_buffer.hpp>
#include <mbgl/geometry/text_buffer.hpp>

#include <iosfwd>
#include <memory>
#include <unordered_map>

namespace mbgl {
class GeoJSONTileData : public TileData {
    
public:
    GeoJSONTileData(Tile::ID id, Map &map, const SourceInfo &source);
    ~GeoJSONTileData();

public:
    virtual void parse();
    virtual void render(Painter &painter, std::shared_ptr<StyleLayer> layer_desc);
    virtual bool hasData(std::shared_ptr<StyleLayer> layer_desc) const;
    
protected:
    // Holds the actual geometries in this tile.
    FillVertexBuffer fillVertexBuffer;
    LineVertexBuffer lineVertexBuffer;
    IconVertexBuffer iconVertexBuffer;
    TextVertexBuffer textVertexBuffer;
    
    TriangleElementsBuffer triangleElementsBuffer;
    LineElementsBuffer lineElementsBuffer;
    PointElementsBuffer pointElementsBuffer;
    
    // Holds the buckets of this tile.
    // They contain the location offsets in the buffers stored above
    std::unordered_map<std::string, std::unique_ptr<Bucket>> buckets;
    
    //std::unique_ptr<TileParser> parser;
};

}
#endif /* defined(__llmr__geojson_tile_data__) */
