import { render, fireEvent, screen } from "@testing-library/react";
import TagInput from "./TagInput";

const setup = (props = {}) => {
  return render(<TagInput {...props} />);
};

describe("TagInput Component", () => {
  test("should add a tag when Enter is pressed", () => {
    setup();
    const input = screen.getByPlaceholderText("Add a tag...");
    
    fireEvent.change(input, { target: { value: "Text1" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(screen.getByText("Text1")).toBeInTheDocument();
  });

  test("should remove a tag when clicking the remove button", () => {
    setup();
    const input = screen.getByPlaceholderText("Add a tag...");
    
    fireEvent.change(input, { target: { value: "Text2" } });
    fireEvent.keyDown(input, { key: "Enter" });
    
    const removeButton = screen.getByText("❌");
    fireEvent.click(removeButton);

    expect(screen.queryByText("Text2")).not.toBeInTheDocument();
  });

  test("should not add duplicate tags", () => {
    setup();
    const input = screen.getByPlaceholderText("Add a tag...");
    
    fireEvent.change(input, { target: { value: "duplicate" } });
    fireEvent.keyDown(input, { key: "Enter" });
    fireEvent.change(input, { target: { value: "duplicate" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(screen.getAllByText("duplicate").length).toBe(1);
  });

  test("should not exceed maxTags limit", () => {
    setup({ maxTags: 3 });
    const input = screen.getByPlaceholderText("Add a tag...");
    const tags = ["text1", "text2", "text3", "text4", "text5", "text"];
  
    tags.forEach(tag => {
      fireEvent.change(input, { target: { value: tag } });
      fireEvent.keyDown(input, { key: "Enter" });
    });
  
    const tagCount = screen.getAllByRole("button").length;
    expect(tagCount).toBeLessThanOrEqual(3); 
  });
  

  test("should handle custom separators correctly", () => {
    setup({ separators: [",", ";"] });
    const input = screen.getByPlaceholderText("Add a tag...");
    
    fireEvent.change(input, { target: { value: "text1;text2,text3" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(screen.getByText("text1")).toBeInTheDocument();
    expect(screen.getByText("text2")).toBeInTheDocument();
    expect(screen.getByText("text3")).toBeInTheDocument();
  });
});
