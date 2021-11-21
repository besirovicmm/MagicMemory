import React, { createContext, useState } from 'react'

export const GlobalContext = createContext('black')

export const GlobalProvider = ({ children }) => {
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  return (
    <GlobalContext.Provider
      value={{ choiceOne, choiceTwo, setChoiceTwo, setChoiceOne }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
