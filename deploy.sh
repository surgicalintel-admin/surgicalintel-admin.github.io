#!/bin/bash

set -e  # Exit on error

MAIN_BRANCH="main"
DEPLOY_BRANCH="gh-pages"
BUILD_DIR="build"
BLOG_DIR="blog"

echo "Switching to $MAIN_BRANCH branch..."
git checkout $MAIN_BRANCH

echo "Installing dependencies..."
pnpm install

echo "Building Docusaurus blog first..."
cd $BLOG_DIR
pnpm install
pnpm build
cd ..

echo "Building React app..."
pnpm build

echo "Copying blog output into React app's build/blog..."
mkdir -p $BUILD_DIR/blog
cp -r $BLOG_DIR/build/* $BUILD_DIR/blog/

echo "Preparing deployment branch: $DEPLOY_BRANCH"

# COPY build folder content to a temp location *before* switching branch
TEMP_BUILD_COPY="../temp_build_copy"
rm -rf $TEMP_BUILD_COPY
mkdir -p $TEMP_BUILD_COPY
cp -r build/. $TEMP_BUILD_COPY/

git checkout $DEPLOY_BRANCH

echo "Cleaning existing files..."
git rm -rf . > /dev/null 2>&1 || true
git clean -fd

echo "Copying build output to root of gh-pages..."
cp -r $TEMP_BUILD_COPY/. .

echo "Committing and pushing changes..."
git add .
git commit -m "Deploy latest React + Blog"
git push origin $DEPLOY_BRANCH

echo "Deployment complete! Visit:"
echo "   🔗 https://surgicalintel.ai/"
echo "   🔗 https://surgicalintel.ai/blog/"
