FROM ruby:3.2
# Install dependencies
RUN apt-get update && apt-get install -qq -y --no-install-recommends \
      build-essential nodejs npm
RUN npm install -g npm
RUN npm install --global yarn

ENV INSTALL_PATH /var/www/porfolio
# Create directory
RUN mkdir -p $INSTALL_PATH
# Set path with main directory
WORKDIR $INSTALL_PATH
# Copy important files
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN bundle install

RUN yarn add react react-dom @babel/preset-react prop-types \
    css-loader style-loader mini-css-extract-plugin \
    css-minimizer-webpack-plugin
