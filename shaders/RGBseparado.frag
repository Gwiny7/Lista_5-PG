#version 450 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

// Texture sampler
uniform sampler2D ourTexture1;

uniform int code;

void main()
{
    color = texture(ourTexture1, TexCoord);// * vec4(ourColor, 1.0);

    if (code == 1)
    {
        color = vec4(color.r, color.r, color.r, color.a);
    }

    else if (code == 2)
    {
        color = vec4(color.g, color.g, color.g, color.a);
    }

    else if (code == 3)
    {
        color = vec4(color.b, color.b, color.b, color.a);
    }
}