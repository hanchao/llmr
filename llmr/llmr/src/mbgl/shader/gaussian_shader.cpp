#include <mbgl/shader/gaussian_shader.hpp>
#include <mbgl/platform/gl.hpp>

#include <cstdio>

using namespace mbgl;

#define GAUSSIAN_SHADER_VERTEX "attribute vec2 a_pos; \
uniform mat4 u_matrix; \
uniform vec2 u_offset; \
varying vec2 v_coords[3]; \
void main() { \
    gl_Position = u_matrix * vec4(a_pos, 0, 1); \
    vec2 tex = (gl_Position.xy + 1.0) / 2.0; \
    v_coords[0] = tex; \
    v_coords[1] = tex + u_offset * 1.1824255238063563; \
    v_coords[2] = tex - u_offset * 1.1824255238063563; \
}"

#define GAUSSIAN_SHADER_FRAGMENT "precision highp float; \
uniform sampler2D u_image; \
varying vec2 v_coords[3]; \
void main() \
{ \
    vec4 sum = vec4(0.0); \
    sum += texture2D(u_image, v_coords[0]) * 0.40261994689424746; \
    sum += texture2D(u_image, v_coords[1]) * 0.2986900265528763; \
    sum += texture2D(u_image, v_coords[2]) * 0.2986900265528763; \
    gl_FragColor = sum; \
}"

GaussianShader::GaussianShader()
    : Shader(
         GAUSSIAN_SHADER_VERTEX,
         GAUSSIAN_SHADER_FRAGMENT
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
    u_offset = glGetUniformLocation(program, "u_offset");

    // fprintf(stderr, "GaussianShader:\n");
    // fprintf(stderr, "    - u_matrix: %d\n", u_matrix);
    // fprintf(stderr, "    - u_image: %d\n", u_image);
    // fprintf(stderr, "    - u_gaussian: %f\n", u_gaussian);
}

void GaussianShader::bind(char *offset) {
    glEnableVertexAttribArray(a_pos);
    glVertexAttribPointer(a_pos, 2, GL_SHORT, false, 0, offset);
}

void GaussianShader::setImage(int32_t new_image) {
    if (image != new_image) {
        glUniform1i(u_image, new_image);
        image = new_image;
    }
}

void GaussianShader::setOffset(const std::array<float, 2>& new_offset) {
    if (offset != new_offset) {
        glUniform2fv(u_offset, 1, new_offset.data());
        offset = new_offset;
    }
}
