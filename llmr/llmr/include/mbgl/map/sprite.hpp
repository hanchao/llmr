#ifndef MBGL_STYLE_SPRITE
#define MBGL_STYLE_SPRITE

#include <mbgl/util/image.hpp>

#include <cstdint>
#include <atomic>
#include <iosfwd>
#include <memory>
#include <string>
#include <unordered_map>

namespace mbgl {

class Map;

class SpritePosition {
public:
    explicit SpritePosition() {}
    explicit SpritePosition(uint16_t x, uint16_t y, uint16_t width, uint16_t height, uint8_t pixelRatio = 1);

    operator bool() const {
        return !(width == 0 && height == 0 && x == 0 && y == 0);
    }

    uint16_t x = 0, y = 0;
    uint16_t width = 0, height = 0;
    uint8_t pixelRatio = 1;
};

class Sprite : public std::enable_shared_from_this<Sprite> {
public:
    Sprite(Map &map, float pixelRatio = 1);

    void load(const std::string& base_url);

    const SpritePosition &getSpritePosition(const std::string& name) const;

    bool isLoaded() const;

public:
    const float pixelRatio;
    std::unique_ptr<util::Image> raster;

private:
    void asyncParseJSON();
    void asyncParseImage();

    static void parseJSON(std::shared_ptr<Sprite> &sprite);
    static void parseImage(std::shared_ptr<Sprite> &sprite);
    static void complete(std::shared_ptr<Sprite> &sprite);

private:
    Map &map;
    std::string url;
    std::string body;
    std::string image;
    std::atomic<bool> loadedImage;
    std::atomic<bool> loadedJSON;
    std::unordered_map<std::string, SpritePosition> pos;
    const SpritePosition empty;
};

}

#endif
