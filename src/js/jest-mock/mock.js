export const locationMock = {
  href: "",
};

// eslint-disable-next-line no-undef
Object.defineProperty(global, "window", {
  value: {
    location: locationMock,
  },
});
