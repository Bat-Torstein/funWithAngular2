import { TestBed } from '@angular/core/testing';
import { MapToIterablePipe } from './maptoiterable';

describe('Pipe: MapToIterable', () => {
    let pipe: MapToIterablePipe;

    beforeEach(() => {
        pipe = new MapToIterablePipe();
    });

    it('should return array of values', () => {
        const myMap = {};
        myMap[1] = 'one';
        myMap[2] = 'two';

        const result = pipe.transform(myMap);
        expect(result[0]).toBe('one');
        expect(result[1]).toBe('two');
    });
});
