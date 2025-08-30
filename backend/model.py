import pandas as pd

class PredictionModel:
    def __init__(self):
        self.model_loaded = True
        
    def predict(self, df):
        risk_score = 0
        risk_factors = []
        
        # Clinical effectiveness risk
        if 'Clinical_Outcome_Score' in df.columns:
            clinical_mean = df['Clinical_Outcome_Score'].mean()
            if clinical_mean < 75:
                risk_score += 25
                risk_factors.append("Below-average clinical outcomes")
                
        # Customer satisfaction risk
        if 'Customer_Satisfaction' in df.columns:
            sat_mean = df['Customer_Satisfaction'].mean()
            if sat_mean < 75:
                risk_score += 20
                risk_factors.append("Low customer satisfaction scores")
                
        # Reimbursement risk
        if 'Reimbursement_Coverage_Pct' in df.columns:
            reim_mean = df['Reimbursement_Coverage_Pct'].mean()
            if reim_mean < 80:
                risk_score += 30
                risk_factors.append("Limited reimbursement coverage")
                
        # Win rate risk
        if 'Win_Rate_Pct' in df.columns:
            win_mean = df['Win_Rate_Pct'].mean()
            if win_mean < 70:
                risk_score += 25
                risk_factors.append("Low competitive win rate")
        
        # Determine risk level
        if risk_score >= 60:
            risk_level = "High"
            confidence = 0.89
        elif risk_score >= 30:
            risk_level = "Medium" 
            confidence = 0.86
        else:
            risk_level = "Low"
            confidence = 0.83
            
        return {
            "revenue_risk": risk_level,
            "risk_score": min(risk_score, 100),
            "confidence_score": confidence,
            "risk_factors": risk_factors,
            "total_revenue": df['Total_Revenue'].sum() if 'Total_Revenue' in df.columns else 0
        }
