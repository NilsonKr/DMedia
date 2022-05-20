import React, { useCallback, useState } from 'react'
import { useContract } from '@hooks/web3/useContract'
import { useWallet } from '@hooks/web3/useWallet'

import { loginReturn, User } from '@roottypes/auth'

export type Context = {
  user: User
  login: () => Promise<loginReturn>
  register: (name: string) => Promise<loginReturn>
}

export const authContext = React.createContext<Context | null>(null)

export const AuthContext: React.FC = ({ children }) => {
  const DhubContract = useContract()
  const { active, account } = useWallet()
  const [user, setUser] = useState<User>(null)

  const login = useCallback(async (): Promise<loginReturn> => {
    try {
      const payload = await DhubContract.methods.login().call({ from: account })
      console.log(payload)
      return { error: null, payload: payload }
    } catch (err) {
      return { error: 'User not found', payload: null }
    }
  }, [account, DhubContract])

  const register = useCallback(async (name: string): Promise<loginReturn> => {
    try {
      //Intentional failed in order to test
      const result = await DhubContract.methods.register('', '').send({ from: account })
      console.log(result, 'result')
      return { error: null, payload: null }
    } catch (error) {
      console.log(error, 'error')
      return { error: 'Something went wrong , please try again', payload: null }
    }
  }, [account, DhubContract])

  return (
    <authContext.Provider value={{ user, login, register }} >{children}</authContext.Provider>
  )
}
