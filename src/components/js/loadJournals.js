import { parse } from 'yaml';

export async function loadJournals() {
  const journalFiles = import.meta.glob('../md/*.md', { query: '?raw', import: 'default' });
  
  const promises = Object.entries(journalFiles).map(async ([path, resolver]) => {
    try {
      const content = await resolver();
      const frontMatterMatch = content.match(/^---\n([\s\S]+?)\n---/);
      const metadata = frontMatterMatch ? parse(frontMatterMatch[1]) : {};
      const body = frontMatterMatch ? content.replace(frontMatterMatch[0], '').trim() : content;
      
      return {
        path,
        ...metadata,
        body
      };
    } catch (err) {
      console.error("Error loading file:", path, err);
      return null;
    }
  });

  const results = (await Promise.all(promises)).filter(entry => entry !== null);
  
  return results.sort((a, b) => b.path.localeCompare(a.path));
}