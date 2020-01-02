/*
 * Copyright (c) 2020. by Pablo Klaschka
 */

describe('Plugin', () => {
    it('should have the same version number in the package.json and manifest.json', () => {
        const packageVersion = require('../package.json').version;
        const manifestVersion = require('../dist/manifest.json').version;

        expect(packageVersion).toBe(manifestVersion);
    });

    it('should have the "private" flag in the package.json', () => {
        const packageJSON = require('../package.json');

        expect(packageJSON.private).toBeTruthy();
    });
});
