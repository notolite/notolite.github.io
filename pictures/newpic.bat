@echo off
setlocal enabledelayedexpansion

set "folder=pictures"
cd /d "%~dp0\%folder%"

set count=0
for %%f in (*.png) do (
    cwebp -q 80 "%%f" -o "%%~nf.webp"
    if exist "%%~nf.webp" (
        del "%%f"
        set /a count+=1
    )
)
cd /d "%~dp0"
set /a adjustedCount=count - 1 >nul
echo const num=%adjustedCount%;> picnum.js
dir pictures
choice /c YN /n /m "Do you want to upload the files in succession? (Y/N)"
if errorlevel 2 (
    echo images are not uploaded yet
) else (
    git add *
    git commit -m "new post(s)"
    git push origin main
    echo images are uploaded
)
pause