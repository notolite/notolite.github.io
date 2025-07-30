@echo off
setlocal enabledelayedexpansion

set "folder=pictures"
cd /d "%~dp0\%folder%"

for %%f in (*.png) do (
    cwebp -q 80 "%%f" -o "%%~nf.webp"
    if exist "%%~nf.webp" (
        del "%%f"
    )
)
set /a count=0
for %%f in (*) do (
    set /a count+=1
)
cd /d "%~dp0"
echo const num=%count%;> picnum.js
echo content in pictures folder shown as below
dir pictures
echo content of picnum.js shown as below
type picnum.js
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