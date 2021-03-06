var assert = require('assert');
var freeze = require('../lib/deep-freeze');

describe('deep-freeze', function () {
    describe('init', function () {
        var person = {};
        var expectedPerson = {};

        beforeEach(function () {
            person = {
                name: 'John',
                surname: 'Johnson',
                age: 26,
                address: {
                    street: '1st Street',
                    city: 'Los Angeles',
                    country: 'USA'
                },
                vehicles: [
                    'BMW',
                    'Ferrari',
                    'Lamborghini'
                ]
            };

            expectedPerson = {
                name: 'John',
                surname: 'Johnson',
                age: 26,
                address: {
                    street: '1st Street',
                    city: 'Los Angeles',
                    country: 'USA'
                },
                vehicles: [
                    'BMW',
                    'Ferrari',
                    'Lamborghini'
                ]
            }
        });

        it('should not override any object properties', function () {
            person = freeze(person);

            person.name = 'Jack';
            person.surname = 'Jackson';
            person.age = 18;
            person.address = {
                street: 'Third Street',
                city: 'San Francisco',
                country: 'USA'
            };
            person.vehicles = [
                'Toyota'
            ];

            assert.deepEqual(person, expectedPerson, 'any object properties should not be overridden');
        });

        it('should not add new properties to an object', function () {
            person = freeze(person);

            person.occupation = 'Lawyer';
            person.nickname = 'JJ';

            assert.deepEqual(person, expectedPerson, 'new properties should not be added to an object');
        });
    });
});