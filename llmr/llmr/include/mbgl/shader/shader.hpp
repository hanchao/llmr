#ifndef MBGL_RENDERER_SHADER
#define MBGL_RENDERER_SHADER

#include <cstdint>
#include <array>
#include <mbgl/util/noncopyable.hpp>

namespace mbgl {

class Shader : private util::noncopyable {
public:
    Shader(const char *vertex, const char *fragment);
    ~Shader();
    bool valid;
    uint32_t program;

    void setMatrix(const std::array<float, 16>& matrix);

private:
    bool compileShader(uint32_t *shader, uint32_t type, const char *source);

protected:
    std::array<float, 16> matrix = {{}};
    int32_t u_matrix = -1;
};

}

#endif
