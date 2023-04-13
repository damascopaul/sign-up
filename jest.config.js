module.exports = {
  collectCoverage: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    // eslint-disable-next-line max-len
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '.*\\.(vue)$': '@vue/vue3-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(nuxt3|unenv))'],
}
