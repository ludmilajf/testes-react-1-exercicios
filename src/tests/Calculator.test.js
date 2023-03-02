import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Calculator from "../components/Calculator"

describe("calculator", () => {
    test("deve renderizar corretamente com os dígitos de operações +, -, *, e /", () => {
        render(<Calculator />)

        // screen.logTestingPlaygroundURL()

        const buttonSum = screen.getByRole('button', {
            name: /\+/i
        })
        expect(buttonSum).toBeInTheDocument()

        const buttonSub = screen.getByRole('button', {
            name: /\-/i
        })
        expect(buttonSub).toBeInTheDocument()

        const buttonMult = screen.getByRole('button', {
            name: /\*/i
        })
        expect(buttonMult).toBeInTheDocument()

        const buttonDiv = screen.getByRole('button', {
            name: /\//i
        })
        expect(buttonDiv).toBeInTheDocument()
    })

    test("primeiro teste: garante que a multiplicação está funcionando corretamente: 5*2 = 10", async () => {
        const user = userEvent.setup()

        render(<Calculator />)

        const button5 = screen.getByRole('button', {
            name: /5/i
        })
        expect(button5).toBeInTheDocument()

        const buttonMult = screen.getByRole('button', {
            name: /\*/i
        })
        expect(buttonMult).toBeInTheDocument()

        const button2 = screen.getByRole('button', {
            name: /2/i
        })
        expect(button2).toBeInTheDocument()

        const buttonEqual = screen.getByRole('button', {
            name: /=/i
        })
        expect(buttonEqual).toBeInTheDocument()

        await user.click(button5)
        await user.click(buttonMult)
        await user.click(button2)
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")
        expect(value).toHaveTextContent("10")
    })

    test("segundo teste: garante que a multiplicação está funcionando corretamente: 9*9 = 81", async () => {
        const user = userEvent.setup()

        render(<Calculator />)

        const button9 = screen.getByRole('button', {
            name: /9/i
        })
        expect(button9).toBeInTheDocument()

        const buttonMult = screen.getByRole('button', {
            name: /\*/i
        })
        expect(buttonMult).toBeInTheDocument()

        const buttonEqual = screen.getByRole('button', {
            name: /=/i
        })
        expect(buttonEqual).toBeInTheDocument()

        await user.click(button9)
        await user.click(buttonMult)
        await user.click(button9)
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")
        expect(value).toHaveTextContent("81")
    })

    test("garante que concatenar operações está funcionando corretamente: 5*2+10 = 20", async () => {
        const user = userEvent.setup()

        render(<Calculator />)

        const button5 = screen.getByRole('button', {
            name: /5/i
        })
        expect(button5).toBeInTheDocument()

        const buttonMult = screen.getByRole('button', {
            name: /\*/i
        })
        expect(buttonMult).toBeInTheDocument()

        const button2 = screen.getByRole('button', {
            name: /2/i
        })
        expect(button2).toBeInTheDocument()

        const buttonSum = screen.getByRole('button', {
            name: /\+/i
        })
        expect(buttonSum).toBeInTheDocument()

        const button1 = screen.getByRole('button', {
            name: /1/i
        })
        expect(button1).toBeInTheDocument()

        const button0 = screen.getByRole('button', {
            name: /0/i
        })
        expect(button0).toBeInTheDocument()

        const buttonEqual = screen.getByRole('button', {
            name: /=/i
        })
        expect(buttonEqual).toBeInTheDocument()

        await user.click(button5)
        await user.click(buttonMult)
        await user.click(button2)
        await user.click(buttonSum)
        await user.click(button1)
        await user.click(button0)
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")
        expect(value).toHaveTextContent("20")
    })
})