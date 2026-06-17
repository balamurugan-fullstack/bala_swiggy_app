import { sum } from "../sum";

test("Sum is calculated correctly" , () => {

    const result = sum(5, 2)
    expect(result).toBe(7)
});