#include <mbgl/shader/outline_shader.hpp>
#include <mbgl/platform/gl.hpp>

#include <cstdio>

using namespace mbgl;

#define OUTLINE_SHADER_VERTEX "attribute vec2 a_pos; \
uniform mat4 u_matrix; \
uniform vec2 u_world; \
varying vec2 v_pos; \
void main() { \
    gl_Position = u_matrix * vec4(a_pos, 0, 1); \
    v_pos = (gl_Position.xy + 1.0) / 2.0 * u_world; \
}"

#define OUTLINE_SHADER_FRAGMENT "precision highp float; \
uniform vec4 u_color; \
varying vec2 v_pos; \
void main() { \
    float dist = length(v_pos - gl_FragCoord.xy); \
    float alpha = smoothstep(1.0, 0.0, dist); \
    gl_FragColor = u_color * alpha; \
}"

OutlineShader::OutlineShader()
    : Shader(
        OUTLINE_SHADER_VERTEX,
        OUTLINE_SHADER_FRAGMENT
    ) {
    if (!valid) {
        fprintf(stderr, "invalid outline shader\n");
        return;
    }

    a_pos = glGetAttribLocation(program, "a_pos");

    u_matrix = glGetUniformLocation(program, "u_matrix");
    u_color = glGetUniformLocation(program, "u_color");
    u_world = glGetUniformLocation(program, "u_world");

    // fprintf(stderr, "OutlineShader:\n");
    // fprintf(stderr, "    - u_matrix: %d\n", u_matrix);
    // fprintf(stderr, "    - u_color: %d\n", u_color);
    // fprintf(stderr, "    - u_world: %d\n", u_world);
}

void OutlineShader::bind(char *offset) {
    glEnableVertexAttribArray(a_pos);
    glVertexAttribPointer(a_pos, 2, GL_SHORT, false, 0, offset);
}

void OutlineShader::setColor(const std::array<float, 4>& new_color) {
    if (color != new_color) {
        glUniform4fv(u_color, 1, new_color.data());
        color = new_color;
    }
}

void OutlineShader::setWorld(const std::array<float, 2>& new_world) {
    if (world != new_world) {
        glUniform2fv(u_world, 1, new_world.data());
        world = new_world;
    }
}
