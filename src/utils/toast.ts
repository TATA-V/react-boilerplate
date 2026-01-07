import toast from 'react-hot-toast';
import { CSSProperties } from 'react';

type StyleOverrides = CSSProperties | undefined;

const baseStyle = (color: string, borderColor: string, addStyle: StyleOverrides): CSSProperties => ({
  border: `1px solid ${borderColor}`,
  padding: '5.5px',
  borderRadius: '5px',
  color,
  fontFamily: 'var(--font-pretendard), sans-serif',
  fontWeight: 500,
  fontSize: '.9rem',
  textAlign: 'center',
  ...addStyle,
});

export const showToast = {
  success: (message: string, addStyle?: StyleOverrides) =>
    toast(message, {
      style: baseStyle('#262626', '#262626', addStyle),
      duration: 2500,
    }),

  error: (message: string, addStyle?: StyleOverrides) =>
    toast(message, {
      style: baseStyle('#E23A3A', '#E23A3A', addStyle),
      duration: 2500,
    }),

  warn: (message: string, addStyle?: StyleOverrides) =>
    toast(message, {
      style: baseStyle('#ED7A2C', '#ED7A2C', addStyle),
      duration: 2500,
    }),
};

export default showToast;