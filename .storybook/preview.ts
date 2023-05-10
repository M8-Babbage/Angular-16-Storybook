import type { Preview } from "@storybook/angular";

// Dimensiones de pantalla
const customViewports = {
  small: {
    name: "small",
    styles: {
      width: "360px",
      height: "540px",
    },
  },
  medium: {
    name: "medium",
    styles: {
      width: "768px",
      height: "1024px",
    },
  }
}

const preview: Preview = {
  parameters: {
    // Dimensiones de pantalla
    viewport: {
      viewports: customViewports,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
