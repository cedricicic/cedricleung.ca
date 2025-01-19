import { parse } from 'yaml';

export function loadJournals() {
  const journalFiles = import.meta.glob('../md/*.md', { query: '?raw', import: 'default' });

  const promises = Object.entries(journalFiles).map(async ([path, resolver]) => {
    try {
      const content = await resolver();
      const frontMatterMatch = content.match(/^---\n([\s\S]+?)\n---/);
      const metadata = frontMatterMatch ? parse(frontMatterMatch[1]) : {}; 
      const body = frontMatterMatch ? content.replace(frontMatterMatch[0], '').trim() : content;
      return { path, ...metadata, body }; 
    } catch (err) {
      console.error("Error loading file:", path, err);
      return null; 
    }
  });

  return Promise.all(promises);
}
