# should just be mdx files being copied
cp ./posts/* ./volumes/posts
# asset tree for b/log
cp -r ./public/assets/b/log/* ./volumes/assets
docker compose up -d
