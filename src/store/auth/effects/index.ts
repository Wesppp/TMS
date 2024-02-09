import { AuthLoadingsEffect } from "@store/auth/effects/auth-loadings.effect";
import { LoginEffect } from "@store/auth/effects/login.effect";
import { RegisterEffect } from "@store/auth/effects/register.effect";
import { LogoutEffect } from "@store/auth/effects/logout.effect";
import { RefreshTokensEffect } from "@store/auth/effects/refresh-tokens.effect";

const AllAuthEffects = [
  AuthLoadingsEffect,
  LoginEffect,
  RegisterEffect,
  LogoutEffect,
  RefreshTokensEffect,
];

export default AllAuthEffects;
