import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResults(response.data);
      setError(null);
    } catch (err) {
      console.error('Upload error:', err);
      setError('Error processing file: ' + err.message);
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>PRISM AI Platform</h1>
      <h2>Medical Device Revenue Risk Prediction</h2>
      
      <div style={{ margin: '20px 0' }}>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={loading} style={{ marginLeft: '10px' }}>
          {loading ? 'Processing...' : 'Analyze'}
        </button>
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {results && (
        <div style={{ marginTop: '30px', border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
          <h3>Revenue Risk Assessment</h3>
          <p><strong>Risk Level:</strong> <span style={{ 
            color: results.revenue_risk === 'High' ? 'red' : results.revenue_risk === 'Medium' ? 'orange' : 'green' 
          }}>{results.revenue_risk}</span></p>
          <p><strong>Confidence Score:</strong> {(results.confidence_score * 100).toFixed(0)}%</p>
          {results.risk_score && <p><strong>Risk Score:</strong> {results.risk_score}/100</p>}
          {results.ml_model && <p><strong>Model Type:</strong> {results.ml_model}</p>}
          
          {results.risk_factors && results.risk_factors.length > 0 && (
            <>
              <h4>Key Risk Factors:</h4>
              <ul>
                {results.risk_factors.map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
            </>
          )}

          {results.total_revenue > 0 && (
            <p><strong>Total Revenue in Dataset:</strong> ${results.total_revenue.toLocaleString()}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
