import { LocalStorageAdapter } from '@/infra/cache'

import 'jest-localstorage-mock'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage.setItem with correct values', async () => {
    const sut = makeSut()
    const key = 'any_key'
    const value = {
      any_key: 'any_value'
    }

    sut.set(key, value)

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
  })

  test('Should call localStorage.removeItem if value is null', async () => {
    const sut = makeSut()
    const key = 'any_column'

    sut.set(key, undefined)

    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
  })

  test('Should call localStorage.getItem with correct value', async () => {
    const sut = makeSut()
    const key = 'any_key'
    const value = {
      any_key: 'any_value'
    }

    const getItemSpy = jest
      .spyOn(localStorage, 'getItem')
      .mockReturnValueOnce(JSON.stringify(value))

    const obj = sut.get(key)

    expect(obj).toEqual(value)
    expect(getItemSpy).toHaveBeenCalledWith(key)
  })

  test('Should call localStorage.getItem without value', async () => {
    const sut = makeSut()
    const key = 'any_key'

    const obj = sut.get(key)

    expect(obj).toBeNull()
  })
})
