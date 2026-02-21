import { ref, watchEffect } from 'vue'

const isDark = ref<boolean>(
  localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') &&
    window.matchMedia('(prefers-color-scheme: dark)').matches),
)

function applyTheme(dark: boolean): void {
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

watchEffect(() => applyTheme(isDark.value))

export function useTheme() {
  const toggleTheme = () => { isDark.value = !isDark.value }
  const setDark = (value: boolean) => { isDark.value = value }

  return { isDark, toggleTheme, setDark }
}
