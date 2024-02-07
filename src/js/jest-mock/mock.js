export const createMockLocation = {
  href: "",
};

// eslint-disable-next-line no-undef
Object.defineProperty(global, "window", {
  value: {
    location: createMockLocation,
  },
});
