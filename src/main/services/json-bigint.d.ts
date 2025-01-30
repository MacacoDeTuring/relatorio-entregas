declare module 'json-bigint' {
  const JSONbig: {
    stringify: (obj: unknown) => string
    parse: (json: string) => unknown
  }
  export = JSONbig
}
