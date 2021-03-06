#include <mbgl/shader/raster_shader.hpp>
#include <mbgl/platform/gl.hpp>

#include <cstdio>

using namespace mbgl;

#define RASTER_SHADER_VERTEX "uniform mat4 u_matrix; \
uniform float u_buffer; \
attribute vec2 a_pos; \
varying vec2 v_pos; \
void main() { \
    gl_Position = u_matrix * vec4(a_pos, 0, 1); \
    float dimension = (4096.0 + 2.0 * u_buffer); \
    v_pos = (a_pos / dimension) + (u_buffer / dimension); \
}"

#define RASTER_SHADER_FRAGMENT "precision highp float; \
uniform sampler2D u_image; \
uniform float u_opacity; \
varying vec2 v_pos; \
void main() { \
    gl_FragColor = texture2D(u_image, v_pos) * u_opacity; \
}"

RasterShader::RasterShader()
    : Shader(
         RASTER_SHADER_VERTEX,
         RASTER_SHADER_FRAGMENT
         ) {
    if (!valid) {
#if defined(DEBUG)
        fprintf(stderr, "invalid raster shader\n");
#endif
        return;
    }

    a_pos = glGetAttribLocation(program, "a_pos");

    u_matrix = glGetUniformLocation(program, "u_matrix");
    u_image = glGetUniformLocation(program, "u_image");
    u_opacity = glGetUniformLocation(program, "u_opacity");
    u_buffer = glGetUniformLocation(program, "u_buffer");

    // fprintf(stderr, "RasterShader:\n");
    // fprintf(stderr, "    - u_matrix: %d\n", u_matrix);
    // fprintf(stderr, "    - u_image: %d\n", u_image);
    // fprintf(stderr, "    - u_opacity: %f\n", u_opacity);
    // fprintf(stderr, "    - u_buffer: %f\n", u_buffer);
}

void RasterShader::bind(char *offset) {
    glEnableVertexAttribArray(a_pos);
    glVertexAttribPointer(a_pos, 2, GL_SHORT, false, 0, offset);
}

void RasterShader::setImage(int32_t new_image) {
    if (image != new_image) {
        glUniform1i(u_image, new_image);
        image = new_image;
    }
}

void RasterShader::setOpacity(float new_opacity) {
    if (opacity != new_opacity) {
        glUniform1f(u_opacity, new_opacity);
        opacity = new_opacity;
    }
}

void RasterShader::setBuffer(float new_buffer) {
    if (buffer != new_buffer) {
        glUniform1f(u_buffer, new_buffer);
        buffer = new_buffer;
    }
}
