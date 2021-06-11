#version 450 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

// Texture sampler
uniform sampler2D ourTexture1;
uniform vec3 colorizacao;

void main()
{
    color = texture(ourTexture1, TexCoord);// * vec4(ourColor, 1.0);

    color = color + vec4(colorizacao, 0.0);
}