# Phantom Connect EVM

Full-stack EVM wallet connection frontend with explicit ERC-20 delegated authorization flows and a backend/admin control plane.

## Architecture

- React + Vite frontend
- Express backend
- ERC-20 balance, allowance, approve and transferFrom support
- EIP-712 Permit signing where supported by the token
- Admin activity/configuration API

All wallet authorizations are explicit and user-visible. The application does not silently sign, drain, or transfer user assets.
