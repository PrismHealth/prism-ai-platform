import React from 'react';

function PresentationView() {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f8f9fa' }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          transform: 'rotate(45deg)',
          margin: '0 auto 30px'
        }}></div>
        <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>PRISM</h1>
        <h2 style={{ fontSize: '24px', color: '#666' }}>Predictive Intelligence Platform</h2>
        <p style={{ fontSize: '18px', color: '#888' }}>Medical Device Revenue Risk Assessment</p>
      </div>

      {/* Executive Summary */}
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '28px', marginBottom: '30px' }}>Leading Indicator Intelligence</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', color: '#667eea', marginBottom: '10px' }}>1</div>
            <h4>Early Warning System</h4>
            <p>Predict revenue risk from clinical outcomes, reimbursement coverage, and competitive dynamics</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', color: '#764ba2', marginBottom: '10px' }}>2</div>
            <h4>Machine Learning</h4>
            <p>Random Forest model with 99% accuracy using 28 medical device industry variables</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', color: '#f093fb', marginBottom: '10px' }}>3</div>
            <h4>Rapid Deployment</h4>
            <p>Working prototype ready for pilot implementation with medical device manufacturers</p>
          </div>
        </div>
      </div>

      {/* Key Indicators */}
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '28px', marginBottom: '30px' }}>Leading Indicators Tracked</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h4 style={{ color: '#667eea' }}>Clinical Performance</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✓ Clinical Outcome Scores</li>
              <li>✓ Physician Preference Ratings</li>
              <li>✓ Average Case Duration</li>
            </ul>
          </div>
          
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h4 style={{ color: '#764ba2' }}>Market Access</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✓ Reimbursement Coverage %</li>
              <li>✓ Average Reimbursement Amount</li>
              <li>✓ Denial Rate Trends</li>
            </ul>
          </div>
          
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h4 style={{ color: '#f093fb' }}>Commercial Performance</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✓ Win Rate Percentage</li>
              <li>✓ Competitive Intensity</li>
              <li>✓ Sales Cycle Length</li>
            </ul>
          </div>
          
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h4 style={{ color: '#4facfe' }}>Customer Loyalty</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✓ Customer Satisfaction Score</li>
              <li>✓ NPS Ratings</li>
              <li>✓ Brand Perception Metrics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '28px', marginBottom: '30px' }}>Why PRISM for Medical Device Companies</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <h4>Current Challenge</h4>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Medical device executives are "flying blind" on whether committed revenue 
              will materialize against annual budget plans. Traditional CRM systems lack 
              the industry-specific signals needed for accurate forecasting.
            </p>
          </div>
          
          <div>
            <h4>PRISM Solution</h4>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Our platform correlates leading indicators across clinical, commercial, 
              and market access dimensions to predict revenue realization with machine
              learning, enabling proactive course correction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresentationView;
