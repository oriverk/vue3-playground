import { onMounted, onUnmounted } from "vue";

export function useEventListener(
  target: any,
  event: string,
  callback: (e: any) => void
) {
  // 必要であれば、 セレクター文字列を target として
  // 扱えるようにもできます
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}
