set name=%~n1
cwebp %name%.png -o %name%.webp
del %name%.png