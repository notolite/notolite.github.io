@echo off
setlocal enabledelayedexpansion

set /a imageFiles=0
set "targetDir=%CD%\pictures"

for %%F in (%targetDir%\*) do (
    set /a imageFiles+=1
)

echo const num ^= %imageFiles%; > picnum.js
git add *
git commit -m "new post(s)"
git push origin main