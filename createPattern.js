/*
 * @Author: Vivek Molkar
 * @Date: 2024-11-04 10:39:21
 * @Last Modified by: Vivek Molkar
 * @Last Modified time: 2024-11-04 10:44:34
 */

const fs = require('fs');
const path = require('path');

// Get the pattern name from command line arguments
const patternName = process.argv[2];
if (!patternName) {
  console.error('Please provide a pattern name.');
  process.exit(1);
}

// Convert pattern name to lowercase and kebab-case
const patternDirName = patternName.toLowerCase().replace(/\s+/g, '-');

// Define base paths for src and test folders
const srcBasePath = path.join(__dirname, 'src');
const testBasePath = path.join(__dirname, 'tests');

// Folder paths for creational, structural, and behavioral patterns
const categories = ['creational', 'structural', 'behavioral'];

// Function to create pattern folders and files
const createPatternFiles = (category) => {
  const srcPatternPath = path.join(srcBasePath, category, patternDirName);
  const testPatternPath = path.join(testBasePath, category, patternDirName);

  // Create directories if they don't exist
  fs.mkdirSync(srcPatternPath, { recursive: true });
  fs.mkdirSync(testPatternPath, { recursive: true });

  // Create main source file
  const srcFilePath = path.join(srcPatternPath, `${patternName}.js`);
  const srcFileContent = `// ${patternName} pattern implementation\n\nclass ${patternName} {\n  constructor() {\n    // TODO: Implement ${patternName}\n  }\n}\n\nmodule.exports = ${patternName};\n`;
  fs.writeFileSync(srcFilePath, srcFileContent);

  // Create index.js for exporting the pattern
  const indexFilePath = path.join(srcPatternPath, 'index.js');
  const indexFileContent = `// Entry file for ${patternName} pattern\n\nconst ${patternName} = require('./${patternName}');\n\nmodule.exports = ${patternName};\n`;
  fs.writeFileSync(indexFilePath, indexFileContent);

  // Create test file
  const testFilePath = path.join(testPatternPath, `${patternName}.test.js`);
  const testFileContent = `// Tests for ${patternName} pattern\n\nconst ${patternName} = require('../../../../src/${category}/${patternDirName}/${patternName}');\n\ndescribe('${patternName} Pattern', () => {\n  test('should create an instance of ${patternName}', () => {\n    const instance = new ${patternName}();\n    expect(instance).toBeInstanceOf(${patternName});\n  });\n\n  // TODO: Add more tests\n});\n`;
  fs.writeFileSync(testFilePath, testFileContent);

  console.log(`Created ${patternName} pattern files in ${category} category.`);
};

// Prompt user to select a category
console.log('Select the category for the pattern:');
console.log('1: Creational');
console.log('2: Structural');
console.log('3: Behavioral');

process.stdin.once('data', (input) => {
  const choice = input.toString().trim();
  let category;

  switch (choice) {
    case '1':
      category = 'creational';
      break;
    case '2':
      category = 'structural';
      break;
    case '3':
      category = 'behavioral';
      break;
    default:
      console.error('Invalid choice.');
      process.exit(1);
  }

  createPatternFiles(category);
  process.exit();
});
