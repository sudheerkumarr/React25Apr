import Counters from "../components/Counters";
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

  test("verify text on increment button", () => {
    // Render Counter component into virtual dom
    const component = render(<Counters />);
    // Get title element by using id
    const incrBtnEle = component.getByTestId("increment");
    // Compare title
    expect(incrBtnEle.textContent).toBe("Increment");
  }); // 2nd test end

  test("verify text on decrement button", () => {
    // loading component into virtual dom
    render(<Counters />);
    // Getting element from virutal dom
    const decrBtnElem = screen.getByRole("button", { name: "Decrement" });
    // Verify button text
    expect(decrBtnElem.textContent).toBe("Decrement");
  }); // 3rd test end
  test("verify cpunter value incremented by clicking on increment button", () => {
    // loading component into virtual dom
    render(<Counters />);
    // Getting element from virutal dom
    const incrBtnElem = screen.getByRole("button", { name: "Increment" });
    const countElem = screen.getByTestId("counter");
    expect(countElem.textContent).toBe("0");
    fireEvent.click(incrBtnElem);
    expect(countElem.textContent).toBe("1");
    fireEvent.click(incrBtnElem);
    expect(countElem.textContent).toBe("2");
  }); // 4th test end
  test("verify counter value getting decremented when clicking on decrement button ", () => {
    // loading component into virtual dom
    render(<Counters />);
    // Getting element from virutal dom
    const decrBtnElem = screen.getByRole("button", { name: "Decrement" });
    const countElem = screen.getByTestId("counter");
    expect(countElem.textContent).toBe("0");
    fireEvent.click(decrBtnElem);
    expect(countElem.textContent).toBe("-1");
  }); // 5th test end

  test("verify initial value in the text field is 1", () => {
    // loading component into virtual dom
    render(<Counters />);
    // Getting element from virutal dom
    const inputNumElem = screen.getByLabelText("Enter step value");
    // Verify button text
    expect(inputNumElem.value).toBe("1");
  }); // 6th test end

  test("verify value in the text field can be changed ", () => {
    // loading component into virtual dom
    render(<Counters />);
    // Getting element from virutal dom
    const inputNumElem = screen.getByLabelText("Enter step value");
    fireEvent.change(inputNumElem, {
      target: {
        value: 5,
      },
    });
    expect(inputNumElem.value).toBe("5");
  }); // 7th Test case

  test("Should be able to increment or decrement counter value by step value given by user", () => {
    // loading component into virtual dom
    render(<Counters />);
    // Getting element from virutal dom
    const inputNumElem = screen.getByLabelText("Enter step value");
    const countElem = screen.getByTestId("counter");
    fireEvent.change(inputNumElem, {
      target: {
        value: 10,
      },
    });
    const incrBtnElem = screen.getByRole("button", { name: "Increment" });
    const decrBtnElem = screen.getByRole("button", { name: "Decrement" });
    fireEvent.click(decrBtnElem);
    expect(countElem.textContent).toBe("-10");
    fireEvent.click(incrBtnElem);
    expect(countElem.textContent).toBe("0");
  }); // 8th test case
}); // suite-end
