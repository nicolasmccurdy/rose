// Testing libraries
global.cheerio = require('cheerio');
global.fs = require('fs');
global.request = require('supertest');
global.url = require('url');

// Rose modules
global.app = require('../app');
global.Feature = require('../lib/feature');
global.scraper = require('../lib/scraper');
global.seedData = require('./seedData');
global.seeds = require('../lib/seeds');

// Mocks
global.mockedSeeds = function () {
  return seeds(seedData);
};
