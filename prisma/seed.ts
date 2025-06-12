import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function createDefaultTemplate() {
//   try {
//     const defaultUser = await prisma.user.findUnique({
//       where: { id: '0' },
//       include: {
//         ModelConfig: true,
//         ModerationRule: true,
//         Stage: true,
//         Style: true,
//       },
//     });

//     if (!defaultUser) {
//       console.warn(`⚠️ No user with ID '0' found. Skipping default template creation.`);
//       return null;
//     }

//     return await prisma.template.create({
//       data: {
//         name: 'Default Template',
//         instructions: defaultUser.instructions,
//         modelConfigs: { connect: defaultUser.ModelConfig.map((m) => ({ id: m.id })) },
//         moderationRules: { connect: defaultUser.ModerationRule.map((m) => ({ id: m.id })) },
//         stages: { connect: defaultUser.Stage.map((s) => ({ id: s.id })) },
//         styles: { connect: defaultUser.Style.map((s) => ({ id: s.id })) },
//       },
//     });
//   } catch (error) {
//     console.error(`❌ Error creating default template:`, error);
//     return null;
//   }
// }

async function createAssistantConfig(assistant: any) {
  await prisma.assistantConfiguration.create({
    data: {
      assistantId: assistant.id,
      templateId: assistant.templateId,
      instructions: assistant.instructions,
      onboarding: assistant.onboarding,
      onboardingAnalyzer: assistant.onboardingAnalyzer,
      tokensLimit: assistant.tokensLimit,
      usageType: assistant.usageType,
      communicationModes: assistant.communicationModes,
      modelConfigs: {
        connect: assistant.modelConfigs.map((mc: any) => ({ id: mc.id })),
      },
      moderationRules: {
        connect: assistant.moderationRules.map((mr: any) => ({ id: mr.id })),
      },
      stages: {
        connect: assistant.stages.map((s: any) => ({ id: s.id })),
      },
      styles: {
        connect: assistant.styles.map((st: any) => ({ id: st.id })),
      },
    },
  });
  console.log(`Created AssistantConfiguration for assistant ${assistant.id}`);
}

async function seedAssistants() {
  try {
    console.log('🌱 Starting assistants seeding...');
    const assistants = await prisma.assistant.findMany({
      include: {
        configuration: true,
        meta: true,
        template: true,
        stages: true,
        styles: true,
        modelConfigs: true,
        moderationRules: true,
      },
    });

    for (const assistant of assistants) {
      if (!assistant.configuration) {
        await createAssistantConfig(assistant);
      }

      if (!assistant.meta) {
        await prisma.assistantMeta.create({ data: { assistantId: assistant.id } });
        console.log(`Created AssistantMeta for assistant ${assistant.id}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error seeding assistants:`, error);
    return null;
  }
}

async function main() {
  await seedAssistants();
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
