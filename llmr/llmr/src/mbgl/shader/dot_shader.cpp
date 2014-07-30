#include <mbgl/shader/dot_shader.hpp>
#include <mbgl/platform/gl.hpp>

#include <cstdio>

using namespace mbgl;

#define DOT_SHADER_VERTEX "attribute vec2 a_pos; \
uniform mat4 u_matrix; \
uniform float u_size; \
void main(void) { \
gl_Position = u_matrix * vec4(a_pos, 0, 1); \
gl_PointSize = u_size; \
}"

#define DOT_SHADER_FRAGMENT "precision highp float; \
uniform vec4 u_color; \
uniform float u_blur; \
void main() { \
	float dist = length(gl_PointCoord - 0.5); \
	float t = smoothstep(0.5, 0.5 - u_blur, dist); \
    gl_FragColor = u_color * t; \
}"

DotShader::DotShader()
: Shader(
         DOT_SHADER_VERTEX,
         DOT_SHADER_FRAGMENT
         ) {
    if (!valid) {
        fprintf(stderr, "invalid dot shader\n");
        return;
    }

    a_pos = glGetAttribLocation(program, "a_pos");

    u_matrix = glGetUniformLocation(program, "u_matrix");
    u_color = glGetUniformLocation(program, "u_color");
    u_size = glGetUniformLocation(program, "u_size");
    u_blur = glGetUniformLocation(program, "u_blur");

    // fprintf(stderr, "DotShader:\n");
    // fprintf(stderr, "    - u_matrix: %d\n", u_matrix);
    // fprintf(stderr, "    - u_color: %d\n", u_color);
    // fprintf(stderr, "    - u_size: %d\n", u_size);
    // fprintf(stderr, "    - u_blur: %d\n", u_blur);
}

void DotShader::bind(char *offset) {
    glEnableVertexAttribArray(a_pos);
    glVertexAttribPointer(a_pos, 2, GL_SHORT, false, 8, offset);
}

void DotShader::setColor(const std::array<float, 4>& new_color) {
    if (color != new_color) {
        glUniform4fv(u_color, 1, new_color.data());
        color = new_color;
    }
}

void DotShader::setSize(float new_size) {
    if (size != new_size) {
        glUniform1f(u_size, new_size);
        size = new_size;
    }
}

void DotShader::setBlur(float new_blur) {
    if (blur != new_blur) {
        glUniform1f(u_blur, new_blur);
        blur = new_blur;
    }
}
