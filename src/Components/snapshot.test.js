import React from 'react'


describe('FlightService', () => {

    const FlightService = {
        list(){
            return {
                "arrivalDatetime": "2018-06-15T21:00:00",
                "departure": "DUB",
                "departureDatetime": "2018-06-15T17:25:00",
                "destination": "WRO",
                "flightNumber": "FR153",
            }
        }
    };

    it('Should return a list of flights', () => {
        const flights = FlightService.list();
        expect(flights).toMatchSnapshot();
    });
});

/*
describe('User', () => {
    /*it('will fail every time', () => {

        const user = {
            createdAt: new Date(),
            id: Math.floor(Math.random() * 20),
            name: 'LeBron James',
        };

        expect(user).toMatchSnapshot();
    });


    it('will check the matchers and pass', () => {
        const user = {
            createdAt: new Date(),
            id: Math.floor(Math.random() * 20),
            name: 'LeBron James',
        };

        expect(user).toMatchSnapshot({
            createdAt: expect.any(Date),
            id: expect.any(Number),
        });
    });a
});
*/
