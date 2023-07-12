'use strict';

/**
 * housecard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::housecard.housecard');
