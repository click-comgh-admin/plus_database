export interface submitForm_I {
  (e: PointerEvent): Promise<void>
}
export interface formAction_I {
  // (): void,
  (callback: (done: boolean) => void): Promise<void>
}
export interface hiddenField_I { name: string, value: string }