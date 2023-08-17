const fs = require('fs');
const path = require('path');
const jsonc = require('jsonc-parser');

const snippetsFilePaths = [
  path.join(__dirname, '../snippets/snippets.code-snippets'),
  path.join(__dirname, '../snippets/ts-snippets.code-snippets'),
];

const snippetsArray = [];

snippetsFilePaths.forEach((filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const parsedContent = jsonc.parse(fileContent);
  snippetsArray.push(parsedContent);
});

// Now, snippetsArray contains parsed content of both files
// You can iterate over snippetsArray to run tests on each parsed content

snippetsArray.forEach((snippets, index) => {
  describe(`Snippets JSON validation for file ${index + 1}`, () => {
    it('should be a valid JSON', () => {
      expect(typeof snippets).toBe('object');
    });

    it('should have required fields for each snippet', () => {
      for (let key in snippets) {
        const snippet = snippets[key];
        expect(snippet).toHaveProperty('prefix');
        expect(snippet).toHaveProperty('body');
        expect(snippet).toHaveProperty('description');
        expect(typeof snippet.prefix).toBe('string');
        expect(typeof snippet.description).toBe('string');
        expect(Array.isArray(snippet.body)).toBe(true);
      }
    });

    it('should not have duplicate prefixes', () => {
      const prefixes = [];
      for (let key in snippets) {
        const snippet = snippets[key];
        expect(prefixes).not.toContain(snippet.prefix);
        prefixes.push(snippet.prefix);
      }
    });

    it('should have valid body content for each snippet', () => {
      for (let key in snippets) {
        const snippet = snippets[key];
        snippet.body.forEach((line) => {
          expect(typeof line).toBe('string');
        });
      }
    });

    it('should have valid descriptions for each snippet', () => {
      for (let key in snippets) {
        const snippet = snippets[key];
        expect(typeof snippet.description).toBe('string');
        expect(snippet.description.length).toBeGreaterThan(0);
      }
    });

    it('should have valid prefix lengths', () => {
      for (let key in snippets) {
        const snippet = snippets[key];
        expect(snippet.prefix.length).toBeGreaterThan(2);
        expect(snippet.prefix.length).toBeLessThan(20);
      }
    });

    it('should not have duplicate body content', () => {
      const bodies = [];
      for (let key in snippets) {
        const snippet = snippets[key];
        const bodyString = snippet.body.join(' ');
        expect(bodies).not.toContain(bodyString);
        bodies.push(bodyString);
      }
    });

    it('should have proper structure for each snippet', () => {
      for (let key in snippets) {
        const snippet = snippets[key];
        expect(snippet).toEqual(
          expect.objectContaining({
            prefix: expect.any(String),
            body: expect.any(Array),
            description: expect.any(String),
          })
        );
      }
    });

    it('should use placeholders correctly in body', () => {
      for (let key in snippets) {
        const snippet = snippets[key];
        const bodyString = snippet.body.join(' ');
        const placeholders = bodyString.match(/\$\d+/g) || [];
        for (let i = 0; i < placeholders.length; i++) {
          expect(placeholders[i]).toBe(`$${i + 1}`);
        }
      }
    });

    // Placeholder for adding more tests in the future.
    // Add more tests as needed...
  });
});
