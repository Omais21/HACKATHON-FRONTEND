import React from "react"
import { LoanCategory } from "./LoanCategory"
import { LoanCalculator } from "./LoanCalculator"

const loanCategories = [
  {
    title: "Wedding Loans",
    subcategories: ["1.Valima", "2.Furniture", "3.Valima Food", "4.Jahez"],
    maxLoan: 500000,
    loanPeriod: 3,
  },
  {
    title: "Home Construction Loans",
    subcategories: ["1.Structure", "2.Finishing", "3.Loan"],
    maxLoan: 1000000,
    loanPeriod: 5,
  },
  {
    title: "Business Startup Loans",
    subcategories: ["1.Buy Stall", "2.Advance Rent for Shop", "3.Shop Assets", "4.Shop Machinery"],
    maxLoan: 1000000,
    loanPeriod: 5,
  },
  {
    title: "Education Loans",
    subcategories: ["1.University Fees", "2.Child Fees Loan"],
    maxLoan: 0,
    loanPeriod: 4,
  },
]

export const LandingPage = () => {
  return (
     <div>
      <main className="container mx-auto px-4 ">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Loan Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-semibold cursor-pointer">
            {loanCategories.map((category, index) => (
              <LoanCategory key={index} {...category} />
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4 py-8">Loan Calculator</h2>
          <LoanCalculator loanCategories={loanCategories} />
        </section>
      </main>
    </div>
  )
}

