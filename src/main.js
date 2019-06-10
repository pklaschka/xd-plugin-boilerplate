/**
 * @module main
 * @desc The main plugin module
 */

const {RootNode, Rectangle} = require('scenegraph');
const storage = require('xd-storage-helper');

/**
 * The sample command.
 * @param {Selection} selection 
 * @param {RootNode} root 
 */
async function myCommand(selection, root) {
    for (let node of selection.items) {
        console.log('Previous values: ', await storage.get('width', 'none'), await storage.get('height', 'none'));
        if (node instanceof Rectangle) {
            node.width *= 2;
            node.height *= 4;
            await storage.set('width', node.width);
            await storage.set('height', node.height);
        }
    }
}

module.exports.commands = {
    myCommand: myCommand
};
