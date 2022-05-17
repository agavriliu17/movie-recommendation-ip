import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import Register from "../../pages/authPages/Register";


describe("register", () => {

    it("Auth Layout appears", () => {
        const { register } = render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );
        
        const authLayout = screen.getByTestId("Auth Layout");
        expect(authLayout).toBeInTheDocument();
    })







    it("Title is Sign Up", () => {
        const { register } = render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );
        const title = screen.getByTestId("Sign Up Title");
        expect(title.textContent).toEqual("Sign up");
    });

    it("Pressing submit on empty fields throws errors", () => {
        const { register } = render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        const submit = screen.getByTestId("Submit");
        const firstName = screen.getByTestId("First Name");
        const lastName = screen.getByTestId("Last Name");
        const email = screen.getByTestId("Email");
        const username = screen.getByTestId("Username");
        const password = screen.getByTestId("Password");
        const cPassword = screen.getByTestId("Confirm password");
        
        fireEvent.click(submit);

    
        expect(firstName.textContent).toEqual("First NamePlease provide your first name");
        expect(lastName.textContent).toEqual("Last NamePlease provide your last name");
        expect(email.textContent).toEqual("Email addressPlease provide an valid email");
        expect(username.textContent).toEqual("UsernamePlease provide a valid username");
        expect(password.textContent).toEqual("PasswordYour password must be at at least 8 characters long ");
        expect(cPassword.textContent).toEqual("Confirm password");
    });









    it("Text fields should accept text", () => {
        const { register } = render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        const firstName = screen.getByTestId("First Name input");
        const lastName = screen.getByTestId("Last Name input");
        const email = screen.getByTestId("Email input");
        const username = screen.getByTestId("Username input");
        const password = screen.getByTestId("Password input");
        const cPassword = screen.getByTestId("Confirm password input");
        
        expect(firstName.textContent).toEqual("");
        expect(lastName.textContent).toEqual("");
        expect(email.textContent).toEqual("");
        expect(username.textContent).toEqual("");
        expect(password.textContent).toEqual("");
        expect(cPassword.textContent).toEqual("");

        fireEvent.change(firstName, {target: {value: "testing first name"}});
        fireEvent.change(lastName, {target: {value: "testing last name"}});
        fireEvent.change(email, {target: {value: "testing email"}});
        fireEvent.change(username, {target: {value: "testing username"}});
        fireEvent.change(password, {target: {value: "testing password"}});
        fireEvent.change(cPassword, {target: {value: "testing cPassword"}});

        expect(firstName.value).toEqual("testing first name");
        expect(lastName.value).toEqual("testing last name");
        expect(email.value).toEqual("testing email");
        expect(username.value).toEqual("testing username");
        expect(password.value).toEqual("testing password");
        expect(cPassword.value).toEqual("testing cPassword");
    });
})
