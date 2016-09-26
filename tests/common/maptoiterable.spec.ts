import { MapToIterablePipe } from '../../app/pipes/maptoiterable';
import { TestBed } from '@angular/core/testing';

describe('Pipe: MapToIterable', () => {
    let pipe: MapToIterablePipe;

    beforeEach(() => {
        pipe = new MapToIterablePipe()
    });

    it('should return array of values', () => {
        var myMap = {};
        myMap[1] = "one";
        myMap[2] = "two";

        var result = pipe.transform(myMap);
        expect(result[0]).toBe("one");
        expect(result[1]).toBe("two");
    });
}); 