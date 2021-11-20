import React, { useState } from "react"
import { Difficulty, Preferences } from "../types/quiz"

type StatePreferences = {
  preferences: Preferences,
  setPreferences: React.Dispatch<React.SetStateAction<Preferences>>
}

const initialState = {
  idCategory: 1,
  difficulty: Difficulty.EASY
}

export const PreferencesContext = React.createContext<StatePreferences>({
  preferences: initialState,
  setPreferences: () => undefined
})

type Props = {
  children: JSX.Element
}

export const PreferencesProvider = ({ children }: Props) => {

  const [preferences, setPreferences] = useState<Preferences>(initialState);

  return (
    <PreferencesContext.Provider value={{ preferences, setPreferences }}>
      { children }
    </PreferencesContext.Provider>
  )
}