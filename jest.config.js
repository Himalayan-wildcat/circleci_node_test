module.exports = async() => {
  return {
    rootDir: '.',
    collectCoverage: true,
    collectCoverageFrom: ['__tests__/*.test.js'],
    coverageDirectory: './coverage',
    reporters: [
      'default',
      [
        'jest-junit',
	{
          suiteName: 'foobar',
	  outputDirectory: 'reports/jest',
	  outputName: 'js-test-results.xml',
	  classNameTemplate: '{classname}-{title}',
	  titleTemplate: '{classname}-{title}',
	  ancestorSeprator: ' > ',
	},
      ],
    ],
  };
};

