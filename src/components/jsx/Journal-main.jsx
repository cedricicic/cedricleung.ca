import { useEffect, useState } from 'react';
import { loadJournals } from '../js/loadJournals';
import { Link } from 'react-router-dom';
import '../css/journal-main.css';

function JournalPage() {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJournals() {
      const loadedJournals = await loadJournals();
      setJournals(loadedJournals);
      setLoading(false);
    }

    fetchJournals();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="journal-page">
      <h1 className="journal-title">Console.log</h1>
      <div className="journal-library">
        {journals.map((journal, index) => (
          <div key={index} className="journal-preview">
            <img src={journal.image} alt={journal.title} className="journal-image" />
            <div className="journal-info">
              <h2 className="journal-name">{journal.title}</h2>
              <p className="journal-date">{journal.date}</p>
              <p className="journal-date">{journal.description}</p>
              <Link to={`/journals/${journal.path.split('/').pop().replace('.md', '')}`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default JournalPage;
