#include <llmr/shader/plain_shader.hpp>
#include <llmr/platform/gl.hpp>

#include <cstdio>

using namespace llmr;

#define PLAIN_SHADER_VERTEX "attribute vec2 a_pos; \
uniform mat4 u_matrix; \
void main() { \
    gl_Position = u_matrix * vec4(a_pos, 0, 1); \
}"

#define PLAIN_SHADER_FRAGMENT "precision highp float; \
uniform vec4 u_color; \
void main() { \
    gl_FragColor = u_color; \
}"

PlainShader::PlainShader()
    : Shader(
        PLAIN_SHADER_VERTEX,
        PLAIN_SHADER_FRAGMENT
    ) {
    if (!valid) {
        fprintf(stderr, "invalid plain shader\n");
        return;
    }

    a_pos = glGetAttribLocation(program, "a_pos");

    u_matrix = glGetUniformLocation(program, "u_matrix");
    u_color = glGetUniformLocation(program, "u_color");

    // fprintf(stderr, "PlainShader:\n");
    // fprintf(stderr, "    - a_pos: %d\n", a_pos);
    // fprintf(stderr, "    - u_matrix: %d\n", u_matrix);
    // fprintf(stderr, "    - u_color: %d\n", u_color);
}

void PlainShader::bind(char *offset) {
    glEnableVertexAttribArray(a_pos);
    glVertexAttribPointer(a_pos, 2, GL_SHORT, false, 0, offset);
}

void PlainShader::setColor(const std::array<float, 4>& new_color) {
    if (color != new_color) {
        glUniform4fv(u_color, 1, new_color.data());
        color = new_color;
    }
}

void PlainShader::setColor(float r, float g, float b, float a) {
    setColor({{ r, g, b, a }});
}
