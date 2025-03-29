const colorPalettes = [
  {
    name: "بنفسج",
    palette: {
      primary: "#6A5ACD",
      primaryHover: "#5849C0",
      secondary: "#BDB2FF",
      secondaryHover: "#A99BFF",
      accent: "#FF9E7B",
      accentHover: "#FF8966",
      background: "#F7F5FF",
      backgroundAlt: "#FFFFFF",
      backgroundHover: "#F0EDFF",
      cardBackground: "#FFFFFF",
      border: "#E2DDFF",
      text: "#2E1D60",
      textLight: "#6E5E9F",
    },
  },

  {
    name: "البحر قالي",
    palette: {
      primary: "#3498DB",
      primaryHover: "#2980B9",
      secondary: "#A8D0E6",
      secondaryHover: "#94C7DF",
      accent: "#F76C6C",
      accentHover: "#F65B5B",
      background: "#E0F7FA",
      backgroundAlt: "#FFFFFF",
      backgroundHover: "#D0EFF1",
      cardBackground: "#FFFFFF",
      border: "#BFE7EA",
      text: "#24596B",
      textLight: "#6A8E99",
    },
  },

  {
    name: "سلحفي",
    palette: {
      primary: "#2F5D50",
      primaryHover: "#264B40",
      secondary: "#A3B18A",
      secondaryHover: "#8D9C75",
      accent: "#FFD384",
      accentHover: "#FFC56B",
      background: "#F3F7F4",
      backgroundAlt: "#FFFFFF",
      backgroundHover: "#E2ECE6",
      cardBackground: "#FFFFFF",
      border: "#D6E2DC",
      text: "#1B3927",
      textLight: "#587564",
    },
  },

  {
    name: "أبيض على الأبيض",
    palette: {
      primary: "#000000",
      primaryHover: "#333333",
      secondary: "#EEEEEE",
      secondaryHover: "#DDDDDD",
      accent: "#FF5252",
      accentHover: "#FF2E2E",
      background: "#FFFFFF",
      backgroundAlt: "#F8F8F8",
      backgroundHover: "#EAEAEA",
      cardBackground: "#FFFFFF",
      border: "#DDDDDD",
      text: "#1E1E1E",
      textLight: "#555555",
    },
  },
];

function PalettePreview({ palette, title }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4" style={{ color: palette.text }}>
        {title}
      </h2>
      <div
        className="rounded-lg border p-4"
        style={{
          borderColor: palette.border,
          backgroundColor: palette.backgroundAlt,
        }}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <div className="space-y-2">
              <div
                className="h-12 rounded-md"
                style={{ backgroundColor: palette.primary }}></div>
              <div
                className="h-12 rounded-md"
                style={{ backgroundColor: palette.primaryHover }}></div>
            </div>
            <p
              className="text-sm mt-2 font-medium text-center"
              style={{ color: palette.text }}>
              Primary
            </p>
            <p
              className="text-xs text-center"
              style={{ color: palette.textLight }}>
              {palette.primary} / {palette.primaryHover}
            </p>
          </div>
          <div>
            <div className="space-y-2">
              <div
                className="h-12 rounded-md"
                style={{ backgroundColor: palette.secondary }}></div>
              <div
                className="h-12 rounded-md"
                style={{ backgroundColor: palette.secondaryHover }}></div>
            </div>
            <p
              className="text-sm mt-2 font-medium text-center"
              style={{ color: palette.text }}>
              Secondary
            </p>
            <p
              className="text-xs text-center"
              style={{ color: palette.textLight }}>
              {palette.secondary} / {palette.secondaryHover}
            </p>
          </div>
          <div>
            <div className="space-y-2">
              <div
                className="h-12 rounded-md"
                style={{ backgroundColor: palette.accent }}></div>
              <div
                className="h-12 rounded-md"
                style={{ backgroundColor: palette.accentHover }}></div>
            </div>
            <p
              className="text-sm mt-2 font-medium text-center"
              style={{ color: palette.text }}>
              Accent
            </p>
            <p
              className="text-xs text-center"
              style={{ color: palette.textLight }}>
              {palette.accent} / {palette.accentHover}
            </p>
          </div>
          <div>
            <div className="space-y-2">
              <div
                className="h-12 rounded-md border"
                style={{
                  backgroundColor: palette.background,
                  borderColor: palette.border,
                }}></div>
              <div
                className="h-12 rounded-md"
                style={{ backgroundColor: palette.backgroundHover }}></div>
            </div>
            <p
              className="text-sm mt-2 font-medium text-center"
              style={{ color: palette.text }}>
              Background
            </p>
            <p
              className="text-xs text-center"
              style={{ color: palette.textLight }}>
              {palette.background} / {palette.backgroundHover}
            </p>
          </div>
          <div>
            <div className="space-y-2">
              <div
                className="h-12 rounded-md flex items-center justify-center"
                style={{ backgroundColor: palette.text }}>
                <span style={{ color: "#FFF" }}>Aa</span>
              </div>
              <div
                className="h-12 rounded-md flex items-center justify-center"
                style={{ backgroundColor: palette.textLight }}>
                <span style={{ color: "#FFF" }}>Aa</span>
              </div>
            </div>
            <p
              className="text-sm mt-2 font-medium text-center"
              style={{ color: palette.text }}>
              Text
            </p>
            <p
              className="text-xs text-center"
              style={{ color: palette.textLight }}>
              {palette.text} / {palette.textLight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorPalettes() {
  return (
    <div className="p-4 min-h-screen bg-gray-50">
      {colorPalettes.map((cp, i) => (
        <div key={i} className="mb-16">
          <PalettePreview palette={cp.palette} title={cp.name} />
        </div>
      ))}
    </div>
  );
}

export default ColorPalettes;
