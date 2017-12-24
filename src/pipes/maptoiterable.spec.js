"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maptoiterable_1 = require("./maptoiterable");
describe("Pipe: MapToIterable", () => {
    let pipe;
    beforeEach(() => {
        pipe = new maptoiterable_1.MapToIterablePipe();
    });
    it("should return array of values", () => {
        const myMap = {};
        myMap[1] = "one";
        myMap[2] = "two";
        const result = pipe.transform(myMap);
        expect(result[0]).toBe("one");
        expect(result[1]).toBe("two");
    });
});
//# sourceMappingURL=maptoiterable.spec.js.map