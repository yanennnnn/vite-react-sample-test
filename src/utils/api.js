import AXIOSAPI from '@/utils/axios'

export default {
  async GET(url, params) {
    try {
      const res = await AXIOSAPI.get(url, {
        params,
      })
      return res.data
    } catch ({response:{data}}) {
      return Promise.reject(data.message)
    }
  },
  async DELETE(url, params) {
    try {
      const res = await AXIOSAPI.delete(url, {
        params,
      })
      return res.data
    } catch ({response:{data}}) {
      return Promise.reject(data.message)
    }
  },
  async POST(...arg) {
    try {
      console.log(...arg)
      const res = await AXIOSAPI.post(...arg)
      return res.data
    } catch ({response:{data}}) {
      return Promise.reject(data.message)
    }
  },
  async PATCH(url, params) {
    try {
      const res = await AXIOSAPI.patch(url, {
        params,
      })
      return res.data
    } catch ({response:{data}}) {
      return Promise.reject(data.message)
    }
  },
}