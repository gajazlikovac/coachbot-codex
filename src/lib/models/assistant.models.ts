import { PriceCurrency } from './checkout.models';
import { ModelConfig, Template, User } from './common.models';
import { ModerationRule, Stage, Style } from './instruction.models';

export enum AssistantMode {
  fullAccess = 'fullAccess',
  highLevel = 'high-level',
  confidential = 'confidential',
}

export enum AssistantStatus {
  published = 'published',
  draft = 'draft',
  archived = 'archived',
}

export enum Visibility {
  public = 'public',
  private = 'private',
}

export enum AccessLevel {
  free = 'free',
  premium = 'premium',
}

export enum AssistantUsageType {
  general = 'general',
  unique = 'unique',
}

export enum CommunicationMode {
  text_to_text = 'text_to_text',
  speech_to_text = 'speech_to_text',
  voice_to_voice = 'voice_to_voice',
  video_avatar = 'video_avatar',
}

export interface PriceConfiguration {
  id: string;
  assistantMeta?: AssistantMeta;
  assistantMetaId?: string;
  amount: number | null;
  monthly: number;
  yearly?: number | null;
  currency: PriceCurrency | string;
  trialDays: number | null;
}

export interface AssistantFeedback {
  id: string;
  assistantMeta?: AssistantMeta;
  assistantMetaId?: string;
  rating: number;
  title: string;
  description: string;
  userId?: string | null;
  userName?: string | null;
}

export interface AssistantConfiguration {
  id: string;
  assistant?: Assistant;
  templateId?: string;
  template?: Template;
  modelConfigs: ModelConfig[];
  moderationRules: ModerationRule[];
  stages: Stage[];
  styles: Style[];
  instructions?: string;
  onboarding?: string;
  tokensLimit?: number | null;
  usageType?: string | AssistantUsageType | null;
  communicationModes?: CommunicationMode[];
}

export interface AssistantMeta {
  id: string;
  assistant?: Assistant;
  visibility: Visibility | string;
  accessLevel: AccessLevel | string;
  price?: PriceConfiguration;
  created_at?: Date | null;
  updated_at?: Date | null;
  users?: number;
  feedbacks?: AssistantFeedback[];
  whatsapp?: boolean | null;
}

export interface Assistant {
  id: string;
  name: string;
  description: string;
  user?: User;
  userId?: string | null;
  created_at: Date | string | null;
  updated_at: Date | string | null;
  mode?: AssistantMode | string;
  status?: AssistantStatus | string;
  meta?: AssistantMeta;
  configuration?: AssistantConfiguration;
  template?: Template;
}

export interface AssistantEditable {
  name: string;
  description: string;
  template: Template;
  mode?: string;
  status?: string | AssistantStatus;
}
