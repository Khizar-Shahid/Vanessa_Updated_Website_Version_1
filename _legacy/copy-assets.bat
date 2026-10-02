@echo off
echo Copying existing and generated assets to public folder...
if not exist "public" mkdir public
if not exist "public\images" mkdir "public\images"
if not exist "public\videos" mkdir "public\videos"

copy /y "logo.svg" "public\logo.svg"
copy /y "vanessa.jpeg.jpeg" "public\vanessa.jpg"
copy /y "vanessa.jpeg.jpeg" "public\images\vanessa.jpg"
copy /y "hero_bg_1782033712798.png" "public\images\hero_bg.png"
copy /y "therapy_about_1782033726673.png" "public\images\therapy_about.png"

xcopy /y /e /i "videos" "public\videos"

copy /y "C:\Users\PCS\.gemini\antigravity-ide\brain\db1bb5f1-01e8-4f54-9c22-31b6bebbe7d6\space_to_pause_*.jpg" "public\images\space-to-pause.jpg"
copy /y "C:\Users\PCS\.gemini\antigravity-ide\brain\db1bb5f1-01e8-4f54-9c22-31b6bebbe7d6\understanding_experience_*.jpg" "public\images\understanding-experience.jpg"
copy /y "C:\Users\PCS\.gemini\antigravity-ide\brain\db1bb5f1-01e8-4f54-9c22-31b6bebbe7d6\my_story_symbolic_*.jpg" "public\images\my-story-symbolic.jpg"

echo Asset copy complete!
