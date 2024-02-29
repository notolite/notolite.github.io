cd files/pic
set cmd="dir /a-d /b | find /c /v """
for /f %%a in ('%cmd%') do (
    set fileCount=%%a
)
cd ../..
echo const num ^= %fileCount%; > picnum.js
git add *
git commit -m "new post(s)"
git push origin main