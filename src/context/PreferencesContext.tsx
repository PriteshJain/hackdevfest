import React, { useState } from 'react'
import config from '../config/quiz'
import {  Preferences } from '../types/quiz'

type StatePreferences = {
  preferences: Preferences
  setPreferences: React.Dispatch<React.SetStateAction<Preferences>>
}

export const PreferencesContext = React.createContext<StatePreferences>({
  preferences: config.preferences,
  setPreferences: () => undefined
})

type Props = {
  children: JSX.Element
}

export const PreferencesProvider = ({ children }: Props) => {

  const [preferences, setPreferences] = useState<Preferences>(config.preferences);

  return (
    <PreferencesContext.Provider value={{ preferences, setPreferences }}>
      { children }
    </PreferencesContext.Provider>
  )
}