import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import TechLogin from "../Login/componentForLogin/TECH/Programming/TechLogin";

test("input test", () => {
  render(<TechLogin />);
  const input1 = screen.getByRole("textbox");
  expect(input1).toBeInTheDocument();
});
