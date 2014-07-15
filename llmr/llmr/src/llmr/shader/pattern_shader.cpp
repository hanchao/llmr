#include <llmr/shader/pattern_shader.hpp>
#include <llmr/platform/gl.hpp>

#include <cstdio>

using namespace llmr;

#define PATTERN_SHADER_VERTEX "uniform mat4 u_matrix; \
attribute vec2 a_pos; \
varying vec2 v_pos; \
void main() { \
    v_pos = a_pos; \
    gl_Position = u_matrix * vec4(a_pos, 0, 1); \
}"

#define PATTERN_SHADER_FRAGMENT "precision highp float; \
uniform vec4 u_color; \
uniform vec2 u_offset; \
uniform vec2 u_pattern_size; \
uniform vec2 u_pattern_tl; \
uniform vec2 u_pattern_br; \
uniform float u_mix; \
uniform sampler2D u_image; \
varying vec2 v_pos; \
void main() { \
    vec2 imagecoord = mod((v_pos + u_offset) / u_pattern_size, 1.0); \
    vec2 pos = mix(u_pattern_tl, u_pattern_br, imagecoord); \
    vec4 color1 = texture2D(u_image, pos); \
    vec2 imagecoord2 = mod(imagecoord * 2.0, 1.0); \
    vec2 pos2 = mix(u_pattern_tl, u_pattern_br, imagecoord2); \
    vec4 color2 = texture2D(u_image, pos2); \
    vec4 color = mix(color1, color2, u_mix); \
    gl_FragColor = color + u_color * (1.0 - color.a); \
}"

PatternShader::PatternShader()
    : Shader(
        PATTERN_SHADER_VERTEX,
        PATTERN_SHADER_FRAGMENT
    ) {
    if (!valid) {
        fprintf(stderr, "invalid pattern shader\n");
        return;
    }

    a_pos = glGetAttribLocation(program, "a_pos");

    u_matrix = glGetUniformLocation(program, "u_matrix");
    u_color = glGetUniformLocation(program, "u_color");
    u_offset = glGetUniformLocation(program, "u_offset");
    u_pattern_size = glGetUniformLocation(program, "u_pattern_size");
    u_pattern_tl = glGetUniformLocation(program, "u_pattern_tl");
    u_pattern_br = glGetUniformLocation(program, "u_pattern_br");
    u_mix = glGetUniformLocation(program, "u_mix");

    // fprintf(stderr, "PatternShader:\n");
    // fprintf(stderr, "    - u_matrix: %d\n", u_matrix);
    // fprintf(stderr, "    - u_color: %d\n", u_color);
    // fprintf(stderr, "    - u_offset: %d\n", u_offset);
    // fprintf(stderr, "    - u_pattern_size: %d\n", u_pattern_size);
    // fprintf(stderr, "    - u_pattern_tl: %d\n", u_pattern_tl);
    // fprintf(stderr, "    - u_pattern_br: %d\n", u_pattern_br);
    // fprintf(stderr, "    - u_mix: %d\n", u_mix);
}

void PatternShader::bind(char *offset) {
    glEnableVertexAttribArray(a_pos);
    glVertexAttribPointer(a_pos, 2, GL_SHORT, false, 0, offset);
}

void PatternShader::setColor(const std::array<float, 4>& new_color) {
    if (color != new_color) {
        glUniform4fv(u_color, 1, new_color.data());
        color = new_color;
    }
}

void PatternShader::setOffset(const std::array<float, 2>& new_offset) {
    if (offset != new_offset) {
        glUniform2fv(u_offset, 1, new_offset.data());
        offset = new_offset;
    }
}

void PatternShader::setPatternSize(const std::array<float, 2>& new_pattern_size) {
    if (pattern_size != new_pattern_size) {
        glUniform2fv(u_pattern_size, 1, new_pattern_size.data());
        pattern_size = new_pattern_size;
    }
}

void PatternShader::setPatternTopLeft(const std::array<float, 2>& new_pattern_tl) {
    if (pattern_tl != new_pattern_tl) {
        glUniform2fv(u_pattern_tl, 1, new_pattern_tl.data());
        pattern_tl = new_pattern_tl;
    }
}

void PatternShader::setPatternBottomRight(const std::array<float, 2>& new_pattern_br) {
    if (pattern_br != new_pattern_br) {
        glUniform2fv(u_pattern_br, 1, new_pattern_br.data());
        pattern_br = new_pattern_br;
    }
}

void PatternShader::setMix(float new_mix) {
    if (mix != new_mix) {
        glUniform1f(u_mix, new_mix);
        mix = new_mix;
    }
}

