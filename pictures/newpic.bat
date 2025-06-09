@echo off
setlocal enabledelayedexpansion

set /a imageFiles=0
set "targetDir=%CD%\pictures"

for %%F in (%targetDir%\*) do (
    set /a imageFiles+=1
)

set /a startFile=imageFiles+1
for /L %%N in (!startFile!, 1, 99999) do (
    if exist "%targetDir%\%%N.png" (
        cwebp -q 80 "%targetDir%\%%N.png" -o "%targetDir%\%%N.webp"
    ) else (
        goto :endLoop
    )
)

:endLoop

endlocal

set cmd="dir /a-d /b | find /c /v """
for /f %%a in ('%cmd%') do (
    set fileCount=%%a
)
cd ..
set /a  imageFiles = %fileCount%
echo const num ^= %imageFiles%; > picnum.js
git add *
git commit -m "new post(s)"
git push origin main