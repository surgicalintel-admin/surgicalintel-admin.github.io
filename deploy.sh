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

echo "Building Docusaurus blog..."
cd $BLOG_DIR
pnpm install
pnpm build
cd ..

# Check if expected blog build output exists
if [ ! -f "$BLOG_DIR/build/index.html" ]; then
  echo "ERROR: blog/build/index.html directory not found!"
  echo "Check your Docusaurus build. Did it run successfully?"
  exit 1
fi

echo "Building React app..."
pnpm build

echo "Copying blog output into React app's build/blog..."
rm -rf $BUILD_DIR/blog
mkdir -p $BUILD_DIR/blog
cp -r $BLOG_DIR/build/* $BUILD_DIR/blog/

echo "Preparing deployment branch: $DEPLOY_BRANCH"

# Copy build folder content to temp before switching branch
TEMP_BUILD_COPY="../temp_build_copy"
rm -rf $TEMP_BUILD_COPY
mkdir -p $TEMP_BUILD_COPY
cp -r $BUILD_DIR/. $TEMP_BUILD_COPY/

echo "Switching to $DEPLOY_BRANCH branch..."
git checkout $DEPLOY_BRANCH

echo "Cleaning existing files..."
git rm -rf . > /dev/null 2>&1 || true
git clean -fd

echo "Copying build output to root of $DEPLOY_BRANCH..."
cp -r $TEMP_BUILD_COPY/. .

echo "Committing and pushing changes..."
git add .
git commit -m "Deploy latest React + Blog"
git push origin $DEPLOY_BRANCH

echo ""
echo "Deployment complete!"
echo "React App: https://surgicalintel.ai/"
echo "Blog:      https://surgicalintel.ai/blog/"

