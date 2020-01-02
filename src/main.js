/**
 * @module main
 * @desc The main plugin module
 */

/**
 * The sample command.
 * @param {XDSelection} selection
 * @param {import('scenegraph').RootNode} root
 */
async function myCommand(selection, root) {
    console.log('My Plugin');
}

module.exports.commands = {
    myCommand
};
