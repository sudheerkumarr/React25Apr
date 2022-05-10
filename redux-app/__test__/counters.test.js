import Counters from "../src/components/Counters";
import { render, screen, fireEvent } from "@testing-library/react";

// define test suite

/*
  describe('test suite description',() => {
      test('test case description', ()=>{
          // test case logic
      })
      test('test case description', ()=>{
          // test case logic
      })
      test('test case description', ()=>{
          // test case logic
      })
  })

*/
describe("Counter component test cases", () => {
  // define test cases
  test("verify counter component title is correct", () => {
    // Render Counter component into virtual dom
    const component = render(<Counters />);
    // Get title element by using testid
    const titleEle = component.getByTestId("title");
    // Compare title
    expect(titleEle.textContent).toBe("Counter Page");
  }); //test-end
}); // suite-end
