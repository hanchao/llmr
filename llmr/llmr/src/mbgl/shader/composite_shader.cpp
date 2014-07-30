#include <mbgl/shader/composite_shader.hpp>
#include <mbgl/platform/gl.hpp>

#include <cstdio>

using namespace mbgl;

#define COMPOSITE_SHADER_VERTEX "attribute vec2 a_pos; \
uniform mat4 u_matrix; \
varying vec2 v_pos; \
void main() { \
gl_Position = u_matrix * vec4(a_pos, 0, 1); \
v_pos = (gl_Position.xy + 1.0) / 2.0; \
}"

#define COMPOSITE_SHADER_FRAGMENT "precision highp float; \
uniform sampler2D u_image; \
uniform float u_opacity; \
varying vec2 v_pos; \
void main() { \
    vec4 color = texture2D(u_image, v_pos); \
    gl_FragColor = color * u_opacity; \
}"

CompositeShader::CompositeShader()
    : Shader(
         COMPOSITE_SHADER_VERTEX,
         COMPOSITE_SHADER_FRAGMENT
         ) {
    if (!valid) {
        fprintf(stderr, "invalid composite shader\n");
        return;
    }

    a_pos = glGetAttribLocation(program, "a_pos");

    u_matrix = glGetUniformLocation(program, "u_matrix");
    u_image = glGetUniformLocation(program, "u_image");
    u_opacity = glGetUniformLocation(program, "u_opacity");

    // fprintf(stderr, "CompositeShader:\n");
    // fprintf(stderr, "    - u_matrix: %d\n", u_matrix);
    // fprintf(stderr, "    - u_image: %d\n", u_image);
    // fprintf(stderr, "    - u_opacity: %f\n", u_opacity);
}

void CompositeShader::bind(char *offset) {
    glEnableVertexAttribArray(a_pos);
    glVertexAttribPointer(a_pos, 2, GL_SHORT, false, 0, offset);
}

void CompositeShader::setImage(int32_t new_image) {
    if (image != new_image) {
        glUniform1i(u_image, new_image);
        image = new_image;
    }
}

void CompositeShader::setOpacity(float new_opacity) {
    if (opacity != new_opacity) {
        glUniform1f(u_opacity, new_opacity);
        opacity = new_opacity;
    }
}
