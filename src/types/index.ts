// [TypeScriptでEventの取り扱いがめんどくさ過ぎる。。。](https://zenn.dev/koduki/articles/0f8fcbc9a7485b#structural-subtyping-%E3%81%AB%E3%82%88%E3%82%8B%E8%A7%A3%E6%B1%BA)
export interface HTMLEvent<T extends EventTarget> extends Event {
  target: T;
}
