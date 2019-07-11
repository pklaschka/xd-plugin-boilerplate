/**
 * @module main
 * @desc The main plugin module
 */

const {RootNode, Rectangle} = require('scenegraph');
const storage = require('xd-storage-helper');

const uxp = require('uxp');

/**
 * The sample command.
 * @param {Selection} selection
 * @param {RootNode} root
 */
async function myCommand(selection, root) {
    console.log("My Plugin");
}

module.exports.commands = {
    myCommand: myCommand
};
