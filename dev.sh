# build docker image
docker build -t jangarong/jangarong.github.io:4.1.0 .
# # remove volumes
# rm -rf volumes
# remove posts and assets
rm -rf ./volumes/assets
rm -rf ./volumes/posts
# should just be mdx files being copied
cp ./posts/* ./volumes/posts
# asset tree for b/log
cp -r ./public/assets/b/log/* ./volumes/assets
# # add archive
# cp -r ./public/b/archive/* ./volumes/archive
# spin up docker
docker compose up -d
