import { BrowserProvider } from "ethers";
export function hasInjectedWallet(){return typeof window!=="undefined"&&Boolean(window.ethereum)}
export function createProvider(){if(!hasInjectedWallet()||!window.ethereum)throw new Error("No EVM wallet was detected in this browser.");return new BrowserProvider(window.ethereum)}
export function shortenAddress(a:string){return `${a.slice(0,6)}…${a.slice(-4)}`}
export function formatNativeBalance(v:bigint,decimals=4){const w=v/10n**18n;const f=v%10n**18n;return `${w.toString()}.${f.toString().padStart(18,"0").slice(0,decimals)}`}