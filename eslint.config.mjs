import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            // === UYGULAMA KURALLARI ===
            // Ana kabuk (shell), sadece paylaşılan kütüphanelere erişebilir.
            {
              sourceTag: 'scope:shell',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            // Ethic modülü, sadece paylaşılan kütüphanelere erişebilir.
            {
              sourceTag: 'scope:ethic',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },

            // === KÜTÜPHANE KURALLARI (KATMANLI MİMARİ) ===
            // 'type:feature' (iş mantığı), 'type:ui' ve 'type:shared' kullanabilir.
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: ['type:ui', 'type:shared'],
            },
            // 'type:ui' (arayüz bileşenleri), sadece 'type:shared' kullanabilir.
            // Bu kural, UI bileşenlerinin iş mantığı içermesini engeller.
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: ['type:shared'],
            },
            // 'type:shared' (en temel yardımcılar), hiçbir şeye bağımlı olamaz.
            {
              sourceTag: 'type:shared',
              onlyDependOnLibsWithTags: [],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    rules: {},
  },
];
