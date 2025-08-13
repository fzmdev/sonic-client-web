使用node 18.18.0

安装命令

npm set registry https://registry.npmmirror.com
npm set fetch-timeout 120000
npm set fetch-retries 5
npm set fetch-retry-maxtimeout 600000

rm -rf node_modules package-lock.json
npm cache clean --force

npm install --registry=https://registry.npmmirror.com