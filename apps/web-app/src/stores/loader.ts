import {
  create,
} from "zustand"

interface LoaderStore {
  loadingCount: number
  startLoading: () => void
  stopLoading: () => void
  resetLoading: () => void
}

const loaderStore = create<LoaderStore>()((set) => ({
  loadingCount: 0,
  startLoading: () => set((state) => ({
    loadingCount: state.loadingCount + 1,
  })),
  stopLoading: () => set((state) => {
    let loadingCount = state.loadingCount - 1
    if (loadingCount < 0) {
      loadingCount = 0
    }
    return {
      loadingCount,
    }
  }),
  resetLoading: () => set(() => ({
    loadingCount: 0,
  })),
}))

export default loaderStore
