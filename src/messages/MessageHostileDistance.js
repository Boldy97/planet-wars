'use strict'

const Utils = require('../Utils');
const Message = require('./Message');

module.exports = class MessageHostileDistance extends Message {

	static getRoutes(planet){
		return this.getRoutesAll(planet);
	}

	static getDefaultValue(){
		return 0;
	}

	reduce(messages){
		return this.reduceMin(messages);
	}

	getMessageForRoute(route){
		return this.getMessageForRouteIncrementing(route);
	}

	static get(planet){
		// if not hostile, no message
		if(planet.player.type !== Utils.TYPES.HOSTILE)
			return;

		const value = this.getDefaultValue();

		return new this(undefined,planet,planet,value);

	}

}