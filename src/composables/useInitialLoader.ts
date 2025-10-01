import { onMounted, ref } from 'vue'

export function useInitialLoader() {
  const currentlyLoading = ref(true)

  onMounted(() => {
    const criticalImages = [
      '/src/assets/images/new-moon.png',
      '/src/assets/images/icons/icon-logo.png',
      '/src/assets/images/icons/formation/icon-ebi.webp',
      '/src/assets/images/icons/formation/icon-lewagon.png'
    ]

    let loaded = 0
    const done = () => {
      const loader = document.getElementById('app-loader')
      if (loader) {
        loader.classList.add('fade-out')
        setTimeout(() => loader.remove(), 1200)
      }
      currentlyLoading.value = false

      const schedule = (cb: () => void) =>
        (window as any).requestIdleCallback
          ? (window as any).requestIdleCallback(cb)
          : setTimeout(cb, 1000)

      schedule(async () => {
        const mod = await import('@/assets/images/images-project/project_images')
        Object.values(mod.default).forEach((s) => {
          const img = new Image()
          img.src = s
        })
      })
    }

    criticalImages.forEach((src) => {
      const img = new Image()
      if ('decode' in img) {
        // Do not block even if decode throws
        ;(img as any).decode?.().catch(() => {})
      }
      img.onload = img.onerror = () => {
        if (++loaded === criticalImages.length) done()
      }
      img.src = src
    })

    // Fallback timeout
    setTimeout(() => {
      if (currentlyLoading.value) done()
    }, 3000)
  })

  return { currentlyLoading }
}
