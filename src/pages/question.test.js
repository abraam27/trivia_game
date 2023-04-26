import {render , fireEvent} from "@testing-library/react";
import question from "./question";
describe("test Question component ",()=>{
    it("test answer field",()=>{
    const {getByTestId}  =  render(<question/>);
    fireEvent.click(getByTestId("submit"));
    expect(getByTestId("answerField")).toMatch('');
    });
})