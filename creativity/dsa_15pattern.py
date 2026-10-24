import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_sudhir_react_gif(input_image_path="input_file_0.png", output_gif_path="sudhir_react_animation.gif"):
    # Load base image
    base = Image.open(input_image_path).convert("RGB")
    W, H = base.size
    
    # Fonts
    try:
        font_header = ImageFont.truetype("/usr/share/fonts/truetype/lato/Lato-Bold.ttf", 16)
        font_wm = ImageFont.truetype("/usr/share/fonts/truetype/lato/Lato-Bold.ttf", 13)
    except:
        font_header = ImageFont.load_default()
        font_wm = font_header

    # Step 1: Clean 'algomaster.io' from Top Right & Card 8
    clean_base = base.copy()
    draw_clean = ImageDraw.Draw(clean_base)
    
    # Erase top-right header watermark
    draw_clean.rectangle([580, 80, 720, 115], fill=(3, 3, 3))
    
    # Erase Box 8 center watermark & restore vertical dashed grid
    draw_clean.rectangle([340, 492, 460, 520], fill=(10, 10, 10))
    dash_color = (46, 46, 48)
    for x_c in [352, 390, 409, 448]:
        for y in range(490, 522):
            if (y % 8) < 4:
                draw_clean.point((x_c, y), fill=dash_color)

    # Step 2: Build Animation Frames
    frames = []
    text_to_animate = "sudhir-react"
    total_frames = 24

    for i in range(total_frames):
        frame = clean_base.copy()
        draw = ImageDraw.Draw(frame)

        # Pulsing brightness factor
        pulse = 0.65 + 0.35 * np.sin(2 * np.pi * i / total_frames)
        
        # Glow colors (React Blue + Emerald Accent)
        c_blue = (int(97 * pulse), int(218 * pulse), int(251 * pulse))      # #61dafb React Cyan
        c_green = (int(52 * pulse), int(211 * pulse), int(153 * pulse))     # Emerald
        c_wm = (int(120 * pulse), int(130 * pulse), int(145 * pulse))       # Subtle Card Watermark

        # Typewriter / cursor effect for the header
        chars_shown = min(len(text_to_animate), int((i / (total_frames * 0.65)) * len(text_to_animate)) + 1)
        header_text = text_to_animate[:chars_shown]
        cursor = " " if (i % 6 < 3) else "|"

        # Draw Header Branded Text
        header_x = 596
        header_y = 90
        draw.text((header_x, header_y), "sudhir-", font=font_header, fill=c_blue)
        prefix_w = draw.textlength("sudhir-", font=font_header)
        draw.text((header_x + prefix_w, header_y), header_text[7:] if chars_shown > 7 else "", font=font_header, fill=c_green)
        draw.text((header_x + draw.textlength(header_text, font=font_header), header_y), cursor, font=font_header, fill=(180, 180, 180))

        # Draw Box 8 Watermark
        draw.text((358, 497), "sudhir-react", font=font_wm, fill=c_wm)

        frames.append(frame)

    # Step 3: Save as GIF
    frames[0].save(
        output_gif_path,
        save_all=True,
        append_images=frames[1:],
        duration=100,  # 100ms per frame
        loop=0
    )
    print(f"Generated animated GIF: {output_gif_path}")

create_sudhir_react_gif(r"C:\Users\sudhi\Desktop\cleaned_base.png")