import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadJournals } from "../js/loadJournals";
import { marked } from "marked";
import '../css/md.css';

function JournalDetail() {
  const { journalId } = useParams();
  const [journal, setJournal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJournal() {
      try {
        const journals = await loadJournals();
        const selectedJournal = journals.find(
          (j) => j.path.split("/").pop().replace(".md", "") === journalId
        );
        setJournal(selectedJournal);
      } catch (error) {
        console.error("Error loading journal:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJournal();
  }, [journalId]);

  if (loading) return <div>Loading...</div>;
  if (!journal) return <div>Journal not found!</div>;

  return (
    <div className="markdown-container">
      <div className="markdown-content">
        <h1>{journal.title}</h1>
        <img src={journal.image} alt={journal.title} />
        <h3 className = "date">{journal.date}</h3>
        <div
          className="journal-content"
          dangerouslySetInnerHTML={{ __html: marked(journal.body) }}
        ></div>
      </div>
    </div>
  );
  
}

export default JournalDetail;
