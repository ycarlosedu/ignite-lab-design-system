import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> { }

export function Logo(props: LogoProps) {
  return (
    <svg
      width={100}
      height={90}
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M100 44.537c0-6.624-8.296-12.902-21.015-16.796 2.935-12.963 1.63-23.277-4.117-26.58-1.325-.774-2.874-1.14-4.566-1.14v4.545c.937 0 1.691.183 2.323.53 2.772 1.59 3.975 7.643 3.037 15.43-.224 1.916-.59 3.934-1.04 5.992-3.994-.978-8.356-1.732-12.942-2.221-2.752-3.771-5.606-7.195-8.48-10.192 6.645-6.176 12.882-9.56 17.122-9.56V0C64.717 0 57.38 3.995 49.96 10.925 42.54 4.035 35.202.082 29.596.082v4.545c4.22 0 10.477 3.363 17.122 9.499a96.279 96.279 0 00-8.418 10.17c-4.607.49-8.969 1.244-12.964 2.243a61.498 61.498 0 01-1.06-5.911c-.958-7.787.225-13.84 2.976-15.45.612-.368 1.407-.53 2.344-.53V.101c-1.712 0-3.26.367-4.606 1.141-5.728 3.302-7.012 13.596-4.056 26.519C8.254 31.675 0 37.933 0 44.537c0 6.625 8.296 12.903 21.015 16.796-2.935 12.964-1.63 23.278 4.117 26.58 1.325.774 2.874 1.141 4.587 1.141 5.605 0 12.943-3.995 20.362-10.925 7.42 6.89 14.758 10.844 20.363 10.844 1.712 0 3.262-.367 4.607-1.142 5.728-3.302 7.012-13.595 4.056-26.518C91.745 57.419 100 51.14 100 44.537zM73.461 30.942c-.754 2.63-1.692 5.34-2.752 8.051a96.464 96.464 0 00-2.67-4.892c-.938-1.63-1.936-3.22-2.935-4.77 2.894.428 5.687.958 8.357 1.61zM64.126 52.65c-1.59 2.752-3.221 5.36-4.913 7.786-3.037.265-6.115.408-9.213.408-3.078 0-6.156-.143-9.172-.387a112.379 112.379 0 01-4.933-7.746 106.195 106.195 0 01-4.24-8.113 106.33 106.33 0 014.22-8.133c1.59-2.751 3.22-5.36 4.912-7.786 3.037-.265 6.115-.407 9.213-.407 3.078 0 6.156.142 9.172.387a112.379 112.379 0 014.933 7.745c1.55 2.67 2.956 5.382 4.24 8.113a114.156 114.156 0 01-4.22 8.133zM70.709 50a87.33 87.33 0 012.813 8.112 91.486 91.486 0 01-8.398 1.631c1-1.57 1.998-3.18 2.936-4.83.937-1.631 1.814-3.282 2.65-4.913zM50.041 71.749a84.021 84.021 0 01-5.667-6.523c1.835.082 3.71.143 5.606.143 1.916 0 3.811-.04 5.666-.143a79.547 79.547 0 01-5.605 6.523zM34.876 59.743a91.978 91.978 0 01-8.357-1.61c.754-2.63 1.691-5.34 2.751-8.052a96.464 96.464 0 002.67 4.892 134.98 134.98 0 002.936 4.77zm15.063-42.417a84.059 84.059 0 015.666 6.522c-1.834-.081-3.71-.142-5.605-.142-1.916 0-3.812.04-5.666.142a79.562 79.562 0 015.605-6.522zM34.855 29.33a112.517 112.517 0 00-5.585 9.723 87.36 87.36 0 01-2.813-8.112 99.004 99.004 0 018.398-1.61zM16.41 54.851C9.192 51.773 4.524 47.737 4.524 44.537s4.668-7.256 11.883-10.314c1.753-.754 3.67-1.426 5.647-2.058 1.162 3.995 2.69 8.153 4.586 12.413-1.875 4.24-3.384 8.378-4.525 12.352a61.909 61.909 0 01-5.707-2.079zM27.374 83.98c-2.773-1.59-3.975-7.644-3.038-15.43.225-1.916.592-3.934 1.04-5.993 3.995.978 8.357 1.733 12.943 2.222 2.752 3.77 5.606 7.195 8.48 10.191-6.645 6.177-12.882 9.56-17.122 9.56-.917-.02-1.692-.204-2.303-.55zm48.349-15.532c.958 7.786-.225 13.84-2.976 15.45-.612.367-1.407.53-2.344.53-4.22 0-10.477-3.363-17.122-9.498A96.29 96.29 0 0061.7 64.757c4.607-.489 8.969-1.243 12.964-2.242.468 2.059.835 4.036 1.06 5.932zM83.57 54.85c-1.753.754-3.669 1.427-5.646 2.059-1.162-3.995-2.69-8.153-4.586-12.413 1.875-4.24 3.383-8.378 4.525-12.353a64.639 64.639 0 015.727 2.08c7.216 3.077 11.884 7.113 11.884 10.313-.02 3.2-4.688 7.257-11.904 10.314z"
        fill="#81D8F7"
      />
      <path
        d="M49.98 53.852a9.315 9.315 0 100-18.63 9.315 9.315 0 000 18.63z"
        fill="#81D8F7"
      />
    </svg>
  )
}

