export function getDefaultErrorMessage(hook: string, provider: string) {
  return `${hook} must be used within ${provider}`;
}
