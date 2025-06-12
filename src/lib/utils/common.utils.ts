import { LOGIN_ROUTE, PrivateRoutes, PublicRoutes } from '../constants';
import { Assistant } from '../models/assistant.models';
import { Subscription, SubscriptionStatus } from '../models/checkout.models';
import { User } from '../models/common.models';

export const withoutTrailingSlash = (url: string = ''): string => {
  return url.endsWith('/') ? url.slice(0, -1) : url;
};

export const getRedirectPath = (
  path: string,
  userId?: string,
  accessAllowed?: boolean,
  search?: string
): string | null => {
  const publicRoutes: string[] = Object.values(PublicRoutes);
  const isPublicRoute = publicRoutes.includes(path);
  let redirectTo: string | null = null;

  if (!isPublicRoute && !userId) {
    redirectTo = `${LOGIN_ROUTE}${search}`;
  } else if (isPublicRoute && userId) {
    redirectTo = PrivateRoutes.chat;
  } else if (userId && !accessAllowed && path !== PrivateRoutes.checkout) {
    redirectTo = `${PrivateRoutes.checkout}${search}`;
  }

  return redirectTo;
};

export const isActiveSubscription = (subscription?: Subscription | null, currentPriceId?: string) => {
  if (!subscription || !subscription?.subscriptionId) return false;

  const isActiveStatus = [SubscriptionStatus.active, SubscriptionStatus.trialing].includes(
    subscription.status as SubscriptionStatus
  );
  const isFreePlan =
    currentPriceId && process.env.STRIPE_FREE_PRICE && currentPriceId === process.env.STRIPE_FREE_PRICE;
  const isFreePriceTrialEnded =
    isFreePlan && !!subscription.canceledAt && new Date(subscription.canceledAt) < new Date();

  return isActiveStatus && !isFreePriceTrialEnded;
};

export const isTrialSubscription = ({ plan, trial_start, trial_end }: any, freePriceId?: string) => {
  return (!freePriceId || plan.id !== freePriceId) && trial_start !== null && trial_end !== null;
};

export const getIsAllowedUser = (userId?: string) => {
  return !!userId && !!process.env.ALLOWED_USER_IDS && !!process.env.ALLOWED_USER_IDS.split(',').includes(userId);
};

export const isAssistantCreationAllowed = (user: User | null, assistants: Assistant[]) => {
  // TODO: Check if user is allowed to create assistants based on their subscription
  if (user?.accessAllowed) return true;
  if (!user?.subscription?.coaches) return false;

  const allowedAssistants = Number(user.subscription?.coaches);

  return isNaN(allowedAssistants) ? true : assistants.length < allowedAssistants;
};

export const isLowerEnv = (envUrl: string) => ['stage', 'localhost'].some((env) => envUrl.includes(env));
