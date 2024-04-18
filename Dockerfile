FROM ruby:3.2
# Install dependencies
RUN apt-get update && apt-get install -qq -y --no-install-recommends \
      build-essential nodejs

ENV INSTALL_PATH /var/www/porfolio
# Create directory
RUN mkdir -p $INSTALL_PATH
# Set path with main directory
WORKDIR $INSTALL_PATH
# Copy important files
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN bundle install
