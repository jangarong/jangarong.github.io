# build docker image
docker build -t jangarong/jangarong.github.io:4.1.0 .
# should just be mdx files being copied
cp ./posts/* ./volumes/posts
# asset tree for b/log
cp -r ./public/assets/b/log/* ./volumes/assets
# spin up docker
docker compose up -d
