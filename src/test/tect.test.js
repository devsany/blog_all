import { render, screen } from "@testing-library/react";

import TechLogin from "../Login/componentForLogin/TECH/Programming/TechLogin";
import CreativeWritingLogin from "../Login/componentForLogin/Creative Writing/CreativeWritingLogin";

test("input test", () => {
  render(<TechLogin />);
  const input1 = screen.getByRole("textbox");
  expect(input1).toBeInTheDocument();
});

test("input box of creativeWiriting", () => {
  render(<CreativeWritingLogin />);
  const input1 = screen.getByPlaceholderText("Enter Topic");
  expect(input1).toBeInTheDocument();
});
