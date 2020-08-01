let proxy: string | undefined;

if (process.env.NODE_ENV === "DEV") {
  proxy = process.env.DEV_PROXY;
}

export { proxy };
