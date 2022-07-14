export default {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    'prosemirror-model': '<rootDir>/node_modules/prosemirror-model',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
  transformIgnorePatterns: ['/node_modules/(?!(uuid)/)'],
  testRegex: 'test.*\\.test\\.tsx?$',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
}
