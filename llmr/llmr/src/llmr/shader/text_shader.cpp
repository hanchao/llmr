#include <llmr/shader/text_shader.hpp>
#include <llmr/platform/gl.hpp>

#include <cstdio>

using namespace llmr;

#define TEXT_SHADER_VERTEX "attribute vec2 a_pos; \
attribute vec2 a_offset; \
attribute vec4 a_data1; \
attribute vec4 a_data2; \
uniform mat4 u_matrix; \
uniform mat4 u_exmatrix; \
uniform float u_angle; \
uniform float u_zoom; \
uniform float u_flip; \
uniform float u_fadedist; \
uniform float u_minfadezoom; \
uniform float u_maxfadezoom; \
uniform float u_fadezoom; \
uniform vec2 u_texsize; \
varying vec2 v_tex; \
varying float v_alpha; \
void main() { \
    vec2 a_tex = a_data1.xy; \
    float a_labelminzoom = a_data1[2]; \
    float a_angle = a_data1[3]; \
    vec2 a_zoom = a_data2.st; \
    vec2 a_range = a_data2.pq; \
    float rev = 0.0; \
    float rotated = mod(a_angle + u_angle, 256.0); \
    if (u_flip > 0.0 && rotated >= 64.0 && rotated < 192.0) rev = 1.0; \
    float z = 2.0 - step(a_zoom[0], u_zoom) - (1.0 - step(a_zoom[1], u_zoom)) + rev; \
    float alpha = clamp((u_fadezoom - a_labelminzoom) / u_fadedist, 0.0, 1.0); \
    if (u_fadedist >= 0.0) { \
        v_alpha = alpha; \
    } else { \
        v_alpha = 1.0 - alpha; \
    } \
    if (u_maxfadezoom < a_labelminzoom) { \
        v_alpha = 0.0; \
    } \
    if (u_minfadezoom >= a_labelminzoom) { \
        v_alpha = 1.0; \
    } \
    z += step(v_alpha, 0.0); \
    z += step(a_range[0], u_angle) * (1.0 - step(a_range[1], u_angle)); \
    gl_Position = u_matrix * vec4(a_pos, 0, 1) + u_exmatrix * vec4(a_offset / 64.0, z, 0); \
    v_tex = a_tex * 4.0 / u_texsize; \
}"

#define TEXT_SHADER_FRAGMENT "precision highp float; \
uniform sampler2D u_image; \
uniform sampler2D u_texture; \
uniform vec4 u_color; \
uniform float u_buffer; \
uniform float u_gamma; \
varying vec2 v_tex; \
varying float v_alpha; \
void main() { \
    float dist = texture2D(u_texture, v_tex).a; \
    float alpha = smoothstep(u_buffer - u_gamma, u_buffer + u_gamma, dist) * v_alpha; \
    gl_FragColor = u_color * alpha; \
}"

TextShader::TextShader()
    : Shader(
        TEXT_SHADER_VERTEX,
        TEXT_SHADER_FRAGMENT
    ) {
    if (!valid) {
        fprintf(stderr, "invalid text shader\n");
        return;
    }

    a_pos = glGetAttribLocation(program, "a_pos");
    a_offset = glGetAttribLocation(program, "a_offset");
    a_data1 = glGetAttribLocation(program, "a_data1");
    a_data2 = glGetAttribLocation(program, "a_data2");

    u_matrix = glGetUniformLocation(program, "u_matrix");
    u_color = glGetUniformLocation(program, "u_color");
    u_buffer = glGetUniformLocation(program, "u_buffer");
    u_gamma = glGetUniformLocation(program, "u_gamma");
    u_exmatrix = glGetUniformLocation(program, "u_exmatrix");
    u_angle = glGetUniformLocation(program, "u_angle");
    u_zoom = glGetUniformLocation(program, "u_zoom");
    u_flip = glGetUniformLocation(program, "u_flip");
    u_fadedist = glGetUniformLocation(program, "u_fadedist");
    u_minfadezoom = glGetUniformLocation(program, "u_minfadezoom");
    u_maxfadezoom = glGetUniformLocation(program, "u_maxfadezoom");
    u_fadezoom = glGetUniformLocation(program, "u_fadezoom");
    u_texsize = glGetUniformLocation(program, "u_texsize");

    // fprintf(stderr, "TextShader:\n");
    // fprintf(stderr, "    - a_pos: %d\n", a_pos);
    // fprintf(stderr, "    - a_offset: %d\n", a_offset);
    // fprintf(stderr, "    - a_data1: %d\n", a_tex);
    // fprintf(stderr, "    - a_data2: %d\n", a_tex);
    // fprintf(stderr, "    - u_color: %d\n", u_color);
    // fprintf(stderr, "    - u_buffer: %d\n", u_buffer);
    // fprintf(stderr, "    - u_gamma: %d\n", u_gamma);
    // fprintf(stderr, "    - u_exmatrix: %d\n", u_exmatrix);
    // fprintf(stderr, "    - u_angle: %d\n", u_angle);
    // fprintf(stderr, "    - u_zoom: %d\n", u_zoom);
    // fprintf(stderr, "    - u_flip: %d\n", u_flip);
    // fprintf(stderr, "    - u_fadedist: %d\n", u_fadedist);
    // fprintf(stderr, "    - u_minfadezoom: %d\n", u_minfadezoom);
    // fprintf(stderr, "    - u_maxfadezoom: %d\n", u_maxfadezoom);
    // fprintf(stderr, "    - u_fadezoom: %d\n", u_fadezoom);
    // fprintf(stderr, "    - u_texsize: %d\n", u_texsize);
}

void TextShader::bind(char *offset) {
    glEnableVertexAttribArray(a_pos);
    glVertexAttribPointer(a_pos, 2, GL_SHORT, false, 16, offset + 0);

    glEnableVertexAttribArray(a_offset);
    glVertexAttribPointer(a_offset, 2, GL_SHORT, false, 16, offset + 4);

    glEnableVertexAttribArray(a_data1);
    glVertexAttribPointer(a_data1, 4, GL_UNSIGNED_BYTE, false, 16, offset + 8);

    glEnableVertexAttribArray(a_data2);
    glVertexAttribPointer(a_data2, 4, GL_UNSIGNED_BYTE, false, 16, offset + 12);
}

void TextShader::setColor(const std::array<float, 4>& new_color) {
    if (color != new_color) {
        glUniform4fv(u_color, 1, new_color.data());
        color = new_color;
    }
}

void TextShader::setColor(float r, float g, float b, float a) {
    setColor({{ r, g, b, a }});
}

void TextShader::setBuffer(float new_buffer) {
    if (buffer != new_buffer) {
        glUniform1f(u_buffer, new_buffer);
        buffer = new_buffer;
    }
}

void TextShader::setGamma(float new_gamma) {
    if (gamma != new_gamma) {
        glUniform1f(u_gamma, new_gamma);
        gamma = new_gamma;
    }
}

void TextShader::setExtrudeMatrix(const std::array<float, 16> &new_exmatrix) {
    if (exmatrix != new_exmatrix) {
        glUniformMatrix4fv(u_exmatrix, 1, GL_FALSE, new_exmatrix.data());
        exmatrix = new_exmatrix;
    }
}

void TextShader::setAngle(float new_angle) {
    if (angle != new_angle) {
        glUniform1f(u_angle, new_angle);
        angle = new_angle;
    }
}

void TextShader::setZoom(float new_zoom) {
    if (zoom != new_zoom) {
        glUniform1f(u_zoom, new_zoom);
        zoom = new_zoom;
    }
}

void TextShader::setFlip(float new_flip) {
    if (flip != new_flip) {
        glUniform1f(u_flip, new_flip);
        flip = new_flip;
    }
}

void TextShader::setFadeDist(float new_fadedist) {
    if (fadedist != new_fadedist) {
        glUniform1f(u_fadedist, new_fadedist);
        fadedist = new_fadedist;
    }
}

void TextShader::setMinFadeZoom(float new_minfadezoom) {
    if (minfadezoom != new_minfadezoom) {
        glUniform1f(u_minfadezoom, new_minfadezoom);
        minfadezoom = new_minfadezoom;
    }
}

void TextShader::setMaxFadeZoom(float new_maxfadezoom) {
    if (maxfadezoom != new_maxfadezoom) {
        glUniform1f(u_maxfadezoom, new_maxfadezoom);
        maxfadezoom = new_maxfadezoom;
    }
}

void TextShader::setFadeZoom(float new_fadezoom) {
    if (fadezoom != new_fadezoom) {
        glUniform1f(u_fadezoom, new_fadezoom);
        fadezoom = new_fadezoom;
    }
}

void TextShader::setTextureSize(const std::array<float, 2> &new_texsize) {
    if (texsize != new_texsize) {
        glUniform2fv(u_texsize, 1, new_texsize.data());
        texsize = new_texsize;
    }
}
