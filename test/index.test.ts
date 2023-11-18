import { describe, test, expect } from "@jest/globals"
import { sum } from "../src"

describe("Sum function", () =>{
    test("Returns correct sum", () =>{
        expect(sum(3,4)).toEqual(7)
    })
})