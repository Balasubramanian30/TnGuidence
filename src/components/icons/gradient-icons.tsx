import { Icon } from "@tabler/icons-react";

export const GradientDefs = () => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="tabler-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#AB5799" />
        <stop offset="50%" stopColor="#E870AB" />
        <stop offset="100%" stopColor="#5E72EB" />
      </linearGradient>
    </defs>
  </svg>
)


export const GradientIcon = ({ Icon, size = 80 }: { Icon: Icon; size?: number }) => (
  <div style={{ width: size, height: size }}>
    <Icon
      size={size}
      strokeWidth={2}
      color="url(#tabler-gradient)" // <--- key line
    />
  </div>
)
