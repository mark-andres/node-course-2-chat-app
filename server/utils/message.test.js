var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'Admin';
        const text = 'Hello';
        var result = generateMessage(from, text);
        expect(result.from).toBe(from);
        expect(result.text).toBe(text);
        expect(result.createdAt).toBeA('number')
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location message object', () => {
        const from = 'Admin';
        const lat = 30;
        const lng = -95;
        const url = `https://www.google.com/maps?q=${lat},${lng}`;
        var result = generateLocationMessage(from, lat, lng);
        expect(result.from).toBe(from);
        expect(result.url).toBe(url);
        expect(result.createdAt).toBeA('number');
    });
});