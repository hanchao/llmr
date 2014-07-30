//
//  geojson_tile_data.cpp
//  llmr
//
//  Created by chao han on 14-7-30.
//  Copyright (c) 2014年 chao han. All rights reserved.
//

#include <mbgl/map/geojson_tile_data.hpp>
#include <mbgl/util/std.hpp>
#include <mbgl/map/map.hpp>

#include <mbgl/style/style.hpp>
#include <mbgl/style/style_layer.hpp>
#include <mbgl/style/style_bucket.hpp>

#include <mbgl/style/style_layer_group.hpp>

#include <mbgl/renderer/fill_bucket.hpp>
#include <mbgl/geometry/fill_buffer.hpp>


#include <rapidjson/document.h>


using namespace mbgl;

GeoJSONTileData::GeoJSONTileData(Tile::ID id, Map &map, const SourceInfo &source)
: TileData(id, map, source) {
    
}

GeoJSONTileData::~GeoJSONTileData() {
}

void GeoJSONTileData::parse(){
    if (state != State::loaded) {
        return;
    }
    
    try {
        // Parsing creates state that is encapsulated in TileParser. While parsing,
        // the TileParser object writes results into this objects. All other state
        // is going to be discarded afterwards.
        //        parser->parse();
        
        
        
        //rapidjson::Document d = parseJSON(data);
        
        std::shared_ptr<const Style> style = map.getStyle();
        std::shared_ptr<StyleLayerGroup> group = style->layers;
        std::vector<std::shared_ptr<StyleLayer>> layers = group->layers;
        
        for (const std::shared_ptr<StyleLayer> &layer_desc : layers) {

            if (layer_desc->id != "mapzenwater") {
                continue;
            }
            
            if (layer_desc->isBackground()) {
                // background is a special, fake bucket
                continue;
                //            } else if (layer_desc->layers) {
                //                // This is a layer group.
                //                parseStyleLayers(layer_desc->layers);
            } else if (layer_desc->bucket) {
                // This is a singular layer. Check if this bucket already exists. If not,
                // parse this bucket.
                auto bucket_it = buckets.find(layer_desc->bucket->name);
                if (bucket_it == buckets.end()) {
                    // We need to create this bucket since it doesn't exist yet.
                    //std::unique_ptr<Bucket> bucket = nullptr;//createBucket(layer_desc->bucket);
                    
                    std::shared_ptr<StyleBucket> bucket_desc = layer_desc->bucket;
                    if (bucket_desc->render.is<StyleBucketFill>()) {
                        //return createFillBucket(layer, bucket_desc->filter, bucket_desc->render.get<StyleBucketFill>());
                        
                        std::unique_ptr<FillBucket> bucket = std::make_unique<FillBucket>(fillVertexBuffer, triangleElementsBuffer, lineElementsBuffer, bucket_desc->render.get<StyleBucketFill>());
                        //addBucketFeatures(bucket, layer, filter);
                        
                        rapidjson::Document doc;
                        doc.Parse<0>(data.c_str());
                        const rapidjson::Value& value = doc["features"];
                        for(rapidjson::SizeType i=0; i<(rapidjson::SizeType)value.Size(); i++)
                        {
                            const rapidjson::Value& geometry = value[i]["geometry"];
                            const rapidjson::Value& type = geometry["type"];
                            const rapidjson::Value& coords = geometry["coordinates"];
                            if(strcmp(type.GetString(), "Polygon") == 0)
                            {
                                for (uint32_t i = 0; i < coords.Size(); i++) {
                                    
                                    std::vector<Coordinate> coordsIn;
                                    const rapidjson::Value& cps = coords[i];
                                    for (uint32_t j = 0; j < cps.Size(); j++) {
                                        const rapidjson::Value& c = cps[j];
                                        double c_lon = c[(rapidjson::SizeType)0].GetDouble();
                                        double c_lat = c[(rapidjson::SizeType)1].GetDouble();
                                        

                                        Coordinate coord;
                                        {
                                            double x = (c_lon + 180) / 360;
                                            double sinLatitude = sin(c_lat * M_PI / 180);
                                            double y = 0.5 - log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * M_PI);
                                            
                                            int scale = 4096 << id.z;
                                            int maxscale = 1 << id.z;
                                            
                                            x = scale * x;
                                            y = scale * y;
                                            
                                            x -= 4096 * id.x;
                                            y -= 4096 * id.y;

                                            coord.x = x;
                                            coord.y = y;
//                                            coord.x = x - id.x * (1 >> id.z) * ;
//                                            coord.y = y * 4096 * scale - scale * id.y;

                                            
//                                            double PI = M_PI;
//                                            double x = c_lon *20037508.34/180;
//                                            double y = log(tan((90+c_lat)*PI/360))/(PI/180);
//                                            y = y *20037508.34/180;
//                                            
//                                            coord.x = (x+20037508.34)*4096/(20037508.34*2);
//                                            coord.y = (20037508.34-y)*4096/(20037508.34*2);

                                        }
                                        
                                        
//                                        coord.x = c_lon;
//                                        coord.y = c_lon;
                                        
//                                        const double D2R = M_PI / 180.0;
//                                        const double R2D = 180.0 / M_PI;
//                                        const double M2PI = 2 * M_PI;
//                                        const double MIN_ROTATE_SCALE = 8;
//                                        
//                                        double zc, Bc, Cc;
//                                        
//                                        double new_scale = std::pow(2.0, 16);
//                                        const double s = new_scale * 512.0f;
//                                        zc = s / 2;
//                                        Bc = s / 360;
//                                        Cc = s / (2 * M_PI);
//                                        
//                                        const double f = std::fmin(std::fmax(std::sin(D2R * c_lat), -0.9999), 0.9999);
//                                        coord.x = -std::round(c_lon * Bc);
//                                        coord.y = std::round(0.5 * Cc * std::log((1 + f) / (1 - f)));
//                                        
//                                        coord.x -= id.x * 512.0f;
//                                        coord.y -= id.y * 512.0f;
//                                        
//                                        coord.x = c_lon*3600000;
//                                        coord.y = c_lat*3600000;
//                                        
//                                        coord.x = c_lon*100;
//                                        coord.y = c_lat*100;
                                        
                                        coordsIn.push_back(coord);
                                    }
//                                                                        coordsIn.clear();
//
//                                                                        Coordinate coord;
//                                                                        coord.x = 500;
//                                                                        coord.y = 500;
//                                                                        coordsIn.push_back(coord);
//                                                                        coord.x = 500;
//                                                                        coord.y = 1000;
//                                                                        coordsIn.push_back(coord);
//                                                                        coord.x = 0;
//                                                                        coord.y = 0;
//                                                                        coordsIn.push_back(coord);
//                                                                        coord.x = 500;
//                                                                        coord.y = 500;
//                                                                        coordsIn.push_back(coord);
                                    bucket->addGeometry(coordsIn);
                                }
                            }
                        }
                        
                        if (bucket) {
                            // Bucket creation might fail because the data tile may not
                            // contain any data that falls into this bucket.
                            buckets[layer_desc->bucket->name] = std::move(bucket);
                        }
                    }
                    
                    
                }
            } else {
                fprintf(stderr, "[WARNING] layer '%s' does not have child layers or buckets\n", layer_desc->id.c_str());
            }
        }
        
        
        
        
        
    } catch (const std::exception& ex) {
#if defined(DEBUG)
        fprintf(stderr, "[%p] exception [%d/%d/%d]... failed: %s\n", this, id.z, id.x, id.y, ex.what());
#endif
        cancel();
        return;
    }
    
    if (state != State::obsolete) {
        state = State::parsed;
    }


}

void GeoJSONTileData::render(Painter &painter, std::shared_ptr<StyleLayer> layer_desc) {
    if (state == State::parsed && layer_desc->bucket) {
        auto databucket_it = buckets.find(layer_desc->bucket->name);
        if (databucket_it != buckets.end()) {
            assert(databucket_it->second);
            databucket_it->second->render(painter, layer_desc, id);
        }
    }
}

bool GeoJSONTileData::hasData(std::shared_ptr<StyleLayer> layer_desc) const {
    if (state == State::parsed && layer_desc->bucket) {
        auto databucket_it = buckets.find(layer_desc->bucket->name);
        if (databucket_it != buckets.end()) {
            assert(databucket_it->second);
            return databucket_it->second->hasData();
        }
    }
    return false;
}


