cd pictures
set cmd="dir /a-d /b | find /c /v """
for /f %%a in ('%cmd%') do (
    set fileCount=%%a
)
cd ..
set /a  imageFiles = %fileCount% - 3
echo const num ^= %imageFiles%; > picnum.js
git add *
git commit -m "new post(s)"
git push origin main
