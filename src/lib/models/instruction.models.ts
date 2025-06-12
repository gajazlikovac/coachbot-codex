export interface Stage {
  id: string;
  name: string;
  user_id?: string | null;
  instructions: string | null;
  analyzer?: string | null;
  order: number;
  templateId?: string | null;
  assistantId?: string | null;
}

export interface Style {
  id: number;
  user_id: string;
  tone: string;
  emoji_frequency: string;
  language_complexity: string;
  greeting_templates: string;
  response_patterns: string;
  closing_templates: string;
  created_at: Date | null;
  title: string | null;
  custom: boolean | null;
}

export interface ModerationTemplate {
  id: string;
  category: string;
  response_template: string;
  created_at: Date | null;
  updated_at: Date | null;
  rule_id: string | null;
}

export interface Instruction {
  purpose: string;
  triggers: string;
  when_to_use: string;
  what_to_detect: string;
}

export interface ModerationRule {
  id: string;
  user_id?: string | null;
  name: string;
  severity?: string | null;
  instructions: Instruction | null;
  created_at?: Date | string | null;
  updated_at: Date | string | null;
  custom: boolean | null;
  response_template?: string;
  ModerationTemplate?: ModerationTemplate[];
}

export enum Severity {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export enum Tone {
  friendly = 'friendly',
  supportive = 'supportive',
  professional = 'professional',
  energetic = 'energetic',
}
