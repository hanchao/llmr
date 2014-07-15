#include <llmr/shader/linejoin_shader.hpp>
#include <llmr/platform/gl.hpp>

#include <cstdio>

using namespace llmr;

#define LINEJOIN_SHADER_VERTEX "attribute vec2 a_pos; \
uniform mat4 u_matrix; \
uniform vec2 u_world; \
uniform float u_size; \
varying vec2 v_pos; \
void main() { \
    gl_Position = u_matrix * vec4(floor(a_pos / 2.0), 0.0, 1.0); \
    v_pos = (gl_Position.xy + 1.0) * u_world; \
    gl_PointSize = u_size; \
}"

#define LINEJOIN_SHADER_FRAGMENT "precision highp float; \
uniform vec4 u_color; \
uniform vec2 u_linewidth; \
varying vec2 v_pos; \
void main() { \
float dist = length(v_pos - gl_FragCoord.xy); \
float alpha = clamp(min(dist - (u_linewidth.t - 1.0), u_linewidth.s - dist), 0.0, 1.0); \
gl_FragColor = u_color * alpha; \
}"

LinejoinShader::LinejoinShader()
    : Shader(
        LINEJOIN_SHADER_VERTEX,
        LINEJOIN_SHADER_FRAGMENT
    ) {
    if (!valid) {
        fprintf(stderr, "invalid line shader\n");
        return;
    }

    a_pos = glGetAttribLocation(program, "a_pos");

    u_matrix = glGetUniformLocation(program, "u_matrix");
    u_world = glGetUniformLocation(program, "u_world");
    u_linewidth = glGetUniformLocation(program, "u_linewidth");
    u_color = glGetUniformLocation(program, "u_color");
    u_size = glGetUniformLocation(program, "u_size");

    // fprintf(stderr, "LinejoinShader:\n");
    // fprintf(stderr, "    - u_matrix: %d\n", u_matrix);
    // fprintf(stderr, "    - u_world: %d\n", u_world);
    // fprintf(stderr, "    - u_linewidth: %d\n", u_linewidth);
    // fprintf(stderr, "    - u_color: %d\n", u_color);
    // fprintf(stderr, "    - u_size: %d\n", u_size);
}

void LinejoinShader::bind(char *offset) {
    glEnableVertexAttribArray(a_pos);
    // Note: We're referring to the vertices in a line array, which are 8 bytes long!
    glVertexAttribPointer(a_pos, 2, GL_SHORT, false, 8, offset);
}

void LinejoinShader::setColor(const std::array<float, 4>& new_color) {
    if (color != new_color) {
        glUniform4fv(u_color, 1, new_color.data());
        color = new_color;
    }
}

void LinejoinShader::setWorld(const std::array<float, 2>& new_world) {
    if (world != new_world) {
        glUniform2fv(u_world, 1, new_world.data());
        world = new_world;
    }
}

void LinejoinShader::setLineWidth(const std::array<float, 2>& new_linewidth) {
    if (linewidth != new_linewidth) {
        glUniform2fv(u_linewidth, 1, new_linewidth.data());
        linewidth = new_linewidth;
    }
}

void LinejoinShader::setSize(float new_size) {
    if (size != new_size) {
        glUniform1f(u_size, new_size);
        size = new_size;
    }
}
