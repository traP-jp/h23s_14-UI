import { Configuration, ItemApi, UserApi } from './generated'

export const BASE_PATH = 'localhost:3000'
const config = new Configuration({ basePath: BASE_PATH, baseOptions: {} })

const itemApi = new ItemApi(config)
const userApi = new UserApi(config)

const api = {
  item: itemApi,
  user: userApi
}
export default api
export * from './generated'
