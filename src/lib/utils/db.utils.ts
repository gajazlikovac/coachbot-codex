import {
  ModerationTemplate,
  ModelConfig as PrismaModelConfig,
  ModerationRule as PrismaModerationRule,
  Style as PrismaStyle,
} from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
import { z } from 'zod';

import { Message } from '../models/chat.models';
import { PriceCurrency } from '../models/checkout.models';
import { Level, ModelConfig } from '../models/common.models';
import { Instruction, ModerationRule, Severity, Style, Tone } from '../models/instruction.models';

export const defaultStyleData = {
  title: '',
  tone: Tone.friendly,
  emoji_frequency: Level.low,
  language_complexity: Level.low,
  greeting_templates: '',
  response_patterns: '',
  closing_templates: '',
  custom: true,
  assistantId: '',
};

export const defaultModerationRule = {
  name: '',
  severity: Severity.low,
  instructions: { purpose: '', triggers: '', what_to_detect: '', when_to_use: '' },
  custom: true,
  assistantId: '',
};

const levelEnum = z.enum([Level.low, Level.medium, Level.high]);
const toneEnum = z.enum([Tone.professional, Tone.energetic, Tone.friendly, Tone.supportive]);
const severityEnum = z.enum([Severity.high, Severity.low, Severity.medium]);

export const instructionSchema = z.object({
  instructions: z
    .string()
    .min(10, { message: 'General.errors.minLength10' })
    .max(10000, { message: 'General.errors.maxLength10000' }),
});

export const stageSchema = z.object({
  instructions: z
    .string()
    .min(10, { message: 'General.errors.minLength10' })
    .max(10000, { message: 'General.errors.maxLength10000' }),
  analyzer: z
    .string()
    .min(10, { message: 'General.errors.minLength10' })
    .max(10000, { message: 'General.errors.maxLength10000' })
    .optional(),
});

export const orderSchema = z.object({ order: z.number().min(0, { message: 'General.errors.emptyFiled' }) });
export const nameSchema = z.object({ name: z.string().min(1, { message: 'General.errors.emptyFiled' }) });
export const categorySchema = z.object({ category: z.string().min(1, { message: 'General.errors.emptyFiled' }) });

export const userAccountSchema = z.object({
  name: z.string().min(1, { message: 'Account.accountForm.errors.emptyName' }),
  email: z
    .string()
    .min(1, { message: 'Account.accountForm.errors.emptyEmail' })
    .email({ message: 'Account.accountForm.errors.invalidEmail' }),
});

export const styleSchema = z.object({
  emoji_frequency: levelEnum,
  language_complexity: levelEnum,
  tone: toneEnum,
  greeting_templates: z
    .string()
    .min(50, { message: 'General.errors.minLength50' })
    .max(10000, { message: 'General.errors.maxLength10000' }),
  response_patterns: z
    .string()
    .min(50, { message: 'General.errors.minLength50' })
    .max(10000, { message: 'General.errors.maxLength10000' }),
  closing_templates: z
    .string()
    .min(50, { message: 'General.errors.minLength50' })
    .max(10000, { message: 'General.errors.maxLength10000' }),
});

export const moderationTemplateSchema = z.object({
  id: z.string().min(1, { message: 'General.errors.emptyFiled' }),
  category: z.string().min(1, { message: 'General.errors.emptyFiled' }),
  response_template: z.string().optional(),
});

export const moderationRuleSchema = z.object({
  name: z.string().min(3, { message: 'General.errors.emptyFiled' }),
  severity: severityEnum,
  instructions: z.object({
    purpose: z.string().min(3, { message: 'General.errors.emptyFiled' }),
    triggers: z
      .string()
      .transform((val) =>
        val
          .split(',')
          .map((s) => s.trim())
          .filter((s) => s !== '')
      )
      .refine((val) => val.length > 0, {
        message: 'General.errors.emptyFiled',
      }),
    when_to_use: z.string().min(5, { message: 'General.errors.emptyFiled' }),
    what_to_detect: z.string().min(5, { message: 'General.errors.emptyFiled' }),
  }),
  response_template: z
    .string()
    .min(50, { message: 'General.errors.minLength50' })
    .max(10000, { message: 'General.errors.maxLength10000' })
    .optional(),
  ModerationTemplate: z.array(moderationTemplateSchema).optional(),
});

export const assistantSchema = z.object({
  template: z.object({}).refine((val) => val !== null && val !== undefined, {
    message: 'General.errors.templateSelection',
  }),
  name: z
    .string()
    .min(1, { message: 'General.errors.emptyFiled' })
    .max(200, { message: 'General.errors.maxLength200' }),
  description: z
    .string()
    .min(1, { message: 'General.errors.emptyFiled' })
    .max(2000, { message: 'General.errors.maxLength2000' }),
});

export const assistantPriceSchema = z.object({
  currency: z.enum(Object.values(PriceCurrency) as [string, ...string[]]),
  monthly: z.coerce.number().min(1, { message: 'General.errors.emptyFiled' }),
  yearly: z.coerce.number().optional(),
  trialDays: z.string().optional(),
});

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateUniqueIds(count: number, min: number, max: number): number[] {
  const ids = new Set<number>();
  while (ids.size < count) {
    ids.add(getRandomInt(min, max));
  }
  return Array.from(ids);
}

export function mapConversationHistory(
  messages: Message[],
  stage_name: string,
  current_stage: boolean
): { content: string; role: string }[] {
  return messages
    .filter(({ stage }: Message) => (current_stage ? stage_name === stage : stage_name !== stage))
    .map(({ content, role }: Message) => ({ content, role }));
}

export function parseJsonField<T>(field: T | string | JsonValue | JSON): T {
  if (typeof field === 'string') {
    try {
      return (field.length > 0 ? JSON.parse(field) : field) as T;
    } catch (error) {
      console.error('Failed to parse field:', error);
      return field as T;
    }
  }

  return field as T;
}

export function parseArrayToString<T>(data: T, keys: string[]): Partial<T> {
  return keys.reduce((finalData: Partial<T>, key: string) => {
    const parsedField = parseJsonField<T[keyof T]>(data[key as keyof T]);

    return {
      ...finalData,
      [key]: Array.isArray(parsedField) ? parsedField.join('\n') : parsedField,
    };
  }, {});
}

export const mapStyleData = (style: PrismaStyle | Style): Style => {
  return {
    ...style,
    ...parseArrayToString(style, ['greeting_templates', 'response_patterns', 'closing_templates']),
  } as any;
};

export const mapPrismaModerationData = (
  rule: PrismaModerationRule,
  selectedTemplates: ModerationTemplate[] = []
): ModerationRule => {
  const parserInstructions = parseJsonField<Instruction>(rule.instructions);
  const response_template = selectedTemplates.length ? selectedTemplates.reverse()[0]?.response_template : '';

  return {
    ...rule,
    instructions: {
      ...parserInstructions,
      triggers: Array.isArray(parserInstructions.triggers)
        ? parserInstructions.triggers.join(', ')
        : parserInstructions.triggers,
    },
    response_template,
  };
};

export const mapModerationRule = (
  rule: ModerationRule,
  selectedTemplates: ModerationTemplate[] = []
): ModerationRule => {
  let ModerationTemplate = rule.ModerationTemplate;

  if (ModerationTemplate?.length) {
    ModerationTemplate = ModerationTemplate.filter(({ id }) =>
      selectedTemplates.some((template) => template.id === id)
    ).map((template) => ({ ...template, response_template: rule.response_template || '' }));
  }

  return {
    ...rule,
    ModerationTemplate,
  };
};

export const mapPrismaModelConfig = (config: PrismaModelConfig): ModelConfig => {
  return {
    ...config,
    temperature: config.temperature?.toNumber(),
    presence_penalty: config.presence_penalty?.toNumber(),
    frequency_penalty: config.frequency_penalty?.toNumber(),
    top_p: config.top_p?.toNumber(),
  };
};

export const mapRelationConfig = <T>(data: T & { modelConfigs: PrismaModelConfig[] }): T => {
  return {
    ...data,
    modelConfigs: data.modelConfigs.length ? data.modelConfigs.map(mapPrismaModelConfig) : [],
  };
};
