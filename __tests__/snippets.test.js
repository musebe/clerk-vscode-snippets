const fs = require('fs');
const path = require('path');
const jsonc = require('jsonc-parser');

const snippetsFilePath = path.join(
  __dirname,
  '../snippets/snippets.code-snippets'
);
const fileContent = fs.readFileSync(snippetsFilePath, 'utf8');
const snippets = jsonc.parse(fileContent);

// Group of tests focusing on the validation of the snippets JSON structure and content.
describe('Snippets JSON validation', () => {
  // Test to ensure the imported snippets file is a valid JSON object.
  it('should be a valid JSON', () => {
    expect(typeof snippets).toBe('object');
  });

  // Test to ensure each snippet in the JSON has the required fields: prefix, body, and description.
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

  // Test to ensure that there are no duplicate prefixes among the snippets.
  it('should not have duplicate prefixes', () => {
    const prefixes = [];
    for (let key in snippets) {
      const snippet = snippets[key];
      expect(prefixes).not.toContain(snippet.prefix);
      prefixes.push(snippet.prefix);
    }
  });

  // Test to ensure that the body of each snippet contains valid content (strings).
  it('should have valid body content for each snippet', () => {
    for (let key in snippets) {
      const snippet = snippets[key];
      snippet.body.forEach((line) => {
        expect(typeof line).toBe('string');
      });
    }
  });

  // Test to ensure that each snippet has a valid description (non-empty string).
  it('should have valid descriptions for each snippet', () => {
    for (let key in snippets) {
      const snippet = snippets[key];
      expect(typeof snippet.description).toBe('string');
      expect(snippet.description.length).toBeGreaterThan(0);
    }
  });

  // Test to ensure the prefix used for triggering the snippet isn't too long or too short.
  it('should have valid prefix lengths', () => {
    for (let key in snippets) {
      const snippet = snippets[key];
      expect(snippet.prefix.length).toBeGreaterThan(2);
      expect(snippet.prefix.length).toBeLessThan(20);
    }
  });

  // Test to ensure there aren't any duplicate snippets.
  it('should not have duplicate body content', () => {
    const bodies = [];
    for (let key in snippets) {
      const snippet = snippets[key];
      const bodyString = snippet.body.join(' ');
      expect(bodies).not.toContain(bodyString);
      bodies.push(bodyString);
    }
  });

  // Test to ensure that the JSON structure adheres to the expected format.
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

  // Test to ensure that placeholders (like `$1`, `$2`, etc.) in the body are used correctly.
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
