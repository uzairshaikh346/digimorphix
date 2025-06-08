import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-diagonal': 'linear-gradient(45deg, var(--tw-gradient-stops))',
        'noise-pattern': "url('/noise.png')",
        'grid-pattern': "url('/grid.svg')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary_green : '#08fcc4',
        Light_gray : "#d1d5db",
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        brand: {
          DEFAULT: '#00FF00',
          dark: '#00CC00',
          light: '#80FF80',
          50: '#E6FFE6',
          100: '#CCFFCC',
          200: '#99FF99',
          300: '#66FF66',
          400: '#33FF33',
          500: '#00FF00',
          600: '#00CC00',
          700: '#009900',
          800: '#006600',
          900: '#003300',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 255, 0, 0.2)',
        'glow-md': '0 0 20px rgba(0, 255, 0, 0.3)',
        'glow-lg': '0 0 30px rgba(0, 255, 0, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(0, 255, 0, 0.2)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#00FF00',
              '&:hover': {
                color: '#00CC00',
              },
            },
            strong: {
              color: 'white',
            },
            h1: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
            h3: {
              color: 'white',
            },
            h4: {
              color: 'white',
            },
            code: {
              color: '#00FF00',
            },
            pre: {
              backgroundColor: '#111',
            },
          },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors
  ],
};

function flattenColorPalette(colors: any) {
  let result: { [key: string]: string } = {};
  function recurse(obj: any, prefix: string = '') {
    for (let key in obj) {
      let value = obj[key];
      let newKey = prefix ? `${prefix}-${key}` : key;
      if (typeof value === 'string') {
        result[newKey] = value;
      } else {
        recurse(value, newKey);
      }
    }
  }
  recurse(colors);
  return result;
}

function addVariablesForColors({ addBase, theme }: { addBase: Function; theme: Function; }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
